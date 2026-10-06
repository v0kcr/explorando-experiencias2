import { MessageCircle, Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/brands';

export default function Contacto() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="bg-gradient-to-br from-forest-600 to-forest-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4" />
            Contacto
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-3">
            Hablemos
          </h1>
          <p className="text-forest-50 text-lg max-w-xl mx-auto">
            ¿Tienes preguntas sobre un viaje, evento o servicio? Escríbenos.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <div>
              <h2 className="font-display font-extrabold text-gray-900 text-2xl mb-6">
                Canales de contacto
              </h2>
              <div className="space-y-4">
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest-500 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">WhatsApp</p>
                    <p className="text-sm text-gray-500">+51 999 999 999</p>
                  </div>
                </a>
                <a
                  href="mailto:hola@explorandoexperiencias.pe"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral-500 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Correo</p>
                    <p className="text-sm text-gray-500">hola@explorandoexperiencias.pe</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-700 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Ubicación</p>
                    <p className="text-sm text-gray-500">Lima, Perú</p>
                  </div>
                </div>
              </div>

              <h3 className="font-display font-bold text-gray-900 text-lg mt-8 mb-4">
                Síguenos en Instagram
              </h3>
              <div className="space-y-2">
                {Object.entries(BRAND_CONFIG).map(([slug, brand]) => (
                  <a
                    key={slug}
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow text-sm"
                  >
                    <Instagram className="w-5 h-5 text-coral-500" />
                    <span className="text-gray-700">{brand.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display font-bold text-gray-900 text-xl mb-4">
                Envíanos un mensaje
              </h2>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open('https://wa.me/51999999999', '_blank');
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm" />
                  <input type="tel" placeholder="Celular" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm" />
                </div>
                <input type="email" placeholder="Correo" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm" />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm bg-white">
                  <option>¿Qué te interesa?</option>
                  <option>Viajes para Solteros Perú</option>
                  <option>Club Social de Solteros Perú</option>
                  <option>Eventos corporativos</option>
                  <option>Transporte privado</option>
                  <option>Tours a medida</option>
                  <option>Otro</option>
                </select>
                <textarea placeholder="Tu mensaje" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm resize-none" />
                <label className="flex items-start gap-3 text-xs text-gray-600">
                  <input type="checkbox" className="mt-0.5 rounded border-gray-300" />
                  <span>
                    Autorizo a Explorando Experiencias y sus marcas relacionadas a utilizar mi
                    imagen, voz y testimonio en sus canales de comunicación.
                  </span>
                </label>
                <button type="submit" className="w-full bg-coral-500 hover:bg-coral-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-[1.02]">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
