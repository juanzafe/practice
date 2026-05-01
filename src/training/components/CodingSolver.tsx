import { useState } from "react";
import type { CodingProblem } from "../types";
import "./ProblemSolver.css";

interface Props {
  problem: CodingProblem;
  isCompleted: boolean;
  onComplete: () => void;
}

export function CodingSolver({ problem, isCompleted, onComplete }: Props) {
  const [showSolution, setShowSolution] = useState(false);

  function handleReveal() {
    setShowSolution(true);
    onComplete();
  }

  return (
    <div className="solver">
      <div className="coding-description">
        {problem.description.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <h4 className="solver__label">Código de partida:</h4>
      <pre className="code-block">
        <code>{problem.starterCode}</code>
      </pre>

      {!showSolution ? (
        <div className="coding-actions">
          <p className="coding-hint">
            Escribe tu solución en un archivo aparte o en tu editor. Cuando tengas
            la solución, revela la respuesta oficial para comparar.
          </p>
          <button className="btn btn--primary" onClick={handleReveal}>
            Ver solución
          </button>
        </div>
      ) : (
        <>
          <h4 className="solver__label">Solución:</h4>
          <pre className="code-block code-block--solution">
            <code>{problem.solutionCode}</code>
          </pre>
          {!isCompleted && (
            <button className="btn btn--success" onClick={onComplete}>
              ✓ Marcar como completado
            </button>
          )}
        </>
      )}

      {isCompleted && (
        <span className="badge badge--done">✓ Completado</span>
      )}
    </div>
  );
}
