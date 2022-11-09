import { INCREMENT_SCORE_VALUE, MAX_SCORE } from "./constants";

export function hasOvercomeMaxScore(score: number) {
  return score > MAX_SCORE - INCREMENT_SCORE_VALUE;
}

export function getPercentageScore(score: number) {
  return (100 * (score || 0)) / MAX_SCORE;
}
