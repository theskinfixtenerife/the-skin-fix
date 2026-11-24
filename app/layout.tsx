import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE SKIN FIX · Centro de Recuperación Cutánea | Tenerife",
  description:
    "Primer centro de recuperación cutánea en Tenerife. Diagnóstico biométrico celular, corneometría biofísica y protocolos personalizados para recuperar el equilibrio de tu piel sin tratamientos agresivos.",
  icons: {
    icon: "/newfavicon.png",
  },
  openGraph: {
    title: "THE SKIN FIX · Centro de Recuperación Cutánea | Tenerife",
    description:
      "Diagnóstico biométrico celular y protocolos personalizados en cabina privada en Tenerife.",
    url: "https://theskinfix.es",
    siteName: "THE SKIN FIX",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">
        {children}
        
      </body>
    </html>
  );
}