// =============================================================
//  EJERCICIOS: async / await
// =============================================================
//
//  Instrucciones:
//  - Lee cada ejercicio y el tipo de retorno esperado.
//  - Implementa la función donde dice "// TU CÓDIGO AQUÍ".
//  - Comprueba con la sección "VERIFICACIÓN" al final.
//
//  API gratuita que usaremos: https://jsonplaceholder.typicode.com
// =============================================================

// ─────────────────────────────────────────────────────────────
// TIPOS de la API (no los modifiques)
// ─────────────────────────────────────────────────────────────
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
  username: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const BASE = "https://jsonplaceholder.typicode.com";

// =============================================================
// EJERCICIO 1 ⭐ (Fácil) — Tu primera función async
// =============================================================
//
//  Crea una función async llamada `obtenerPost` que:
//    - Reciba un `id: number`
//    - Haga fetch a `${BASE}/posts/${id}`
//    - Devuelva el Post parseado como JSON
//
//  Tipo de retorno esperado: Promise<Post>

async function obtenerPost(id: number): Promise<Post> {
  // TU CÓDIGO AQUÍ
  throw new Error("No implementado");
}

// =============================================================
// EJERCICIO 2 ⭐ (Fácil) — Manejo de errores básico
// =============================================================
//
//  Crea `obtenerPostSeguro` que:
//    - Reciba un `id: number`
//    - Haga fetch a `${BASE}/posts/${id}`
//    - Si la petición falla o el status no es ok, devuelva `null`
//    - Si todo va bien, devuelva el Post
//
//  Pista: usa try/catch y comprueba `res.ok`

async function obtenerPostSeguro(id: number): Promise<Post | null> {
  // TU CÓDIGO AQUÍ
  throw new Error("No implementado");
}

// =============================================================
// EJERCICIO 3 ⭐⭐ (Medio) — Encadenar awaits
// =============================================================
//
//  Crea `obtenerNombreAutor` que:
//    - Reciba un `postId: number`
//    - Primero obtenga el post (`${BASE}/posts/${postId}`)
//    - Luego con el `userId` del post, obtenga el usuario (`${BASE}/users/${userId}`)
//    - Devuelva el `name` del usuario
//
//  Tipo de retorno esperado: Promise<string>

async function obtenerNombreAutor(postId: number): Promise<string> {
  // TU CÓDIGO AQUÍ
  throw new Error("No implementado");
}

// =============================================================
// EJERCICIO 4 ⭐⭐ (Medio) — Paralelismo con Promise.all
// =============================================================
//
//  Crea `obtenerPostYComentarios` que:
//    - Reciba un `postId: number`
//    - Obtenga EN PARALELO (Promise.all) el post y sus comentarios
//        Post:       `${BASE}/posts/${postId}`
//        Comentarios: `${BASE}/posts/${postId}/comments`
//    - Devuelva un objeto { post: Post; comments: Comment[] }
//
//  ¡No uses await secuencial! El objetivo es hacerlo simultáneo.

async function obtenerPostYComentarios(
  postId: number
): Promise<{ post: Post; comments: Comment[] }> {
  // TU CÓDIGO AQUÍ
  throw new Error("No implementado");
}

// =============================================================
// EJERCICIO 5 ⭐⭐ (Medio) — Reintentos automáticos
// =============================================================
//
//  Crea `fetchConReintentos` que:
//    - Reciba una función `fn: () => Promise<T>` y `intentos: number`
//    - Llame a `fn()`. Si falla y quedan intentos, espere 500ms y reintente.
//    - Si se agotan los intentos, lance el último error recibido.
//
//  Pista: usa un bucle for y try/catch dentro.
//  La función `esperar` está disponible abajo.

