import type { MultipleChoiceProblem, FillInTheBlankProblem, CodingProblem } from "../types";

export const tsMultipleChoice: MultipleChoiceProblem[] = [
  {
    id: "ts-mc-1",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "easy",
    title: "¿Qué es TypeScript?",
    question: "¿Cuál de estas afirmaciones describe mejor TypeScript?",
    choices: [
      { id: "a", text: "Un lenguaje de programación completamente diferente a JavaScript" },
      { id: "b", text: "Un superset de JavaScript que añade tipado estático opcional" },
      { id: "c", text: "Un framework de JavaScript para construir interfaces de usuario" },
      { id: "d", text: "Una librería de JavaScript para manejo de estado" },
    ],
    correctChoiceId: "b",
    explanation:
      "TypeScript es un superset de JavaScript desarrollado por Microsoft. Todo código JavaScript válido es TypeScript válido, pero TS añade tipado estático opcional, interfaces, enums y otras características.",
    completed: false,
  },
  {
    id: "ts-mc-2",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "easy",
    title: "Tipos primitivos",
    question: "¿Cuáles son los tipos primitivos básicos en TypeScript?",
    choices: [
      { id: "a", text: "string, number, boolean" },
      { id: "b", text: "String, Number, Boolean (con mayúscula)" },
      { id: "c", text: "char, int, float" },
      { id: "d", text: "text, digit, flag" },
    ],
    correctChoiceId: "a",
    explanation:
      "Los tipos primitivos en TypeScript son string, number y boolean (en minúscula). Los tipos con mayúscula (String, Number, Boolean) son los wrappers de objetos y raramente se usan directamente.",
    completed: false,
  },
  {
    id: "ts-mc-3",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "easy",
    title: "type vs interface",
    question: "¿Cuál es una diferencia clave entre `type` e `interface` en TypeScript?",
    choices: [
      { id: "a", text: "Las interfaces no pueden tener métodos, los types sí" },
      { id: "b", text: "Los types no se pueden extender, las interfaces sí" },
      { id: "c", text: "Las interfaces pueden ser re-declaradas (declaration merging), los types no" },
      { id: "d", text: "No hay diferencia, son completamente intercambiables" },
    ],
    correctChoiceId: "c",
    explanation:
      "La diferencia principal es que las interfaces soportan declaration merging: si declaras la misma interfaz dos veces, TypeScript las fusiona. Con `type` esto genera un error. Ambas pueden extenderse, tener métodos y usarse en la mayoría de situaciones.",
    completed: false,
  },
  {
    id: "ts-mc-4",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "easy",
    title: "El tipo `any`",
    question: "¿Por qué deberías evitar el tipo `any` en TypeScript?",
    choices: [
      { id: "a", text: "Porque hace que el código sea más lento en ejecución" },
      { id: "b", text: "Porque desactiva la comprobación de tipos, perdiendo la seguridad que ofrece TypeScript" },
      { id: "c", text: "Porque `any` solo funciona con variables, no con parámetros de función" },
      { id: "d", text: "Porque `any` no está disponible en TypeScript moderno" },
    ],
    correctChoiceId: "b",
    explanation:
      "Usar `any` deshabilita el sistema de tipos de TypeScript para esa variable. Básicamente estás diciendo 'confía en mí', perdiendo los beneficios de autocompletado, detección de errores en tiempo de compilación y refactoring seguro. Usa `unknown` cuando no sepas el tipo.",
    completed: false,
  },
  {
    id: "ts-mc-5",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "medium",
    title: "Union Types",
    question: "¿Qué hace el operador `|` en TypeScript?",
    choices: [
      { id: "a", text: "Crea una intersección de tipos (el valor debe cumplir ambos tipos)" },
      { id: "b", text: "Crea una unión de tipos (el valor puede ser uno u otro tipo)" },
      { id: "c", text: "Es el operador OR lógico igual que en JavaScript" },
      { id: "d", text: "Define que un campo es opcional" },
    ],
    correctChoiceId: "b",
    explanation:
      "El operador `|` crea un Union Type: `string | number` significa que la variable puede ser string O number. TypeScript fuerza type narrowing para usar valores de tipo unión de forma segura.",
    completed: false,
  },
  {
    id: "ts-mc-6",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "medium",
    title: "Generics",
    question: "¿Para qué sirven los genéricos (generics) en TypeScript?",
    choices: [
      { id: "a", text: "Para crear funciones que aceptan cualquier tipo (equivalente a `any`)" },
      { id: "b", text: "Para escribir código reutilizable que funcione con diferentes tipos manteniendo type safety" },
      { id: "c", text: "Para definir valores por defecto en parámetros" },
      { id: "d", text: "Para importar tipos de otras librerías" },
    ],
    correctChoiceId: "b",
    explanation:
      "Los genéricos permiten escribir funciones, clases e interfaces que funcionan con múltiples tipos sin perder la seguridad del tipado. Por ejemplo, `Array<T>` es genérico: `Array<string>` solo acepta strings, `Array<number>` solo numbers.",
    completed: false,
  },
  {
    id: "ts-mc-7",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "medium",
    title: "Readonly y Partial",
    question: "¿Qué hace el utility type `Partial<T>`?",
    choices: [
      { id: "a", text: "Hace que todas las propiedades de T sean requeridas" },
      { id: "b", text: "Hace que todas las propiedades de T sean de solo lectura" },
      { id: "c", text: "Hace que todas las propiedades de T sean opcionales" },
      { id: "d", text: "Elimina la mitad de las propiedades de T aleatoriamente" },
    ],
    correctChoiceId: "c",
    explanation:
      "`Partial<T>` convierte todas las propiedades del tipo T en opcionales (añade `?` a cada una). Muy útil para objetos de actualización parcial. Su opuesto es `Required<T>` que hace todas las propiedades obligatorias.",
    completed: false,
  },
  {
    id: "ts-mc-8",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "medium",
    title: "Type Narrowing",
    question: "¿Cuál de estas técnicas NO es un método de type narrowing válido en TypeScript?",
    choices: [
      { id: "a", text: "typeof checks: `if (typeof x === 'string')`" },
      { id: "b", text: "instanceof checks: `if (x instanceof Date)`" },
      { id: "c", text: "as checks: `if (x as string)`" },
      { id: "d", text: "in operator: `if ('name' in obj)`" },
    ],
    correctChoiceId: "c",
    explanation:
      "`as` es una aserción de tipo (type assertion), no type narrowing. Le dices al compilador 'trata esto como X', pero no hay comprobación en runtime. El narrowing real usa typeof, instanceof, el operador in, o type guards personalizados.",
    completed: false,
  },
  {
    id: "ts-mc-9",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "hard",
    title: "Mapped Types",
    question: "¿Qué produce este tipo? `type Flags<T> = { [K in keyof T]: boolean }`",
    choices: [
      { id: "a", text: "Un tipo donde todas las propiedades de T son reemplazadas por boolean" },
      { id: "b", text: "Un tipo que solo incluye las propiedades booleanas de T" },
      { id: "c", text: "Un array de booleanos con la misma longitud que las propiedades de T" },
      { id: "d", text: "Un error de compilación porque no se puede mapear sobre keyof" },
    ],
    correctChoiceId: "a",
    explanation:
      "Es un Mapped Type. Itera sobre todas las claves de T (`keyof T`) y crea un nuevo tipo donde cada propiedad tiene el mismo nombre pero el valor es `boolean`. Si T = `{name: string, age: number}`, entonces `Flags<T>` = `{name: boolean, age: boolean}`.",
    completed: false,
  },
  {
    id: "ts-mc-10",
    type: "multiple-choice",
    category: "typescript",
    difficulty: "hard",
    title: "Conditional Types",
    question: "¿Qué devuelve `type IsString<T> = T extends string ? 'yes' : 'no'` cuando T = number?",
    choices: [
      { id: "a", text: "'yes'" },
      { id: "b", text: "'no'" },
      { id: "c", text: "string" },
      { id: "d", text: "Un error de compilación" },
    ],
    correctChoiceId: "b",
    explanation:
      "Los Conditional Types funcionan como un ternario pero a nivel de tipos. `number extends string` es falso, por lo que el resultado es `'no'`. Son muy poderosos para crear utility types complejos.",
    completed: false,
  },
];

