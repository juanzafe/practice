import { tsMultipleChoice, tsFillInTheBlank, tsCoding } from "./data/typescript-problems";
import { reactMultipleChoice, reactFillInTheBlank, reactCoding } from "./data/react-problems";
import type { Problem } from "./types";

export const ALL_PROBLEMS: Problem[] = [
  ...tsMultipleChoice,
  ...tsFillInTheBlank,
  ...tsCoding,
  ...reactMultipleChoice,
  ...reactFillInTheBlank,
  ...reactCoding,
];
