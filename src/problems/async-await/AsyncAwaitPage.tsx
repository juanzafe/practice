import { useState } from "react";
import "./AsyncAwaitPage.css";

const BASE = "https://jsonplaceholder.typicode.com";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface User {
  id: number;
  name: string;
  email: string;
}
interface Comment {
  postId: number;
  id: number;
  name: string;
  body: string;
}

// ── Utilidades ──────────────────────────────────────────────
function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ── Soluciones de los ejercicios ─────────────────────────────
import {
  obtenerPost,
  obtenerPostSeguro,
  obtenerNombreAutor,
  obtenerPostYComentarios,
  fetchConReintentos,
  obtenerPostsEnLotes,
  CacheAPI,
} from "./exercises";

// ── Componente ───────────────────────────────────────────────
interface EjercicioState {
  loading: boolean;
  result: string;
  error: string;
}

const initState = (): EjercicioState => ({
  loading: false,
  result: "",
  error: "",
});

export default function AsyncAwaitPage() {
  const [states, setStates] = useState<Record<number, EjercicioState>>({});

  function setLoading(n: number) {
    setStates((s) => ({ ...s, [n]: { loading: true, result: "", error: "" } }));
  }
  function setResult(n: number, result: string) {
    setStates((s) => ({ ...s, [n]: { loading: false, result, error: "" } }));
  }
  function setError(n: number, error: string) {
    setStates((s) => ({ ...s, [n]: { loading: false, result: "", error } }));
  }
  function get(n: number): EjercicioState {
    return states[n] ?? initState();
  }

  const run = async (n: number, fn: () => Promise<unknown>) => {
    setLoading(n);
    try {
      const res = await fn();
      setResult(n, JSON.stringify(res, null, 2));
    } catch (e) {
      setError(n, String(e));
    }
  };

  const ejercicios = [
    {
      n: 1,
      title: "⭐ Ej 1 — Primera función async",
      description: 'Obtiene el post con id=1 de la API y devuelve el objeto Post.',
      code: `async function obtenerPost(id: number): Promise<Post> {
  const res = await fetch(\`\${BASE}/posts/\${id}\`);
  return res.json();
}`,
      fn: () => obtenerPost(1),
    },
    {
      n: 2,
      title: "⭐ Ej 2 — Manejo de errores",
      description: "Intenta obtener un post con id=99999 (no existe). Devuelve null en lugar de lanzar error.",
      code: `async function obtenerPostSeguro(id: number): Promise<Post | null> {
  try {
    const res = await fetch(\`\${BASE}/posts/\${id}\`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}`,
      fn: () => obtenerPostSeguro(99999),
    },
    {
      n: 3,
      title: "⭐⭐ Ej 3 — Encadenar awaits",
      description: "Obtiene el post 1, luego usa su userId para buscar el usuario. Devuelve el nombre del autor.",
      code: `async function obtenerNombreAutor(postId: number): Promise<string> {
  const resPost = await fetch(\`\${BASE}/posts/\${postId}\`);
  const post = await resPost.json();
  const resUser = await fetch(\`\${BASE}/users/\${post.userId}\`);
  const user = await resUser.json();
  return user.name;
}`,
      fn: () => obtenerNombreAutor(1),
    },
    {
      n: 4,
      title: "⭐⭐ Ej 4 — Promise.all (paralelo)",
      description: "Obtiene el post 1 y sus comentarios EN PARALELO con Promise.all.",
      code: `async function postYComentarios(postId: number) {
  const [postRes, commentsRes] = await Promise.all([
    fetch(\`\${BASE}/posts/\${postId}\`),
    fetch(\`\${BASE}/posts/\${postId}/comments\`),
  ]);
  const [post, comments] = await Promise.all([
    postRes.json(), commentsRes.json()
  ]);
  return { post, comments };
}`,
      fn: () => obtenerPostYComentarios(1),
    },
    {
      n: 5,
      title: "⭐⭐ Ej 5 — Reintentos automáticos",
      description: "Llama a una función que falla las 2 primeras veces. Reintenta hasta 5 veces esperando 300ms entre cada intento.",
      code: `async function fetchConReintentos<T>(fn: () => Promise<T>, intentos: number) {
  let ultimoError: unknown;
  for (let i = 0; i < intentos; i++) {
    try {
      return await fn();
    } catch (err) {
      ultimoError = err;
      await esperar(500);
    }
  }
  throw ultimoError;
}`,
      fn: () => {
        let intentos = 0;
        const fnInestable = () => {
          intentos++;
          if (intentos < 3) return Promise.reject(new Error(`Fallo #${intentos}`));
          return Promise.resolve(`¡Éxito en el intento ${intentos}!`);
        };
        return fetchConReintentos(fnInestable, 5);
      },
    },
    {
      n: 6,
      title: "⭐⭐⭐ Ej 6 — Concurrencia por lotes",
      description: "Descarga los posts 1-6 en lotes de 2 en paralelo, pero un lote a la vez.",
      code: `async function obtenerPostsEnLotes(ids: number[], tamañoLote: number) {
  const resultado: Post[] = [];
  for (let i = 0; i < ids.length; i += tamañoLote) {
    const lote = ids.slice(i, i + tamañoLote);
    const posts = await Promise.all(lote.map(obtenerPost));
    resultado.push(...posts);
  }
  return resultado;
}`,
      fn: () => obtenerPostsEnLotes([1, 2, 3, 4, 5, 6], 2),
    },
  ];

  return (
    <div className="aa-page">
      <h1 className="aa-title">Async / Await — Ejercicios interactivos</h1>
      <p className="aa-subtitle">
        Pulsa <strong>Ejecutar</strong> en cada ejercicio para ver el resultado en tiempo real.
      </p>

      {ejercicios.map(({ n, title, description, code, fn }) => {
        const st = get(n);
        return (
          <section key={n} className="aa-card">
            <h2 className="aa-card__title">{title}</h2>
            <p className="aa-card__desc">{description}</p>
            <pre className="aa-card__code">{code}</pre>
            <button
              className="aa-btn"
              onClick={() => run(n, fn)}
              disabled={st.loading}
            >
              {st.loading ? "Ejecutando…" : "▶ Ejecutar"}
            </button>
            {st.result && (
              <pre className="aa-card__result aa-card__result--ok">
                {st.result}
              </pre>
            )}
            {st.error && (
              <pre className="aa-card__result aa-card__result--err">
                {st.error}
              </pre>
            )}
          </section>
        );
      })}
    </div>
  );
}
