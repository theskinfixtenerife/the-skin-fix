"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Droplet, Bandage, CircleDot, Sparkles } from "lucide-react";
import Link from "next/link";
export default function ProtocoloPage() {
  const [showPrices, setShowPrices] = useState(false);
const [showInfo, setShowInfo] = useState(false);
  const protocolos = [
    
    {
      number: "01",
      title: "Acné y piel congestionada",
      description:
        "Para pieles que presentan brotes recurrentes, inflamación o tendencia a la obstrucción.",
    },
    {
      number: "02",
      title: "Rosácea y sensibilidad",
      description:
        "Para pieles reactivas que experimentan enrojecimiento, ardor o intolerancia frecuente.",
    },
    {
      number: "03",
      title: "Hidratación y luminosidad",
      description:
        "Para pieles apagadas, deshidratadas o con sensación constante de tirantez.",
    },
    {
      number: "04",
      title: "Textura y poros",
      description:
        "Para pieles que presentan irregularidades visibles en la superficie cutánea.",
    },
    {
      number: "05",
      title: "Manchas y pigmentación",
      description:
        "Para pieles con alteraciones del tono o pigmentación desigual.",
    },
    {
      number: "06",
      title: "Cicatrices y marcas",
      description:
        "Para pieles que presentan secuelas visibles tras procesos inflamatorios.",
    },
    {
      number: "07",
      title: "Elasticidad y regeneración",
      description:
        "Para pieles que han perdido firmeza, densidad o capacidad de recuperación.",
    },
  ];

  return (
    
    <main className="relative min-h-screen overflow-hidden bg-[#FFFEFC] px-4 pb-20 pt-6 text-[#2C2725] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E6259] transition-colors hover:text-[#A86F56]"
        >
          <span aria-hidden="true">←</span> Inicio
        </Link>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid overflow-hidden rounded-[20px] bg-[#FAF8F5] lg:min-h-[500px] lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="flex flex-col items-start justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A86F56]">
              The Skin Fix · Recuperación cutánea
            </p>
            <h1
              className="max-w-[640px] text-[clamp(2.8rem,6vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-[#2C2725]"
              style={{ fontFamily: "Satoshi" }}
            >
              Protocolos
              <span className="mt-1 block text-[#A86F56]">para cada piel</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.7] text-[#5F5852] sm:text-[17px]">
              Cada protocolo parte de las necesidades de tu piel. Explora nuestras áreas de trabajo y encuentra un punto de partida para tu proceso de recuperación.
            </p>
            <button
              onClick={() => document.getElementById("protocolos")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#A86F56] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(90,55,35,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#8F5C45] hover:shadow-[0_14px_30px_rgba(90,55,35,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8F5C45]"
            >
              Explorar protocolos <span aria-hidden="true">↓</span>
            </button>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
            <Image
              src="/CHICABELLA.webp"
              alt="Retrato de una mujer con la piel luminosa"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2725]/20 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#FAF8F5]/10" />
          </div>
        </motion.section>

        <section id="protocolos" className="scroll-mt-8 pt-16 sm:pt-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A86F56]">
                Elige por necesidad
              </p>
              <h2 className="text-[32px] font-bold leading-[1] tracking-[-0.045em] text-[#2C2725] sm:text-[40px]" style={{ fontFamily: "Satoshi" }}>
                ¿Qué te gustaría trabajar?
              </h2>
            </div>
            <p className="max-w-[430px] text-[14px] leading-[1.6] text-[#6A6058] sm:text-right">
              Consulta cada protocolo. Si no tienes claro cuál elegir, puedes empezar con una valoración guiada.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {protocolos.map((item) => (
              <a
                key={item.number}
                href={`https://wa.me/34618820842?text=${encodeURIComponent(
                  `Me gustaría probar el protocolo "${item.title}". ¿Cuándo tendrías una cita disponible?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[250px] flex-col rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-6 shadow-[0_6px_22px_rgba(82,62,48,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A58F] hover:shadow-[0_16px_34px_rgba(82,62,48,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A86F56] sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-[#A86F56]">PROTOCOLO {item.number}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DED5] text-[16px] text-[#A86F56] transition-all group-hover:border-[#A86F56] group-hover:bg-[#A86F56] group-hover:text-white" aria-hidden="true">↗</span>
                </div>
                <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#2C2725]" style={{ fontFamily: "Satoshi" }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#665D56]">
                  {item.description}
                </p>
                <span className="mt-auto border-t border-[#EEE7E1] pt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8F5C45]">
                  Consultar este protocolo
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-6 rounded-[18px] bg-[#2C2725] p-6 text-[#FFF9ED] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#D7A58D]">PLAN GUIADO</p>
              <h3 className="text-[24px] font-semibold tracking-[-0.035em] sm:text-[28px]" style={{ fontFamily: "Satoshi" }}>
                ¿No sabes por dónde empezar?
              </h3>
              <p className="mt-2 max-w-[650px] text-[14px] leading-[1.6] text-[#F1E8E1]">
                Estudiamos tu caso y orientamos el punto de partida según el estado y las necesidades de tu piel.
              </p>
            </div>
            <a
              href="https://wa.me/34618820842?text=Hola,%20quiero%20reservar%20mi%20diagnóstico.%20¿Qué%20días%20tienes%20disponibles?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#A86F56] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#B97D62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#D7A58D]"
            >
              Reservar valoración
            </a>
          </div>
        </section>

        <section id="precios" className="mt-16 scroll-mt-8 rounded-[18px] border border-[#E8DED5] bg-[#FAF8F5] p-6 sm:mt-20 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A86F56]">Transparencia y continuidad</p>
              <h2 className="text-[26px] font-bold tracking-[-0.035em] text-[#2C2725] sm:text-[30px]" style={{ fontFamily: "Satoshi" }}>
                Consulta precios y opciones
              </h2>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#665D56]">Revisa las tarifas y las opciones para continuar tu recuperación.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                aria-expanded={showPrices}
                onClick={() => setShowPrices(!showPrices)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#A86F56] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8F5C45] transition-colors hover:bg-[#A86F56] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A86F56]"
              >
                {showPrices ? "Ocultar tarifas" : "Consultar tarifas"}
              </button>
              <button
                type="button"
                onClick={() => setShowInfo(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6A6058] transition-colors hover:text-[#8F5C45]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C9A58F] text-[12px]">i</span>
                Información
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${showPrices ? "mt-7 max-h-[900px] opacity-100" : "max-h-0 opacity-0"}`}
            aria-hidden={!showPrices}
          >
            <Image
              src="/nuevosprecios.png"
              alt="Tarifas de los protocolos y opciones de continuidad"
              width={1774}
              height={887}
              className="mx-auto w-full max-w-[900px] rounded-[12px]"
            />
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="mb-7">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A86F56]">Continuidad del proceso</p>
            <h2 className="text-[28px] font-bold tracking-[-0.04em] text-[#2C2725] sm:text-[34px]" style={{ fontFamily: "Satoshi" }}>
              Continúa tu recuperación
            </h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              { sessions: "3 sesiones", discount: "−10%" },
              { sessions: "5 sesiones", discount: "−20%" },
              { sessions: "10 sesiones", discount: "−30%" },
            ].map((item) => (
              <motion.div
                key={item.sessions}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-6 sm:p-7"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6A6058]">{item.sessions}</p>
                <p className="mt-4 text-[56px] font-semibold leading-none tracking-[-0.06em] text-[#A86F56]" style={{ fontFamily: "Satoshi" }}>{item.discount}</p>
                <div className="mt-5 h-px bg-[#E8DED5]" />
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-4 text-[13px] text-[#6A6058]">Descuentos disponibles para cualquier protocolo.</p>
        </section>

        {showInfo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2725]/55 p-4 backdrop-blur-sm" onClick={() => setShowInfo(false)}>
            <div className="max-h-[88vh] w-full max-w-[560px] overflow-y-auto rounded-[18px] border border-[#E8DED5] bg-[#FFFEFC] p-6 shadow-[0_24px_70px_rgba(44,39,37,0.22)] sm:p-8" onClick={(event) => event.stopPropagation()}>
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A86F56]">Antes de empezar</p>
                  <h3 className="text-[21px] font-semibold tracking-[-0.025em] text-[#2C2725]" style={{ fontFamily: "Satoshi" }}>Información importante</h3>
                </div>
                <button type="button" onClick={() => setShowInfo(false)} aria-label="Cerrar información" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E8DED5] text-[#6A6058] transition-colors hover:bg-[#FAF8F5]">×</button>
              </div>
              <div className="space-y-4 text-[14px] leading-[1.65] text-[#5F5852]">
                <p>• El PLAN LIBRE está destinado a usuarios que deciden realizar el protocolo sin asesoramiento ni seguimiento profesional continuado.</p>
                <p>• Al contratar el PLAN LIBRE, el usuario asume la responsabilidad de seguir las indicaciones proporcionadas y de comunicar cualquier circunstancia que pueda afectar a la seguridad del tratamiento.</p>
                <p>• the<strong>skin</strong>fix™ no podrá responsabilizarse de los resultados obtenidos con el PLAN LIBRE ni de posibles reacciones derivadas del incumplimiento de las recomendaciones facilitadas o de la ausencia de diagnóstico o seguimiento profesional.</p>
                <p>• El protocolo recomendado se determinará durante el PLAN GUIADO o en the<strong>skin</strong>fix™<strong>CLUB</strong>.</p>
                <p>• El número de sesiones puede variar según las necesidades de cada caso.</p>
                <p>• La recomendación profesional podrá actualizarse según la evolución de la piel.</p>
              </div>
            </div>
          </div>
        )}
     

{/* TRATAMIENTOS CLÍNICO-TERAPÉUTICOS */}

<section className="mt-16 rounded-[18px] bg-[#FAF8F5] p-6 sm:mt-20 sm:p-10">
  <div className="mx-auto max-w-5xl">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
      className="mb-8 max-w-2xl"
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A86F56]">Otras áreas de cuidado</p>
      <h2 className="text-[32px] font-bold leading-[1] tracking-[-0.045em] text-[#2C2725] sm:text-[40px]" style={{ fontFamily: "Satoshi" }}>
        Tratamientos terapéuticos
      </h2>
    </motion.div>

    <div className="grid gap-4 md:grid-cols-2">

      {[
        {
          title: "DLM",
          subtitle: "Drenaje Linfático Manual",
          text: "Favorece la circulación linfática y ayuda a reducir inflamación y retención de líquidos cuando existe una indicación terapéutica.",
          tag: "Recuperación · Inflamación",
          icon: Waves
        },
        {
          title: "DLMP",
          subtitle: "Drenaje Linfático Postquirúrgico",
          text: "Acompaña la recuperación tras procedimientos quirúrgicos favoreciendo una evolución más controlada del tejido.",
          tag: "Postoperatorio",
          icon: Droplet
        },
        {
          title: "Extracción de Milium",
          subtitle: "",
          text: "Eliminación precisa de pequeños quistes de queratina mediante una técnica controlada.",
          tag: "Precisión clínica",
          icon: Sparkles
        },
        {
          title: "Reducción de Acrocordones",
          subtitle: "",
          text: "Eliminación segura de pequeñas lesiones cutáneas cuando está clínicamente indicado.",
          tag: "Lesiones benignas",
          icon: CircleDot
        },
        {
          title: "Kinesio Facial",
          subtitle: "",
          text: "Vendaje terapéutico que acompaña la recuperación ayudando a modular tensión e inflamación.",
          tag: "Recuperación muscular",
          icon: Bandage
        },
        {
          title: "Face Cupping",
          subtitle: "",
          text: "Técnica manual orientada a estimular la circulación y favorecer el drenaje tisular.",
          tag: "Estimulación tisular",
          icon: CircleDot
        }
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.05 }}
            className="group rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A58F] hover:shadow-[0_14px_30px_rgba(82,62,48,0.08)] sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E7DF] text-[#A86F56]">
                <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8F5C45]">{item.tag}</span>
            </div>

            <h4
              className="text-[25px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#2C2725]"
              style={{ fontFamily: "Satoshi" }}
            >
              {item.title}
            </h4>

            {item.subtitle && (
              <p
                className="mt-2 text-[14px] font-medium text-[#6A6058]"
                style={{ fontFamily: "Satoshi" }}
              >
                {item.subtitle}
              </p>
            )}

            <p
              className="mt-4 text-[14px] leading-[1.65] text-[#5F5852]"
              style={{ fontFamily: "Satoshi" }}
            >
              {item.text}
            </p>
          </motion.div>
        );
      })}
    </div>

  </div>
</section>

{/* FOOTER CTA */}

<section className="mt-10 mb-4">
  <div className="grid gap-6 rounded-[18px] bg-[#E9DCCF] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
    <div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8F5C45]">The Skin Fix</p>
      <h2 className="text-[25px] font-semibold tracking-[-0.035em] text-[#2C2725] sm:text-[30px]" style={{ fontFamily: "Satoshi" }}>
        Da el siguiente paso en tu recuperación
      </h2>
      <p className="mt-2 text-[14px] leading-[1.6] text-[#5F5852]">Consulta las tarifas y elige cómo quieres continuar.</p>
    </div>
    <button
      type="button"
      onClick={() => {
        setShowPrices(true);
        document.getElementById("precios")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#A86F56] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(90,55,35,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#8F5C45] hover:shadow-[0_14px_30px_rgba(90,55,35,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8F5C45]"
    >
      Consultar tarifas
    </button>
  </div>

  <div className="mt-8 flex flex-col gap-6 border-t border-[#E8DED5] pt-6 sm:flex-row sm:items-center sm:justify-between">

        <Image
           src="/tsf-logo.png"
           alt="the skin fix"
           width={140}
           height={32}
           className="h-[28px] w-auto opacity-90 object-contain"
         />

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold tracking-[0.14em] text-[#6A6058] sm:gap-8">

          <a
            href="/diagnostico"
            className="uppercase tracking-[0.18em] hover:opacity-70 transition"
          >
            DIAGNÓSTICO
          </a>

          <a
            href="/protocolo"
            className="uppercase tracking-[0.18em] text-[#000000] hover:opacity-70 transition"
          >
            PROTOCOLO
          </a>

          <a
            href="/seguimiento"
            className="uppercase tracking-[0.18em] hover:opacity-70 transition"
          >
            SEGUIMIENTO
          </a>

        </div>

      </div>
    </section>
      </div>
    </main>
  );
}
