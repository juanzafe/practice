// =============================================================
//  GUÍA COMPLETA: async / await en TypeScript
// =============================================================
//
//  Ejecuta este archivo con:
//    npx ts-node src/problems/async-await/async-await-guide.ts
//  O copia fragmentos en la consola del navegador (omite los tipos).
// =============================================================

// -------------------------------------------------------------
// 1. ¿QUÉ ES async/await?
// -------------------------------------------------------------
//
//  async/await es "azúcar sintáctica" sobre las Promesas.
//  No reemplaza las Promesas, las hace más legibles.
//
//  ANTES (con .then):
//    fetch(url)
//      .then(res => res.json())
//      .then(data => console.log(data))
//      .catch(err => console.error(err));
//
//  DESPUÉS (con async/await):
//    async function getData() {
//      const res  = await fetch(url);
//      const data = await res.json();
//      console.log(data);
//    }

// -------------------------------------------------------------
// 2. ASYNC — la función siempre devuelve una Promesa
// -------------------------------------------------------------

async function saluda(): Promise<string> {
  return "Hola"; // equivale a: return Promise.resolve("Hola")
}

saluda().then(console.log); // "Hola"

// Aunque devuelvas un valor primitivo, async lo envuelve en una promesa:
async function numero(): Promise<number> {
  return 42;
}
// numero() devuelve Promise<number>, no number

// -------------------------------------------------------------
// 3. AWAIT — espera a que la promesa se resuelva
// -------------------------------------------------------------
//
//  await SOLO puede usarse dentro de una función async.
//  "Pausa" la función hasta que la promesa termina,
//  sin bloquear el hilo (el motor sigue ejecutando otras cosas).

async function ejemploAwait() {
  const esperar = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(resolve, ms));

  console.log("Inicio");
  await esperar(1000); // espera 1 segundo (sin bloquear)
  console.log("1 segundo después");
}

// -------------------------------------------------------------
// 4. MANEJO DE ERRORES con try / catch
// -------------------------------------------------------------

async function fetchFallido() {
  try {
    const res = await fetch("https://url-que-no-existe.xyz");
    const data = await res.json();
    return data;
  } catch (error) {
    // Captura errores de red Y de parseo JSON
    console.error("Error atrapado:", error);
    return null;
  }
}

// Sin try/catch, el error se propaga como promesa rechazada:
async function fetchSinTryCatch() {
  const res = await fetch("https://url-que-no-existe.xyz"); // lanza si falla
  return res.json();
}
// fetchSinTryCatch().catch(err => console.error(err));

// -------------------------------------------------------------
// 5. PROMESAS EN PARALELO con Promise.all
// -------------------------------------------------------------
//
//  ❌ Esto es lento — las peticiones son SECUENCIALES (2 s en total):
async function secuencial() {
  const a = await espera(1000, "A"); // espera 1s
  const b = await espera(1000, "B"); // espera 1s más
  console.log(a, b); // ~2 segundos
}

//  ✅ Esto es rápido — las peticiones son PARALELAS (~1 s en total):
async function paralelo() {
  const [a, b] = await Promise.all([espera(1000, "A"), espera(1000, "B")]);
  console.log(a, b); // ~1 segundo
}

function espera<T>(ms: number, valor: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(valor), ms));
}

// -------------------------------------------------------------
// 6. async EN CLASES
// -------------------------------------------------------------

class ServicioUsuarios {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  async obtenerUsuario(id: number) {
    const res = await fetch(`${this.baseUrl}/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  async obtenerPublicaciones(userId: number) {
    const res = await fetch(`${this.baseUrl}/posts?userId=${userId}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }

  // Obtener usuario Y sus posts en paralelo
  async obtenerPerfilCompleto(id: number) {
    const [usuario, posts] = await Promise.all([
      this.obtenerUsuario(id),
      this.obtenerPublicaciones(id),
    ]);
    return { usuario, posts };
  }
}

// -------------------------------------------------------------
// 7. IIFE async — útil cuando no puedes usar await en el nivel raíz
// -------------------------------------------------------------

(async () => {
  const resultado = await espera(500, "ejecutado en IIFE async");
  console.log(resultado);
})();

// En módulos modernos (ESM) puedes usar await directamente:
// const dato = await espera(500, "top-level await");

// =============================================================
//  RESUMEN DE REGLAS
//  ┌─────────────────────────────────────────────────────────┐
//  │  async function → siempre devuelve Promise              │
//  │  await expr     → espera la promesa, devuelve el valor  │
//  │  await solo funciona DENTRO de una función async        │
//  │  usa try/catch para manejar rechazos                    │
//  │  usa Promise.all para esperar varias promesas en        │
//  │  paralelo                                               │
//  └─────────────────────────────────────────────────────────┘
// =============================================================
