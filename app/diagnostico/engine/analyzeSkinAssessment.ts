export type SkinArea =
  | "barrier"
  | "sensitivity"
  | "hydration"
  | "luminosity"
  | "texture"
  | "pigmentation"
  | "scars"
  | "congestion"
  | "elasticity";

export type SkinScores = Record<SkinArea, number>;

export type AssessmentAnswers = {
  motivo?: string;
  tiempo?: string;
  inflamacion?: string;
  barrera?: string;
  lifestyle?: string[];
  ubicacion?: string;
};

export function analyzeSkinAssessment(
  answers: AssessmentAnswers
): SkinScores {
  const scores: SkinScores = {
    barrier: 1,
    sensitivity: 1,
    hydration: 1,
    luminosity: 1,
    texture: 1,
    pigmentation: 1,
    scars: 1,
    congestion: 1,
    elasticity: 1,
  };

  switch (answers.motivo) {
    case "acne":
      scores.congestion += 4;
      break;

    case "rosacea":
      scores.sensitivity += 4;
      scores.barrier += 3;
      break;

    case "hidratacion":
      scores.hydration += 4;
      scores.luminosity += 3;
      break;

    case "textura":
      scores.texture += 4;
      break;

    case "manchas":
      scores.pigmentation += 4;
      break;

    case "cicatrices":
      scores.scars += 4;
      break;

    case "elasticidad":
      scores.elasticity += 4;
      break;
  }

  if (answers.inflamacion === "si") {
    scores.sensitivity += 3;
    scores.barrier += 2;
  }

  if (answers.barrera === "alterada") {
    scores.barrier += 3;
    scores.sensitivity += 2;
  }

  return scores;
}