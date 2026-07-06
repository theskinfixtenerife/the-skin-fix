"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function WelcomeGuide() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const closeGuide = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-6">

      <div className="w-full max-w-[620px] rounded-[32px] bg-[#FAF8F5] p-10 shadow-2xl">

        {/* LOGO */}
<div className="flex justify-center mb-10">
  <Image
  src="/tsf-logo.png"
  alt="The Skin Fix"
  width={0}
  height={0}
  sizes="100vw"
  className="w-[320px] h-auto"
/>
</div>


        <div className="mt-2 text-center">
          <p className="text-[#5B5047]">
            NO TRATAMOS SÍNTOMAS
          </p>

          <p className="font-medium text-[#5B5047]">
            CORREGIMOS CAUSAS
          </p>
        </div>

        <div className="my-8 h-px bg-[#E7DDD4]" />

        {/* PASOS */}

        <div className="relative pl-16">

  <div className="absolute left-[18px] top-4 bottom-4 w-px bg-[#D8C4B5]" />

  <div className="space-y-8">

    <div className="relative">
      <div className="absolute -left-16 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8CB] text-[#5B5047] font-semibold">
        1
      </div>

      <h3 className="text-sm uppercase tracking-[0.25em] text-[#B98B72] font-semibold">
        Explora
      </h3>

      <p className="mt-2 text-[#5B5047]">
        Descubre cómo trabajamos y qué podemos hacer por tu piel.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-16 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8CB] text-[#5B5047] font-semibold">
        2
      </div>

      <h3 className="text-sm uppercase tracking-[0.25em] text-[#B98B72] font-semibold">
        Elige tu plan
      </h3>

      <p className="mt-2 text-[#5B5047]">
        Selecciona el nivel de acompañamiento que mejor se adapte a ti.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-16 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8CB] text-[#5B5047] font-semibold">
        3
      </div>

      <h3 className="text-sm uppercase tracking-[0.25em] text-[#B98B72] font-semibold">
        Contacta con nosotros
      </h3>

      <p className="mt-2 text-[#5B5047]">
        Resolveremos tus dudas y te ayudaremos a comenzar.
      </p>
    </div>

    <div className="relative">
      <div className="absolute -left-16 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8CB] text-[#5B5047] font-semibold">
        4
      </div>

      <h3 className="text-sm uppercase tracking-[0.25em] text-[#B98B72] font-semibold">
        Comienza tu recuperación
      </h3>

      <p className="mt-2 text-[#5B5047]">
        Diseñaremos el camino más adecuado para tu piel.
      </p>
    </div>

  </div>

</div>

        <button
          onClick={closeGuide}
          className="mt-10 w-full rounded-full bg-[#C79A7B] py-4 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-[1.02]"
        >
          Comenzar
        </button>

      </div>

    </div>
  );
}