export const tsFillInTheBlank: FillInTheBlankProblem[] = [
  {
    id: "ts-fill-1",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "easy",
    title: "Declarar una variable tipada",
    question: "Completa para declarar una variable de tipo string:",
    codeTemplate: `const nombre: ___ = "Ana";`,
    acceptedAnswers: ["string"],
    explanation: "El tipo `string` (en minúscula) es el primitivo para texto en TypeScript.",
    completed: false,
  },
  {
    id: "ts-fill-2",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "easy",
    title: "Parámetro opcional",
    question: "Completa el símbolo que hace un parámetro opcional en TypeScript:",
    codeTemplate: `function saludar(nombre: string, apellido___ string) {}`,
    acceptedAnswers: ["?:"],
    explanation:
      "El símbolo `?:` marca un parámetro como opcional. La función puede llamarse con o sin ese argumento. El tipo del parámetro será `string | undefined`.",
    completed: false,
  },
  {
    id: "ts-fill-3",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "easy",
    title: "Tipo de retorno void",
    question: "Completa el tipo de retorno para una función que no devuelve nada:",
    codeTemplate: `function logear(msg: string): ___ {
  console.log(msg);
}`,
    acceptedAnswers: ["void"],
    explanation:
      "`void` indica que la función no retorna ningún valor útil. Es diferente a `undefined` aunque están relacionados.",
    completed: false,
  },
  {
    id: "ts-fill-4",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "medium",
    title: "Array tipado",
    question: "Completa el tipo para un array de números (usando sintaxis genérica):",
    codeTemplate: `const precios: ___<number> = [10, 20, 30];`,
    acceptedAnswers: ["array", "Array"],
    explanation:
      "Puedes tipar arrays con `Array<number>` (sintaxis genérica) o `number[]` (sintaxis abreviada). Ambas son equivalentes.",
    completed: false,
  },
  {
    id: "ts-fill-5",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "medium",
    title: "Intersección de tipos",
    question: "Completa el operador para crear un tipo intersección (el objeto debe cumplir AMBOS tipos):",
    codeTemplate: `type Admin = Usuario ___ Permisos;`,
    acceptedAnswers: ["&"],
    explanation:
      "El operador `&` crea Intersection Types. El resultado debe satisfacer ambos tipos simultáneamente. Útil para combinar interfaces.",
    completed: false,
  },
  {
    id: "ts-fill-6",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "medium",
    title: "keyof operator",
    question: "Completa para obtener las claves de un tipo como unión de strings literales:",
    codeTemplate: `type ClaveUsuario = ___ Usuario;
// Resultado: "id" | "nombre" | "email"`,
    acceptedAnswers: ["keyof"],
    explanation:
      "`keyof T` devuelve una unión de los nombres de todas las propiedades de T. Si T = `{id: number, nombre: string}`, `keyof T` = `'id' | 'nombre'`.",
    completed: false,
  },
  {
    id: "ts-fill-7",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "hard",
    title: "Utility type Pick",
    question: "Completa para seleccionar solo las propiedades 'id' y 'nombre' de Usuario:",
    codeTemplate: `type UsuarioResumen = ___<Usuario, "id" | "nombre">;`,
    acceptedAnswers: ["pick", "Pick"],
    explanation:
      "`Pick<T, K>` crea un nuevo tipo seleccionando solo las propiedades K del tipo T. Su opuesto es `Omit<T, K>` que excluye propiedades.",
    completed: false,
  },
  {
    id: "ts-fill-8",
    type: "fill-in-the-blank",
    category: "typescript",
    difficulty: "hard",
    title: "ReturnType utility",
    question: "Completa el utility type para obtener el tipo de retorno de una función:",
    codeTemplate: `function getData(): { id: number; nombre: string } { return { id: 1, nombre: "Ana" }; }

type Resultado = ___<typeof getData>;`,
    acceptedAnswers: ["returntype", "ReturnType"],
    explanation:
      "`ReturnType<T>` extrae el tipo de retorno de un tipo función. Muy útil para inferir tipos sin duplicar definiciones.",
    completed: false,
  },
];

