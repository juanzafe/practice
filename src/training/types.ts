export type Difficulty = "easy" | "medium" | "hard";
export type Category = "typescript" | "react";
export type ProblemType = "multiple-choice" | "fill-in-the-blank" | "coding";

export interface Choice {
  id: string;
  text: string;
}

export interface MultipleChoiceProblem {
  id: string;
  type: "multiple-choice";
  category: Category;
  difficulty: Difficulty;
  title: string;
  question: string;
  choices: Choice[];
  correctChoiceId: string;
  explanation: string;
  completed: boolean;
}

export interface FillInTheBlankProblem {
  id: string;
  type: "fill-in-the-blank";
  category: Category;
  difficulty: Difficulty;
  title: string;
  question: string;
  /** El código con ___ donde va la respuesta */
  codeTemplate: string;
  /** Respuestas aceptadas (lowercase, trimmed) */
  acceptedAnswers: string[];
  explanation: string;
  completed: boolean;
}

export interface CodingProblem {
  id: string;
  type: "coding";
  category: Category;
  difficulty: Difficulty;
  title: string;
  description: string;
  starterCode: string;
  solutionCode: string;
  completed: boolean;
}

export type Problem =
  | MultipleChoiceProblem
  | FillInTheBlankProblem
  | CodingProblem;
