import { Link } from 'react-router-dom';
import { Plane, MapPin, Calendar, Users, Star, ArrowRight, MessageCircle, ChevronRight } from 'lucide-react';
import type { Experience, Testimonial } from '@/lib/supabase';
import ExperienceCard from '@/components/ExperienceCard';

type Props = {
  experiences: Experience[];
  testimonials: Testimonial[];
};

const faqs = [
  { q: '¿Puedo viajar solo aunque no conozca a nadie?', a: '¡Claro! La mayoría de nuestros viajeros se inscriben individualmente. El viaje está diseñado precisamente para que conozcas personas nuevas desde el primer día.' },
  { q: '¿Qué incluye el precio de un viaje?', a: 'Cada viaje es diferente, pero generalmente incluye hospedaje, traslados, tours guiados, actividades sociales y asistencia del organizador. Los detalles específicos aparecen en cada experiencia.' },
  { q: '¿Hay un rango de edad para participar?', a: 'Nuestros viajes son para personas solteras adultas de todas las edades. Lo importante es tener ganas de explorar y conocer gente nueva.' },
  { q: '¿Qué pasa si necesito cancelar?', a: 'Contamos con una política de cambios, cancelaciones y reembolsos. Te recomendamos revisar los términos antes de reservar y contactarnos por WhatsApp ante cualquier consulta.' },
  { q: '¿Los grupos son grandes?', a: 'Mantenemos grupos pequeños para que la experiencia sea cercana y puedas conectar con todos. El número de cupos varía según el destino.' },
];

export default function ViajesParaSolteros({ experiences, testimonials }: Props) {
  const brandExperiences = experiences.filter((e) => e.brand_slug === 'viajes-para-solteros');
  const brandTestimonials = testimonials.filter((t) => t.brand_slug === 'viajes-para-solteros');
  const destinations = brandExperiences.filter((e) => e.category === 'viaje');

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-turquoise-900">
        <img
          src="https://images.pexels.com/photos/29980392/pexels-photo-29980392.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1800"
          alt="Viajeros en los Andes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-turquoise-900/80 via-turquoise-900/50 to-turquoise-700/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-turquoise-400/30 backdrop-blur-md text-turquoise-50 text-sm font-medium px-4 py-2 rounded-full mb-5 animate-fade-in">
              <Plane className="w-4 h-4" />
              Viajes para Solteros Perú
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5 animate-fade-in-up">
              Viaja solo,
              <br />
              <span className="text-turquoise-300">nunca acompañado.</span>
            </h1>
            <p className="text-lg text-turquoise-50 leading-relaxed mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Creemos que viajar solo no significa estar solo. Cada viaje es una oportunidad para
              conocer personas que comparten tu espíritu aventurero.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#proximos-viajes"
                className="inline-flex items-center justify-center gap-2 bg-turquoise-400 hover:bg-turquoise-300 text-turquoise-900 px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Ver próximos viajes
              </a>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-6 py-3.5 rounded-full font-semibold border border-white/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Users, title: 'Conecta', text: 'Conoce personas que comparten tu pasión por viajar y explorar.' },
              { icon: MapPin, title: 'Descubre', text: 'Destinos increíbles en Perú y el mundo, pensados para solteros.' },
              { icon: Star, title: 'Vive', text: 'Experiencias auténticas con grupos pequeños y bien organizados.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-turquoise-50 border border-turquoise-100">
                <div className="w-12 h-12 rounded-xl bg-turquoise-500 text-white flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-display font-extrabold text-gray-900 text-2xl sm:text-3xl mb-4">
              Cómo funciona un viaje con nosotros
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Viajes para Solteros Perú crea experiencias turísticas y sociales para personas que
              quieren conocer nuevos destinos, compartir actividades y conectar de manera natural.
              Te inscribes individualmente, te unes a un grupo de solteros con las mismas ganas de
              explorar, y nosotros nos encargamos de toda la logística.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos viajes */}
      <section id="proximos-viajes" className="bg-cream-50 py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-turquoise-600 font-semibold text-sm uppercase tracking-wider">
                Próximos viajes
              </span>
              <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
                A dónde vamos
              </h2>
            </div>
            <Link to="/calendario" className="hidden sm:inline-flex items-center gap-1.5 text-turquoise-600 font-medium text-sm group">
              Ver calendario completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {brandExperiences.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandExperiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">Próximamente nuevos viajes disponibles.</p>
          )}
        </div>
      </section>

      {/* Destinos destacados */}
      {destinations.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mb-8 text-center">
              Destinos destacados
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.slice(0, 4).map((exp) => (
                <div key={exp.id} className="relative rounded-2xl overflow-hidden group aspect-[3/4]">
                  {exp.image_url && (
                    <img
                      src={exp.image_url}
                      alt={exp.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {exp.location && (
                      <p className="text-xs text-turquoise-300 font-medium flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </p>
                    )}
                    <p className="font-display font-bold text-sm leading-snug">{exp.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonios */}
      {brandTestimonials.length > 0 && (
        <section className="bg-turquoise-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mb-8 text-center">
              Testimonios de viajeros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {brandTestimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-turquoise-100">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-solar-400 text-solar-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    {t.image_url && (
                      <img src={t.image_url} alt={t.author_name} loading="lazy" className="w-10 h-10 rounded-full object-cover" />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t.author_name}</p>
                      {t.experience_name && <p className="text-xs text-gray-500">{t.experience_name}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mb-8 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-cream-50 rounded-xl border border-cream-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold text-gray-900 text-sm">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-turquoise-500 group-open:rotate-90 transition-transform shrink-0 ml-3" />
                </summary>
                <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-turquoise-600 to-turquoise-700 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3">
            Reserva tu próximo viaje
          </h2>
          <p className="text-turquoise-50 text-lg mb-6">
            Escríbenos y te enviamos toda la información del viaje que te interesa.
          </p>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-turquoise-700 px-6 py-3.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