export const tsCoding: CodingProblem[] = [
  {
    id: "ts-code-1",
    type: "coding",
    category: "typescript",
    difficulty: "easy",
    title: "Interfaz Usuario",
    description:
      "Define una interfaz `Usuario` con las siguientes propiedades:\n- `id`: número\n- `nombre`: string\n- `email`: string\n- `edad`: número opcional\n\nLuego crea una variable `usuario1` de tipo `Usuario` con datos de ejemplo.",
    starterCode: `// Define la interfaz aquí
interface Usuario {
  // ...
}

// Crea una variable de tipo Usuario
const usuario1: Usuario = {
  // ...
};
`,
    solutionCode: `interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number;
}

const usuario1: Usuario = {
  id: 1,
  nombre: "Ana García",
  email: "ana@example.com",
  edad: 28,
};
`,
    completed: false,
  },
  {
    id: "ts-code-2",
    type: "coding",
    category: "typescript",
    difficulty: "medium",
    title: "Función genérica",
    description:
      "Implementa una función genérica `primero<T>` que reciba un array de cualquier tipo y devuelva el primer elemento. Si el array está vacío, debe devolver `undefined`. El tipo de retorno debe inferirse correctamente.",
    starterCode: `function primero<T>(arr: T[]): T | undefined {
  // implementa aquí
}

// Tests:
// primero([1, 2, 3])    → 1  (tipo: number)
// primero(["a", "b"])   → "a" (tipo: string)
// primero([])           → undefined
`,
    solutionCode: `function primero<T>(arr: T[]): T | undefined {
  return arr[0];
}
`,
    completed: false,
  },
  {
    id: "ts-code-3",
    type: "coding",
    category: "typescript",
    difficulty: "hard",
    title: "Type Guard personalizado",
    description:
      "Crea un type guard `esPerro` que determine si un animal es un `Perro`. Tienes las interfaces `Animal`, `Perro` (con propiedad `raza`) y `Gato` (con propiedad `indoor`). La función debe usar la sintaxis de type guard `x is Perro`.",
    starterCode: `interface Animal {
  nombre: string;
  sonido: string;
}

interface Perro extends Animal {
  raza: string;
}

interface Gato extends Animal {
  indoor: boolean;
}

// Implementa el type guard
function esPerro(animal: Perro | Gato): animal is Perro {
  // ...
}

// Uso:
const miMascota: Perro | Gato = { nombre: "Rex", sonido: "guau", raza: "Labrador" };
if (esPerro(miMascota)) {
  console.log(miMascota.raza); // TypeScript sabe que es Perro aquí
}
`,
    solutionCode: `interface Animal {
  nombre: string;
  sonido: string;
}

interface Perro extends Animal {
  raza: string;
}

interface Gato extends Animal {
  indoor: boolean;
}

function esPerro(animal: Perro | Gato): animal is Perro {
  return "raza" in animal;
}
`,
    completed: false,
  },
];
