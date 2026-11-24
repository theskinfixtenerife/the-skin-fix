import type { SkinConsultation } from "./consultationTypes";

export const initialConsultation: SkinConsultation = {
  personalData: {
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
  },

  consents: {
    privacyAccepted: false,
    dataProcessingAccepted: false,
    photographyAccepted: false,
    marketingAccepted: false,
  },

  medicalHistory: {
    allergies: "",
    medication: "",
    dermatologicalTreatments: "",
    knownConditions: "",
    pregnancyOrLactation: "",
    recentProcedures: "",
    previousReactions: "",
    activeLesions: "",
    postInflammatoryPigmentation: "",
    additionalNotes: "",
  },

  facialAssessment: {
    mainConcern: "",
    concernDuration: "",
    inflammation: "",
    sensitivity: "",
    barrierCondition: "",
    hydration: "",
    congestion: "",
    pigmentation: "",
    texture: "",
    scars: "",
    elasticity: "",
    currentRoutine: "",
    sunExposure: "",
    sunscreenUse: "",
    previousTreatments: "",
    desiredOutcome: "",
  },

  photos: {
    frontal: "",
    rightProfile: "",
    leftProfile: "",
  },

  professionalReview: {
    reviewed: false,
    confirmedProtocols: [],
    professionalNotes: "",
    reviewDate: "",
  },
};