import { useState } from "react";
import type { Problem } from "../types";
import { MultipleChoiceSolver } from "./MultipleChoiceSolver";
import { FillInTheBlankSolver } from "./FillInTheBlankSolver";
import { CodingSolver } from "./CodingSolver";
import "./ProblemSolver.css";

interface Props {
  problem: Problem;
  isCompleted: boolean;
  onComplete: (id: string) => void;
}

const DIFFICULTY_LABEL: Record<string, string> = {
  easy: "Fácil",
  medium: "Medio",
  hard: "Difícil",
};

const TYPE_LABEL: Record<string, string> = {
  "multiple-choice": "Test",
  "fill-in-the-blank": "Completar código",
  coding: "Ejercicio de código",
};

export function ProblemCard({ problem, isCompleted, onComplete }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`problem-card ${isCompleted ? "problem-card--done" : ""}`}>
      <button
        className="problem-card__header"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="problem-card__meta">
          <span className={`badge badge--difficulty badge--${problem.difficulty}`}>
            {DIFFICULTY_LABEL[problem.difficulty]}
          </span>
          <span className="badge badge--type">{TYPE_LABEL[problem.type]}</span>
        </div>
        <span className="problem-card__title">{problem.title}</span>
        <div className="problem-card__right">
          {isCompleted && <span className="badge badge--done">✓</span>}
          <span className="problem-card__chevron">{expanded ? "▲" : "▼"}</span>
        </div>
      </button>

      {expanded && (
        <div className="problem-card__body">
          {problem.type === "multiple-choice" && (
            <MultipleChoiceSolver
              problem={problem}
              isCompleted={isCompleted}
              onComplete={() => onComplete(problem.id)}
            />
          )}
          {problem.type === "fill-in-the-blank" && (
            <FillInTheBlankSolver
              problem={problem}
              isCompleted={isCompleted}
              onComplete={() => onComplete(problem.id)}
            />
          )}
          {problem.type === "coding" && (
            <CodingSolver
              problem={problem}
              isCompleted={isCompleted}
              onComplete={() => onComplete(problem.id)}
            />
          )}
        </div>
      )}
    </div>
  );
}
