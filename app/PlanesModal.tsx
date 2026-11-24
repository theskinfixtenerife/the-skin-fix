"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type PlanesModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  showTerms: boolean;
  setShowTerms: React.Dispatch<React.SetStateAction<boolean>>;

  showPrice1: boolean;
  setShowPrice1: React.Dispatch<React.SetStateAction<boolean>>;

  showPrice2: boolean;
  setShowPrice2: React.Dispatch<React.SetStateAction<boolean>>;

  showPrice3: boolean;
  setShowPrice3: React.Dispatch<React.SetStateAction<boolean>>;

  position: number;
  positionGuiado: number;
  positionClub: number;

  handleMove: any;
  handleEnd: any;
  handleStart: any;

  handleMoveGuiado: any;
  handleEndGuiado: any;
  handleStartGuiado: any;

  handleMoveClub: any;
  handleEndClub: any;
  handleStartClub: any;

  triggerPlanLibre?: () => void;
  triggerPlanGuiado?: () => void;
  triggerPlanClub?: () => void;
};

export default function PlanesModal({
  open,
  setOpen,

  showTerms,
  setShowTerms,

  showPrice1,
    setShowPrice1,

  showPrice2,
  setShowPrice2,

  showPrice3,
  setShowPrice3,

  position,
  positionGuiado,
  positionClub,

  handleMove,
  handleEnd,
  handleStart,

  handleMoveGuiado,
  handleEndGuiado,
  handleStartGuiado,

  handleMoveClub,
  handleEndClub,
  handleStartClub,

  triggerPlanLibre,
  triggerPlanGuiado,
  triggerPlanClub,
}: PlanesModalProps) {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#382722]/55 backdrop-blur-sm">

<div className="min-h-screen flex items-center justify-center p-2 sm:px-4 pb-8">
          <div
className="relative w-full max-w-[1230px] max-h-[94vh] overflow-y-auto overflow-x-hidden rounded-[12px] border border-[#F5EEE7]/15 p-4 sm:px-8 sm:py-6"            style={{
              backgroundImage: "url('/planes.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
                        {/* Luces */}

            <div
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[180px]"
              style={{
                background: "rgba(255,246,236,.14)",
              }}
            />

            <div
              className="absolute top-10 right-[-150px] w-[500px] h-[500px] rounded-full blur-[140px]"
              style={{
                background: "rgba(215,198,180,.06)",
              }}
            />

            <div
              className="absolute bottom-[-100px] left-[-100px] w-[550px] h-[550px] rounded-full blur-[150px]"
              style={{
                background: "rgba(90,78,70,.05)",
              }}
            />

            {/* Oscurecedor */}

            <div
              className="absolute inset-0 rounded-[12px]"
              style={{
                overflow: "hidden",
                background:
                  "radial-gradient(circle at center, transparent 35%, rgba(0,0,0,.35) 100%)",
              }}
            />

            {/* Contenido */}

            <div className="relative z-10">
                              {/* Botón cerrar */}

              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  top-6
                  right-6
                  text-[#999]
                  text-2xl
                  transition-opacity
                  hover:opacity-70
                "
              >
                ×
              </button>

              {/* Cabecera */}
              <div className="mx-auto max-w-xl text-center pt-2 pb-2">
                
                  
                  
                
              </div>
                            {/* Grid */}

              <div
  className="
    mx-auto
    mt-10
    max-w-[1080px]
    grid
    gap-8
    justify-center
    items-stretch
    overflow-visible
  "
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 320px))",
    overflow: "visible",
  }}
