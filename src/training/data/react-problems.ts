import type { MultipleChoiceProblem, FillInTheBlankProblem, CodingProblem } from "../types";

export const reactMultipleChoice: MultipleChoiceProblem[] = [
  {
    id: "react-mc-1",
    type: "multiple-choice",
    category: "react",
    difficulty: "easy",
    title: "¿Qué es un componente?",
    question: "¿Cuál es la mejor definición de un componente en React?",
    choices: [
      { id: "a", text: "Un archivo HTML con lógica JavaScript incorporada" },
      { id: "b", text: "Una función o clase que recibe props y devuelve JSX describiendo la UI" },
      { id: "c", text: "Una clase que extiende HTMLElement" },
      { id: "d", text: "Un objeto que contiene el estado de la aplicación" },
    ],
    correctChoiceId: "b",
    explanation:
      "Un componente React es una función (o clase) que acepta props como entrada y devuelve JSX que describe lo que debe renderizarse. Los componentes funcionales son el estándar moderno.",
    completed: false,
  },
  {
    id: "react-mc-2",
    type: "multiple-choice",
    category: "react",
    difficulty: "easy",
    title: "useState",
    question: "¿Qué devuelve el hook `useState`?",
    choices: [
      { id: "a", text: "Solo el valor actual del estado" },
      { id: "b", text: "Un objeto con las propiedades `value` y `setValue`" },
      { id: "c", text: "Un array con el valor actual y una función para actualizarlo" },
      { id: "d", text: "Una Promise que resuelve al nuevo estado" },
    ],
    correctChoiceId: "c",
    explanation:
      "`useState` devuelve un array de exactamente dos elementos: `[state, setState]`. Por convención se usa destructuring: `const [count, setCount] = useState(0)`. Llamar a `setState` provoca un re-render del componente.",
    completed: false,
  },
  {
    id: "react-mc-3",
    type: "multiple-choice",
    category: "react",
    difficulty: "easy",
    title: "La prop key",
    question: "¿Por qué React requiere la prop `key` cuando renderizas listas?",
    choices: [
      { id: "a", text: "Es una convención de estilo, no es técnicamente necesaria" },
      { id: "b", text: "Para que React identifique qué elementos han cambiado, se añadido o eliminado eficientemente" },
      { id: "c", text: "Para que el elemento sea accesible vía CSS" },
      { id: "d", text: "Para ordenar automáticamente la lista" },
    ],
    correctChoiceId: "b",
    explanation:
      "React usa las `key` para reconciliar el Virtual DOM con el DOM real. Sin keys estables, React puede reusar el DOM incorrecto al actualizar listas, causando bugs. Las keys deben ser únicas entre hermanos y estables (no usar el índice del array si la lista puede reordenarse).",
    completed: false,
  },
  {
    id: "react-mc-4",
    type: "multiple-choice",
    category: "react",
    difficulty: "easy",
    title: "useEffect y el array de dependencias",
    question: "¿Qué ocurre si pasas un array vacío `[]` como segundo argumento de `useEffect`?",
    choices: [
      { id: "a", text: "El efecto nunca se ejecuta" },
      { id: "b", text: "El efecto se ejecuta en cada render" },
      { id: "c", text: "El efecto se ejecuta solo una vez, cuando el componente se monta" },
      { id: "d", text: "El efecto se ejecuta cuando el componente se desmonta" },
    ],
    correctChoiceId: "c",
    explanation:
      "Con `[]`, useEffect se comporta como `componentDidMount`: se ejecuta una sola vez tras el primer render. Sin segundo argumento se ejecuta en cada render. Con dependencias `[a, b]` se ejecuta cuando a o b cambian.",
    completed: false,
  },
  {
    id: "react-mc-5",
    type: "multiple-choice",
    category: "react",
    difficulty: "medium",
    title: "useMemo vs useCallback",
    question: "¿Cuál es la diferencia principal entre `useMemo` y `useCallback`?",
    choices: [
      { id: "a", text: "No hay diferencia, son aliases el uno del otro" },
      { id: "b", text: "`useMemo` memoriza el resultado de una función; `useCallback` memoriza la función misma" },
      { id: "c", text: "`useMemo` es para estado, `useCallback` es para efectos secundarios" },
      { id: "d", text: "`useCallback` memoriza el resultado; `useMemo` memoriza la función" },
    ],
    correctChoiceId: "b",
    explanation:
      "`useMemo(() => computeValue(), [deps])` retorna el valor calculado y lo memoriza. `useCallback(() => fn(), [deps])` retorna la función misma memorizada. `useCallback(fn, deps)` es equivalente a `useMemo(() => fn, deps)`.",
    completed: false,
  },
  {
    id: "react-mc-6",
    type: "multiple-choice",
    category: "react",
    difficulty: "medium",
    title: "Lifting state up",
    question: "¿Qué significa 'lifting state up' en React?",
    choices: [
      { id: "a", text: "Usar Redux para mover el estado a un store global" },
      { id: "b", text: "Mover el estado al componente padre más cercano que necesite compartirlo entre hijos" },
      { id: "c", text: "Convertir componentes de clase a funcionales" },
      { id: "d", text: "Usar Context API para pasar datos por el árbol" },
    ],
    correctChoiceId: "b",
    explanation:
      "Cuando dos componentes hermanos necesitan compartir estado, se 'eleva' (lifts up) al padre común más cercano. El padre gestiona el estado y lo pasa como props a los hijos, también pasando la función de actualización si los hijos necesitan modificarlo.",
    completed: false,
  },
  {
    id: "react-mc-7",
    type: "multiple-choice",
    category: "react",
    difficulty: "medium",
    title: "Context API",
    question: "¿Cuándo debería usar Context API en lugar de simplemente pasar props?",
    choices: [
      { id: "a", text: "Siempre, Context es más eficiente que las props" },
      { id: "b", text: "Cuando necesitas pasar datos a través de múltiples niveles del árbol (prop drilling)" },
      { id: "c", text: "Solo cuando la app tiene más de 10 componentes" },
      { id: "d", text: "Nunca, es mejor usar Redux siempre" },
    ],
    correctChoiceId: "b",
    explanation:
      "Context es ideal para datos 'globales' como tema, idioma, usuario autenticado — datos que muchos componentes en distintos niveles necesitan. Para estado local o que solo afecta 2-3 niveles, las props son más explícitas y fáciles de depurar.",
    completed: false,
  },
  {
    id: "react-mc-8",
    type: "multiple-choice",
    category: "react",
    difficulty: "medium",
    title: "Controlled vs Uncontrolled",
    question: "¿Qué es un componente de formulario 'controlado' en React?",
    choices: [
      { id: "a", text: "Un input cuyo valor es controlado por el DOM" },
      { id: "b", text: "Un input cuyo valor está sincronizado con el estado de React y se actualiza con onChange" },
      { id: "c", text: "Un input con validación HTML5 nativa" },
      { id: "d", text: "Un input que usa ref para acceder al DOM directamente" },
    ],
    correctChoiceId: "b",
    explanation:
      "En un componente controlado, el valor del input viene del estado React (`value={state}`) y se actualiza mediante `onChange={e => setState(e.target.value)}`. React es la 'única fuente de verdad'. El componente no controlado usa `ref` y el DOM gestiona el valor.",
    completed: false,
  },
  {
    id: "react-mc-9",
    type: "multiple-choice",
    category: "react",
    difficulty: "hard",
    title: "Reconciliation",
    question: "¿Qué algoritmo usa React para comparar el árbol virtual con el anterior?",
    choices: [
      { id: "a", text: "Deep equality check completo del árbol (O(n³))" },
      { id: "b", text: "Diffing heurístico O(n) basado en el tipo de elemento y las keys" },
      { id: "c", text: "Shallow comparison de todas las props" },
      { id: "d", text: "Dirty checking similar a AngularJS" },
    ],
    correctChoiceId: "b",
    explanation:
      "React usa un algoritmo de diffing O(n) con dos heurísticas: (1) si el tipo de elemento cambia, destruye el árbol y crea uno nuevo; (2) si los elementos tienen `key`, usa las keys para identificar movimientos. Esto lo hace mucho más eficiente que una comparación completa.",
    completed: false,
  },
  {
    id: "react-mc-10",
    type: "multiple-choice",
    category: "react",
    difficulty: "hard",
    title: "useReducer vs useState",
    question: "¿Cuándo es preferible usar `useReducer` en lugar de `useState`?",
    choices: [
      { id: "a", text: "Siempre, useReducer es más eficiente" },
      { id: "b", text: "Cuando el estado es un simple boolean o string" },
      { id: "c", text: "Cuando la lógica de actualización es compleja, el estado tiene múltiples sub-valores relacionados o las actualizaciones dependen del estado anterior" },
      { id: "d", text: "Solo cuando se usa junto con Context API" },
    ],
    correctChoiceId: "c",
    explanation:
      "`useReducer` brilla cuando: hay múltiples acciones que modifican estado relacionado, la lógica de actualización es compleja, o quieres testear la lógica de estado de forma aislada. `useState` es preferible para estado simple e independiente.",
    completed: false,
  },
];

