"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"
import WelcomeGuide from "./components/WelcomeGuide"
import PlanesModal from "./PlanesModal";
import { Thasadith } from "next/font/google";
const thasadith = Thasadith({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TheSkinFixWebsite() {
  const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};
  const [mensaje, setMensaje] = useState("");
  const [open, setOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [cellsGlow, setCellsGlow] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const messages = [
  "PRIMER CENTRO DE RECUPERACIÓN CUTÁNEA DE ESPAÑA",
  "TU PIEL SABE RECUPERARSE SOLA. NOSOTROS LA AYUDAMOS",
  "RECUPERAMOS TU PIEL POR DENTRO, NO SOLO SU ASPECTO",
];
  const [paused, setPaused] = useState(false)
  const [showPrice1, setShowPrice1] = useState(false)
const [showPrice2, setShowPrice2] = useState(false)
const [showPrice3, setShowPrice3] = useState(false)
const [showTerms, setShowTerms] = useState(false)
const [isMinimized, setIsMinimized] = useState(true);
const [position, setPosition] = useState(0)
const [dragging, setDragging] = useState(false)
const [isOpen, setIsOpen] = useState(false);
const [positionGuiado, setPositionGuiado] = useState(0)
const [draggingGuiado, setDraggingGuiado] = useState(false)
const [protocolSelected, setProtocolSelected] = useState(false);
const [positionClub, setPositionClub] = useState(0)
const [draggingClub, setDraggingClub] = useState(false)
const [activeProtocol, setActiveProtocol] = useState(-1)
const [unlockedProtocol, setUnlockedProtocol] = useState(0);


// ---------- PLAN LIBRE ----------

const handleStart = () => {
  setDragging(true)
}

const handleMove = (e: any) => {
  if (!dragging) return

  const x = e.clientX || e.touches?.[0]?.clientX

  const slider = document.getElementById("plan-libre-slider")
  if (!slider) return

  const rect = slider.getBoundingClientRect()

  let newPosition = x - rect.left - 24

  if (newPosition < 0) newPosition = 0
  if (newPosition > 220) newPosition = 220

  setPosition(newPosition)
}

const triggerPlanLibre = () => {
  setPosition(220)
  setTimeout(() => {
    window.open(
      "https://wa.me/34618820842?text=Hola%20Ana,%20me%20interesa%20el%20PLAN%20LIBRE%20en%20cabina%20(Tenerife).%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
    setPosition(0)
  }, 220)
}

const handleEnd = () => {
  setDragging(false)

  if (position > 160) {
    window.open(
      "https://wa.me/34618820842?text=Hola%20Ana,%20me%20interesa%20el%20PLAN%20LIBRE%20en%20cabina%20(Tenerife).%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
    setPosition(0)
  } else if (position < 15) {
    triggerPlanLibre()
  } else {
    setPosition(0)
  }
}

// ---------- PLAN GUIADO ----------

const handleStartGuiado = () => {
  setDraggingGuiado(true)
}

const handleMoveGuiado = (e: any) => {
  if (!draggingGuiado) return

  const x = e.clientX || e.touches?.[0]?.clientX

  const slider = document.getElementById("plan-guiado-slider")
  if (!slider) return

  const rect = slider.getBoundingClientRect()

  let newPosition = x - rect.left - 24

  if (newPosition < 0) newPosition = 0
  if (newPosition > 220) newPosition = 220

  setPositionGuiado(newPosition)
}

const triggerPlanGuiado = () => {
  setPositionGuiado(220)
  setTimeout(() => {
    window.open(
      "https://wa.me/34618820842?text=Hola%20Ana,%20me%20interesa%20el%20PLAN%20GUIADO%20(Valoraci%C3%B3n%20+%20Corneometr%C3%ADa).%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
    setPositionGuiado(0)
  }, 220)
}

const handleEndGuiado = () => {
  setDraggingGuiado(false)

  if (positionGuiado > 160) {
    window.open(
      "https://wa.me/34618820842?text=Hola%20Ana,%20me%20interesa%20el%20PLAN%20GUIADO%20(Valoraci%C3%B3n%20+%20Corneometr%C3%ADa).%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
    setPositionGuiado(0)
  } else if (positionGuiado < 15) {
    triggerPlanGuiado()
  } else {
    setPositionGuiado(0)
  }
}


// ---------- CLUB ----------

const handleStartClub = () => {
  setDraggingClub(true)
}

const handleMoveClub = (e: any) => {
  if (!draggingClub) return

  const x = e.clientX || e.touches?.[0]?.clientX

  const slider = document.getElementById("club-slider")
  if (!slider) return

  const rect = slider.getBoundingClientRect()

  let newPosition = x - rect.left - 24

  if (newPosition < 0) newPosition = 0
  if (newPosition > 220) newPosition = 220

  setPositionClub(newPosition)
}

const triggerPlanClub = () => {
  setPositionClub(220)
  setTimeout(() => {
    window.open(
      "https://wa.me/34618820842?text=Hola%20Ana,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20para%20unirme%20a%20theskinfix%20CLUB.%20%C2%BFCu%C3%A1ndo%20podr%C3%ADamos%20hablar%3F",
      "_blank"
    )
    setPositionClub(0)
  }, 220)
}

const handleEndClub = () => {
  setDraggingClub(false)

  if (positionClub > 160) {
    window.open(
      "https://wa.me/34618820842?text=Hola%20Ana,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20para%20unirme%20a%20theskinfix%20CLUB.%20%C2%BFCu%C3%A1ndo%20podr%C3%ADamos%20hablar%3F",
      "_blank"
    )
    setPositionClub(0)
  } else if (positionClub < 15) {
    triggerPlanClub()
  } else {
    setPositionClub(0)
  }
}
useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  }, 6000);

  return () => clearInterval(interval);
}, [paused, messages.length]);
const protocols = [
  {
    code: "P01",
    title: "Acné y piel congestionada",
    text: "Ayudamos a limpiar los poros obstruidos y a controlar el exceso de sebo, para que la piel recupere un aspecto más limpio e higiénico."
  },
  {
    code: "P02",
    title: "Inflamación y sensibilidad",
    text: "Enfocamos el cuidado en calmar la piel reactiva y reforzar su barrera, ayudando a reducir la sensación de irritación y a mejorar su confort."
  },
  {
    code: "P03",
    title: "Hidratación y luminosidad",
    text: "Aportamos hidratación profunda para devolverle luminosidad y jugosidad a la piel cuando se ve apagada o deshidratada."
  },
  {
    code: "P04",
    title: "Textura y poros",
    text: "Cuando la piel está preparada, trabajamos para suavizar su textura y mejorar el aspecto de los poros."
  },
  {
    code: "P05",
    title: "Manchas y pigmentación",
    text: "Trabajamos para mejorar el aspecto de las manchas y unificar el tono sin agredir la piel."
  },
  {
    code: "P06",
    title: "Cicatrices y marcas",
    text: "Trabajamos para mejorar la textura de la piel y el aspecto de cicatrices, marcas y estrías de forma progresiva."
  },
  {
    code: "P07",
    title: "Elasticidad y regeneración",
    text: "Seguimos trabajando la firmeza y la elasticidad de la piel para acompañar su regeneración y rejuvenecimiento a largo plazo."
  }
]

  return (
     <>
    <WelcomeGuide />
    <div className="min-h-screen bg-[#FFFEFC] text-[#2C2725] font-sans overflow-x-hidden">

      {/* HERO */}
<section className="relative min-h-screen px-4 pt-38 pb-8 sm:px-6 lg:px-16 mb-4 sm:mb-6 lg:mb-8">

        <motion.div
  initial={{
    opacity: 0,
    scaleY: 0.02,
    filter: "brightness(3) blur(6px)",
  }}
  animate={{
    opacity: 1,
    scaleY: 1,
    filter: "brightness(1) blur(0px)",
  }}
  transition={{
    duration: 1.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  style={{ transformOrigin: "center" }}
  className="relative min-h-[70vh] overflow-hidden rounded-[16px]"
>
  <video
    src="/hero-video.mp4"
    autoPlay
    muted
    playsInline
    onLoadedMetadata={(e) => {
      e.currentTarget.currentTime = 19;
    }}
    onEnded={(e) => {
      e.currentTarget.currentTime = 19;
      e.currentTarget.play();
    }}
    className="absolute inset-0 w-full h-full object-cover object-[100%_50%]"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#2C211B]/65 via-[#2C211B]/25 to-transparent" />

  <motion.div
    initial={{ opacity: 0.9, scaleY: 0 }}
    animate={{ opacity: 0, scaleY: 20 }}
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="absolute inset-0 bg-white mix-blend-screen pointer-events-none"
    style={{ transformOrigin: "center" }}
  />
</motion.div>

       {/* 
<div className="fixed top-[32px] left-0 w-full h-[90px] bg-[#B4A89C]">
...
</div>
*/}

<div className="fixed top-15 left-4 right-4 h-[32px] rounded-[4px] border border-[#D9D2CA] bg-transparent z-50 flex items-center justify-center sm:left-6 sm:right-6 lg:left-16 lg:right-16">
<div className="h-[32px] flex items-center justify-center px-4 bg-transparent">
  <span className="text-[10px] tracking-[0.18em] text-[#6B635D]">
    {messages[messageIndex]}
  </span>

  <button
    onClick={() => setPaused(!paused)}
    className="absolute right-6 text-[#6B635D] text-sm"
  >
    {paused ? "▶" : "❚❚"}
  </button>
  </div>
</div>
        {/* HEADER */}
        <header className="fixed top-[42px] md:top-[75px] left-0 w-full z-50 flex items-center justify-between h-[65px] md:h-[85px] px-4 sm:px-6 lg:px-16 pointer-events-none">

          <div className="pointer-events-auto flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              
<Image
  src="/tsf-logo.png"
  alt="the skin fix"
  width={110}
  height={25}
  className="h-[18px] sm:h-[22px] md:h-[25px] w-auto object-contain"
  priority
/>

            </Link>
          </div>
<div className="pointer-events-auto hidden md:flex items-center font-bold gap-7 text-[17px] tracking-[0.12em] text-[#000000] ml-auto">

  <Link
  href="/diagnostico"
  className="flex items-center mix-blend-difference transition-all duration-300 hover:scale-110 active:scale-90"
>
  Diagnóstico
</Link>

<Link
  href="/protocolo"
  className="flex items-center mix-blend-difference transition-all duration-300 hover:scale-110 active:scale-90"
>
  Protocolo
</Link>

<Link
  href="/seguimiento"
  className="flex items-center mix-blend-difference transition-all duration-300 hover:scale-110 active:scale-90"
>
  Seguimiento
</Link>

</div>
        </header>

        {/* CONTENT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pt-4 md:pt-1">

          <div className="max-w-5xl ml-10 -mt-135 px-2 md:px-0">
            <h1
              className="max-w-5xl text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.86] tracking-[-0.055em] text-[#FFF9ED] [text-shadow:0_4px_28px_rgba(35,24,17,0.25)]"
              style={{ fontFamily: "Satoshi", fontWeight: 900 }}
            >
              <span className="block">TU PIEL</span>
              <span className="block">M∆S F∆CIL</span>
              <span className="block">QUE NUNC∆</span>
            </h1>
            
          </div>

        </div>
{/* <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-b from-transparent to-[#FAF8F5]" /> */}
      </section>

      {/* CONDITIONS */}
      
  <section className="relative overflow-visible px-6 md:px-8 py-1">
  

  {/* <div className="absolute inset-0 bg-[#FAF8F5]/40 z-0" /> */}
  
{/* <div className="absolute inset-0 bg-[#FAF8F5]/40 z-0" /> */}
        

<div className="absolute bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 z-20">

  <button
  onClick={() => setOpen(true)}
  onMouseEnter={() => setCellsGlow(true)}
  onMouseLeave={() => setCellsGlow(false)}
  className="group relative z-10 inline-flex items-center justify-center gap-3 rounded-full border border-[#F2DCC5]/55 bg-[#A86F56] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white opacity-0 shadow-[0_12px_34px_rgba(90,55,35,0.28),inset_0_1px_0_rgba(255,255,255,0.18)] animate-fadeIn transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F5C45] hover:shadow-[0_16px_40px_rgba(90,55,35,0.34)]"
  style={{ animationDelay: "2s" }}
>
  <span>ELIGE TU PLAN</span>
</button>

</div>

</section>

{/* ================= EL MÉTODO THE SKIN FIX ================= */}

<section className="mx-4 my-4 rounded-[16px] bg-[#FAF8F5] py-20 sm:mx-6 sm:my-6 sm:py-24 lg:mx-16 lg:my-8 lg:py-28">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        
    <motion.h2
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
  duration: 1.2,
  delay: 0.35,
  ease: [0.22, 1, 0.36, 1]
}}
  className="
    text-5xl
    lg:text-[54px]
    leading-[0.9]
    tracking-[-0.04em]
    text-[#2C2725]
    mt-6
    uppercase
    mb-0
    max-w-[620px]
    [text-shadow:0_0_18px_rgba(44,39,37,0.08),0_0_40px_rgba(44,39,37,0.04)]
  "
  style={{ fontFamily: "satoshi", fontWeight: 700 }}
>
  EL MÉTODO
  <br />
  THESKINFIX
</motion.h2>
      </div>

    <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 1.2,
    delay: 0.35,
    ease: [0.22, 1, 0.36, 1]
  }}
  className="max-w-[620px] text-left text-[17px] leading-[1.65] text-[#5F5852]"
  style={{ fontFamily: "Satoshi", fontWeight: 400 }}
>
  <p>
  Cada piel necesita un orden propio, por eso, diseñamos una secuencia para priorizar lo que conviene trabajar primero y la ajustamos según su respuesta, buscando acompañar su recuperación con estabilidad y reducir el riesgo de desestabilizaciones o efectos rebote.
  </p>
    </motion.div>
    </div>


    <div className="mt-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
         
          
        </div>
      
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {protocols.map((protocol, index) => (
          <button
            key={protocol.code}
            type="button"
            aria-pressed={protocolSelected && activeProtocol === index}
            onClick={() => {
              setActiveProtocol(index)
              setProtocolSelected(true)
            }}
            className={`min-h-[88px] rounded-[12px] border p-4 text-left transition-all duration-200 ${
              protocolSelected && activeProtocol === index
                ? "border-[#8F5C45] bg-[#8F5C45] text-white shadow-[0_8px_20px_rgba(143,92,69,0.18)]"
                : "border-[#E8DED5] bg-[#FFFEFC]/80 text-[#2C2725] hover:border-[#C9A58F] hover:bg-white"
            }`}
          >
            <span className="block text-[10px] font-semibold tracking-[0.14em] opacity-75">{protocol.code}</span>
            <span className="mt-2 block text-[14px] leading-[1.3]">{protocol.title}</span>
          </button>
        ))}
      </div>
    </div>

    {/* DETALLE DEL PROTOCOLO SELECCIONADO */}

{protocolSelected && (
  <motion.div
    key={activeProtocol}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="mt-6 rounded-[14px] bg-[#E9DCCF] p-6 sm:p-8"
  >
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    <div className="flex items-center gap-6">

     

      <h3
        className="text-[25px] lg:text-[25px] tracking-[-0.03em] text-[#2C2725]"
        style={{ fontFamily: "satoshi", fontWeight: 700 }}
      >
        {protocols[activeProtocol].title}
      </h3>

    </div>

  </div>

  <p className="mt-2 max-w-2xl text-[#5F5852] text-[16px] leading-[1.9]">
    {protocols[activeProtocol].text}
  </p>

  </motion.div>
)}
    {/* BLOQUE CLAVE */}


  </div>
</section>

{/* ================= biografía ================= */}

<section className="mx-4 my-4 rounded-[16px] bg-[#E9DCCF] py-32 text-[#2C2725] sm:mx-6 sm:my-6 lg:mx-16 lg:my-8">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <div className="grid lg:grid-cols-2 gap-24 items-center">


      {/* TEXTO */}

      <div className="max-w-[620px]">
        <h2
  className="
    text-5xl
    lg:text-[80px]
    leading-[0.9]
    tracking-[-0.04em]
    text-[#2C2725]
    mt-6
    uppercase
    mb-10
    max-w-[620px]
    [text-shadow:0_0_18px_rgba(44,39,37,0.08),0_0_40px_rgba(44,39,37,0.04)]
  "
  style={{ fontFamily: "satoshi", fontWeight: 700 }}
>
  M∆KE SKIN M∆KE SENSE
</h2>

        <div className="max-w-[620px] space-y-12 text-[18px] leading-[1.75] text-[#2C2725] text-justify">

          <p style={{ fontFamily: "Satoshi", fontWeight: 400 }}>
  Abordamos cada piel desde su estado y sus necesidades actuales. Observamos, identificamos qué puede estar alterando su equilibrio y trazamos un plan de cuidado claro, paso a paso. Un enfoque personalizado que busca mejorar la relación con tu piel con constancia, criterio y expectativas realistas.
</p>
<div className="-mt-4 flex justify-end">
  <Image
    src="/firmasinfondo.png"
    alt="Firma de Ana Guzmán"
    width={170}
    height={60}
    className="opacity-70 select-none pointer-events-none"
  />
</div>
         
        </div>
      
      </div>
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="flex justify-center lg:justify-end"
>
        <Image
          src="/retrato-biografia.webp"
          alt="Fundadora The Skin Fix"
          width={520}
          height={650}
          className="w-full max-w-[560px] rounded-[6px] object-cover"
          priority
        />
      </motion.div>
    </div>

  </div>
</section>
      <section className="mx-4 my-4 rounded-[16px] bg-[#FAF8F5] py-24 md:py-28 sm:mx-6 sm:my-6 lg:mx-16 lg:my-8">
  <div className="max-w-7xl mx-auto px-6 lg:px-16">

    <div className="mb-12">
      
{/* <RESEÑAS> */}
      <h2
  className="text-[40px] sm:text-[46px] lg:text-[54px] leading-[0.95] tracking-[-0.04em] text-[#2C2725] mb-0"
  style={{ fontFamily: "satoshi", fontWeight: 700 }}
>
  NUESTROS CLIENTES
  <br />
</h2>

    
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

      {/* CARD 1 */}
      <article className="
relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-8 lg:p-9 shadow-[0_10px_30px_rgba(82,62,48,0.06)]
">
        
        <p
  className="mb-8 flex-1 text-[17px] text-[#5F5852] leading-[1.8]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
          En la primera cita me tranquilizó al momento, explicándome el proceso con todo detalle y cómo me beneficiaría según mi tipo de piel. Los resultados han sido increíbles en pocas semanas mi piel está más suave y luminosa, y las marcas del acné se van desvaneciendo con cada sesión. Me siento mucho más segura y ya no necesito maquillaje para salir.
        </p>

        <div className="mt-auto border-t border-[#E8DED5] pt-5">
          <p className="text-[14px] font-semibold text-[#2C2725]">
            Cliente verificada
          </p>

        </div>
      </article>

      {/* CARD 2 */}
      <article className="
relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-8 lg:p-9 shadow-[0_10px_30px_rgba(82,62,48,0.06)]
">
        

        <p
  className="mb-8 flex-1 text-[17px] text-[#5F5852] leading-[1.8]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
          Estoy probando el protocolo para acné y es una experiencia genial. Ana me hizo sentir cómodo desde el primer momento y sus conocimientos sobre la piel son impresionantes. Mi piel ha mejorado muchisimo.
        </p>

        <div className="mt-auto border-t border-[#E8DED5] pt-5">
          <p className="text-[14px] font-semibold text-[#2C2725]">
            Maciej Z.
          </p>

        </div>
      </article>

      {/* CARD 3 */}
      <article className="
relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-8 lg:p-9 shadow-[0_10px_30px_rgba(82,62,48,0.06)]
">
        

        <p
  className="mb-8 flex-1 text-[17px] text-[#5F5852] leading-[1.8]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
          Me regalaron una confianza increíble desde la primera cita, quedé impresionada con los resultados y con la atención recibida. Definitivamente la recomiendo.
        </p>

        <div className="mt-auto border-t border-[#E8DED5] pt-5">
          <p className="text-[14px] font-semibold text-[#2C2725]">
            Oana C.
          </p>

        
        </div>
      </article>

      {/* CARD 4 */}
      <article className="
relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-8 lg:p-9 shadow-[0_10px_30px_rgba(82,62,48,0.06)]
">
        

        <p
  className="mb-8 flex-1 text-[17px] text-[#5F5852] leading-[1.8]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
          Llevo más de diez años visitando clínicas estéticas y desde que descubrí TSF no he cambiado. Profesional, muy fácil de tratar y los resultados hablan por sí solos. Cada sesión me voy con la sensación de que me cuidan de verdad.
        </p>

        <div className="mt-auto border-t border-[#E8DED5] pt-5">
          <p className="text-[14px] font-semibold text-[#2C2725]">
            Rosana G.
          </p>

      
        </div>
      </article>

      {/* CARD 5 */}
      <article className="
relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-8 lg:p-9 shadow-[0_10px_30px_rgba(82,62,48,0.06)]
">
        

        <p
  className="mb-8 flex-1 text-[17px] text-[#5F5852] leading-[1.8]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
          Ana es increíble. Siempre consigue que me sienta super cómoda durante los tratamientos y los resultados desde que la visito son espectaculares.
        </p>

        <div className="mt-auto border-t border-[#E8DED5] pt-5">
          <p className="text-[14px] font-semibold text-[#2C2725]">
            Sofia O.
          </p>

         
        </div>
      </article>

      {/* CARD 6 */}
      <article className="
relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[16px] border border-[#E8DED5] bg-[#FFFEFC] p-8 lg:p-9 shadow-[0_10px_30px_rgba(82,62,48,0.06)]
">
        

       <p
  className="mb-8 flex-1 text-[17px] text-[#5F5852] leading-[1.8]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
          Pasé de tener una piel muy propensa al acné a una piel sin marcas gracias a estos protocolos. Ha estado ahí en cada paso de mi proceso y estoy muy feliz con los resultados.
        </p>

        <div className="mt-auto border-t border-[#E8DED5] pt-5">
          <p className="text-[14px] font-semibold text-[#2C2725]">
            Ambar C.
          </p>

        
        </div>
      </article>

    </div>

  </div>
</section>

      {/* FAQ */}
<section className="mx-4 my-4 rounded-[16px] bg-transparent sm:mx-6 sm:my-6 lg:mx-16 lg:my-8">
  <div className="w-full rounded-[16px] bg-[#E9DCCF] p-6 sm:p-8 md:p-10 xl:p-16">

    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-20 items-start">

      {/* IZQUIERDA */}
      <div>

        <div className="mb-8 max-w-3xl">
          <h2
  className="text-[54px] md:text-[54px] text-[#2C2725] leading-[0.96] tracking-[-0.05em]"
  style={{ fontFamily: "satoshi", fontWeight: 700 }}
>
  F∆Q
</h2>
        </div>

        {[
          {
    question: '¿Qué es un centro de recuperación cutánea?',
    answer:
      'Es un espacio dedicado al cuidado de la piel con protocolos adaptados a sus necesidades y a su estado.'
  },
  {
    question: '¿Tengo que saber qué protocolo necesito?',
    answer:
      'No. Puedes contarnos qué te preocupa y te orientaremos sobre el punto de partida más adecuado para tu piel.'
  },
  {
    question: '¿Qué incluye la valoración del PLAN GUIADO?',
    answer:
      'Incluye una valoración de la piel y una medición con corneometría para conocer mejor su estado.'
  },
  {
    question: '¿Cuánto tarda la piel en recuperarse?',
    answer:
      'Cada piel tiene su ritmo. El tiempo depende de su estado y de sus necesidades; en tu caso te explicaremos qué puedes esperar y cómo avanzar.'
  },
  {
    question: '¿Cómo reservo una cita?',
    answer:
      'Escríbenos por WhatsApp para consultar disponibilidad y contarnos qué plan te interesa.'
  },
  {
    question: '¿Es normal que mi piel reaccione a algunos productos?',
    answer:
      'Puede ocurrir si un producto no encaja con las necesidades de tu piel o con el momento en que se encuentra. Si la irritación persiste, consulta con un profesional sanitario.'
  },
  {
    question: '¿Y si tengo rosácea o la piel muy sensible?',
    answer:
      'Cada piel necesita un cuidado distinto. Si tienes rosácea o síntomas persistentes, sigue también las indicaciones de tu dermatólogo; el cuidado estético no sustituye la atención médica.'
  }
        ].map((faq, index) => (

          <div
            key={index}
            className="border-b border-black/5 py-2 md:py-8"
          >

            <button
              onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              className="w-full flex items-center justify-between gap-6 text-left"
            >

              <span className="text-[17px] md:text-[17px] tracking-[-0.03em] font-black text-[#2C2725]">
                {faq.question}
              </span>

              <span className="text-[22px] text-[#A86F56]">
                {faqOpen === index ? "−" : "+"}
              </span>

            </button>

            {faqOpen === index && (
              <p
  className="max-w-2xl text-[15px] md:text-[15px] leading-relaxed text-[#5F5852] mt-6"
  style={{ fontFamily: "thasadith" }}
>
  {faq.answer}
</p>
            )}

          </div>

        ))}

      </div>

      {/* DERECHA */}
      <div className="hidden lg:block sticky top-28 mt-6">

        <img
          src="/diagnostico/conversacion.png"
          alt="Profesional conversa con una clienta durante una consulta de piel"
          className="w-full rounded-[16px] object-cover"
        />

      </div>

    </div>

  </div>
</section>

{open && (

<PlanesModal
  open={open}
  setOpen={setOpen}
  showTerms={showTerms}
  setShowTerms={setShowTerms}
  showPrice1={showPrice1}
  setShowPrice1={setShowPrice1}
  showPrice2={showPrice2}
  setShowPrice2={setShowPrice2}
  showPrice3={showPrice3}
  setShowPrice3={setShowPrice3}
  position={position}
  positionGuiado={positionGuiado}
  positionClub={positionClub}
  handleMove={handleMove}
  handleEnd={handleEnd}
  handleStart={handleStart}
  handleMoveGuiado={handleMoveGuiado}
  handleEndGuiado={handleEndGuiado}
  handleStartGuiado={handleStartGuiado}
  handleMoveClub={handleMoveClub}
  handleEndClub={handleEndClub}
  handleStartClub={handleStartClub}
  triggerPlanLibre={triggerPlanLibre}
  triggerPlanGuiado={triggerPlanGuiado}
  triggerPlanClub={triggerPlanClub}
/>
)}
      
      <section className="relative isolate mx-4 my-4 overflow-hidden rounded-[16px] bg-[#FAF8F5] px-6 py-20 md:py-24 sm:mx-6 sm:my-6 lg:mx-16 lg:my-8">
  <span
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[72px] font-black tracking-[-0.04em] text-[#B79C88]/65 sm:text-[112px] lg:text-[160px]"
    style={{ fontFamily: "satoshi" }}
  >
    HORARIO
  </span>

  <div className="relative z-10 mx-auto max-w-5xl text-center">
    <div className="mx-auto grid max-w-4xl gap-y-6 sm:grid-cols-2 sm:gap-x-20">
      <div className="flex min-h-[138px] flex-col items-center justify-center rounded-[16px] bg-[#FFFEFC]/80 px-6 py-7">
        <p
          className="text-[12px] font-semibold tracking-[0.14em] text-[#5F5852]"
          style={{ fontFamily: "satoshi" }}
        >
          LUNES A VIERNES
        </p>
        <p
          className="mt-3 text-[24px] tracking-[-0.03em] text-[#2C2725] md:text-[26px]"
          style={{ fontFamily: "satoshi", fontWeight: 600 }}
        >
          10:00 – 20:00
        </p>
      </div>

      <div className="flex min-h-[138px] flex-col items-center justify-center rounded-[16px] bg-[#FFFEFC]/80 px-6 py-7">
        <p
          className="text-[12px] font-semibold tracking-[0.14em] text-[#5F5852]"
          style={{ fontFamily: "satoshi" }}
        >
          SÁBADOS
        </p>
        <p
          className="mt-3 text-[24px] tracking-[-0.03em] text-[#2C2725] md:text-[26px]"
          style={{ fontFamily: "satoshi", fontWeight: 600 }}
        >
          CON CITA PREVIA
        </p>
      </div>
    </div>
  </div>
</section>
<footer className="relative mx-4 my-4 h-[300px] overflow-hidden rounded-[16px] sm:mx-6 sm:my-6 lg:mx-16 lg:my-8">
  <img
  src="/TSFtapiz1.png"
  alt="TSF Tapiz"
  className="absolute inset-0 w-full h-full object-cover opacity-10 brightness-[1.02] contrast-[1.05]"
/>

  <div className="relative z-10 flex h-full items-end justify-between px-8 pb-8 text-[#2C2725]">
    <div>
  <Image
  src="/tsf-logo.png"
  alt="The Skin Fix"
  width={150}
  height={52}
  className="h-[40px] w-auto"
/>

  <p className="text-sm text-[#000000] tracking-[0.13em] text-[8px] mt-2">
    RECUPERACIÓN CUTÁNEA
  </p>
</div>



    

<div className="flex gap-6 text-sm text-[#2C2725]">
  <a href="/terminos">TÉRMINOS</a>
  <a href="/privacidad">PRIVACIDAD</a>
  <a href="/cookies">COOKIES</a>

  
</div>
  </div>
  
</footer>
<div
  className={`fixed bottom-6 right-6 z-50 overflow-hidden transition-all duration-300
${isMinimized
  ? "h-[54px] w-[54px] rounded-full bg-[#25D366] p-0 shadow-[0_8px_22px_rgba(37,211,102,0.35)] hover:-translate-y-1"
  : "h-auto w-[320px] rounded-[18px] border border-white/25 bg-[#2C2725]/90 p-6 text-[#FFF8F0] backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.65)] hover:-translate-y-[2px]"
}`}
>
  <div className={`flex items-center justify-between ${isMinimized ? "mb-0" : "mb-5"}`}>

  {isMinimized ? (
  <button
    type="button"
    onClick={() => setIsMinimized(false)}
    aria-label="Abrir chat de WhatsApp"
    className="flex h-[54px] w-[54px] items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-105"
  >
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M16 4.2c-6.5 0-11.8 5-11.8 11.2 0 2.2.7 4.3 1.9 6L4.8 27.2l6.1-1.6c1.6.7 3.3 1.1 5.1 1.1 6.5 0 11.8-5 11.8-11.2S22.5 4.2 16 4.2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12.3 10.8c-.3-.5-.5-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.3 3.6 5.6 4.8 2.8 1.1 3.4.9 4 .8.6-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.7-.5l-2.1-1c-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.2-.2.4-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.9-2.2Z" fill="currentColor" />
    </svg>
  </button>

  ) : (
    <div className="flex items-center gap-3 -mt-[3px]">
      <div className="w-2.5 h-2.5 rounded-full bg-[#6DDC5A] shadow-[0_0_12px_rgba(109,220,90,.8)] translate-y-[-3px]" />

      <div className="-translate-y-1">
        <p className="text-[16px] font-bold text-[#ffffff]">
          Ana
        </p>
      </div>
    </div>
  )}

  {!isMinimized && <button
    type="button"
    onClick={() => setIsMinimized(true)}
    className="absolute right-6 top-2.5 text-xl text-[#FFF8F0]"
  >
    −
  </button>}

</div>

<p className="text-[15px] text-[#ffffff] leading-relaxed">
  Hola! Antes de empezar, me gustaría entender mejor tu caso, indícame:
</p>

<ul className="mt-6 space-y-2 text-[13px] text-[#ffffff]">
  <li><em>Qué te preocupa de tu piel</em></li>
  <li><em>Desde cuándo ocurre</em></li>
  <li><em>Qué has probado hasta ahora</em></li>
</ul>

<div className="h-6"></div>

<textarea
  value={mensaje}
  onChange={(e) => setMensaje(e.target.value)}
  placeholder=""
  className="
    w-full
    h-[95px]
    rounded-2xl
    bg-white/35
    backdrop-blur-md
    border
    border-white/40
    p-4
    text-[15px]
    text-[#2C2725]
    placeholder:text-[#5F5852]
    outline-none
    resize-none
    shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]
  "
/>

<button
  type="button"
  onClick={() => {
    window.open(
      `https://wa.me/34618820842?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  }}
  className="
  mt-4
  w-full
  rounded-[16px]
  bg-[#2C2725]/85
  py-3
  text-white
  text-[11px]
  font-semibold
  uppercase
  tracking-[0.24em]
  border
  border-white/35
  shadow-[0_10px_24px_rgba(201,168,143,0.28),inset_0_1px_1px_rgba(255,255,255,0.35)]
  transition-all
  duration-300
  hover:bg-[#D3B39C]
  hover:-translate-y-[2px]
  hover:shadow-[0_16px_34px_rgba(201,168,143,0.42),inset_0_1px_1px_rgba(255,255,255,0.45)]
  active:translate-y-0
  active:shadow-[0_6px_16px_rgba(201,168,143,0.25),inset_0_2px_4px_rgba(0,0,0,0.08)]
"
>
  ENVIAR
</button>
</div>
</div>

</>

)
}