function esperar(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchConReintentos<T>(
  fn: () => Promise<T>,
  intentos: number
): Promise<T> {
  // TU CÓDIGO AQUÍ
  throw new Error("No implementado");
}

// =============================================================
// EJERCICIO 6 ⭐⭐⭐ (Difícil) — Concurrencia limitada
// =============================================================
//
//  Crea `obtenerPostsEnLotes` que:
//    - Reciba un array de ids: number[]  y  tamañoLote: number
//    - Divida los ids en grupos del tamaño indicado
//    - Procese cada grupo EN PARALELO (Promise.all) pero espere a que
//      el grupo termine antes de empezar el siguiente
//    - Devuelva todos los Posts en orden
//
//  Ejemplo:
//    obtenerPostsEnLotes([1,2,3,4,5], 2)
//    → lote [1,2] en paralelo, luego [3,4] en paralelo, luego [5]
//    → devuelve Post[] con los 5 posts en orden
//
//  Tipo de retorno: Promise<Post[]>

async function obtenerPostsEnLotes(
  ids: number[],
  tamañoLote: number
): Promise<Post[]> {
  // TU CÓDIGO AQUÍ
  throw new Error("No implementado");
}

// =============================================================
// EJERCICIO 7 ⭐⭐⭐ (Difícil) — async en clase
// =============================================================
//
//  Completa la clase `CacheAPI` que:
//    - Tiene un Map interno `cache: Map<string, unknown>`
//    - El método `get<T>(url: string): Promise<T>`:
//        * Si la url ya está en caché, devuelve el valor cacheado
//        * Si no, hace fetch, guarda en caché y devuelve el valor
//    - El método `invalidar(url: string): void` elimina la entrada del caché

class CacheAPI {
  private cache = new Map<string, unknown>();

  async get<T>(url: string): Promise<T> {
    // TU CÓDIGO AQUÍ
    throw new Error("No implementado");
  }

  invalidar(url: string): void {
    // TU CÓDIGO AQUÍ
    throw new Error("No implementado");
  }
}

// =============================================================
// VERIFICACIÓN — descomenta cada bloque para probar
// =============================================================

/*
// --- Ejercicio 1 ---
obtenerPost(1).then((p) => console.log("Post:", p.title));

// --- Ejercicio 2 ---
obtenerPostSeguro(99999).then((p) => console.log("ID inválido:", p)); // null
obtenerPostSeguro(1).then((p) => console.log("Post seguro:", p?.title));

// --- Ejercicio 3 ---
obtenerNombreAutor(1).then((nombre) => console.log("Autor:", nombre));

// --- Ejercicio 4 ---
obtenerPostYComentarios(1).then(({ post, comments }) => {
  console.log("Post:", post.title);
  console.log("Comentarios:", comments.length);
});

// --- Ejercicio 5 ---
let intentos = 0;
const fnInestable = () => {
  intentos++;
  if (intentos < 3) return Promise.reject(new Error(`Fallo #${intentos}`));
  return Promise.resolve("¡Éxito en el intento 3!");
};
fetchConReintentos(fnInestable, 5).then(console.log).catch(console.error);

// --- Ejercicio 6 ---
obtenerPostsEnLotes([1, 2, 3, 4, 5, 6], 2).then((posts) =>
  console.log("Posts en lotes:", posts.map((p) => p.id))
);

// --- Ejercicio 7 ---
const api = new CacheAPI();
(async () => {
  const p1 = await api.get<Post>(`${BASE}/posts/1`);
  console.log("Primera llamada:", p1.title);
  const p2 = await api.get<Post>(`${BASE}/posts/1`); // desde caché
  console.log("Desde caché:", p2.title);
  api.invalidar(`${BASE}/posts/1`);
  const p3 = await api.get<Post>(`${BASE}/posts/1`); // nueva petición
  console.log("Tras invalidar:", p3.title);
})();
*/

export {
  obtenerPost,
  obtenerPostSeguro,
  obtenerNombreAutor,
  obtenerPostYComentarios,
  fetchConReintentos,
  obtenerPostsEnLotes,
  CacheAPI,
};
