// =============================================================
//  SOLUCIONES — async / await
//  (Léelas solo después de intentar los ejercicios)
// =============================================================

import type {
  // los tipos viven en exercises.ts; aquí los redefinimos localmente
} from "./exercises";

const BASE = "https://jsonplaceholder.typicode.com";

interface Post   { userId: number; id: number; title: string; body: string }
interface User   { id: number; name: string; email: string; username: string }
interface Comment { postId: number; id: number; name: string; email: string; body: string }

// ─── Ejercicio 1 ─────────────────────────────────────────────
async function obtenerPost(id: number): Promise<Post> {
  const res = await fetch(`${BASE}/posts/${id}`);
  return res.json();
}

// ─── Ejercicio 2 ─────────────────────────────────────────────
async function obtenerPostSeguro(id: number): Promise<Post | null> {
  try {
    const res = await fetch(`${BASE}/posts/${id}`);
    if (!res.ok) return null;          // status 4xx / 5xx
    return res.json();
  } catch {
    return null;                        // error de red
  }
}

// ─── Ejercicio 3 ─────────────────────────────────────────────
async function obtenerNombreAutor(postId: number): Promise<string> {
  // 1. Obtener el post
  const resPost = await fetch(`${BASE}/posts/${postId}`);
  const post: Post = await resPost.json();

  // 2. Obtener el usuario del post
  const resUser = await fetch(`${BASE}/users/${post.userId}`);
  const user: User = await resUser.json();

  return user.name;
}

// ─── Ejercicio 4 ─────────────────────────────────────────────
async function obtenerPostYComentarios(
  postId: number
): Promise<{ post: Post; comments: Comment[] }> {
  // Las dos peticiones se lanzan a la vez
  const [postRes, commentsRes] = await Promise.all([
    fetch(`${BASE}/posts/${postId}`),
    fetch(`${BASE}/posts/${postId}/comments`),
  ]);

  const [post, comments] = await Promise.all([
    postRes.json() as Promise<Post>,
    commentsRes.json() as Promise<Comment[]>,
  ]);

  return { post, comments };
}

// ─── Ejercicio 5 ─────────────────────────────────────────────
function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchConReintentos<T>(
  fn: () => Promise<T>,
  intentos: number
): Promise<T> {
  let ultimoError: unknown;

  for (let i = 0; i < intentos; i++) {
    try {
      return await fn();               // si funciona, salimos
    } catch (err) {
      ultimoError = err;
      if (i < intentos - 1) {
        await esperar(500);            // espera antes del siguiente intento
      }
    }
  }

  throw ultimoError;                   // se agotaron los intentos
}

// ─── Ejercicio 6 ─────────────────────────────────────────────
async function obtenerPostsEnLotes(
  ids: number[],
  tamañoLote: number
): Promise<Post[]> {
  const resultado: Post[] = [];

  for (let i = 0; i < ids.length; i += tamañoLote) {
    const lote = ids.slice(i, i + tamañoLote);           // grupo actual
    const posts = await Promise.all(lote.map(obtenerPost)); // paralelo
    resultado.push(...posts);
  }

  return resultado;
}

// ─── Ejercicio 7 ─────────────────────────────────────────────
class CacheAPI {
  private cache = new Map<string, unknown>();

  async get<T>(url: string): Promise<T> {
    if (this.cache.has(url)) {
      return this.cache.get(url) as T; // devuelve valor cacheado
    }
    const res = await fetch(url);
    const data = (await res.json()) as T;
    this.cache.set(url, data);         // guarda en caché
    return data;
  }

  invalidar(url: string): void {
    this.cache.delete(url);
  }
}

export {
  obtenerPost,
  obtenerPostSeguro,
  obtenerNombreAutor,
  obtenerPostYComentarios,
  fetchConReintentos,
  obtenerPostsEnLotes,
  CacheAPI,
};
