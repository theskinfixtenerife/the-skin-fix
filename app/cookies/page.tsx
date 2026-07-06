export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Política de Cookies
      </h1>

      <div className="space-y-8 text-[#6D625A] leading-relaxed">
        <section>
          <h2 className="font-semibold mb-2">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en el dispositivo
            del usuario para mejorar la experiencia de navegación.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Cookies utilizadas</h2>
          <p>
            Este sitio puede utilizar cookies técnicas necesarias para el
            funcionamiento de la página y cookies analíticas para comprender el
            uso del sitio web.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Gestión de cookies</h2>
          <p>
            El usuario puede configurar o eliminar las cookies desde la
            configuración de su navegador en cualquier momento.
          </p>
        </section>
      </div>
    </main>
  );
}