"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";



import Image from "next/image";
import Link from "next/link";

export default function SeguimientoPage() {
  const [showBoost, setShowBoost] = useState(false);
  const [showBoostInfo, setShowBoostInfo] = useState(false);
  return (
    <main className="bg-[#F7F4F1] text-[#111] min-h-screen">
  <Link
  href="/"
  className="
    group
    relative
    ml-14 mt-10
    inline-flex
    items-center
    px-3 py-2
    text-[13px]
    font-bold
    tracking-[0.25em]
    text-black
  "
>
  <span
    className="
      absolute
      left-0 top-0
      h-[1px] w-8
      bg-black
      transition-all duration-500
      group-hover:w-full
      group-hover:bg-[#BF5F56]
    "
  />

  <span
    className="
      absolute
      left-0 top-0
      h-8 w-[1px]
      bg-black
      transition-all duration-500
      group-hover:h-full
      group-hover:bg-[#BF5F56]
    "
  />

  <span
    className="
      absolute
      right-0 bottom-0
      h-[1px] w-8
      bg-black
      transition-all duration-500
      group-hover:w-full
      group-hover:bg-[#BF5F56]
    "
  />

  <span
    className="
      absolute
      right-0 bottom-0
      h-8 w-[1px]
      bg-black
      transition-all duration-500
      group-hover:h-full
      group-hover:bg-[#BF5F56]
    "
  />

  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#BF5F56]">
    Inicio
  </span>
</Link>

  {/* ==========================================================
      HERO
  ========================================================== */}

  <section className="px-3 pt-6 pb-0">
   
      <div className="grid lg:grid-cols-[0.92fr_1.08fr] items-end h-[860px]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
transition={{
  duration: 1.4,
  ease: [0.22, 1, 0.36, 1],
}}
          className="px-12 lg:px-24 py-8 lg:py-12"
        >
          <div className="flex items-end gap-2 mb-100">
  <Image
  src="/tsf-logo.png"
  alt="The Skin Fix"
  width={150}
  height={52}
  className="h-[32px] w-auto"
/>

  <span
    className="mb-[3px] text-[11px] uppercase tracking-[0.38em] text-[#5B524D]"
    style={{ fontFamily: "satoshi", fontWeight: 600 }}
  >
    CLUB™
  </span>
</div>

          <div className="flex flex-col items-start gap-8 -translate-y-70 mt-10">

            <h1
  className="
    text-[64px]
    lg:text-[86px]
    leading-[0.82]
    tracking-[-0.07em]
    text-[#2C2725]
    uppercase
    mb-8
  "
  style={{ fontFamily: "satoshi", fontWeight: 700 }}
>
  RECUPERA
  <br />
  TU PIEL
</h1>

            <div className="space-y-3 -translate-y-8">
              

              <p
  className="max-w-[430px] text-[22px] leading-[1.55] text-[#5B524D]"
  style={{ fontFamily: "Thasadith", fontWeight: 400 }}
>
  Con la primera suscripción de seguimiento profesional para recuperar y mantener tu piel a largo plazo
</p>
            </div>

            <button
              className="
                group relative overflow-hidden
                inline-flex items-center justify-center
                h-14 w-[260px]
                rounded-full
                bg-[#BF5F56]
                border border-[#D39A82]
                text-white
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.28em]
                transition-all duration-500
                hover:-translate-y-[2px]
                hover:bg-[#D77E6E]
                hover:shadow-[0_20px_45px_rgba(198,145,120,0.25)]
                -mt-2
              "
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent"></span>

              <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[340px]"></span>

              <span className="relative z-10">SOLICITA ACCESO</span>
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="origin-bottom translate-y-12 lg:-translate-y-14"
>
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
            className="origin-bottom -translate-y-10"
          >
            <Image
              src="/chicabuenaclub.png"
              alt="Club"
              width={720}
              height={920}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

      </div>
    
  </section>


    
{/* ==========================================================
    PHILOSOFÍA
========================================================== */}

<section className="bg-white py-40">

  <div className="max-w-[1200px] mx-auto px-8">

    

    <motion.h2
  className="-mt-8 text-[#000000] leading-[0.88] tracking-[-0.06em] text-center"
  style={{
    fontFamily: "satoshi",
    fontWeight: 700,
    fontSize: "clamp(44px,5.5vw,80px)",
  }}
  initial={{
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  viewport={{ once: true, amount: 0.8 }}
  transition={{
    duration: 3,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Tu piel
  <br />
  no necesita
  <br />
  más
</motion.h2>

    

  </div>

</section>

<section className="bg-black overflow-hidden">
  <div className="relative h-[72vh] min-h-[560px] flex items-center justify-center">


    {/* Barrido 1 */}
    <motion.div
      className="absolute inset-y-0 w-[28%] bg-white/18 blur-3xl z-10"
      initial={{ x: "-140%" }}
      whileInView={{
        x: ["-140%", "140%"],
        transition: {
          duration: 0.65,
          delay: 0.18,
          ease: "linear",
        },
      }}
      viewport={{ once: true }}
    />

    {/* Barrido 2 */}
    <motion.div
      className="absolute inset-y-0 w-[22%] bg-white/10 blur-[90px] z-10"
      initial={{ x: "140%" }}
      whileInView={{
        x: ["140%", "-140%"],
        transition: {
          duration: 0.75,
          delay: 0.95,
          ease: "linear",
        },
      }}
      viewport={{ once: true }}
    />

    

    {/* Texto principal */}
    <div className="relative z-20 text-center">

      <motion.div
        initial={{
          opacity: 0,
          scale: 2.4,
          rotate: -8,
          y: -180,
          filter: "blur(22px)",
        }}
        whileInView={{
          opacity: [0, .25, 1, .85, 1],
          scale: [2.4, 1.6, .82, 1.05, 1],
          rotate: [-8, 5, -2, .5, 0],
          y: [-180, -80, 22, -6, 0],
          filter: [
            "blur(22px)",
            "blur(12px)",
            "blur(0px)",
            "blur(0px)",
            "blur(0px)"
          ],
        }}
        transition={{
          duration: 1.35,
          times: [0, .18, .48, .75, 1],
        }}
        viewport={{ once: true }}
        className="text-[clamp(44px,8vw,80px)] font-bold text-white leading-[0.82] tracking-[-0.08em]"
      >
        necesita
      </motion.div>

      <motion.div
  initial={{
    opacity: 0,
    scale: .45,
    rotate: 8,
    y: 120,
    filter: "blur(14px)",
  }}
  whileInView={{
    opacity: [0, .3, 1, .9, 1],
    scale: [.45, .85, 1.15, .98, 1],
    rotate: [8, -4, 1.5, -.3, 0],
    y: [120, 45, -12, 4, 0],
    filter: [
      "blur(14px)",
      "blur(6px)",
      "blur(0px)",
      "blur(0px)",
      "blur(0px)"
    ],
  }}
  transition={{
    duration: 1.05,
    delay: 0.05,
    times: [0, .18, .45, .72, 1],
  }}
  viewport={{ once: true }}
  className="text-[clamp(58px,8vw,150px)] font-bold text-white leading-[0.82] tracking-[-0.08em]"
>
  mejor
</motion.div>

    </div>

  </div>
</section>

{/* ==========================================================
    QUE INCLUYE EL CLUB
========================================================== */}


<section className="bg-white py-12 px-8">

 <motion.div
  className="max-w-[1300px] mx-auto rounded-[8px] bg-[#F7F4F1] text-black py-24 px-10 lg:px-16"
  initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
viewport={{ once: true, amount: 0.4 }}
transition={{
  duration: 1.4,
  ease: [0.22, 1, 0.36, 1],
}}
>

    

    <h2
      className="mt-8 uppercase leading-[0.20] text-center tracking-[-0.06em]"
      style={{
        fontFamily: "satoshi",
        fontWeight: 700,
        fontSize: "clamp(40px,4.8vw,80px)"
      }}
    >

      ¿qué incluye el <span className="relative inline-block">
  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.9,
      ease: "easeOut",
    }}
    className="absolute left-[-0px] right-[-3px] top-[-74%] h-[0.48em] origin-left"
    style={{
      backgroundColor: "#D77E6E",
      zIndex: 0,
    }}
  />

  <span className="relative z-10">
    CLUB
  </span>
</span>?

    </h2>

    <div className="grid lg:grid-cols-2 gap-x-8 gap-y-8 mt-20">

      {/* 01 */}

      <div className="border-t border-white/10 pt-8">

        

        <h3 className="mt-4 ml-12 text-[28px] font-bold tracking-[-0.05em]">

          prioridad
          en tus citas

        </h3>

        <p className="mt-2 ml-12 text-[#B3A99D] text-[18px] leading-relaxed"
        style={{ fontFamily: "Thasadith", fontWeight: 400 }}>

          Acceso prioritario a agenda y nueva disponibilidad

        </p>

      </div>

      {/* 02 */}

      <div className="border-t border-white/10 pt-8">

        

        <h3 className="mt-4 text-[28px] ml-8 font-black tracking-[-0.05em]">

          análisis corneométrico
          

        </h3>

        <p className="mt-2 text-[#B3A99D] ml-8 text-[18px] leading-relaxed"
        style={{ fontFamily: "Thasadith", fontWeight: 400 }}>

          Descubre alteraciones invisibles y patrones biológicos de tu piel

        </p>

      </div>

      {/* 03 */}
<div className="border-t border-white/10 pt-8">

        

        <h3 className="mt-4 ml-12 text-[28px] font-black tracking-[-0.05em]">

          seguimiento
          continuo

        </h3>

        <p className="mt-2 ml-12 text-[#B3A99D] text-[18px] leading-relaxed"
        style={{ fontFamily: "Thasadith", fontWeight: 400 }}>

          Monitorizamos tus resultados y evolución a largo plazo

        </p>

      </div>
     

      {/* 04 */}
<div className="border-t border-white/10 pt-8">

        

        <h3 className="mt-4 ml-8 text-[28px] font-black tracking-[-0.05em]">

          prescripción
          dermocosmética

        </h3>

        <p className="mt-2 ml-8 text-[#B3A99D] text-[18px] leading-relaxed"
        style={{ fontFamily: "Thasadith", fontWeight: 400 }}>

          Apoya tu recuperación con una rutina específica para ti

        </p>

      </div>
      

      {/* 05 */}
<div className="border-t border-white/10 pt-8">

        

        <h3 className="mt-4 text-[28px] ml-12 font-black tracking-[-0.05em]">

          THE BOOST
          BAR™

        </h3>

        <p className="mt-2 text-[#B3A99D] ml-12 text-[18px] leading-relaxed"
        style={{ fontFamily: "Thasadith", fontWeight: 400 }}>

          Nutricosmética, apoyo nutricional y hábitos para elevar resultados

        </p>

      </div>
      

      {/* 06 */}

       <div className="border-t border-white/10 pt-8">

        

        <h3 className="mt-4 text-[28px] ml-8 font-black tracking-[-0.05em]">

          boost
          mensual

        </h3>

        <p className="mt-2 text-[#B3A99D] ml-8 text-[18px] leading-relaxed"
        style={{ fontFamily: "Thasadith", fontWeight: 400 }}>

          Disfruta cada mes de un tratamiento incluido en tu membresía

        </p>

      </div>

    </div>

 </motion.div>

</section>
{/* ==========================================================
   the boost bar
========================================================== */}

<section className="bg-white py-0">

  <div className="max-w-[1200px] mx-auto px-8 pb-10">

    
<motion.div
  className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] items-center gap-16 translate-x-10"
  initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
  }}
>

  {/* TEXTO */}
  <div className="max-w-[640px]">

    <h2
      className="mt-10 text-[#111] leading-[0.82] tracking-[-0.07em]"
      style={{
        fontFamily: "satoshi",
        fontWeight: 700,
        fontSize: "clamp(52px,6vw,72px)"
      }}
    >
      <br />
      THE BOOST 
      <br />
      BAR™
    </h2>

    <p
      className="mt-14 max-w-[640px] text-[20px] leading-relaxed text-[#111]"
      style={{ fontFamily: "Thasadith", fontWeight: 400 }}
    >
      Todo lo que ocurre entre una cita y la siguiente determina los resultados en tu piel. The boost bar es tu espacio exclusivo de recuperación cutánea.

      <br />
      <br />
    </p>

    <button
      onClick={() => {
        setShowBoost(!showBoost);

        if (!showBoost) {
          setTimeout(() => {
            window.scrollBy({
              top: 250,
              behavior: "smooth",
            });
          }, 250);
        }
      }}
      className="group mt-6 inline-flex items-center gap-3 rounded-full border border-[#BF5F56]/80 bg-transparent px-10 py-[18px] text-[13px] font-medium uppercase tracking-[0.32em] text-[#BF5F56] transition-all duration-300 hover:border-[#BF5F56] hover:bg-[#BF5F56]
hover:text-white hover:shadow-[0_8px_24px_rgba(198,145,120,0.12)] hover:-translate-y-0.5"
    >
      {showBoost ? "VOLVER" : "DESCUBRE MÁS"}
    </button>

  </div>

  {/* FOTO */}
  <div className="relative mt-10 w-[500px] aspect-square rounded-[8px] overflow-hidden shrink-0">
    <Image
      src="/collageclub.png"
      alt="Boost Bar"
      fill
      className="object-cover"
    />
  </div>

</motion.div>
      </div>
</section>

{/* ==========================================================
|  THE BOOST BAR · QUÉ APRENDERÁS
========================================================== */}


  <AnimatePresence>

{showBoost && (

<motion.div
  initial={{
    opacity:0,
    height:0
  }}
  animate={{
    opacity:1,
    height:"auto"
  }}
  exit={{
    opacity:0,
    height:0
  }}
  transition={{
    duration:.9,
    ease:[0.22,1,0.36,1]
  }}
  className="overflow-hidden"
>

<div
  id="boost-content"
  className="mx-auto mt-10 mb-28 max-w-[1300px] rounded-[10px] bg-[#0F0F10] px-16 py-14 text-white"
>

  <p className="text-center text-[12px] uppercase tracking-[0.45em] text-[#CE8273]">
    APRENDERÁS...
  </p>

  <div className="mt-10 grid grid-cols-5 border-t border-white">

    <div className="flex flex-col items-center text-center border-r border-white px-6 py-10">
      <h3 className="text-[24px] font-semibold">
        nutrición
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-[#E8DCCB]"
      style={{ fontFamily: "Thasadith", fontWeight: 400 }}>
        ...a comer para acelerar la recuperación de tu piel
      </p>
    </div>

    <div className="flex flex-col items-center text-center border-r border-white px-6 py-10">
      <h3 className="text-[24px] font-semibold">
        suplementación
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-[#E8DCCB]"
      style={{ fontFamily: "Thasadith", fontWeight: 400 }}>
        ...qué suplementos utilizar, cuáles evitar y cuándo realmente tienen sentido
      </p>
    </div>

    <div className="flex flex-col items-center text-center border-r border-white px-6 py-10">
      <h3 className="text-[24px] font-semibold">
        hábitos
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-[#E8DCCB]"
      style={{ fontFamily: "Thasadith", fontWeight: 400 }}>
        ...técnicas de descanso, manejo de estrés, ejercicio y rutinas que favorecen la reparación biológica
      </p>
    </div>

    <div className="flex flex-col items-center text-center border-r border-white px-6 py-10">
      <h3 className="text-[24px] font-semibold">
        entorno
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-[#E8DCCB]"
      style={{ fontFamily: "Thasadith", fontWeight: 400 }}>
        ...cómo reducir los factores externos que ralentizan la recuperación
      </p>
    </div>

   <div className="flex flex-col items-center text-center px-6 py-10">
      <h3 className="text-[24px] font-semibold">
        autonomía
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-[#E8DCCB]"
      style={{ fontFamily: "Thasadith", fontWeight: 400 }}>
        ...a interpretar tu piel para saber cuándo está mejorando y cuándo necesita cambios
      </p>
    </div>

  </div>

  <div className="mt-10 border-t border-white pt-8">

    <p className="text-center text-[14px] uppercase tracking-[0.35em] text-[#ffffff]">

      UN ENFOQUE 360º PARA RESULTADOS

      <span className="text-[#CE8273]">
        {" "}DURADEROS
      </span>

    </p>

  </div>

</div>
  </motion.div>

)}
</AnimatePresence>


<section className="bg-white py-16">

  <motion.div
  className="relative mx-auto w-full max-w-[1050px] overflow-hidden"
  initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 1.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  style={{
    backgroundImage: "url('/clubclub.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

    {/* Capa crema */}
    <div className="absolute inset-0 bg-[#EFE8E1]/88"></div>

    {/* Contenido */}
    <div className="relative z-10 px-20 py-14">

      <div className="relative text-center">

  <button
    onClick={() => setShowBoostInfo(!showBoostInfo)}
    className="absolute right-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#CE8273] text-[15px] font-semibold text-[#CE8273] transition hover:bg-[#CE8273] hover:text-white"
    aria-label="Información del Boost Menu"
  >
    i
  </button>

  <h2
    className="leading-[0.82] tracking-[-0.07em]
    "
    style={{
  fontFamily: "Thasadith",
  fontSize: "clamp(42px,5.5vw,82px)",
  color: "#D77E6E",
  fontWeight: 700,
}}
  >
    boost menu
  </h2>
<AnimatePresence>
  {showBoostInfo && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="mx-auto mt-6 max-w-[760px] rounded-[8px] border border-[#DCCFC7] bg-white/90 p-6 text-left backdrop-blur-sm"
    >
      <h3 className="text-[15px] text-center font-bold tracking-[0.18em] text-[#CE8273]">
        información antes del tratamiento
      </h3>

      <ul className="mt-4 space-y-3 text-[14px] leading-7 text-[#555]">
        <li>• El Boost Menu forma parte de los beneficios exclusivos de The Skin Fix Club.</li>

        <li>• Los tratamientos se realizan sin un diagnóstico específico previo, por lo que la elección corresponde al cliente.</li>

        <li>• Una vez iniciado el tratamiento, no podrá modificarse, sustituirse ni repetirse durante ese mismo mes.</li>

        <li>• Si el tratamiento elegido no es de tu preferencia, podrás seleccionar uno diferente en tu siguiente Boost mensual.</li>

        <li>• La duración de estos tratamientos es inferior a la de los Protocolos de Recuperación y está orientada al mantenimiento, bienestar y potenciación de resultados.</li>

        <li>• Los tratamientos del Boost Menu no son canjeables por otros servicios, descuentos ni compensaciones económicas.</li>
        <li>• Los tratamientos del Boost Menu se modifican constantemente.</li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
</div>

     

        

      {/* ITEM */}

      <div className=" mt-8 flex justify-between items-center py-6 border-b border-[#D77E6E]/30 group cursor-pointer">

        <div className="pl-8">

          

          <h3
            className="leading-none tracking-[-0.04em]"
            style={{
              fontFamily: "satoshi",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            Face brushing
          </h3>

   <p
  className="mt-3 tracking-[0.22em] text-[18px] text-[#FFF8E8]"
 style={{
  fontFamily: "Thasadith",
  fontWeight: 700,
  textShadow: "0 0 10px rgba(215, 126, 110, 0.55)"
}}
>
  DRENAJE LINFÁTICO x DETOX x LUMINOSIDAD
</p>
        </div>

        <div className="pr-6">
          <span className="uppercase tracking-[0.25em] text-[11px] text-[#E5AE9B]">
            INCLUIDO EN TU MEMBRESÍA
          </span>
        </div>

      </div>

      {/* ITEM */}

      <div className="flex justify-between items-center py-6 border-b border-[#D77E6E]/30 group cursor-pointer">

        <div className="pl-8">

          

          <h3
            className="leading-none tracking-[-0.04em]"
            style={{
              fontFamily: "satoshi",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            Eye recovery
          </h3>
<p
  className="mt-3 tracking-[0.22em] text-[18px] text-[#FFF8E8]"
  style={{
  fontFamily: "Thasadith",
  fontWeight: 700,
  textShadow: "0 0 10px rgba(215, 126, 110, 0.55)"
}}
>
  BOLSAS x OJERAS x HIDRATACIÓN
</p>


        </div>

        <div className="pr-6">
          <span className="uppercase tracking-[0.25em] text-[11px] text-[#E5AE9B]">
            INCLUIDO EN TU MEMBRESÍA
          </span>
        </div>

      </div>

      {/* ITEM */}

      <div className="flex justify-between items-center py-6 border-b border-[#D77E6E]/30">

        <div className="pl-8">

          

          <h3
            className="leading-none tracking-[-0.04em]"
            style={{
              fontFamily: "satoshi",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            Hyalu-lips
          </h3>
<p
  className="mt-3 tracking-[0.22em] text-[18px] text-[#FFF8E8]"
  style={{
  fontFamily: "Thasadith",
  fontWeight: 700,
  textShadow: "0 0 10px rgba(215, 126, 110, 0.55)"
}}
>
   HIDRATACIÓN x MEJORA DE LÍNEAS x VOLUMEN
</p>

        </div>

        <div className="pr-6">
          <span className="uppercase tracking-[0.25em] text-[11px] text-[#E5AE9B]">
            INCLUIDO EN TU MEMBRESÍA
          </span>
        </div>

      </div>

      {/* ITEM */}

      <div className="flex justify-between items-center py-6 border-b border-[#D77E6E]/30">

        <div className="pl-8">

          

          <h3
            className="leading-none tracking-[-0.04em]"
            style={{
              fontFamily: "satoshi",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            Led light biotherapy
          </h3>
<p
  className="mt-3 tracking-[0.22em] text-[18px] text-[#FFF8E8]"
  style={{
  fontFamily: "Thasadith",
  fontWeight: 700,
  textShadow: "0 0 10px rgba(215, 126, 110, 0.55)"
}}
>
   REPARACIÓN x CALMA x REGENERACIÓN
</p>
      

        </div>

        <div className="pr-6">
          <span className="uppercase tracking-[0.25em] text-[11px] text-[#E5AE9B]">
            INCLUIDO EN TU MEMBRESÍA
          </span>
        </div>

      </div>

      {/* ITEM */}

      <div className="flex justify-between items-center py-6 border-b border-[#D77E6E]/30">

        <div className="pl-8">

          

          <h3
            className="leading-none tracking-[-0.04em]"
            style={{
              fontFamily: "satoshi",
              fontWeight: 700,
              fontSize: "28px",
            }}
          >
            Ice facial
          </h3>
<p
  className="mt-3 tracking-[0.22em] text-[18px] text-[#FFF8E8]"
  style={{
  fontFamily: "Thasadith",
  fontWeight: 700,
  textShadow: "0 0 10px rgba(215, 126, 110, 0.55)"
}}
>
   REAFIRMANTE x DESCONGESTIVO x DESCANSO
</p>

        </div>

        <div className="pr-6">
          <span className="uppercase tracking-[0.25em] text-[11px] text-[#E5AE9B]">
            INCLUIDO EN TU MEMBRESÍA
          </span>
        </div>

      </div>

    </div>

  </motion.div>
<p
  className="mt-10 text-center italic text-[18px] leading-relaxed text-[#D8CFC7]"
  style={{
    fontFamily: "Thasadith",
    fontWeight: 400,
  }}
>
  Si el tratamiento elegido no es adecuado para tu piel, el profesional te recomendará la opción más indicada para ti
</p>
</section>


{/* FOOTER CTA */}

<section className="mt-8 mb-8">
  <div className="relative max-w-[1350px] mx-auto px-8 overflow-hidden">
    
    <div className="rounded-[8px] bg-[#F7F4F1] px-20 py-12">

      <div className="mt-12 flex justify-center">
  <a
  href="https://wa.me/34618820842?text=Hola.%20Me%20interesa%20formar%20parte%20de%20The%20Skin%20Fix%20Club.%20%C2%BFPodr%C3%ADan%20explicarme%20c%C3%B3mo%20funciona?"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    bg-[#BF5F56]
    px-12
    py-4
    text-[13px]
    font-medium
    uppercase
    tracking-[0.25em]
    text-white
    border
    border-white/20
    transition-all
    duration-300
    ease-out
    shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_14px_35px_rgba(94,74,58,0.18)]
    hover:bg-[#DBA185]
    hover:-translate-y-[2px]
    hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_22px_45px_rgba(94,74,58,0.28)]
    inline-flex
    items-center
    justify-center
  "
>
  ELEGIR PLAN
</a>
</div>

      <div
  className="mt-20 pt-8 flex items-center justify-between text-[13px] tracking-[0.15em] text-[#8E847F]"
  style={{
    borderTop: "3px solid rgba(255,255,255,.75)",
  }}
>

        <Image
           src="/tsf-logo.png"
           alt="the skin fix"
           width={140}
           height={32}
           className="h-[28px] w-auto opacity-90 object-contain"
         />

        <div className="flex gap-10">

          <a
            href="/diagnostico"
            className="uppercase tracking-[0.18em] hover:opacity-70 transition"
          >
            DIAGNÓSTICO
          </a>

          <a
            href="/protocolo"
            className="uppercase tracking-[0.18em]  hover:opacity-70 transition"
          >
            PROTOCOLO
          </a>

          <a
            href="/seguimiento"
            className="uppercase tracking-[0.18em] text-[#000000] hover:opacity-70 transition"
          >
            SEGUIMIENTO
          </a>

        </div>

      </div>

    </div>
  </div>
</section>
    </main>
  );
}

