import { useState } from "react";
import type { MultipleChoiceProblem } from "../types";
import "./ProblemSolver.css";

interface Props {
  problem: MultipleChoiceProblem;
  isCompleted: boolean;
  onComplete: () => void;
}

export function MultipleChoiceSolver({ problem, isCompleted, onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const isCorrect = selected === problem.correctChoiceId;

  function handleSubmit() {
    if (!selected) return;
    setRevealed(true);
    if (isCorrect) onComplete();
  }

  function handleReset() {
    setSelected(null);
    setRevealed(false);
  }

  return (
    <div className="solver">
      <p className="solver__question">{problem.question}</p>
      <ul className="solver__choices">
        {problem.choices.map(choice => {
          let cls = "choice";
          if (revealed) {
            if (choice.id === problem.correctChoiceId) cls += " choice--correct";
            else if (choice.id === selected) cls += " choice--wrong";
          } else if (choice.id === selected) {
            cls += " choice--selected";
          }
          return (
            <li key={choice.id}>
              <button
                className={cls}
                onClick={() => !revealed && setSelected(choice.id)}
                disabled={revealed}
              >
                <span className="choice__letter">{choice.id.toUpperCase()}</span>
                {choice.text}
              </button>
            </li>
          );
        })}
      </ul>

      {!revealed && (
        <button className="btn btn--primary" onClick={handleSubmit} disabled={!selected}>
          Comprobar
        </button>
      )}

      {revealed && (
        <div className={`feedback ${isCorrect ? "feedback--correct" : "feedback--wrong"}`}>
          <p className="feedback__result">{isCorrect ? "✓ ¡Correcto!" : "✗ Incorrecto"}</p>
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
