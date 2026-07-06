"use client"
import { useState } from "react";
import { motion } from "framer-motion"


const process = [
  {
    number: "01",
    title: "diagnóstico",
    text: "Evaluamos los procesos que están condicionando el comportamiento de la piel y diseñamos un protocolo para abordarlo.",
  },
  {
    number: "02",
    title: "protocolo",
    text: "Diseñamos una rutina dermocosmética para estabilizar la piel. Cuando la estabilizamos, iniciamos los protocolos en cabina.",
  },
  {
    number: "03",
    title: "seguimiento",
    text: "Supervisamos la evolución mediante revisiones periódicas, ajustes estratégicos y soporte directo.",
  },
  {
    number: "04",
    title: "resultados",
    text: "Los resultados llegan cuando existe constancia, seguimiento y adherencia al método. Sin compromiso, no hay éxito.",
  },
]

const analysis = [
  "barrera cutánea",
  "inflamación",
  "microbiota",
  "sensibilidad",
  "hidratación",
  "tolerancia cosmética",
  "estrés oxidativo",
  "hábitos inflamatorios",
]


export default function DiagnosticoPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

const toggleSection = (section: string) => {
  setOpenSection(openSection === section ? null : section);
};
const consultationItems = [
  "Análisis profesional",
  "Rutina y hábitos",
  "Diagnóstico explicado",
  "Protocolo recomendado",
  "Resolución de dudas",
];
  return (
    <main className="relative overflow-hidden bg-[#FFFFFF] text-[#2C2725]">

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#A6564D]/[0.18] blur-[120px]" />

        <div className="absolute bottom-[-200px] right-[-120px] w-[480px] h-[480px] rounded-full bg-[#8A746D] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(44,39,37,0.12) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative px-6 md:px-16 lg:px-20 pt-14 md:pt-20 pb-24">

        <div className="max-w-[1500px] mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="
relative
overflow-hidden
rounded-[6px]
border
border-white/70
bg-white/60
backdrop-blur-xl
shadow-[0_25px_70px_rgba(0,0,0,0.05)]
px-8
py-10
md:px-14
md:py-16
"
          >
            <div className="absolute -top-28 -right-24 w-[320px] h-[320px] rounded-full bg-[#B87333]/10 blur-[100px]" />

            <div className="relative z-10 mb-5">
              <span className="uppercase tracking-[0.35em] text-[10px] md:text-[11px] text-[#8A746D]">
                DIAGNÓSTICO
              </span>
            </div>

           <h1
  className="
relative
z-10
text-[56px]
md:text-[72px]
lg:text-[82px]
leading-[0.9]
tracking-[-0.06em]
text-[#B98B72]
"
  style={{ fontFamily: "satoshi" }}
>
  antes
  <br />
  de comenzar
</h1>

<div
  className="
    relative
    z-10
    mt-2
    text-[30px]
    md:text-[40px]
    uppercase
    tracking-[-0.03em]
    text-[#A69C94]
  "
  style={{ fontFamily: "Satoshi" }}
>
  PLAN GUIADO
</div>

            <div className="relative z-10 mt-10 max-w-[560px]">

              <div className="relative z-10 mt-10 max-w-[560px]">
  <p className="text-[17px] leading-[1.9] text-[#6F625D]">
    Necesitamos conocer tu caso, entender qué problema presenta y decidir cuál es la mejor forma de tratarlo.
  </p>

  <p className="mt-6 text-[17px] leading-[1.9] text-[#6F625D]">
    Durante esta consulta analizaremos el estado de tu piel, hablaremos sobre tu rutina, tus hábitos y cualquier otro factor que pueda estar influyendo en ella.
  </p>

  <p className="mt-6 text-[17px] leading-[1.9] text-[#6F625D]">
    Al finalizar tendrás una explicación clara de lo que ocurre, qué protocolo te recomendamos y cómo será el tratamiento a partir de ese momento.
  </p>
  


  
</div>


            </div>

          </motion.div>

        </div>

      </section>


      {/* METHOD */}
      <section className="relative px-8 md:px-20 py-3">

        <div className="max-w-[1600px] mx-auto">


          <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-[#735D5815]">

            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.12 }}
                className={`
  group
  relative
  min-h-[420px]
  border-b
  lg:border-b-0
  lg:border-r
  border-[#735D5815]
  px-8
  py-14
  flex
  flex-col
  justify-between
  overflow-hidden
  ${index >= 2 ? "opacity-50 grayscale" : ""}
`}
              >

                <span
                  className="
                    absolute
                    top-2
                    left-6
                    text-[120px]
                    md:text-[160px]
                    font-light
                    text-[#A6564D]/40
                    tracking-[-0.08em]
                    pointer-events-none
                  "
                  style={{ fontFamily: "satoshi" }}
                >
                  {item.number}
                </span>

                <div className="relative z-10">

                  <div className="w-full h-px bg-[#735D5815] mb-10" />

                  <h3
                    className="
                      text-[34px]
                      md:text-[42px]
                      tracking-[-0.05em]
                      font-light
                    "
                    style={{ fontFamily: "satoshi" }}
                  >
                    {item.title}
                  </h3>

                </div>

                <p className="relative z-10 text-[16px] leading-[1.9] text-[#6F625D] max-w-[300px] font-light">
                  {item.text}
                </p>

                <div
  className={`
    absolute
    inset-0
    bg-[#FFFFFF]/[0.16]
    opacity-0
    transition
    duration-700
    ${index < 2 ? "group-hover:opacity-100" : ""}
  `}
/>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ANALYSIS GRID */}
      
      <section className="relative px-8 md:px-20 py-36 border-t border-[#735D5815]">

        <div className="max-w-[1500px] mx-auto">

          <div className="mb-20">
            <span className="uppercase tracking-[0.32em] text-[10px] text-[#8A746D]">
              QUÉ ANALIZAMOS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#735D5815]">

            {analysis.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 }}
                className="
                  relative
                  min-h-[220px]
                  border-b
                  border-r
                  border-[#735D5815]
                  p-10
                  flex
                  items-end
                  group
                  overflow-hidden
                  hover:bg-[#A6564D]
hover:text-white
transition-all
duration-300
cursor-pointer
                "
              >

                <div className="absolute inset-0 bg-[#FFFFFF]/[0.2] opacity-0 group-hover:opacity-100 transition duration-700" />

                <h3
                  className="
                    relative
                    z-10
                    text-[28px]
                    md:text-[34px]
                    leading-[1.1]
                    tracking-[-0.04em]
                    font-light
                  "
                  style={{ fontFamily: "satoshi" }}
                >
                  {item}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="relative px-8 md:px-20 py-40">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            className="pt-6"
          >

            <div className="max-w-[620px] mx-auto">

  

</div>

          </motion.div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="relative px-8 md:px-20 py-44 border-t border-[#735D5815] overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFFFF]/20" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative max-w-7xl mx-auto text-center"
        >

    

          <h2
            className="
              mt-10
              text-[58px]
              sm:text-[90px]
              md:text-[150px]
              leading-[0.9]
              tracking-[-0.07em]
              font-light
            "
            style={{ fontFamily: "satoshi" }}
          >
            tu piel sí
            <br />
            tiene remedio.
          </h2>

          <p className="mt-10 text-[#6F625D] text-[18px] leading-[1.9] max-w-2xl mx-auto font-light">
            Cuando entiendes qué necesita,
            la piel deja de reaccionar
            y empieza a recuperarse.
          </p>

          <button
            className="
              mt-14
              px-12
              py-5
              rounded-full
              bg-[#A6564D]
              text-[#FFFFFF]
              uppercase
              tracking-[0.28em]
              text-[11px]
              transition-all
              duration-700
              hover:scale-[1.02]
              hover:bg-[#6A5550]
              shadow-[0_20px_60px_rgba(115,93,88,0.18)]
            "
          >
            COMENZAR DIAGNÓSTICO
          </button>

        </motion.div>

      </section>

    </main>
  )
}

