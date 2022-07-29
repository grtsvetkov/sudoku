import { BLANK_BOARD, DIFFICULTY } from "../constants";
import { eliminateBoard } from "./eliminate-board";
import { fillBoard } from "./fill-board";

export function generate(difficulty = DIFFICULTY.easy): string {
  return eliminateBoard(fillBoard(BLANK_BOARD), difficulty);
}
