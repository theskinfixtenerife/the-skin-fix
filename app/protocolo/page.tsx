"use client";
import { useState } from "react";
export default function ProtocoloPage() {
  const [showPrices, setShowPrices] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const protocolos = [
    
    {
      number: "01",
      title: "acné y piel congestionada",
      description:
        "Para pieles que presentan brotes recurrentes, inflamación o tendencia a la obstrucción.",
    },
    {
      number: "02",
      title: "rosácea y sensibilidad",
      description:
        "Para pieles reactivas que experimentan enrojecimiento, ardor o intolerancia frecuente.",
    },
    {
      number: "03",
      title: "hidratación y luminosidad",
      description:
        "Para pieles apagadas, deshidratadas o con sensación constante de tirantez.",
    },
    {
      number: "04",
      title: "textura\ny poros",
      description:
        "Para pieles que presentan irregularidades visibles en la superficie cutánea.",
    },
    {
      number: "05",
      title: "manchas y pigmentación",
      description:
        "Para pieles con alteraciones del tono o pigmentación desigual.",
    },
    {
      number: "06",
      title: "cicatrices y marcas",
      description:
        "Para pieles que presentan secuelas visibles tras procesos inflamatorios.",
    },
    {
      number: "07",
      title: "elasticidad y regeneración",
      description:
        "Para pieles que han perdido firmeza, densidad o capacidad de recuperación.",
    },
  ];

  return (
    <main className="bg-white min-h-screen py-24 px-6 relative overflow-hidden">
        <div
  className="absolute left-[450px] top-[120px] pointer-events-none"
  style={{ opacity: 0.08 }}
>
  
</div>
      <div className="max-w-7xl mx-auto rounded-[6px] bg-[#F7F4F1] px-16 py-20">
        <div className="mt-0 mb-20 max-w-3xl relative">
            <div
 
>

</div>
<div className="relative z-10"></div>
          <p className="uppercase tracking-[0.3em] text-[11px] text-[#B98B72] mb-4">
            Protocolo
          </p>

          <h1
  className="text-[48px] md:text-[72px] leading-[0.95] font-black tracking-[-0.04em] text-[#B98B72]"
>
            elige tu protocolo
            <br />
           
          </h1>
<div className="absolute right-40 -top-1 hidden lg:block"
style={{ right: "10px" }}>
  <img
  src="/CHICABELLA.webp"
  alt="Modelo"
  className="w-[500px] h-[250px] object-cover rounded-[6px] translate-x-100"
/>
</div>
          <p className=" mt-8 text-[#5D534A] leading-relaxed max-w-md">
            Cada protocolo ha sido diseñado para abordar una necesidad específica de la piel dentro de una metodología. Selecciona el objetivo que deseas trabajar:
          </p>
          
          <div className="max-w-[400px] mx-auto">
 
</div>
        </div>


        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {protocolos.map((item) => (
            <a
  href={`https://wa.me/34618820842?text=${encodeURIComponent(
    `Me gustaría probar el protocolo "${item.title}". ¿Cuando tendrías una cita disponible?`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
              key={item.number}
              className="
border-[#ece7e2]
    rounded-[32px]
    p-10
    h-[300px]
    flex
    flex-col
    hover:-translate-y-1
    hover:shadow-xl
    transition-all
    duration-500
"
            >
              <p className="text-[#B98B72] text-3xl mb-4">{item.number}</p>

              <h2
  className="text-[28px] leading-tight text-[#5E534A] mb-6 min-h-[80px] whitespace-pre-line"
  style={{ fontFamily: "satoshi" }}
>
  {item.title}
</h2>

              <p className="text-[#B3A99D] text-sm leading-relaxed">
                {item.description}
              </p>


            </a>
          ))}

          <div className="bg-[#EFE7E0]/80 rounded-[7px] p-7 flex flex-col h-[420px]">
            <div>
              
              <h2
                className="text-[25px] mt-5 leading-none font-medium text-[#8B7C6D] mt-12 mb-12 text-center"
                style={{ fontFamily: "satoshi" }}
              >
                ¿no sabes por dónde empezar?
              </h2>

              <p className="text-[15px] mt-8 leading-relaxed text-[#666] text-center">
                En el <strong>PLAN GUIADO</strong> estudiamos tu caso antes de comenzar y te indicamos el protocolo más adecuado para tus objetivos.
                
              </p>
              
            </div>

            <a
  href="https://wa.me/34618820842?text=Hola,%20quiero%20reservar%20mi%20diagnóstico%20.%20¿Qué%20días%20tienes%20disponibles?"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 mx-auto rounded-full bg-[#A6564D] hover:bg-[#B98B72] px-8 py-4 text-white uppercase tracking-[0.2em] text-[11px] w-fit inline-block"
>
  Reservar
</a>

          </div>
        </div>
        <div className="flex justify-center mb-8">
  <button
    onClick={() => setShowInfo(true)}
    className="w-6 h-6 rounded-full border border-[#B98B72] flex items-center justify-center text-[11px] text-[#B98B72] hover:bg-[#B98B72]/10 transition-all"
    style={{ fontFamily: "satoshi" }}
  >
    i
  </button>
</div>

{showInfo && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="max-w-md rounded-[28px] bg-[#F7F3EF] p-8 shadow-xl">

      <button
        onClick={() => setShowInfo(false)}
        className="float-right text-[#B98B72]"
      >
        ✕
      </button>

      <h3
        className="mb-6 text-[18px] text-[#B98B72]"
        style={{ fontFamily: "satoshi" }}
      >
        información antes de hacer un protocolo
      </h3>

      <div className="space-y-4 text-sm text-[#5E534A] leading-relaxed">

        <p>• El PLAN LIBRE está destinado a usuarios que deciden realizar el protocolo sin asesoramiento ni seguimiento profesional continuado.</p>
        
        <p>• Al contratar el PLAN LIBRE, el usuario asume la responsabilidad de seguir las indicaciones proporcionadas y de comunicar cualquier circunstancia que pueda afectar a la seguridad del tratamiento.</p>

        <p>• the<strong>skin</strong>fix™ no podrá responsabilizarse de los resultados obtenidos con ningún plan ni de posibles reacciones derivadas del incumplimiento de las recomendaciones facilitadas o de la ausencia de diagnóstico o seguimiento profesional.</p>

        <p>• El protocolo recomendado se determinará durante el PLAN GUIADO o en the<strong>skin</strong>fix™<strong>CLUB</strong>.</p>

        <p>• El número de sesiones puede variar según las necesidades de cada caso.</p>

        <p>• La recomendación profesional podrá actualizarse según la evolución de la piel.</p>

      </div>

    </div>
  </div>
)}
      </div>
     
     <div className="flex justify-center mt-16 mb-10">
  <button
    onClick={() => setShowPrices(!showPrices)}
    className="text-[13px] uppercase tracking-[0.25em] text-[#B98B72]"
    style={{ fontFamily: "satoshi" }}
  >
    Consultar precios {showPrices ? "↑" : "↓"}
  </button>
</div>

<div
  className={`overflow-hidden transition-all duration-500 ease-out ${
    showPrices
      ? "max-h-[1200px] opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="mt-4 mb-20 max-w-[1280px] mx-auto">
    <img
      src="/preciosnueva.png"
      alt="Tabla de precios"
      className="w-full max-w-[800px] mx-auto rounded-[8px]"
    />
  </div>
</div>


<section className="mt-24 mb-24">
  <div className="max-w-[900px] mx-auto">

    <p
            className="text-[48px] md:text-[52px] mt-28 font-bold leading-[0.95] mb-8 text-[#A6564D] text-center "
            style={{ fontFamily: "satoshi" }}
          >
      continúa tu recuperación
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#F7F4F1] rounded-[6px] p-8 text-center">
        <h3
          className="text-[22px] text-[#5B4E46]"
          style={{ fontFamily: "satoshi" }}
        >
          3 sesiones
        </h3>

        <p
          className="text-[54px] leading-none mt-4 text-[#B98B72]"
          style={{ fontFamily: "satoshi" }}
        >
          -10%
        </p>
      </div>

      <div className="bg-[#F7F4F1] rounded-[6px] p-8 text-center">
        <h3
          className="text-[22px] text-[#5B4E46]"
          style={{ fontFamily: "satoshi" }}
        >
          5 sesiones
        </h3>

        <p
          className="text-[54px] leading-none mt-4 text-[#B98B72]"
          style={{ fontFamily: "satoshi" }}
        >
          -20%
        </p>
      </div>

      <div className="bg-[#F7F4F1] rounded-[6px] p-8 text-center">
        <h3
          className="text-[22px] text-[#5B4E46]"
          style={{ fontFamily: "satoshi" }}
        >
          10 sesiones
        </h3>

        <p
          className="text-[54px] leading-none mt-4 text-[#B98B72]"
          style={{ fontFamily: "satoshi" }}
        >
          -30%
        </p>
      </div>

    </div>

    <p
      className="text-center text-[13px] text-[#847E78] mt-10"
      style={{ fontFamily: "satoshi" }}
    >
      Disponible para cualquier protocolo
    </p>

  </div>
</section>
<section className="px-6 py-8">
  <div className="max-w-[1280px] mx-auto rounded-[6px] bg-[#F7F4F1] overflow-hidden">
    <section className="mt-32 pb-32">

  <div className="max-w-7xl mx-auto px-24">


    <h2
      className="text-center text-[64px] md:text-[72px] leading-[0.95] text-[#B98B72]"
      style={{ fontFamily: "satoshi" }}
    >
      con tiempo todo se logra
      <br />
      
    </h2>

<div className="mt-8 mb-16 overflow-hidden border-y border-[#ebe5df] py-7">
  <div className="flex whitespace-nowrap animate-marquee w-max">

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">92%</span> Mayor hidratación percibida
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">89%</span> Compromiso con el tratamiento recomendado
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">100%</span> Cambios en la primera sesión
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">87%</span> Mejora progresiva en textura
    </span>

    <span className="text-[#d8c8ba]">—</span>

    {/* DUPLICADO 1 */}

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">92%</span> DE LOS CLIENTES PERCIBEN
MAYOR HIDRATACIÓN
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">89%</span> MENOS ROJEZ VISIBLE
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">+500</span> CASOS ANALIZADOS
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">87%</span> Mejora visible en textura
    </span>

    <span className="text-[#d8c8ba]">—</span>

    {/* DUPLICADO 2 */}

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">92%</span> Mayor hidratación percibida
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">89%</span> Satisfacción global
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">100%</span> Estrategias personalizadas
    </span>

    <span className="text-[#d8c8ba]">—</span>

    <span className="mx-12 text-[12px] tracking-[0.22em] uppercase text-[#847E78]">
      <span className="text-[#B87333]">87%</span> Mejora visible en textura
    </span>

  </div>
</div>

    <div className="grid md:grid-cols-2 gap-x-24 gap-y-24 mt-20 max-w-[980px] mx-auto">

      <div className="group">
        <div className="overflow-hidden rounded-[6px] border border-[#ece7e2] max-w-[420px]">

  <img
  src="/casos/acne-hormonal.jpg"
  alt="Caso real acné hormonal"
  className="w-full h-[540px] object-cover"
/>

</div>
        <div className="mt-6">
          <p className="uppercase tracking-[0.2em] text-center text-[11px] font-bold text-[#A6564D]">
            Disrupción de barrera
          </p>
          <p className="mt-3 text-[#666]">
            Recuperación progresiva de sensibilidad con combinación de protocolos 01, 02 y 03.
          </p>
          
        </div>
      </div>

      <div className="group">

  <div className="overflow-hidden rounded-[6px] border border-[#ece7e2] w-[420px]">
  <img
    src="/casos/flacidez-leve.jpg"
    alt="Flacidez cutánea leve"
    className="w-full h-[540px] object-cover"
  />
</div>

  <div className="mt-6">

    <p className="uppercase tracking-[0.2em] text-center font-bold text-[11px] text-[#A6564D]">
      Flacidez leve
    </p>

    <p className="mt-3 text-[#666]">
      Mejora del contorno con protocolo 07, nutricosmética y rutina dermocosmética domiciliaria personalizada.
    </p>

  </div>

</div>

     <div className="group max-w-[420px]">
  <div className="overflow-hidden rounded-[6px] border border-[#ece7e2]">
    <img
      src="/casos/cicatrices-atróficas.jpg"
      alt="Cicatrices atróficas de acné"
      className="w-full h-[540px] object-cover"
    />
  </div>

  <div className="mt-6">
    <p className="uppercase tracking-[0.2em] text-center font-bold text-[11px] text-[#A6564D]">
      Cicatrices atróficas post-acné
    </p>

    <p className="mt-3 text-[#666]">
      Recuperación de textura y calidad visual de la piel con nuestro protocolo 06 y rutina dermocosmética para evitar marcas nuevas.
    </p>
  </div>
</div>
<div className="group max-w-[420px]">
  <div className="overflow-hidden rounded-[6px] border border-[#ece7e2]">
    <img
      src="/casos/daño-solar.png"
      alt="Fotodaño y pigmentación solar"
      className="w-full h-[540px] object-cover"
    />
  </div>

  <div className="mt-6">
    <p className="uppercase tracking-[0.2em] text-center font-bold text-[11px] text-[#A6564D]">
      Pigmentación solar
    </p>

    <p className="mt-3 text-[#666]">
      Ajuste de estilo de vida, protocolo 05 y rutina domiciliaria adaptada a su hiperpigmentación.
    </p>
  </div>
</div>
    </div>

    </div>

    </section>
  </div>
</section>

<section className="mt-8">
  <div className="max-w-7xl mx-auto">

    <div className="bg-[#F3EEEA] rounded-[24px] py-20 px-12">

      <div className="grid md:grid-cols-2 gap-20 items-start">

        <div>

          <h3
            className="text-[48px] md:text-[68px] leading-[0.95] text-[#B98B72]"
            style={{ fontFamily: 'satoshi' }}
          >
            la recuperación
            <br />
            es un proceso,
            <br />
            no un paso
          </h3>

        </div>

        <div className="space-y-8 text-[#666]">

          <div className="flex gap-4">
            <span className="text-[#B05A3C]">•</span>
            <p>
              La velocidad de recuperación depende del tipo de alteración,
              historial y estado actual de la piel.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#B05A3C]">•</span>
            <p>
              Muchas pieles muestran cambios visibles desde las primeras fases
              del proceso.
            </p>
          </div>

          <div className="flex gap-4">
            <span className="text-[#9c8578]">•</span>
            <p>
              Nuestro objetivo es construir resultados estables y duraderos,
              no mejoras temporales.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<div className="w-full flex justify-center overflow-hidden">
  <h2
    className="
      text-center
      text-[180px]
      md:text-[220px]
      leading-none
      tracking-[-0.08em]
      opacity-[0.04]
      whitespace-nowrap
      select-none
      pointer-events-none
    "
    
  >
      <span className="font-medium">the </span>
<span className="font-semibold">skin</span>
<span className="font-medium"> fix™</span>
  </h2>
</div>
    </main>
  );
}