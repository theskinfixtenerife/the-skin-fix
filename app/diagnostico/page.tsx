"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DiagnosticoPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Floating Chat Box State
  const [isMinimized, setIsMinimized] = useState(true);
  const [chatMessage, setChatMessage] = useState("");

  // Estado del test interactivo rápido (6 preguntas ágiles)
  const [testStep, setTestStep] = useState(0); // 0: intro, 1-6: preguntas, 7: resultado
  const [testAnswers, setTestAnswers] = useState({
    motivo: "",
    tiempo: "",
    inflamacion: "",
    barrera: "",
    lifestyle: [] as string[],
    ubicacion: "",
  });

  useEffect(() => {
    document.title = "Diagnóstico Biométrico Cutáneo · THE SKIN FIX";
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTest = () => {
    testRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectAnswer = (key: string, value: string, next: number) => {
    setTestAnswers((prev) => ({ ...prev, [key]: value }));
    setTestStep(next);
  };

  const handleToggleLifestyle = (val: string) => {
    setTestAnswers((prev) => {
      let list = [...prev.lifestyle];
      if (val === "ninguno") {
        list = list.includes("ninguno") ? [] : ["ninguno"];
      } else {
        list = list.filter((item) => item !== "ninguno");
        if (list.includes(val)) {
          list = list.filter((item) => item !== val);
        } else {
          list.push(val);
        }
      }
      return { ...prev, lifestyle: list };
    });
  };

  const getDiagnosticResult = () => {
    const a = testAnswers;
    let protocol = "Protocolo 1 · Descongestión & Acné";
    let layer = "Capa 1: Superficie y Calma";
    let desc = "Limpieza folicular profunda y regulación sebácea previa a tratamientos intensivos.";
    let alertText = null;

    if (a.inflamacion === "si") {
      if (a.motivo === "cicatrices" || a.motivo === "manchas" || a.motivo === "elasticidad") {
        alertText =
          "Tu piel presenta inflamación o ardor activo. Para evitar hiperpigmentación y rebotes, estabilizamos primero la barrera y luego tratamos tu objetivo con total seguridad.";
      }
      if (a.motivo === "rosacea") {
        protocol = "Protocolo 2 · Rosácea & Reactividad";
        layer = "Capa 1: Reparación de Barrera";
        desc = "Alivio del eritema, refuerzo del manto lipídico y reducción de la sensibilidad.";
      } else {
        protocol = "Protocolo 1 · Calma & Descongestión";
        layer = "Capa 1: Calma Celular";
        desc = "Apagar la irritación interna y equilibrar el tejido antes de estimular capas profundas.";
      }
    } else {
      switch (a.motivo) {
        case "acne":
          protocol = "Protocolo 1 · Descongestión & Acné";
          layer = "Capa 1: Superficie";
          desc = "Regulación sebácea y purificación del poro sin deshidratar.";
          break;
        case "rosacea":
          protocol = "Protocolo 2 · Rosácea & Calma";
          layer = "Capa 1: Escudo Cutáneo";
          desc = "Fortalecimiento de barrera y control de la reactividad vascular.";
          break;
        case "hidratacion":
          protocol = "Protocolo 3 · Hidratación Celular";
          layer = "Capa 1: Reserva Hídrica";
          desc = "Recarga hídrica en estrato córneo y recuperación de luz biológica.";
          break;
        case "textura":
          protocol = "Protocolo 4 · Textura & Poros";
          layer = "Capa 2: Alisado Epidérmico";
          desc = "Afinamiento suave del relieve y contracción visible del poro.";
          break;
        case "manchas":
          protocol = "Protocolo 5 · Manchas & Tono";
          layer = "Capa 2: Pigmentación";
          desc = "Regulación de melanina y unificación del tono desde la raíz.";
          break;
        case "cicatrices":
          protocol = "Protocolo 6 · Marcas & Cicatrices";
          layer = "Capa 3: Remodelado Dérmico";
          desc = "Inducción de colágeno nuevo para suavizar marcas residuales.";
          break;
        case "elasticidad":
          protocol = "Protocolo 7 · Firmeza & Regeneración";
          layer = "Capa 3: Matriz Dérmica";
          desc = "Reactivación de fibroblastos y redensificación de tejido.";
          break;
      }
    }

    return { protocol, layer, desc, alertText };
  };

  const result = getDiagnosticResult();

  return (
    <div className="min-h-screen bg-white text-[#171412] font-sans overflow-x-hidden selection:bg-[#B66A5E] selection:text-white relative">
      
      {/* MARCA DE AGUA UNIFICADA EN EL FONDO (ISOTIPO/LOGO THE SKIN FIX) */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden opacity-[0.025]">
        <Image
          src="/tsf-logo.png"
          alt=""
          width={1000}
          height={300}
          className="w-[85vw] max-w-[900px] h-auto select-none"
        />
      </div>

      {/* ========================================================= */}
      {/* 1. HEADER LIMPIO Y ELEGANTE (SIN TICKER SATURADO)         */}
      {/* ========================================================= */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-[#EAE3DC] h-[70px] md:h-[80px] px-4 sm:px-8 md:px-16 flex items-center justify-between">
        
        {/* LOGO NUEVO SIN FONDO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/tsf-logo.png"
            alt="the skin fix"
            width={160}
            height={36}
            className="h-[24px] sm:h-[30px] md:h-[34px] w-auto object-contain"
            priority
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center font-bold gap-8 text-[15px] tracking-[0.14em] text-[#000000]">
          <Link
            href="/"
            className="transition-all duration-300 hover:text-[#8E443A] hover:scale-105 active:scale-95"
          >
            Inicio
          </Link>
          <Link
            href="/diagnostico"
            className="text-[#8E443A] border-b-2 border-[#8E443A] pb-1"
          >
            Diagnóstico
          </Link>
          <Link
            href="/protocolo"
            className="transition-all duration-300 hover:text-[#8E443A] hover:scale-105 active:scale-95"
          >
            Protocolo
          </Link>
          <Link
            href="/seguimiento"
            className="transition-all duration-300 hover:text-[#8E443A] hover:scale-105 active:scale-95"
          >
            Seguimiento
          </Link>
        </nav>

        {/* ACCIÓN CABECERA */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTest}
            className="hidden sm:inline-block text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-[6px] border border-[#2C2725] text-[#2C2725] font-bold hover:bg-[#2C2725] hover:text-white transition-all shadow-sm"
          >
            Test Online (2 min)
          </button>

          {/* Menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-[6px] border border-[#D9D2CA] bg-white text-[#2C2725] shadow-sm"
            aria-label="Abrir menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* DRAWER MENÚ MÓVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-[70px] left-3 right-3 z-40 bg-[#FAF8F5] border border-[#D9D2CA] rounded-[8px] p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-4 text-center font-bold text-[14px] tracking-[0.2em] uppercase">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#2C2725] hover:text-[#8E443A] border-b border-[#DDD6CE]"
              >
                Inicio
              </Link>
              <Link
                href="/diagnostico"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#8E443A] font-black border-b border-[#DDD6CE]"
              >
                Diagnóstico
              </Link>
              <Link
                href="/protocolo"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#2C2725] hover:text-[#8E443A] border-b border-[#DDD6CE]"
              >
                Protocolo
              </Link>
              <Link
                href="/seguimiento"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#2C2725] hover:text-[#8E443A] border-b border-[#DDD6CE]"
              >
                Seguimiento
              </Link>
              <a
                href="https://wa.me/34618820842?text=Hola%20Ana,%20quiero%20reservar%20mi%20diagn%C3%B3stico%20biom%C3%A9trico%20en%20cabina%20(20%E2%82%AC)."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-3 rounded-[6px] bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)] text-white text-[11px] tracking-[0.25em]"
              >
                Reservar Cita (20€)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 2. HERO: COHERENTE CON EL ESTILO CINEMATOGRÁFICO HOME     */}
      {/* ========================================================= */}
      <section className="relative px-3 sm:px-6 md:px-16 pt-24 md:pt-32 pb-8 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="relative min-h-[480px] sm:min-h-[540px] md:min-h-[580px] overflow-hidden rounded-[6px] border border-[#D9D2CA] shadow-xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/diagnostico/cosmos_263634419.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px] p-6 sm:p-10 md:p-14 text-white">
              
              <div>
                <span className="inline-block px-3 py-1 rounded-[4px] bg-white/15 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FAF8F5]">
                  UNIDAD DE RECUPERACIÓN CUTÁNEA
                </span>
              </div>

              <div className="max-w-2xl">
                <h1
                  className="text-3xl sm:text-5xl md:text-[62px] leading-[0.95] tracking-[-0.04em] text-white uppercase font-bold"
                  style={{ fontFamily: "satoshi" }}
                >
                  DIAGNÓSTICO<br />BIOMÉTRICO
                </h1>

                <p className="mt-4 text-xs sm:text-sm md:text-[16px] text-[#EDE6DF] leading-relaxed font-light max-w-xl">
                  Antes de prescribir cualquier protocolo, medimos el daño celular y los niveles exactos de hidratación y sebo. Diagnóstico clínico certero, sin tratamientos a ciegas.
                </p>

                <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="https://wa.me/34618820842?text=Hola%20Ana,%20quiero%20reservar%20mi%20diagn%C3%B3stico%20en%20cabina%20(20%E2%82%AC)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[6px] bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)] hover:bg-[#A6564D] text-white shadow-[0_12px_40px_rgba(120,55,45,0.28)] px-7 py-3.5 text-[11px] sm:text-[12px] uppercase tracking-[0.25em] font-semibold transition-all text-center"
                  >
                    RESERVAR CONSULTA (20€)
                  </a>

                  <button
                    onClick={scrollToTest}
                    className="rounded-[6px] bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/35 text-white px-6 py-3.5 text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-semibold transition-all text-center"
                  >
                    HACER TEST (2 MIN)
                  </button>
                </div>
              </div>

              <div className="text-[10px] sm:text-[11px] text-[#CFC5BC] tracking-[0.18em] uppercase flex items-center gap-2 pt-3">
                <span className="w-2 h-2 rounded-full bg-[#6DDC5A] shadow-[0_0_8px_rgba(109,220,90,0.8)]"></span>
                Consulta en cabina (Tenerife) u online · Sin límite de tiempo
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. EL MÉTODO EN 3 PASOS: CONCISO, SIN TEXTO SATURADO      */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#DDD6CE] z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
          
          <div className="mb-10 md:mb-14">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl leading-[0.95] tracking-[-0.04em] text-[#2C2725] uppercase font-bold"
              style={{ fontFamily: "satoshi" }}
            >
              CÓMO EVALUAMOS TU PIEL
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-[15px] text-[#5F5852] max-w-lg leading-relaxed">
              Software de daño celular + sensor biofísico de contacto para obtener datos objetivos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Paso 1 */}
            <article className="rounded-[6px] bg-[#F6F2EF] border border-white/60 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#8E443A] uppercase block mb-2">
                  01 / ESCANEO
                </span>
                <h3 className="text-[18px] sm:text-[20px] tracking-[-0.02em] font-bold text-[#2C2725] uppercase mb-2">
                  Software Biométrico
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                  Mide el daño celular y los bloqueos que impiden a tu piel responder. Determina qué capa necesita atención prioritaria.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E5DDD4] text-[9px] tracking-[0.2em] uppercase text-[#897062] font-semibold">
                Algoritmo propio exclusivo
              </div>
            </article>

            {/* Paso 2 */}
            <article className="rounded-[6px] bg-[#F6F2EF] border border-white/60 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#8E443A] uppercase block mb-2">
                  02 / CORNEOMETRÍA
                </span>
                <h3 className="text-[18px] sm:text-[20px] tracking-[-0.02em] font-bold text-[#2C2725] uppercase mb-2">
                  Sensor de Agua & Grasa
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                  Medición biofísica en cabina. Conocer los porcentajes exactos evita pautar tratamientos que provoquen irritación o rebote.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E5DDD4] text-[9px] tracking-[0.2em] uppercase text-[#897062] font-semibold">
                Dato instrumental exacto
              </div>
            </article>

            {/* Paso 3 */}
            <article className="rounded-[6px] bg-[#F6F2EF] border border-white/60 shadow-sm p-6 sm:p-8 flex flex-col justify-between sm:col-span-2 md:col-span-1">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#8E443A] uppercase block mb-2">
                  03 / ESTRATEGIA
                </span>
                <h3 className="text-[18px] sm:text-[20px] tracking-[-0.02em] font-bold text-[#2C2725] uppercase mb-2">
                  Secuencia & Sesiones
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                  Te entregamos tu ruta biológica por capas con la estimación del número mínimo de sesiones para ver mejoría visible.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E5DDD4] text-[9px] tracking-[0.2em] uppercase text-[#897062] font-semibold">
                Plan claro y honesto
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. EXPERIENCIA VISUAL EN CABINA: FOTOS Y ESCÁNER          */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-8 md:px-16 border-t border-[#DDD6CE] z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            
            {/* Foto 1: Consulta sin prisas */}
            <div className="relative rounded-[6px] overflow-hidden border border-[#D9D2CA] shadow-md min-h-[360px] sm:min-h-[420px]">
              <Image
                src="/diagnostico/conversacion.png"
                alt="Consulta personalizada en cabina"
                width={700}
                height={880}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#EDE6DF] block mb-1">
                  CONSULTA INDIVIDUAL
                </span>
                <h3 className="text-xl sm:text-2xl uppercase font-bold text-white mb-1.5 leading-tight">
                  La cita dura lo que tu piel necesite.
                </h3>
                <p className="text-xs sm:text-[13px] text-[#DDD3C9] font-light leading-relaxed max-w-sm">
                  Sin prisas ni diagnósticos de 5 minutos. Te explicamos los resultados de forma clara y transparente.
                </p>
              </div>
            </div>

            {/* Foto 2: Escáner facial con láser */}
            <div className="relative rounded-[6px] overflow-hidden border border-[#D9D2CA] shadow-md min-h-[360px] sm:min-h-[420px]">
              <img
                src="/diagnostico/diagnostico.png"
                alt="Escaneo biométrico"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute top-0 bottom-0 w-[2px]"
                style={{
                  background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.95), #B66A5E, transparent)",
                  boxShadow: "0 0 16px rgba(182, 106, 94, 0.9)",
                }}
                initial={{ left: "-5%" }}
                animate={{ left: "105%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white pointer-events-none">
                <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#EDE6DF] block mb-1">
                  BIOMETRÍA CUTÁNEA
                </span>
                <h3 className="text-xl sm:text-2xl uppercase font-bold text-white mb-1.5 leading-tight">
                  Patrón celular, no suposiciones.
                </h3>
                <p className="text-xs sm:text-[13px] text-[#DDD3C9] font-light leading-relaxed max-w-sm">
                  Desciframos qué está impidiendo a tu piel regenerarse antes de aplicar cualquier tratamiento.
                </p>
              </div>
            </div>

          </div>

          {/* Comparativa concisa en 2 tarjetas */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 sm:p-5 rounded-[6px] bg-[#F6F2EF] border border-[#DDD6CE] text-xs text-[#5F5852] leading-relaxed">
              <span className="font-bold text-[#8E443A] uppercase tracking-[0.18em] text-[10px] block mb-1">
                ✕ ESTÉTICA CONVENCIONAL
              </span>
              Diagnóstico superficial a simple vista, venta de bonos genéricos y tratamientos agresivos que irritan la piel.
            </div>
            <div className="p-4 sm:p-5 rounded-[6px] bg-[#FAF8F5] border border-[#2C2725] shadow-sm text-xs text-[#2C2725] leading-relaxed">
              <span className="font-bold text-[#2C2725] uppercase tracking-[0.18em] text-[10px] block mb-1">
                ✓ MÉTODO THE SKIN FIX
              </span>
              Medición instrumental de agua, sebo y daño celular. Plan ordenado por capas biológicas con el mínimo de sesiones.
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TEST INTERACTIVO RÁPIDO (AUTOTRIAJE EN 2 MINUTOS)      */}
      {/* ========================================================= */}
      <section ref={testRef} id="test-interactivo" className="py-16 md:py-24 bg-[#FAF8F5] px-4 sm:px-8 border-t border-[#DDD6CE] z-10 relative">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8E443A] font-bold block mb-1.5">
              AUTOEVALUACIÓN
            </span>
            <h2
              className="text-2xl sm:text-4xl leading-[0.95] tracking-[-0.04em] text-[#2C2725] uppercase font-bold"
              style={{ fontFamily: "satoshi" }}
            >
              TEST BIOLÓGICO RÁPIDO
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6863] mt-2 font-light">
              6 preguntas para conocer tu punto de partida.
            </p>
          </div>

          <div className="bg-white rounded-[6px] border border-[#D9D2CA] p-5 sm:p-8 shadow-lg">
            
            {/* Pantalla 0: Inicio */}
            {testStep === 0 && (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#F6F2EF] text-[#8E443A] flex items-center justify-center mx-auto mb-4 border border-[#DDD6CE]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-2">
                  Descubre qué necesita tu piel
                </h3>
                <p className="text-xs sm:text-sm text-[#5F5852] leading-relaxed max-w-sm mx-auto mb-6">
                  Identifica en 2 minutos si tu piel requiere estabilización de barrera o si está lista para regeneración profunda.
                </p>
                <button
                  onClick={() => setTestStep(1)}
                  className="w-full sm:w-auto rounded-[6px] bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)] hover:bg-[#A6564D] text-white shadow-md px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all"
                >
                  INICIAR TEST (2 MIN)
                </button>
              </div>
            )}

            {/* Pregunta 1 */}
            {testStep === 1 && (
              <div>
                <span className="text-[9px] text-[#8E443A] uppercase tracking-[0.25em] font-bold block mb-1">1 / 6 · PRIORIDAD</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-4">
                  ¿Cuál es tu principal preocupación actual?
                </h3>
                <div className="space-y-2">
                  {[
                    { key: "acne", label: "Acné e impurezas recurrentes" },
                    { key: "rosacea", label: "Rojez, ardor o reactividad" },
                    { key: "hidratacion", label: "Piel apagada y tirante" },
                    { key: "textura", label: "Poros abiertos y textura irregular" },
                    { key: "manchas", label: "Manchas y tono desigual" },
                    { key: "cicatrices", label: "Marcas o cicatrices residuales" },
                    { key: "elasticidad", label: "Falta de firmeza o líneas" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleSelectAnswer("motivo", item.key, 2)}
                      className="w-full text-left p-3.5 rounded-[6px] border border-[#DDD6CE] bg-[#FAF8F5] hover:border-[#8E443A] hover:bg-white transition-all text-xs sm:text-sm font-medium text-[#2C2725] flex items-center justify-between shadow-sm"
                    >
                      <span>{item.label}</span>
                      <span className="text-[#8E443A] font-bold">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pregunta 2 */}
            {testStep === 2 && (
              <div>
                <span className="text-[9px] text-[#8E443A] uppercase tracking-[0.25em] font-bold block mb-1">2 / 6 · TIEMPO</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-4">
                  ¿Cuánto tiempo llevas con esta situación?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { key: "reciente", label: "Menos de 6 meses (reciente)" },
                    { key: "medio", label: "Entre 6 meses y 2 años" },
                    { key: "cronico", label: "Más de 3 años / crónico" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleSelectAnswer("tiempo", item.key, 3)}
                      className="w-full text-left p-3.5 rounded-[6px] border border-[#DDD6CE] bg-[#FAF8F5] hover:border-[#8E443A] hover:bg-white transition-all text-xs sm:text-sm font-medium text-[#2C2725] shadow-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pregunta 3: Filtro de Seguridad */}
            {testStep === 3 && (
              <div>
                <span className="text-[9px] text-[#8E443A] uppercase tracking-[0.25em] font-bold block mb-1">3 / 6 · SEGURIDAD BIOLÓGICA</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-4">
                  ¿Sientes actualmente ardor o inflamación activa?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { key: "si", label: "Sí, noto ardor o brotes molestos" },
                    { key: "a_veces", label: "A veces, es muy reactiva" },
                    { key: "no", label: "No, mi piel está en calma" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleSelectAnswer("inflamacion", item.key, 4)}
                      className="w-full text-left p-3.5 rounded-[6px] border border-[#DDD6CE] bg-[#FAF8F5] hover:border-[#8E443A] hover:bg-white transition-all text-xs sm:text-sm font-medium text-[#2C2725] shadow-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pregunta 4 */}
            {testStep === 4 && (
              <div>
                <span className="text-[9px] text-[#8E443A] uppercase tracking-[0.25em] font-bold block mb-1">4 / 6 · BARRERA</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-4">
                  ¿Cómo notas tu piel horas después de lavarla?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { key: "tirante", label: "Tirante y seca (pide crema)" },
                    { key: "grasa", label: "Grasa con brillos evidentes" },
                    { key: "mixta", label: "Mixta (zona T grasa, mejillas secas)" },
                    { key: "equilibrada", label: "Cómoda y en equilibrio" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleSelectAnswer("barrera", item.key, 5)}
                      className="w-full text-left p-3.5 rounded-[6px] border border-[#DDD6CE] bg-[#FAF8F5] hover:border-[#8E443A] hover:bg-white transition-all text-xs sm:text-sm font-medium text-[#2C2725] shadow-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pregunta 5 */}
            {testStep === 5 && (
              <div>
                <span className="text-[9px] text-[#8E443A] uppercase tracking-[0.25em] font-bold block mb-1">5 / 6 · FACTORES</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-4">
                  ¿Factores que influyen en tu piel?
                </h3>
                <div className="space-y-2 mb-4">
                  {[
                    { key: "estres", label: "Estrés y falta de descanso" },
                    { key: "alimentacion", label: "Alimentación" },
                    { key: "hormonas", label: "Ciclo hormonal" },
                    { key: "ninguno", label: "Sin relación evidente" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-3 p-3 rounded-[6px] border border-[#DDD6CE] bg-[#FAF8F5] hover:bg-white cursor-pointer text-xs sm:text-sm text-[#2C2725]"
                    >
                      <input
                        type="checkbox"
                        checked={testAnswers.lifestyle.includes(item.key)}
                        onChange={() => handleToggleLifestyle(item.key)}
                        className="w-4 h-4 rounded text-[#8E443A] focus:ring-[#8E443A]"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={() => setTestStep(6)}
                  className="w-full py-3.5 rounded-[6px] bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)] text-white text-[11px] uppercase tracking-[0.25em] font-semibold"
                >
                  CONTINUAR
                </button>
              </div>
            )}

            {/* Pregunta 6 */}
            {testStep === 6 && (
              <div>
                <span className="text-[9px] text-[#8E443A] uppercase tracking-[0.25em] font-bold block mb-1">6 / 6 · MODALIDAD</span>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#2C2725] mb-4">
                  ¿Modalidad preferida de consulta?
                </h3>
                <div className="space-y-2.5">
                  {[
                    { key: "tenerife", label: "Presencial en cabina privada (Tenerife)" },
                    { key: "online", label: "Consulta Online personalizada (Resto de España)" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleSelectAnswer("ubicacion", item.key, 7)}
                      className="w-full text-left p-3.5 rounded-[6px] border border-[#DDD6CE] bg-[#FAF8F5] hover:border-[#8E443A] hover:bg-white transition-all text-xs sm:text-sm font-medium text-[#2C2725] shadow-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pantalla 7: Resultado */}
            {testStep === 7 && (
              <div className="py-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8E443A] block mb-2">
                  RESULTADO PRELIMINAR
                </span>
                
                {result.alertText && (
                  <div className="mb-4 p-3.5 rounded-[6px] bg-amber-50 border border-amber-300 text-amber-900 text-xs leading-relaxed">
                    <strong>⚠️ Prioridad:</strong> {result.alertText}
                  </div>
                )}

                <div className="p-5 rounded-[6px] bg-[#FAF8F5] border border-[#DDD6CE] mb-5 shadow-sm">
                  <span className="text-[9px] uppercase font-bold text-[#8E443A] tracking-[0.2em] block mb-1">
                    {result.layer}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#2C2725] mb-1.5">
                    {result.protocol}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                    {result.desc}
                  </p>
                </div>

                <a
                  href={`https://wa.me/34618820842?text=Hola%20Ana,%20he%20realizado%20el%20test%20online%20en%20la%20web%20(Resultado:%20${encodeURIComponent(result.protocol)}).%20Quiero%20agendar%20mi%20diagn%C3%B3stico%20biom%C3%A9trico%20por%2020%E2%82%AC.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 rounded-[6px] bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)] hover:bg-[#A6564D] text-white text-[11px] uppercase tracking-[0.25em] font-semibold transition-all shadow-md"
                >
                  AGENDAR DIAGNÓSTICO EN CABINA (20€)
                </a>

                <div className="text-center mt-3">
                  <button
                    onClick={() => {
                      setTestStep(0);
                      setTestAnswers({ motivo: "", tiempo: "", inflamacion: "", barrera: "", lifestyle: [], ubicacion: "" });
                    }}
                    className="text-[10px] text-[#897062] underline hover:text-[#2C2725] tracking-wider uppercase"
                  >
                    Repetir test
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. ENTREGABLES: 3 TARJETAS LIMPIAS                        */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-8 md:px-16 border-t border-[#DDD6CE] z-10 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl leading-[0.95] tracking-[-0.04em] text-[#2C2725] uppercase font-bold"
              style={{ fontFamily: "satoshi" }}
            >
              LO QUE RECIBES TRAS TU CITA
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5F5852] max-w-lg leading-relaxed">
              Claridad total desde el primer momento con un informe individualizado en tu móvil.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            
            <article className="rounded-[6px] bg-[#F6F2EF] border border-white/60 shadow-sm p-6 sm:p-7">
              <span className="text-[11px] font-mono font-bold text-[#8E443A] mb-2 block">01</span>
              <h3 className="text-base sm:text-lg font-bold text-[#2C2725] uppercase mb-1.5">
                Informe Digital
              </h3>
              <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                Documento en tu móvil con los valores exactos de hidratación, sebo y daño celular.
              </p>
            </article>

            <article className="rounded-[6px] bg-[#F6F2EF] border border-white/60 shadow-sm p-6 sm:p-7">
              <span className="text-[11px] font-mono font-bold text-[#8E443A] mb-2 block">02</span>
              <h3 className="text-base sm:text-lg font-bold text-[#2C2725] uppercase mb-1.5">
                Secuencia por Capas
              </h3>
              <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                La pauta biológica exacta de qué tratar primero para garantizar tolerancia y evitar rebotes.
              </p>
            </article>

            <article className="rounded-[6px] bg-[#F6F2EF] border border-white/60 shadow-sm p-6 sm:p-7">
              <span className="text-[11px] font-mono font-bold text-[#8E443A] mb-2 block">03</span>
              <h3 className="text-base sm:text-lg font-bold text-[#2C2725] uppercase mb-1.5">
                Sesiones Mínimas
              </h3>
              <p className="text-xs sm:text-[13px] text-[#5F5852] leading-relaxed">
                Estimación honesta y sin compromiso del número mínimo de sesiones para ver mejoría objetiva.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. TARIFA DE LANZAMIENTO (20€)                            */}
      {/* ========================================================= */}
      <section className="py-12 pb-20 px-3 sm:px-6 md:px-16 bg-[#FAF8F5] border-t border-[#DDD6CE] z-10 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="rounded-[6px] bg-[#2C2725] text-white p-6 sm:p-10 md:p-12 border border-[#3E3834] shadow-xl relative overflow-hidden">
            
            <div className="relative z-10 grid md:grid-cols-[140px_1fr] gap-6 items-center">
              
              <div className="text-center md:text-left">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C69178] font-bold block mb-1">
                  LANZAMIENTO
                </span>
                <div className="text-5xl sm:text-[58px] font-bold leading-none text-[#F2E8DD]">
                  20€
                </div>
                <span className="text-[11px] text-[#9E9085] line-through block mt-1.5">Tarifa regular 45€</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-2 tracking-tight">
                  Diagnóstico Facial Biométrico
                </h3>

                <p className="text-xs sm:text-[13px] text-[#DDD3C9] font-light leading-relaxed mb-5">
                  Incluye escaneo celular, medición con corneómetro en cabina y entrega personal del informe digital con tu secuencia de sesiones. Consulta presencial u online sin límite de tiempo.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/34618820842?text=Hola%20Ana,%20quiero%20reservar%20mi%20Diagn%C3%B3stico%20Biom%C3%A9trico%20en%20cabina%20(20%E2%82%AC)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[6px] bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)] hover:bg-[#A6564D] text-white shadow-md px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all text-center"
                  >
                    RESERVAR CONSULTA (20€)
                  </a>

                  <Link
                    href="/"
                    className="rounded-[6px] bg-white/10 hover:bg-white/15 text-white text-[11px] uppercase tracking-[0.2em] font-semibold px-6 py-3.5 text-center border border-white/15 transition-all"
                  >
                    VER PLANES EN INICIO
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER LIMPIO CON EL NUEVO LOGO                        */}
      {/* ========================================================= */}
      <footer className="relative rounded-[6px] mx-2 md:mx-16 mb-8 mt-4 overflow-hidden border border-[#EAE3DC] bg-[#FAF8F5]">
        <img
          src="/TSFtapiz1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 brightness-[1.02]"
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end justify-between p-6 sm:p-8 text-[#5E534A] gap-4">
          <div className="text-center sm:text-left">
            <Image
              src="/tsf-logo.png"
              alt="The Skin Fix"
              width={160}
              height={36}
              className="h-[30px] sm:h-[36px] w-auto mx-auto sm:mx-0 object-contain"
            />
            <p className="text-[#000000] tracking-[0.15em] text-[8px] mt-1.5 font-bold uppercase">
              RECUPERACIÓN CUTÁNEA · TENERIFE
            </p>
          </div>

          <div className="flex gap-6 text-xs text-[#633225] font-bold uppercase tracking-wider">
            <Link href="/terminos" className="hover:underline">TÉRMINOS</Link>
            <Link href="/privacidad" className="hover:underline">PRIVACIDAD</Link>
            <Link href="/cookies" className="hover:underline">COOKIES</Link>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 9. WIDGET DE CONSULTA DIRECTA ("ANA")                     */}
      {/* ========================================================= */}
      <div
        className={`
          fixed
          bottom-4
          right-4
          sm:bottom-6
          sm:right-6
          z-50
          w-[calc(100vw-32px)]
          sm:w-[320px]
          rounded-[20px]
          border
          border-white/25
          text-[#FFF8F0]
          backdrop-blur-xl
          p-5
          shadow-xl
          overflow-hidden
          transition-all
          duration-300
          ${isMinimized
            ? "bg-[#633225]/85 border border-white/40 h-[48px] rounded-[24px]"
            : "bg-[#633225]/90 h-auto"
          }
        `}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#6DDC5A] shadow-[0_0_10px_rgba(109,220,90,0.8)]" />
            <p className="text-[15px] font-bold text-[#ffffff]">
              Ana · THE SKIN FIX
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-lg text-[#FFF8F0] leading-none px-2"
            aria-label={isMinimized ? "Abrir consulta" : "Minimizar consulta"}
          >
            {isMinimized ? "+" : "−"}
          </button>
        </div>

        {!isMinimized && (
          <div>
            <p className="text-xs text-[#ffffff] leading-relaxed mb-3">
              ¿Tienes dudas sobre el diagnóstico o tu piel? Escríbeme directamente:
            </p>

            <textarea
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Cuéntame qué le ocurre a tu piel..."
              className="
                w-full
                h-[80px]
                rounded-xl
                bg-white/20
                backdrop-blur-md
                border
                border-white/40
                p-3
                text-xs
                text-white
                placeholder:text-white/60
                outline-none
                resize-none
              "
            />

            <button
              type="button"
              onClick={() => {
                const text = chatMessage.trim() || "Hola Ana, tengo dudas sobre el diagnóstico biométrico.";
                window.open(
                  `https://wa.me/34618820842?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
              className="
                mt-2.5
                w-full
                rounded-[12px]
                bg-[linear-gradient(180deg,#B66A5E_0%,#A05549_55%,#8E443A_100%)]
                py-2.5
                text-white
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                shadow-md
                hover:opacity-95
                transition-all
              "
            >
              ENVIAR POR WHATSAPP
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
