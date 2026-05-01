import { useState, useRef } from "react";
import type { FillInTheBlankProblem } from "../types";
import "./ProblemSolver.css";

interface Props {
  problem: FillInTheBlankProblem;
  isCompleted: boolean;
  onComplete: () => void;
}

function renderTemplate(template: string, answer: string, revealed: boolean, isCorrect: boolean) {
  const parts = template.split("___");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <span
          className={
            "blank" +
            (revealed ? (isCorrect ? " blank--correct" : " blank--wrong") : "")
          }
        >
          {revealed ? answer || "___" : "___"}
        </span>
      )}
    </span>
  ));
}

export function FillInTheBlankSolver({ problem, isCompleted, onComplete }: Props) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalized = answer.trim().toLowerCase();
  const isCorrect = problem.acceptedAnswers.includes(normalized);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!answer.trim()) return;
    setRevealed(true);
    if (isCorrect) onComplete();
  }

  function handleReset() {
    setAnswer("");
    setRevealed(false);
    inputRef.current?.focus();
  }

  return (
    <div className="solver">
      <p className="solver__question">{problem.question}</p>

      <pre className="code-block">
        <code>{renderTemplate(problem.codeTemplate, answer, revealed, isCorrect)}</code>
      </pre>

      <form className="fill-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="fill-input"
          type="text"
          value={answer}
          onChange={e => !revealed && setAnswer(e.target.value)}
          placeholder="Tu respuesta..."
          disabled={revealed}
          autoComplete="off"
          spellCheck={false}
        />
        {!revealed && (
          <button className="btn btn--primary" type="submit" disabled={!answer.trim()}>
            Comprobar
          </button>
        )}
      </form>

      {revealed && (
        <div className={`feedback ${isCorrect ? "feedback--correct" : "feedback--wrong"}`}>
          <p className="feedback__result">
            {isCorrect ? "✓ ¡Correcto!" : `✗ La respuesta correcta era: ${problem.acceptedAnswers[0]}`}
          </p>
          <p className="feedback__explanation">{problem.explanation}</p>
          <button className="btn btn--secondary" onClick={handleReset}>
            Intentar de nuevo
          </button>
        </div>
      )}

      {isCompleted && (
        <span className="badge badge--done">✓ Completado</span>
      )}
    </div>
  );
}