export const reactFillInTheBlank: FillInTheBlankProblem[] = [
  {
    id: "react-fill-1",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "easy",
    title: "Hook de estado",
    question: "Completa el nombre del hook para añadir estado a un componente funcional:",
    codeTemplate: `const [count, setCount] = ___(0);`,
    acceptedAnswers: ["usestate", "useState"],
    explanation:
      "`useState` es el hook básico para gestionar estado local en componentes funcionales. Recibe el valor inicial y devuelve el estado actual y su setter.",
    completed: false,
  },
  {
    id: "react-fill-2",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "easy",
    title: "Renderizado de listas",
    question: "Completa el método de array para renderizar una lista en JSX:",
    codeTemplate: `const lista = items.___(item => <li key={item.id}>{item.nombre}</li>);`,
    acceptedAnswers: ["map"],
    explanation:
      "`.map()` es el método estándar para transformar un array en JSX. Siempre recuerda añadir la prop `key` con un identificador único cuando renderizas listas.",
    completed: false,
  },
  {
    id: "react-fill-3",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "easy",
    title: "Prop children",
    question: "Completa para acceder al contenido que se pasa entre las etiquetas de apertura y cierre del componente:",
    codeTemplate: `function Contenedor({ ___ }: { ___: React.ReactNode }) {
  return <div className="box">{___}</div>;
}`,
    acceptedAnswers: ["children"],
    explanation:
      "`children` es una prop especial en React que contiene todo el JSX pasado entre las etiquetas del componente. Se tipa como `React.ReactNode` para mayor flexibilidad.",
    completed: false,
  },
  {
    id: "react-fill-4",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "medium",
    title: "Función limpieza en useEffect",
    question: "Completa: para limpiar suscripciones o timers en useEffect, debes ___:",
    codeTemplate: `useEffect(() => {
  const timer = setInterval(tick, 1000);
  ___ () => clearInterval(timer);
}, []);`,
    acceptedAnswers: ["return"],
    explanation:
      "useEffect puede devolver una función de limpieza con `return`. Esta función se ejecuta cuando el componente se desmonta o antes de que el efecto se vuelva a ejecutar. Imprescindible para evitar memory leaks.",
    completed: false,
  },
  {
    id: "react-fill-5",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "medium",
    title: "forwardRef",
    question: "Completa el nombre de la API para permitir que un componente padre acceda al ref de un elemento DOM dentro de un componente hijo:",
    codeTemplate: `const Input = React.___(
  (props, ref) => <input ref={ref} {...props} />
);`,
    acceptedAnswers: ["forwardref", "forwardRef"],
    explanation:
      "`React.forwardRef` permite que los componentes pasen una ref a un elemento DOM hijo. Es necesario cuando quieres controlar el foco, la selección o animaciones desde el componente padre.",
    completed: false,
  },
  {
    id: "react-fill-6",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "medium",
    title: "useContext",
    question: "Completa el hook para consumir un contexto en un componente funcional:",
    codeTemplate: `const theme = ___(ThemeContext);`,
    acceptedAnswers: ["usecontext", "useContext"],
    explanation:
      "`useContext(MyContext)` devuelve el valor actual del contexto. El componente se re-renderizará cuando el valor del contexto cambie. Es la alternativa moderna al Consumer pattern.",
    completed: false,
  },
  {
    id: "react-fill-7",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "hard",
    title: "Lazy loading con Suspense",
    question: "Completa para importar un componente de forma lazy (carga diferida):",
    codeTemplate: `const Dashboard = React.___(
  () => import('./Dashboard')
);`,
    acceptedAnswers: ["lazy"],
    explanation:
      "`React.lazy` permite cargar componentes de forma dinámica (code splitting). Debe usarse junto con `<React.Suspense fallback={...}>` que muestra un fallback mientras el componente carga.",
    completed: false,
  },
  {
    id: "react-fill-8",
    type: "fill-in-the-blank",
    category: "react",
    difficulty: "hard",
    title: "useCallback para evitar re-renders",
    question: "Completa el hook para memorizar una función y evitar que se recree en cada render:",
    codeTemplate: `const handleClick = ___(
  () => { doSomething(id); },
  [id]
);`,
    acceptedAnswers: ["usecallback", "useCallback"],
    explanation:
      "`useCallback` memoriza la función entre renders. Útil cuando pasas callbacks a componentes hijos optimizados con `React.memo`, ya que sin useCallback la función sería una nueva referencia en cada render, forzando re-renders innecesarios.",
    completed: false,
  },
];

