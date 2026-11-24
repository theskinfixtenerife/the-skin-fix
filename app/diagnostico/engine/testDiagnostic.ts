
import { runDiagnostic } from "./runDiagnostic";

const result = runDiagnostic({
  motivo: "acne",
  tiempo: "persistente",
  inflamacion: "frecuente",
  barrera: "alterada",
  lifestyle: ["estres"],
  ubicacion: "rostro",
});

console.log(result);
