import { SkinScores } from "./analyzeSkinAssessment";

export function calculateProtocolPriorities(scores: SkinScores) {
  const priorities = [
    {
      code: "01",
      score: scores.congestion * 20,
    },
    {
      code: "02",
      score: Math.max(scores.sensitivity, scores.barrier) * 20,
    },
    {
      code: "03",
      score: Math.max(scores.hydration, scores.luminosity) * 15,
    },
    {
      code: "04",
      score: scores.texture * 20,
    },
    {
      code: "05",
      score: scores.pigmentation * 20,
    },
    {
      code: "06",
      score: scores.scars * 20,
    },
    {
      code: "07",
      score: scores.elasticity * 20,
    },
  ];

  return priorities
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}