export const reactCoding: CodingProblem[] = [
  {
    id: "react-code-1",
    type: "coding",
    category: "react",
    difficulty: "easy",
    title: "Contador con useState",
    description:
      "Crea un componente `Contador` que:\n- Muestre un número en pantalla (empieza en 0)\n- Tenga un botón '+' que incremente el contador\n- Tenga un botón '-' que decremente el contador (no puede bajar de 0)\n- Tenga un botón 'Reset' que vuelva a 0",
    starterCode: `import { useState } from "react";

function Contador() {
  // implementa aquí

  return (
    <div>
      {/* tu JSX aquí */}
    </div>
  );
}

export default Contador;
`,
    solutionCode: `import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => Math.max(0, c - 1))}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Contador;
`,
    completed: false,
  },
  {
    id: "react-code-2",
    type: "coding",
    category: "react",
    difficulty: "medium",
    title: "Custom Hook useFetch",
    description:
      "Crea un custom hook `useFetch<T>` que:\n- Reciba una URL como string\n- Devuelva `{ data: T | null, loading: boolean, error: string | null }`\n- Haga el fetch cuando el componente se monte\n- Gestione los estados de carga y error correctamente",
    starterCode: `import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  // implementa aquí

  return { data, loading, error };
}

export default useFetch;
`,
    solutionCode: `import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json() as Promise<T>;
      })
      .then(json => { if (!cancelled) setData(json); })
      .catch(err => { if (!cancelled) setError(err.message); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
`,
    completed: false,
  },
  {
    id: "react-code-3",
    type: "coding",
    category: "react",
    difficulty: "hard",
    title: "Context + useReducer",
    description:
      "Implementa un sistema de carrito de compras con Context + useReducer:\n- Estado: `{ items: CartItem[], total: number }`\n- Acciones: `ADD_ITEM`, `REMOVE_ITEM`, `CLEAR_CART`\n- `CartItem`: `{ id: number, nombre: string, precio: number, cantidad: number }`\n- El total se debe calcular automáticamente en el reducer\n- Expón el contexto con un custom hook `useCart`",
    starterCode: `import { createContext, useContext, useReducer } from "react";

interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

// Define las acciones y el reducer
// Crea el contexto
// Crea el Provider
// Crea el hook useCart
`,
    solutionCode: `import { createContext, useContext, useReducer } from "react";

interface CartItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type Action =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "cantidad"> }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" };

function calcTotal(items: CartItem[]) {
  return items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
}

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      const items = existing
        ? state.items.map(i =>
            i.id === action.payload.id ? { ...i, cantidad: i.cantidad + 1 } : i
          )
        : [...state.items, { ...action.payload, cantidad: 1 }];
      return { items, total: calcTotal(items) };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter(i => i.id !== action.payload.id);
      return { items, total: calcTotal(items) };
    }
    case "CLEAR_CART":
      return { items: [], total: 0 };
  }
}

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}
`,
    completed: false,
  },
];
