"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


export default function WelcomeGuide() {
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
  const seen = sessionStorage.getItem("welcomeShown");

  if (!seen) {
    setOpen(true);
  }
}, []);

  const closeGuide = () => {
 sessionStorage.setItem("welcomeShown", "true");
  setOpen(false);
};
  

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">

      <div className="w-full max-w-[620px] rounded-[6px] bg-[#FAF8F5] px-6 py-5 sm:px-10 sm:py-6 shadow-2xl max-h-[94dvh] overflow-y-auto my-auto">
        


<div className="py-8">

  <div className="flex flex-col items-center mb-12">

  <Image
    src="/tsf-logo.png"
    alt="The Skin Fix"
    width={220}
    height={60}
    className="h-auto w-[220px]"
  />

  <p className="mt-3 text-[12px] uppercase tracking-[0.25em] text-[#5B5047]">
    RECUPERACIÓN CUTÁNEA
  </p>

</div>

  {/* INTRODUCCIÓN EDITORIAL */}

<div className="mt-2 mb-8">

  {/* 01 — EXPLORA */}
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
    className="grid grid-cols-[36px_minmax(0,1fr)] gap-5 border-b border-[#E9E3DD] py-6"
  >
    <span className="pt-0.5 font-mono text-xs text-[#C99479]">
      01
    </span>

    <div>
      <h3 className="text-sm font-medium tracking-tight text-[#252321]">
        Explora
      </h3>

      <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#756D66]">
        Conoce nuestra filosofía, nuestros tratamientos y cómo trabajamos.
      </p>
    </div>
  </motion.div>

  {/* 02 — ELIGE */}
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2.2, duration: 1.2, ease: "easeOut" }}
    className="grid grid-cols-[36px_minmax(0,1fr)] gap-5 border-b border-[#E9E3DD] py-6"
  >
    <span className="pt-0.5 font-mono text-xs text-[#C99479]">
      02
    </span>

    <div>
      <h3 className="text-sm font-medium tracking-tight text-[#252321]">
        Elige tu nivel de acompañamiento
      </h3>

      <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#756D66]">
        Decide cómo quieres abordar la recuperación de tu piel.
      </p>
    </div>
  </motion.div>

  {/* 03 — CONTACTA */}
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 3.4, duration: 1.2, ease: "easeOut" }}
    className="grid grid-cols-[36px_minmax(0,1fr)] gap-5 border-b border-[#E9E3DD] py-6"
  >
    <span className="pt-0.5 font-mono text-xs text-[#C99479]">
      03
    </span>

    <div>
      <h3 className="text-sm font-medium tracking-tight text-[#252321]">
        Cuéntanos tu caso
      </h3>

      <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#756D66]">
        Contacta con nosotros para resolver tus dudas y orientarte.
      </p>
    </div>
  </motion.div>

  {/* 04 — RECUPERA */}
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 4.6, duration: 1.2, ease: "easeOut" }}
    className="grid grid-cols-[36px_minmax(0,1fr)] gap-5 py-6"
  >
    <span className="pt-0.5 font-mono text-xs text-[#C99479]">
      04
    </span>

    <div>
      <h3 className="text-sm font-medium tracking-tight text-[#252321]">
        Empieza tu recuperación
      </h3>

      <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#756D66]">
        Define el camino más adecuado para las necesidades de tu piel.
      </p>
    </div>
  </motion.div>

</div>

  <button
    onClick={closeGuide}
    className="mt-2 w-full rounded-full bg-[#D0A48E] py-3 text-sm font-medium uppercase tracking-[0.2em] text-white"
  >
    Descubre
  </button>

</div>



        

      </div>

    </div>
  );
}
