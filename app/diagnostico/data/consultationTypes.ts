export type ConsentStatus = {
  privacyAccepted: boolean;
  dataProcessingAccepted: boolean;
  photographyAccepted: boolean;
  marketingAccepted: boolean;
};

export type PersonalData = {
  fullName: string;
  email: string;
  phone: string;
  birthDate?: string;
};

export type MedicalHistory = {
  allergies: string;
  medication: string;
  dermatologicalTreatments: string;
  knownConditions: string;
  pregnancyOrLactation: string;
  recentProcedures: string;
  previousReactions: string;
  activeLesions: string;
  postInflammatoryPigmentation: string;
  additionalNotes: string;
};

export type FacialAssessment = {
  mainConcern: string;
  concernDuration: string;
  inflammation: string;
  sensitivity: string;
  barrierCondition: string;
  hydration: string;
  congestion: string;
  pigmentation: string;
  texture: string;
  scars: string;
  elasticity: string;
  currentRoutine: string;
  sunExposure: string;
  sunscreenUse: string;
  previousTreatments: string;
  desiredOutcome: string;
};

export type FacialPhotos = {
  frontal?: string;
  rightProfile?: string;
  leftProfile?: string;
};

export type ProfessionalReview = {
  reviewed: boolean;
  confirmedProtocols: string[];
  professionalNotes: string;
  reviewDate?: string;
};

export type SkinConsultation = {
  personalData: PersonalData;
  consents: ConsentStatus;
  medicalHistory: MedicalHistory;
  facialAssessment: FacialAssessment;
  photos: FacialPhotos;
  professionalReview: ProfessionalReview;
};