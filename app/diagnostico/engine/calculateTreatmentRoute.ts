import { SkinScores } from "./analyzeSkinAssessment";

export function calculateTreatmentRoute(scores: SkinScores) {
  const route = [];

  if (scores.sensitivity >= 3 || scores.barrier >= 3) {
    route.push("02");
  }

  if (
    scores.congestion >= 3 &&
    !route.includes("02")
  ) {
    route.push("01");
  }

  if (scores.hydration >= 3 || scores.luminosity >= 3) {
    route.push("03");
  }

  if (scores.texture >= 3) {
    route.push("04");
  }

  if (scores.pigmentation >= 3) {
    route.push("05");
  }

  if (scores.scars >= 3) {
    route.push("06");
  }

  if (scores.elasticity >= 3) {
    route.push("07");
  }

  return route.slice(0, 3);
}