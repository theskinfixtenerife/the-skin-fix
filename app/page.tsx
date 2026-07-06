"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"
import WelcomeGuide from "./components/WelcomeGuide"

export default function TheSkinFixWebsite() {
  const [open, setOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [cellsGlow, setCellsGlow] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showPrice1, setShowPrice1] = useState(false)
const [showPrice2, setShowPrice2] = useState(false)
const [showPrice3, setShowPrice3] = useState(false)
const [showTerms, setShowTerms] = useState(false)
const [position, setPosition] = useState(0)
const [dragging, setDragging] = useState(false)

const [positionGuiado, setPositionGuiado] = useState(0)
const [draggingGuiado, setDraggingGuiado] = useState(false)

const [positionClub, setPositionClub] = useState(0)
const [draggingClub, setDraggingClub] = useState(false)


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

const handleEnd = () => {
  setDragging(false)

  if (position > 180) {
    window.open(
      "https://wa.me/34618820842?text=Hola,%20me%20interesa%20el%20PLAN%20LIBRE.%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
  }

  setPosition(0)
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

const handleEndGuiado = () => {
  setDraggingGuiado(false)

  if (positionGuiado > 180) {
    window.open(
      "https://wa.me/34618820842?text=Hola,%20me%20interesa%20el%20PLAN%20GUIADO.%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
  }

  setPositionGuiado(0)
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

const handleEndClub = () => {
  setDraggingClub(false)

  if (positionClub > 180) {
    window.open(
      "https://wa.me/34618820842?text=Hola,%20me%20interesa%20the%20skin%20fix%20CLUB.%20%C2%BFCu%C3%A1ndo%20tendr%C3%ADais%20disponibilidad%3F",
      "_blank"
    )
  }

  setPositionClub(0)
}



  return (
     <>
    <WelcomeGuide />
    <div className="min-h-screen bg-bg-white text-[#171412] font-sans overflow-x-hidden">

      {/* HERO */}
<section className="relative min-h-screen px-17 pt-38 pb-8">

        <div className="relative min-h-[70vh] overflow-hidden rounded-[4px]">

  <video
    src="/hero-video.mp4"
    autoPlay
    muted
    playsInline
    onLoadedMetadata={(e) => {
      e.currentTarget.currentTime = 19
    }}
    onEnded={(e) => {
      e.currentTarget.currentTime = 19
      e.currentTarget.play()
    }}
    className="absolute inset-0 w-full h-full object-cover object-[100%_50%]"
  />

</div>

       {/* 
<div className="fixed top-[32px] left-0 w-full h-[90px] bg-[#B4A89C]">
...
</div>
*/}

<div className="mx-9 fixed top-15 left-8 right-8 h-[32px] rounded-[4px] bg-[#D9D2CA] z-50 flex items-center justify-center">
  <div className="h-[32px] bg-[#D9D2CA] rounded-t-[20px] flex items-center justify-center">

  <span className="text-[11px] tracking-[0.18em] text-[#6B635D]">
    {messageIndex === 0 ? (
      "TU PIEL SABE RECUPERARSE SOLA. NOSOTROS LA AYUDAMOS."
    ) : (
      <>
        SOLICITA TU ACCESO EN the<strong>skin</strong>fix™{" "}
        <span className="font-bold">CLUB</span>
      </>
    )}
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
        <header className="fixed top-[80px] ml-12 left-0 w-full z-50 flex items-center justify-between h-[90px]">

          <div className="flex items-center gap-4">
  <img
    src="/tsf-isotipo.png"
    alt="THE SKIN FIX"
    className="ml-16 w-[60px] h-auto object-contain"
  />
<div className="flex items-center">
  <div>
  <span className="font-satoshi text-[#B98B72] text-[28px] leading-none">
  the<strong>skin</strong>fix™
</span>
</div>

  

  
</div>
</div>
<div className="hidden md:flex items-center font-bold gap-4 text-[13px] uppercase tracking-[0.22em] text-[#B98B72] ml-auto mr-49">

  <Link
  href="/diagnostico"
  className="flex items-center transition-all duration-300 hover:scale-110 active:scale-90"
>
  Diagnóstico
</Link>
<div className="w-px h-4 bg-[#B98B72]"></div>
<Link
  href="/protocolo"
  className="flex items-center transition-all duration-300 hover:scale-110 active:scale-90"
>
  Protocolo
</Link>
<div className="w-px h-4 bg-[#B98B72]"></div>
<Link
  href="/seguimiento"
  className="flex items-center transition-all duration-300 hover:scale-110 active:scale-90"
>
  Seguimiento
</Link>

</div>
        </header>

        {/* CONTENT */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pt-10 md:pt-1">

          <div className="max-w-5xl -mt-55">

            <h1
className="text-[48px] sm:text-[74px] md:text-[60px] leading-[0.90] tracking-[-0.03em] normal-case max-w-6xl text-[#2C2725]"
style={{ fontFamily: 'satoshi', fontWeight: 400 }}
>
            
            </h1>
           
          </div>

        </div>
{/* <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-b from-transparent to-[#FAF8F5]" /> */}
      </section>

      {/* CONDITIONS */}
      
  <section className="relative overflow-visible px-6 md:px-8 py-1">
  

  {/* <div className="absolute inset-0 bg-[#FAF8F5]/40 z-0" /> */}
  
{/* <div className="absolute inset-0 bg-[#FAF8F5]/40 z-0" /> */}
        

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">

  <button
    onClick={() => setOpen(true)}
    onMouseEnter={() => setCellsGlow(true)}
  onMouseLeave={() => setCellsGlow(false)}
    className="relative z-10 rounded-full bg-[#B4A89C] opacity-0 animate-fadeIn
hover:bg-[#A6564D]
text-white
shadow-[0_0_80px_rgba(166,86,77,0.45)] px-10 py-5 text-[11px] uppercase tracking-[0.3em] text-white hover:bg-[#A6564D]
hover:tracking-[0.35em]
transition-all duration-500"
style={{ animationDelay: "3s" }}
  >
    Comenzar mi recuperación
  </button>

</div>

</section>

      {/* FILOSOFÍA */}
      <section className="px-6 md:px-8 pt-16 -mt-17 pb-20 bg-white">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start max-w-[1300px] mx-auto w-full bg-[#F5F2EE] rounded-[6px] p-10 md:p-16">

  <div className="pt-8">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#B98B72] mb-5">
            filosofía
          </p>

          <h2 className="text-[12px] text-[48px] sm:text-[74px] md:text-[60px] leading-[0.92] tracking-[-0.06em] text-[#B88A72] font-bold mb-14">
            recuperación
            <br />
            cutánea definitiva
          </h2>

          <div className="max-w-[500px] space-y-6 text-[16px] leading-[1.8] text-[#5E534A] font-normal">

  <p>
  ¿Y si el problema no fuera tu piel?
</p>

<p>
  Durante años hemos buscado soluciones para la piel sin comprender realmente por qué había dejado de funcionar correctamente.
</p>

<p>
  Sin embargo, la recuperación rara vez depende de hacer más, sino de hacer lo necesario.
</p>

<p>
the<strong>skin</strong>fix™ parte de una pregunta diferente:
</p>

<p>
  ¿Qué necesita la piel <br />
  para volver a funcionar <br />
  por sí sola?
</p>
</div>
</div>

        <div className="relative flex items-center justify-center w-full h-full rounded-[6px] bg-[#FAF8F5] overflow-hidden">
  <Image
    src="/casos/logobonito.webp"
    alt="theskinfix"
    width={500}
    height={500}
    priority
    className="w-full
h-full
object-cover"
  />
</div>

</div>
{/* FOTO EDITORIAL */}

<section className="relative px-6 md:px-20 py-16 bg-white">
  <div className="max-w-[450px] mr-[220px]">
    <div className="relative h-[600px] overflow-hidden left-[-41px] rounded-[6px]">
      <Image
  src="/balsamo-theskinfix.jpg"
  alt="The Skin Fix"
  fill
  quality={100}
  className="object-cover object-[10%_center]"
 />
    </div>
  </div>
  
  <div className="absolute left-[580px] top-[65px]">
    <div className="flex gap-4"></div>
{/* Imagen secundaria */}
  <div className="relative w-[160px] h-[320px] top-[280px] left-[210px] rounded-[6px] overflow-hidden">
    <Image
      src="/casos/brazos.webp"
      alt="Queratosis pilaris"
      fill
      className="object-cover"
    />
  </div>

  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.5 }}
  className="mt-14"
>
  <TypeAnimation
    sequence={[
      1000,
      "TRATAMOS\nLO QUE\nOTROS \nNO."
    ]}
    speed={10}
    cursor={true}
    repeat={0}
    style={{
      whiteSpace: "pre-line",
      display: "block",
      fontSize: "24px",
      lineHeight: "0.92",
      letterSpacing: "-0.06em",
      fontWeight: 700,
      color: "#B98B72",
      fontFamily: "Satoshi"
    }}
  />
</motion.div>
<div className="absolute left-[500px] top-[310px] w-[250px] h-[220px] rounded-[6px] overflow-hidden">
  <Image
    src="/casos/cuello.webp"
    alt="Cicatrices"
    fill
    className="object-cover"
  />
</div>
<div className="absolute left-[430px] top-0 w-[320px] h-[220px] rounded-[6px] overflow-hidden">
  <Image
    src="/casos/espalda.webp"
    alt="Espalda"
    fill
    className="object-cover"
  />
</div>
<div className="absolute left-[-2px] top-0 w-[340px] h-[220px] rounded-[6px] overflow-hidden">
  <Image
    src="/casos/abdomen.webp"
    alt="Abdomen"
    fill
    className="object-cover"
  />
</div>
</div>
</section>
      </section>
      <section className="-mt-1 pb-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-20">
      <p className="text-xs uppercase tracking-[0.3em] text-[#B88A72] mb-4">
        Testimonios
      </p>

      <h2 className="text-[64px] leading-[0.9] font-black text-[#B88A72] mb-6">
        historias reales<br />
        de recuperación
      </h2>

    
    </div>

    <div className="grid lg:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <article className="rounded-[32px] border border-[#E8DDD5] bg-[#FAF8F5] p-10">
        <span className="text-5xl text-[#D6B7A6] leading-none">"</span>

        <p className="mt-6 text-[#7A6B60] leading-relaxed">
          En mi primera cita me tranquilizó al momento, explicándome el proceso con todo detalle y cómo me beneficiaría según mi tipo de piel. Los resultados han sido increíbles: en unas pocas semanas mi piel está más suave y luminosa, y las marcas del acné se van desvaneciendo con cada sesión. Me siento mucho más segura y ya no necesito maquillaje para salir.
        </p>

        <div className="mt-10 pt-6 border-t border-[#EEE5DE]">
          <p className="font-medium text-[#A6564D]">
            Cliente verificada
          </p>

        </div>
      </article>

      {/* CARD 2 */}
      <article className="rounded-[32px] border border-[#E8DDD5] bg-[#FAF8F5] p-10">
        <span className="text-5xl text-[#D6B7A6] leading-none">"</span>

        <p className="mt-6 text-[#7A6B60] leading-relaxed">
          Me hice una sesión de terapia de luz con Ana y fue una experiencia genial. Me hizo sentir cómodo desde el primer momento y sus conocimientos sobre la piel son impresionantes. El resultado fue muy relajante y mi piel ha mejorado de forma notable.
        </p>

        <div className="mt-23 pt-6 border-t border-[#EEE5DE]">
          <p className="font-medium text-[#A6564D]">
            Maciej Z.
          </p>

        </div>
      </article>

      {/* CARD 3 */}
      <article className="rounded-[32px] border border-[#E8DDD5] bg-[#FAF8F5] p-10">
        <span className="text-5xl text-[#D6B7A6] leading-none">"</span>

        <p className="mt-6 text-[#7A6B60] leading-relaxed">
          Ana es tan amigable, profesional y conocedora que siempre me hace sentir completamente cómoda durante el tratamiento. Desde la primera cita quedé impresionada con los resultados y con la atención recibida. Definitivamente los recomiendo a mis amigas.
        </p>

        <div className="mt-23 pt-6 border-t border-[#EEE5DE]">
          <p className="font-medium text-[#A6564D]">
            Oana C.
          </p>

        
        </div>
      </article>

      {/* CARD 4 */}
      <article className="rounded-[32px] border border-[#E8DDD5] bg-[#FAF8F5] p-10">
        <span className="text-5xl text-[#D6B7A6] leading-none">"</span>

        <p className="mt-6 text-[#7A6B60] leading-relaxed">
          Llevo más de diez años visitando clínicas estéticas y desde que descubrí a Ana no he cambiado. Es encantadora, muy fácil de tratar y los resultados hablan por sí solos. Cada sesión me voy con la sensación de que me cuidan de verdad.
        </p>

        <div className="mt-10 pt-6 border-t border-[#EEE5DE]">
          <p className="font-medium text-[#A6564D]">
            Rosana G.
          </p>

      
        </div>
      </article>

      {/* CARD 5 */}
      <article className="rounded-[32px] border border-[#E8DDD5] bg-[#FAF8F5] p-10">
        <span className="text-5xl text-[#D6B7A6] leading-none">"</span>

        <p className="mt-6 text-[#7A6B60] leading-relaxed">
          Ana es absolutamente increíble. Siempre consigue que me sienta completamente cómoda durante los tratamientos y los resultados desde que la visito son espectaculares.
        </p>

        <div className="mt-17 pt-6 border-t border-[#EEE5DE]">
          <p className="font-medium text-[#A6564D]">
            Sofia O.
          </p>

         
        </div>
      </article>

      {/* CARD 6 */}
      <article className="rounded-[32px] border border-[#E8DDD5] bg-[#FAF8F5] p-10">
        <span className="text-5xl text-[#D6B7A6] leading-none">"</span>

        <p className="mt-6 text-[#7A6B60] leading-relaxed">
          Pasé de tener una piel muy propensa al acné a una piel increíblemente suave gracias a los protocolos con Ana. Ha estado ahí en cada paso de mi proceso y estoy muy feliz con los resultados.
        </p>

        <div className="mt-17 pt-6 border-t border-[#EEE5DE]">
          <p className="font-medium text-[#A6564D]">
            Ambar C.
          </p>

        
        </div>
      </article>

    </div>

  </div>
</section>

      {/* FAQ */}
      <section className="px-6 md:px-19 py-0 mb-18 mt-12 bg-white">
        <div className="bg-[#F5F2EE] rounded-[6px] p-10 md:p-16 max-w-[2000px] mx-auto">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

          

          <div className=" border-black/10 mt-8">
<div className="mb-8 max-w-3xl">

            <p className="text-[11px] uppercase tracking-[0.24em] text-[#B98B72] mb-6">
              FAQ
            </p>

            <h2 className="text-[12px] text-[48px] sm:text-[74px] md:text-[60px] text-[#B98B72] leading-[0.96] tracking-[-0.05em] font-bold max-w-3xl">
              todo lo que
              <br />
              necesitas saber
            </h2>

          </div>
            {[
               {
                question: '¿Que es un centro de recuperación cutánea?',
                answer:
                  'Es un espacio especializado en restaurar el equilibrio natural de la piel. En lugar de centrarnos únicamente en tratamientos o productos, trabajamos para que la piel vuelva a funcionar de forma saludable y autónoma.'
              },
              {
                question: '¿Es normal que mi piel empeore aunque esté usando buenos productos?',
                answer:
                  'Sí. Un buen producto no garantiza buenos resultados si no responde a las necesidades reales de tu piel. En muchos casos, el problema no está en la calidad de los productos, sino en la combinación, la frecuencia de uso o la incapacidad de la piel para tolerarlos en ese momento.'
              },
              {
                question: '¿Por qué mi piel se irrita con casi todo?',
                answer:
                  'Porque una piel sensibilizada pierde parte de su capacidad para tolerar estímulos cotidianos. Cuando la barrera cutánea está alterada, ingredientes que antes eran bien tolerados pueden provocar molestias, rojeces o inflamación.'
              },
              {
                question: '¿Cuánto tiempo tarda realmente una piel en recuperarse?',
                answer:
                  'Depende del problema, del tiempo que lleve presente y del estado general de la piel. La recuperación real rara vez ocurre en días o semanas aunque se notan mejoras inmediatamente tras recibir dirección y protocolo.'
              },
               {
                question: '¿Necesito una rutina con muchos productos para mejorar?',
                answer:
                  'No. Una piel sana no debería depender de una rutina interminable. Nuestro objetivo es identificar lo que realmente aporta valor y eliminar todo aquello que añade complejidad sin aportar beneficios reales.'
              },
              {
                question: '¿Por qué mi acné vuelve una y otra vez?',
                answer:
                  'Porque muchas estrategias consiguen reducir temporalmente los brotes sin abordar los factores que los mantienen activos. Mientras esos factores sigan presentes, la piel tenderá a repetir los mismos patrones.'
              },
                {
                question: '¿La rosácea puede mejorar de forma estable?',
                answer:
                  'Aunque la rosácea no tiene una cura definitiva, muchas personas consiguen reducir significativamente la frecuencia e intensidad de los brotes cuando aprenden a comprender los desencadenantes de su piel y a respetar sus límites biológicos.'
              },
                {
                question: '¿Por qué mi piel depende de los tratamientos para verse bien?',
                answer:
                  'Cuando una piel necesita intervenciones constantes para mantenerse estable, suele indicar que todavía no ha recuperado completamente su equilibrio. Nuestro objetivo es reducir esa dependencia progresivamente.'
              },
              {
                question: '¿Es posible tener una piel sana con una rutina mínima?',
                answer:
                  'Sí. De hecho, una de nuestras metas es ayudarte a construir una rutina sencilla, sostenible y eficaz. Una piel equilibrada debería requerir menos esfuerzo, no más.'
              },
              {
                question: '¿Por qué mi piel nunca mejora del todo?',
                answer:
                  'Muchas veces el problema no es únicamente superficial. La piel puede reflejar inflamación interna, hábitos o desequilibrios que necesitan abordarse de forma global.'
              },
              {
                question: '¿La nutrición afecta a la piel?',
                answer:
                  'Sí. La piel refleja muchos procesos internos relacionados con alimentación, hidratación, inflamación, descanso y estilo de vida.'
              }
            ].map((faq, index) => (

              <div
                key={index}
                className="border-b border-black/5 py-2 md:py-8"
              >

                <button
                  onClick={() =>
                    setFaqOpen(faqOpen === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-6 text-left"
                >

                  <span className="text-[16px] md:text-[18px] tracking-[-0.03em] font-black text-[#5E534A]">
                    {faq.question}
                  </span>

                  <span className="text-[22px] text-[#888] font-normal">
                    {faqOpen === index ? '−' : '+'}
                  </span>

                </button>

                {faqOpen === index && (
                  <p className="max-w-2xl text-[14px] md:text-[15px] leading-relaxed text-[#666] font-normal mt-6">
                    {faq.answer}
                  </p>
                )}

              </div>

            ))}

          </div>

        </div>
</div>
      </section>

      {/* PLANES DE RECUPERACION */}
      {open && (

        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto">

          <div className="min-h-screen flex items-start md:items-center justify-center px-4 py-8 md:py-10">

            <div
  className="relative w-full max-w-6xl overflow-hidden rounded-[12px] border border-white/10 p-6 md:p-12"
  style={{
  background:
    "radial-gradient(circle at 50% 15%, #A36B42 0%, #4B2B1B 25%, #1A120F 55%, #050505 100%)",
}}
>
  <div className="absolute inset-0 pointer-events-none">

    {/* Luz superior */}
    <div
      className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[180px]"
      style={{
        background: "rgba(242,237,228,0.12",
      }}
    />

    {/* Luz lateral derecha */}
    <div
      className="absolute top-10 right-[-150px] w-[500px] h-[500px] rounded-full blur-[140px]"
      style={{
        background: "rgba(179,169,157,0.10)",
      }}
    />

    {/* Luz inferior izquierda */}
    <div
      className="absolute bottom-[-100px] left-[-100px] w-[550px] h-[550px] rounded-full blur-[150px]"
      style={{
        background: "rgba(93,83,74,0.10)",
      }}
    />

    {/* Oscurecer bordes */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.35) 100%)",
      }}
    />

  </div>

<div className="absolute inset-0 bg-black/20 rounded-[6px] pointer-events-none" />

<div className="relative z-10 mb-12 max-w-3xl pt-10 md:pt-2">

               <h2
  className="mb-2 text-[40px] text-[#B88A72] md:text-[48px] leading-[0.98] tracking-[-0.02em] font-bold"
  style={{
    fontFamily: 'satoshi',
    fontWeight: 700
  }}
>

  elige cómo empezar

</h2>

<p className="text-[14px] md:text-[15px] leading-relaxed text-[#ffffff] font-medium max-w-2xl">
  Tres niveles de acompañamiento para empezar tu recuperación
</p> 

                

              </div>
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-[#999] text-2xl"
              >
                ×
              </button>

              

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14 items-stretch">
                

  {/* PLAN LIBRE */}

  <div className="mt-[4px] rounded-[40px] relative
overflow-visible border border-[#F3EFEA] bg-[#F3EFEA] bg-transparent backdrop-blur-xl p-10 min-h-[620px] flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
<div
  onClick={() => setShowPrice1(!showPrice1)}
  className="
  absolute
  top-25
  -right-4
  h-14
  bg-[#ffffff]
  rounded-tr-xl
  rounded-br-xl
  cursor-pointer
  flex
  items-center
  justify-center
  transition-all
  duration-300
  overflow-hidden
  "
  style={{
    width: showPrice1 ? "65px" : "24px"
  }}
>
  {showPrice1 && (
    <span className="flex flex-col items-center text-white text-[12px] font-medium leading-none">
      <span>precio</span>
    <span>único</span>
    </span>
  )}
</div>

    <div>

      <span className="text-[11px] tracking-[0.18em] text-[#ffffff]">
        autonomía total
      </span>

      <h3
  className="mt-10 text-[28px] text-[#D6C1B0] md:text-[32px] leading-[0.95] tracking-[-0.03em] uppercase"
  style={{
    fontFamily: 'satoshi',
    fontWeight: 500
  }}
>
        PLAN LIBRE
      </h3>

      <p className="mt-8 text-[15px] leading-relaxed text-[#D6C1B0] italic max-w-[280px]">
        Para quienes ya conocen su piel y saben exactamente qué quieren.
      </p>

    </div>

    <div className="space-y-4 pt-14">

  <div className="flex items-start gap-3 text-[15px] text-[#ffffff]">
    <span>✓</span>
    <span>Acceso a protocolos</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#ffffff]">
    <span>✓</span>
    <span>Reserva directa</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Análisis corneométrico y diagnóstico</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Seguimiento continuo</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Prescripción dermocosmética</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Soporte wellness (suplementos, nutrición, fitness)</span>
  </div>

</div>
<div className="mt-8">
  <button
  id="plan-libre-slider"

onMouseMove={handleMove}
onMouseUp={handleEnd}
onMouseLeave={handleEnd}
onTouchMove={handleMove}
onTouchEnd={handleEnd}
  className="
    relative
    w-full
    h-12
    rounded-full
    bg-[#B98B72]
    text-white
    overflow-hidden
    mt-8
  "
>
  <span
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      text-[11px]
      uppercase
      tracking-[0.2em]
      pointer-events-none
    "
  >
    Consultar disponibilidad
  </span>

  <div
    onMouseDown={handleStart}
    onTouchStart={handleStart}
    style={{
      transform: `translateX(${position}px) translateY(-50%)`,
    }}
    className="
      absolute
      left-2
      top-1/2
      w-10
      h-10
      rounded-full
       bg-white/40
      cursor-grab
      shadow-md
    "
  />
</button>
</div>
  </div>

  {/* PLAN GUIADO */}

  <div
  className="
    mt-[4px]
    rounded-[40px]
    relative
    overflow-visible
    border
    border-[#F3EFEA]
    bg-[#F3EFEA]
    bg-transparent
    backdrop-blur-xl
    p-10
    min-h-[620px]
    flex
    flex-col
    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
  "
>
<div
  onClick={() => setShowPrice2(!showPrice2)}
  className="
  absolute
  top-25
  -right-4
  h-14
  bg-[#ffffff]
  rounded-tr-xl
  rounded-br-xl
  cursor-pointer
  flex
  items-center
  justify-center
  transition-all
  duration-300
  overflow-hidden
  "
  style={{
    width: showPrice2 ? "65px" : "24px"
  }}
>
  {showPrice2 && (
    <span className="text-white text-[12px] font-medium">
      +20€
    </span>
  )}
</div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B98B72]/70 text-[#FFFFFF] text-[11px] uppercase tracking-[0.18em] px-4 py-2 rounded-full">
      Más elegido
    </div>

    <div>

      <span className="text-[11px] lowercase tracking-[0.18em] text-[#ffffff]">
        orientación inicial
      </span>

      <h3
  className="mt-10 text-[28px] text-[#D6C1B0] md:text-[32px] leading-[0.95] tracking-[-0.03em] uppercase"
  style={{
    fontFamily: 'satoshi',
    fontWeight: 500
  }}
>
        PLAN GUIADO
      </h3>

      <p className="mt-8 text-[15px] leading-relaxed italic text-[#D6C1B0]">
        Para quienes quieren confirmar que están en el camino correcto antes de empezar.
      </p>

    </div>

    <div className="space-y-4 pt-8">

  <div className="flex items-start gap-3 text-[15px] text-[#ffffff]">
    <span>✓</span>
    <span>Acceso a protocolos</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#ffffff]">
    <span>✓</span>
    <span>Reserva directa</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#ffffff]">
    <span>✓</span>
    <span>Análisis corneométrico y diagnóstico</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Seguimiento continuo</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Prescripción dermocosmética</span>
  </div>

  <div className="flex items-start gap-3 text-[15px] text-[#999] opacity-50">
    <span>×</span>
    <span>Soporte wellness (suplementos, nutrición, fitness)</span>
  </div>


</div>
<div className="mt-8">
  <button
    id="plan-guiado-slider"
    onMouseMove={handleMoveGuiado}
    onMouseUp={handleEndGuiado}
    onMouseLeave={handleEndGuiado}
    onTouchMove={handleMoveGuiado}
    onTouchEnd={handleEndGuiado}
    className="
      relative
      w-full
      h-12
      rounded-full
      bg-[#B98B72]
      text-white
      overflow-hidden
      mt-8
    "
  >
    <span
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        text-[11px]
        uppercase
        tracking-[0.2em]
        pointer-events-none
      "
    >
      Consultar disponibilidad
    </span>

    <div
      onMouseDown={handleStartGuiado}
      onTouchStart={handleStartGuiado}
      style={{
        transform: `translateX(${positionGuiado}px) translateY(-50%)`,
      }}
      className="
        absolute
        left-2
        top-1/2
        w-10
        h-10
        rounded-full
        bg-white/40
        cursor-grab
        shadow-md
      "
    />
  </button>
</div>
  </div>

  {/* CLUB */}

  <div
  className="
    mt-[4px]
    rounded-[40px]
    relative
    overflow-visible
    border
    border-[#F3EFEA]
    bg-[#F3EFEA]
    bg-transparent
    backdrop-blur-xl
    p-10
    min-h-[620px]
    flex
    flex-col
    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
  "
>
  <div
  onClick={() => setShowPrice3(!showPrice3)}
  className="
  absolute
  top-25
  -right-4
  h-14
  bg-[#ffffff]
  rounded-tr-xl
  rounded-br-xl
  cursor-pointer
  flex
  items-center
  justify-center
  transition-all
  duration-300
  overflow-hidden
  "
  style={{
    width: showPrice3 ? "65px" : "24px"
  }}
>
  {showPrice3 && (
    <span className="text-white text-[12px] font-medium">
      50€/mes
    </span>
  )}
</div>
    <div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B98B72]/70 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.22em] px-4 py-2 rounded-full border border-white/10">
  Más completo
</div>

      <span className="text-[11px] tracking-[0.18em] text-[#ffffff]">
        acompañamiento continuo
      </span>

      <h3
  className="mt-10 text-[28px] md:text-[32px] text-[#D6C1B0] leading-[0.95] tracking-[-0.03em]"
  style={{
    fontFamily: 'satoshi',
    fontWeight: 500
  }}
>
        the<strong>skin</strong>fix CLUB
      </h3>

      <p className="mt-8 text-[15px] text-[#D6C1B0] italic leading-relaxed max-w-[280px]">
        Para aquellos que buscan resultados a largo plazo.
      </p>

</div>
    <div className="space-y-4 pt-14">

      <div className="flex items-start gap-3 text-[#ffffff] text-[15px] 999">
        <span>✓</span>
        <span>Acceso a protocolos</span>
      </div>

      <div className="flex items-start gap-3 text-[#ffffff] text-[15px]">
        <span>✓</span>
        <span>Reserva directa con prioridad</span>
      </div>

      <div className="flex items-start gap-3 text-[#ffffff] text-[15px]">
        <span>✓</span>
        <span>Análisis corneométrico y diagnóstico</span>
      </div>

      <div className="flex items-start gap-3 text-[#ffffff] text-[15px]">
        <span>✓</span>
        <span>Seguimiento continuo</span>
      </div>

<div className="flex items-start gap-3 text-[#ffffff] text-[15px]">
        <span>✓</span>
        <span>Prescripción dermocosmética</span>
      </div>

      <div className="flex items-start gap-3 text-[#ffffff] text-[15px]">
        <span>✓</span>
        <span>Soporte wellness (suplementos, nutrición, fitness)</span>
      </div>

<div className="mt-8">
        <button
          id="club-slider"
          onMouseMove={handleMoveClub}
          onMouseUp={handleEndClub}
          onMouseLeave={handleEndClub}
          onTouchMove={handleMoveClub}
          onTouchEnd={handleEndClub}
          className="
            relative
            w-full
            h-12
            rounded-full
            bg-[#B98B72]
            text-white
            overflow-hidden
            mt-8
          "
        >
          <span
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-[11px]
              uppercase
              tracking-[0.2em]
              pointer-events-none
            "
          >
            Consultar disponibilidad
          </span>

          <div
            onMouseDown={handleStartClub}
            onTouchStart={handleStartClub}
            style={{
              transform: `translateX(${positionClub}px) translateY(-50%)`,
            }}
            className="
              absolute
              left-2
              top-1/2
              w-10
              h-10
              rounded-full
              bg-white/40
              cursor-grab
              shadow-md
            "
          />
        </button>
      </div>

    </div>

  </div>

</div>
<button
  onClick={() => setShowTerms(true)}
  className="
    w-7
    h-7
    mt-5
    rounded-full
    border
    border-[#B98B72]/100
    text-[#B98B72]
    flex
    items-center
    justify-center
    text-[12px]
    opacity-90
    hover:opacity-100
    transition-all
  "
>
  i
</button>
{showTerms && (
  <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="max-w-md rounded-[28px] bg-[#F7F3EF] p-8 shadow-xl">
      
      <button
        onClick={() => setShowTerms(false)}
        className="float-right text-[#8B8072]"
      >
        ×
      </button>

      <h3 className="mb-4 text-[#B98B72] text-[26px]">
        información adicional
      </h3>

      <div className="space-y-3 text-sm text-[#5E534A] leading-relaxed">
<p>
          • Los <em>planes de recuperación</em> pueden modificarse en cualquier momento, siempre que se solicite con la antelación suficiente para su gestión y esta quede confirmada.
        </p>
        <p>
          • Los <em>protocolos</em> se presupuestan de forma independiente a los planes de recuperación.
        </p>
        <p>
          • El PLAN LIBRE incluye exclusivamente el protocolo seleccionado, es decir, el protocolo BASE.
        </p>

        <p>
          • El PLAN GUIADO añade un coste inicial por asesoría, independiente al coste del protocolo.
        </p>

        <p>
          
        </p>• the<strong>skin</strong>fix CLUB es un sistema de membresía mensual en la que el profesional realizará los ajustes necesarios para acompañar la evolución de cada caso.
         <p></p>
        <p>
          • La <em>prescripción dermocosmética</em> está incluida en the<strong>skin</strong>fix CLUB. Los productos recomendados no están incluidos y deberán ser adquiridos independientemente por el cliente.
        </p>
<div className="mt-6 pt-4 border-t border-[#B89B72]/20 text-center">
  <a
    href="https://wa.me/34618820842"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[14px] text-[#8A7B70] hover:text-[#A6564D] transition-colors"
  >
    ¿Alguna duda? Contáctenos.
  </a>
</div>
      </div>
    </div>
  </div>
)}
            </div>

          </div>

        </div>

      )}
      
<footer className="relative rounded-[6px] mx-6 mb-17 md:mx-19 mt-1 h-[300px] overflow-hidden">
  <img
    src="/footer-texture.webp"
    alt="Footer texture"
    className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-[1.02] contrast-[1.05]"
  />

  <div className="relative z-10 flex h-full items-end justify-between px-8 pb-8 text-[#5E534A]">
    <div>
  <span className="font-satoshi text-[#B98B72] text-[28px] leading-none">
    the<strong>skin</strong>fix™
  </span>

  <p className="text-sm text-[#B98B72] tracking-[0.13em] text-[11px] mt-0">
    CENTRO DE RECUPERACIÓN CUTÁNEA
  </p>
</div>



    

<div className="flex gap-6 text-sm text-[#847E78]">
  <a href="/terminos">Términos</a>
  <a href="/privacidad">Privacidad</a>
  <a href="/cookies">Cookies</a>

  <p className="text-sm text-[#B98B72]">
  Tenerife · España
</p>
</div>
  </div>
</footer>
<a
  href="https://wa.me/34618820842?text=Hola%20Ana,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20The%20Skin%20Fix."
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-6
    right-6
    z-50
    w-[320px]
    rounded-[24px]
    border
    border-[#E5DED5]
    bg-[#F9F8F6]
    p-5
    shadow-[0_20px_40px_rgba(0,0,0,0.12)]
    hover:translate-y-[-2px]
    transition-all
  "
>
  <div className="flex items-center gap-3 mb-3">
    <div className="w-3 h-3 rounded-full bg-[#7A9275]" />
    <div>
      <p className="text-[14px] font-medium text-[#5D534A]">
        Ana · The Skin Fix
      </p>

      <p className="text-[12px] text-[#8B8177]">
        Online
      </p>
    </div>
  </div>

  <p className="text-[15px] text-[#5D534A] leading-relaxed">
    Hola 👋
  </p>

  <p className="text-[15px] text-[#5D534A] leading-relaxed mt-1">
    ¿Necesitas ayuda?
  </p>

  <p className="text-[13px] text-[#8B8177] mt-3">
    Resolvemos tus dudas antes de empezar.
  </p>

  <div
    className="
      mt-4
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-[#B98B72]
      px-5
      py-3
      text-white
      text-[11px]
      uppercase
      tracking-[0.2em]
    "
  >
    Hablar por WhatsApp
  </div>
</a>
</div>

</>

)
}