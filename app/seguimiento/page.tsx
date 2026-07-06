"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  Shield,
  Orbit,
  Activity,
} from "lucide-react"

export default function SkinFixClubCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[38px] border border-[#d7c7b6]/20 bg-[#f6f1eb] backdrop-blur-xl"
    >
      {/* Ambient Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-[-10%] h-[380px] w-[380px] rounded-full bg-[#f4eee7]/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-10%] h-[300px] w-[300px] rounded-full bg-[#c8b6a6]/10 blur-[120px]" />
      </div>

      {/* Floating Border */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[36px] border border-white/6" />

      {/* Header */}
      <div className="relative z-10 px-8 pb-8 pt-10 md:px-12 md:pt-12">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-[7px] w-[7px] rounded-full bg-[#d7c7b6]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#d8cfc6]/70">
              Private Membership Experience
            </span>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#f4ede6]/70">
              Most Complete
            </span>
          </div>
        </div>

        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-[#f5efe8] md:text-6xl">
            THE SKIN FIX CLUB
          </h2>

          <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-[#d8d1ca]/78 md:text-[16px]">
            Un espacio de acompañamiento continuo donde la piel deja de
            gestionarse sola. Diseñado para personas que necesitan dirección,
            estabilidad y una observación real para recuperar su piel de forma
            segura, estratégica y sostenible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid gap-14 border-t border-white/8 px-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
        {/* Left Side */}
        <div className="space-y-10">
          {/* Timeline */}
          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Diagnóstico y entrada al club",
                description:
                  "Analizamos la piel en profundidad, comprendemos su historial cosmético, observamos niveles de sensibilidad e inflamación y definimos objetivos reales. A partir de ahí, construimos una hoja de ruta completamente personalizada.",
              },
              {
                number: "02",
                title: "Construcción del protocolo",
                description:
                  "Simplificamos lo innecesario y desarrollamos una estrategia adaptada al comportamiento real de la piel. Seleccionamos productos y tratamientos con precisión para reducir errores, sobreestimulación y desgaste cutáneo.",
              },
              {
                number: "03",
                title: "Seguimiento continuo",
                description:
                  "La evolución de la piel se revisa constantemente. Ajustamos el protocolo, resolvemos recaídas y acompañamos cada etapa con una observación mucho más cercana y humana.",
              },
              {
                number: "04",
                title: "Optimización y mantenimiento",
                description:
                  "Una vez recuperada la estabilidad, trabajamos en mantener resultados, prevenir inflamación futura y adaptar la estrategia según cambie la piel con el tiempo.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4 }}
                className="group flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] tracking-[0.2em] text-[#e7ddd2]">
                    {item.number}
                  </div>

                  {index !== 3 && (
                    <div className="mt-3 h-full w-px bg-gradient-to-b from-white/15 to-transparent" />
                  )}
                </div>

                <div className="pb-8">
                  <h3 className="text-[17px] font-medium tracking-[-0.02em] text-[#f5eee7]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-[14px] leading-[1.9] text-[#cbc2b8]/72">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="rounded-[28px] border border-white/8 bg-white/[0.025] p-7">
            <p className="max-w-2xl text-[15px] leading-[2] text-[#e5ddd4]/78">
              No existe permanencia.
              <span className="text-[#f4ede6]">
                {" "}
                El objetivo no es retenerte.
              </span>{" "}
              Es darte un sistema tan útil, claro y estable que quieras seguir
              cuidando tu piel correctamente porque, por primera vez, todo tiene
              sentido.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between">
          {/* Premium Features */}
          <div className="rounded-[30px] border border-white/10 bg-[#ffffff]/[0.03] p-7">
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-[#d8c7b6]" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#d8cec5]/70">
                Club Advantages
              </span>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Shield,
                  title: "Observación clínica prolongada",
                },
                {
                  icon: Activity,
                  title: "Protocolos dinámicos y evolutivos",
                },
                {
                  icon: Orbit,
                  title: "Soporte y seguimiento prioritario",
                },
                {
                  icon: Sparkles,
                  title: "Acceso preferente a tratamientos avanzados",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between border-b border-white/6 pb-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                      <feature.icon className="h-4 w-4 text-[#d9c7b6]" />
                    </div>

                    <span className="text-[14px] text-[#f2ebe4]/82">
                      {feature.title}
                    </span>
                  </div>

                  <ArrowRight className="h-4 w-4 text-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white/50" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emotional Closing */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5 }}
            className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#efe6db]/[0.08] to-[#ffffff]/[0.02] p-8"
          >
            <div className="max-w-sm">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#d7ccc1]/60">
                Recovery Experience
              </span>

              <h3 className="mt-5 font-serif text-3xl leading-[1.05] tracking-[-0.04em] text-[#f7f1eb]">
                Ahora sí tienes a alguien controlando realmente la situación de
                tu piel.
              </h3>

              <p className="mt-5 text-[14px] leading-[1.9] text-[#d3cbc2]/72">
                Más que una membresía, THE SKIN FIX CLUB funciona como una capa
                de estabilidad, dirección y acompañamiento continuo para la
                piel.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hover Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]"
      />
    </motion.div>
  )
}