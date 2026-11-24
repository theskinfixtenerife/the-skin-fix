import { analyzeSkinAssessment, AssessmentAnswers } from "./analyzeSkinAssessment";
import { calculateProtocolPriorities } from "./calculateProtocolPriorities";
import { calculateTreatmentRoute } from "./calculateTreatmentRoute";

export function runDiagnostic(answers: AssessmentAnswers) {
  const skinScores = analyzeSkinAssessment(answers);

  const protocolPriorities =
    calculateProtocolPriorities(skinScores);

  const treatmentRoute =
    calculateTreatmentRoute(skinScores);

  return {
    skinScores,
    protocolPriorities,
    treatmentRoute,
  };
}