>

                {/* ========================================================= */}
                {/* PLAN LIBRE                                                 */}
                {/* ========================================================= */}

                <div
                  className="
                    relative
                    -top-2
                    plan-card-content
                    plan-card-libre
                    mt-[4px]
                    w-[320px]
                    h-full
                    min-h-[560px]
                    rounded-[40px]
                    overflow-visible

                    border
                    border-[#D9BCAF]
                    bg-[linear-gradient(155deg,#FFF9F4_0%,#F2E4DA_100%)]
                    shadow-[0_20px_50px_rgba(77,47,39,0.18)]

                    p-8
                    flex
                    flex-col
                    justify-between
                    transition-all duration-500 hover:-translate-y-1 hover:border-[#B87565] hover:shadow-[0_24px_55px_rgba(77,47,39,0.25)]
                  "
                >
                                      {/* Precio lateral */}

                  <div
                    onClick={() => setShowPrice1(!showPrice1)}
                    className="
                      absolute
                      top-25
                      -right-6
                      h-12
                      skin-price-tab
                      rounded-tr-xl
                      rounded-br-xl
                      cursor-pointer
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      transition-all
                      duration-300
                    "
                    style={{
                      width: showPrice1 ? "48px" : "24px",
                      right: showPrice1 ? "-16px" : "-24px",
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

                    <div className="h-[160px] pt-3">
                    <h3
                      className="plan-card-title
                        text-center
                        mt-2
                        whitespace-nowrap
                        text-[30px]
                        md:text-[32px]
                        leading-[1.05]
                        tracking-[0.01em]
                        uppercase
                        text-[#8C563B]
                      "
                      style={{
                        fontWeight: 900,
                      }}
                    >
                      PLAN LIBRE
                    </h3>

                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="plan-card-description
                        mt-2
                        text-center
                        max-w-[245px] mx-auto
                        text-[16px]
                        leading-[1.45]
                        text-[#59433D]
                        h-[76px]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      Cuida tu piel a tu ritmo con tu propio criterio
                    </motion.p>
                  </div>
                  </div>

                    <div className="flex-1 space-y-2.5 border-t border-[#D8C3A8]/80 pt-4">

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#49352F]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B87565]/15 text-[11px] text-[#A35F52]">✓</span>
                      <span>Acceso a nuestros protocolos de recuperación</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Análisis corneométrico para orientar cada etapa</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Seguimiento continuo de la evolución de tu piel</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Prescripción dermocosmética personalizada</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Acceso a THE BOOST BAR™: suplementos, nutrición y fitness</span>
                    </div>

                  </div>

                  <div className="mt-auto pt-6">
                    <button
                      id="plan-libre-slider"
                      onClick={() => {
                        if (position === 0 && triggerPlanLibre) triggerPlanLibre();
                      }}
                      onMouseMove={handleMove}
                      onMouseUp={handleEnd}
                      onMouseLeave={handleEnd}
                      onTouchMove={handleMove}
                      onTouchEnd={handleEnd}
                      className="
                        plan-reserve-button
                        relative
                        w-full
                        h-12
                        rounded-full

                        bg-[#F7EFE7]/10
                        backdrop-blur-xl

                        border
                        border-white/15

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.30)]

                        text-white
                        overflow-hidden
                        cursor-pointer
                      "
                    >
                      <span
                        className="plan-card-cta-label
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          pointer-events-none
                          text-white/90
                        "
                      >
                        Reserva tu PLAN LIBRE
                      </span>

                      <div
                        onMouseDown={handleStart}
                        onTouchStart={handleStart}
                        style={{
                          transform: `translateX(${position}px) translateY(-50%)`,
                          transition: position === 0 || position >= 200 ? "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
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

                {/* ========================================================= */}
                {/* PLAN GUIADO                                               */}
                {/* ========================================================= */}

                <div
                  className="
                    relative
                    -top-2
                    plan-card-content
                    plan-card-guided
                    mt-[4px]
                    w-[320px]
                    h-full
                    min-h-[560px]
                    rounded-[40px]
                    overflow-visible

                    border
                    border-[#C6946C]
                    bg-[linear-gradient(155deg,#FFF7F2_0%,#EED7CD_100%)]
                    shadow-[0_22px_55px_rgba(111,62,52,0.22)]

                    p-8
                    flex
                    flex-col
                    justify-between
                    transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(111,62,52,0.3)]
                  "
                >

                  {/* Precio lateral */}

                  <div
                    onClick={() => setShowPrice2(!showPrice2)}
                    className="
                      absolute
                      top-25
                      -right-6
                      h-12
                      skin-price-tab
                      rounded-tr-xl
                      rounded-br-xl
                      cursor-pointer
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      transition-all
                      duration-300
                    "
                    style={{
                      width: showPrice2 ? "48px" : "24px",
                      right: showPrice2 ? "-16px" : "-24px",
                    }}
                  >
                    {showPrice2 && (
                      <span className="text-white text-[12px] font-semibold">
                        +20€
                      </span>
                    )}
                  </div>

                  {/* Badge */}

                  <div
                    className="
                      absolute
                      -top-5
                      left-1/2
                      -translate-x-1/2
                                            px-5
                      py-2

                      rounded-full

                        skin-plan-badge
                      border
                        border-[#D7A99B]

                        text-white
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.20em]

                      shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                    "
                  >
                    Más elegido
                  </div>

                  <div>

                    <div className="h-[160px] pt-3">
                    <h3
                      className="plan-card-title
                        text-center
                        mt-2
                        whitespace-nowrap
                        text-[30px]
                        md:text-[32px]
                        leading-[1.05]
                        tracking-[0.01em]
                        uppercase
                        text-[#8C563B]
                      "
                      style={{
                        fontWeight: 900,
                      }}
                    >
                      PLAN GUIADO
                    </h3>

                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="plan-card-description
                        mt-2
                        text-center
                        max-w-[245px] mx-auto
                        text-[16px]
                        leading-[1.45]
                        text-[#59433D]
                        h-[76px]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      Recibe orientación profesional antes de comenzar
                    </motion.p>
                  </div>
                  </div>

                  <div className="flex-1 space-y-2.5 border-t border-[#D8C3A8]/80 pt-4">

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#49352F]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B87565]/15 text-[11px] text-[#A35F52]">✓</span>
                      <span>Acceso a nuestros protocolos de recuperación</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#49352F]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B87565]/15 text-[11px] text-[#A35F52]">✓</span>
                      <span>Análisis corneométrico para orientar cada etapa</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Seguimiento continuo de la evolución de tu piel</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Prescripción dermocosmética personalizada</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#806F69]">
                      <span aria-hidden="true" className="mt-0.5 w-5 shrink-0" />
                      <span>Acceso a THE BOOST BAR™: suplementos, nutrición y fitness</span>
                    </div>

                  </div>

                  <div className="mt-auto pt-6">
                    <button
                      id="plan-guiado-slider"
                      onClick={() => {
                        if (positionGuiado === 0 && triggerPlanGuiado) triggerPlanGuiado();
                      }}
                      onMouseMove={handleMoveGuiado}
                      onMouseUp={handleEndGuiado}
                      onMouseLeave={handleEndGuiado}
                      onTouchMove={handleMoveGuiado}
                      onTouchEnd={handleEndGuiado}
                      className="
                        plan-reserve-button
                        relative
                        w-full
                        h-12
                        rounded-full

                        bg-[#F7EFE7]/10
                        backdrop-blur-xl

                        border
                        border-white/15

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.30)]

                        text-white
                        overflow-hidden
                        cursor-pointer
                      "
                    >
                      <span
                        className="plan-card-cta-label
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          pointer-events-none
                          text-white/90
                        "
                      >
                        Reserva tu PLAN GUIADO
                      </span>

                      <div
                        onMouseDown={handleStartGuiado}
                        onTouchStart={handleStartGuiado}
                        style={{
                          transform: `translateX(${positionGuiado}px) translateY(-50%)`,
                          transition: positionGuiado === 0 || positionGuiado >= 200 ? "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
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

                {/* ========================================================= */}
                {/* CLUB                                                      */}
                {/* ========================================================= */}

                <div
                  className="plan-card-content club-card mt-[4px] w-[320px] h-full min-h-[560px] relative -top-2 overflow-visible p-8 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-1"
                >
                                      {/* Precio lateral */}

                  <div
                    onClick={() => setShowPrice3(!showPrice3)}
                    className="
                      absolute
                      top-25
                      -right-6
                      h-12
                      skin-price-tab skin-price-tab-club
                      rounded-tr-xl
                      rounded-br-xl
                      cursor-pointer
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      transition-all
                      duration-300
                    "
                    style={{
                      width: showPrice3 ? "48px" : "24px",
                      right: showPrice3 ? "-16px" : "-24px",
                    }}
                  >
                    {showPrice3 && (
                      <span className="text-white text-[12px] font-semibold">
                        50€
                      </span>
                    )}
                  </div>

                  {/* Badge */}

                  <div
                    className="
                      absolute
                      -top-5
                      left-1/2
                      -translate-x-1/2
                                            px-5
                      py-2

                      rounded-full

                        skin-plan-badge
                      border
                        border-[#D7A99B]

                        text-white
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.20em]

                      shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                    "
                  >
                    Más completo
                  </div>

                  <div className="h-[160px] pt-3">
                    <h3
                      className="plan-card-title
                        club-gold
                        text-center
                        mt-2
                        whitespace-nowrap
                        text-[30px]
                        md:text-[32px]
                        leading-[1.05]
                        tracking-[0.04em]
                      "
                      style={{
                        fontWeight: 900,
                      }}
                    >
                      CLUB
                    </h3>

                    <motion.p
                                          initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 2.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="plan-card-description
                        mt-2
                        text-center
                        max-w-[245px] mx-auto
                        text-[16px]
                        leading-[1.45]
                        text-[#F5E8E0]
                        h-[76px]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      Acompañamiento continuo para cuidar la evolución de tu piel
                    </motion.p>

                  </div>

                  <div className="flex-1 space-y-2.5 border-t border-[#C99D72]/35 pt-4">

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#FFF8F4]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9A48F]/20 text-[11px] text-[#F0C2B0]">✓</span>
                      <span>Acceso a nuestros protocolos de recuperación</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#FFF8F4]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9A48F]/20 text-[11px] text-[#F0C2B0]">✓</span>
                      <span>Análisis corneométrico para orientar cada etapa</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#FFF8F4]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9A48F]/20 text-[11px] text-[#F0C2B0]">✓</span>
                      <span>Seguimiento continuo de la evolución de tu piel</span>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#FFF8F4]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9A48F]/20 text-[11px] text-[#F0C2B0]">✓</span>
                      <span>Prescripción dermocosmética personalizada</span>
                    </div>
                                        <div className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#FFF8F4]">
                      <span className="skin-plan-check mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D9A48F]/20 text-[11px] text-[#F0C2B0]">✓</span>
                      <span>Acceso a THE BOOST BAR™: suplementos, nutrición y fitness</span>
                    </div>

                  </div>

                  <div className="mt-auto pt-6">

                    <button
                      id="club-slider"
                      onClick={() => {
                        if (positionClub === 0 && triggerPlanClub) triggerPlanClub();
                      }}
                      onMouseMove={handleMoveClub}
                      onMouseUp={handleEndClub}
                      onMouseLeave={handleEndClub}
                      onTouchMove={handleMoveClub}
                      onTouchEnd={handleEndClub}
                      className="
                        plan-reserve-button
                        relative
                        w-full
                        h-12
                        rounded-full

                        bg-[#F7EFE7]/10
                        backdrop-blur-xl

                        border
                        border-white/15

                        shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.30)]

                        text-white
                        overflow-hidden
                        cursor-pointer
                      "
                    >
                      <span
                        className="plan-card-cta-label
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          text-[11px]
                          uppercase
                          tracking-[0.2em]
                          pointer-events-none
                          text-white/90
                        "
                      >
                        Descubre the skin fix CLUB
                      </span>

                      <div
                        onMouseDown={handleStartClub}
                        onTouchStart={handleStartClub}
                        style={{
                          transform: `translateX(${positionClub}px) translateY(-50%)`,
                          transition: positionClub === 0 || positionClub >= 200 ? "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
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

              {/* Información adicional */}

              <div className="mt-1 flex justify-center">

                <button
                  onClick={() => setShowTerms(true)}
                  className="
                    w-7
                    h-7

                    rounded-full

                    border
                    border-[#B98B72]

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

              </div>

              {showTerms && (

                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">

                  <div className="max-w-md rounded-[28px] bg-[#F7F3EF] p-8 shadow-xl">

                    <button
                      onClick={() => setShowTerms(false)}
                      className="float-right text-[#8B8072]"
                    >
                      ×
                    </button>

                    <h3 className="mb-4 text-center text-[26px] text-[#B98B72]">
                      información adicional
                    </h3>

                    <div className="space-y-3 text-sm leading-relaxed text-[#5E534A]">

                      <p>
                        • Los <em>planes de recuperación</em> pueden modificarse
                        en cualquier momento, siempre que se solicite con la
                        antelación suficiente para su gestión y esta quede
                        confirmada.
                      </p>

                      <p>
                        • Los <em>protocolos</em> se presupuestan de forma
                        independiente a los planes de recuperación.
                      </p>

                      <p>
                        • El PLAN LIBRE incluye exclusivamente el protocolo
                        seleccionado, es decir, el protocolo BASE.
                      </p>

                      <p>
                        • El PLAN GUIADO añade un coste inicial por asesoría,
                        independiente al coste del protocolo.
                      </p>
                                            <p>
                        • the<strong>skin</strong>fix CLUB es un sistema de
                        membresía mensual en la que el profesional realizará los
                        ajustes necesarios para acompañar la evolución de cada
                        caso.
                      </p>

                      <p>
                        • La <em>prescripción dermocosmética</em> está incluida
                        en the<strong>skin</strong>fix CLUB. Los productos
                        recomendados no están incluidos y deberán ser adquiridos
                        independientemente por el cliente.
                      </p>

                      <div className="mt-6 border-t border-[#B89B72]/20 pt-4 text-center">

                        <a
                          href="https://wa.me/34618820842"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            text-[14px]
                            text-[#8A7B70]
                            transition-colors
                            hover:text-[#A6564D]
                          "
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

      </div>

    </>
  );

}
