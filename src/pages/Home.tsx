import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  ArrowLeft,
  Star,
  MessageCircle,
  Compass,
  Plane,
  Heart,
  Building2,
} from 'lucide-react';
import type { Experience, Testimonial } from '@/lib/supabase';
import ExperienceCard from '@/components/ExperienceCard';

type Props = {
  experiences: Experience[];
  testimonials: Testimonial[];
};

const heroImages = [
  'https://images.pexels.com/photos/29980392/pexels-photo-29980392.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
  'https://images.pexels.com/photos/15782415/pexels-photo-15782415.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
  'https://images.pexels.com/photos/16948961/pexels-photo-16948961.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
  'https://images.pexels.com/photos/16066999/pexels-photo-16066999.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
  'https://images.pexels.com/photos/6405751/pexels-photo-6405751.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
];

export default function Home({ experiences, testimonials }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [heroIdx, setHeroIdx] = useState(0);
  const cardWidth = 340;

  const carouselItems = experiences.slice(0, 8);

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const maxIdx = Math.max(0, carouselItems.length - Math.floor(container.clientWidth / cardWidth));
    if (dir === 'right') {
      const next = Math.min(carouselIdx + 1, maxIdx);
      setCarouselIdx(next);
      container.scrollTo({ left: next * (cardWidth + 16), behavior: 'smooth' });
    } else {
      const prev = Math.max(carouselIdx - 1, 0);
      setCarouselIdx(prev);
      container.scrollTo({ left: prev * (cardWidth + 16), behavior: 'smooth' });
    }
  };

  const upcomingEvents = experiences
    .filter((e) => e.start_date)
    .sort((a, b) => (a.start_date ?? '').localeCompare(b.start_date ?? ''))
    .slice(0, 4);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero with rotating background carousel */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === heroIdx ? 1 : 0 }}
            >
              <img
                src={img}
                alt={`Experiencia ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-coral-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Compass className="w-4 h-4 text-coral-300" />
              Explorando Experiencias
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 animate-fade-in-up">
              Vive algo nuevo.
              <br />
              Conoce personas.
              <br />
              <span className="text-coral-300">Crea historias.</span>
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Diseñamos viajes, eventos y comunidades para que explores Perú y el mundo con la
              compañía correcta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/calendario"
                className="inline-flex items-center justify-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Ver próximas experiencias
              </Link>
              <Link
                to="/viajes-para-solteros"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-6 py-3.5 rounded-full font-semibold border border-white/30 transition-all"
              >
                Conoce nuestras marcas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero carousel indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === heroIdx ? 'w-8 bg-coral-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 20Q720 0 0 20Z" fill="#fffdf8" />
          </svg>
        </div>
      </section>

      {/* Carousel: Nuestras experiencias */}
      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
                Novedades
              </span>
              <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
                Nuestras experiencias
              </h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-coral-50 hover:border-coral-300 transition-colors"
                aria-label="Anterior"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-coral-50 hover:border-coral-300 transition-colors"
                aria-label="Siguiente"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {carouselItems.map((exp) => (
              <div key={exp.id} className="snap-start shrink-0" style={{ width: `${cardWidth}px` }}>
                <ExperienceCard experience={exp} compact />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {carouselItems.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === carouselIdx ? 'w-6 bg-coral-500' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Elige tu forma de explorar */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              Nuestras marcas
            </span>
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1 mb-4">
              Elige tu forma de explorar
            </h2>
            <p className="text-gray-600 text-lg">
              Una marca paraguas, dos marcas especializadas y un calendario central de experiencias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Viajes para Solteros */}
            <Link
              to="/viajes-para-solteros"
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px] flex flex-col justify-end"
            >
              <img
                src="https://images.pexels.com/photos/19988745/pexels-photo-19988745.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Viajes para Solteros Perú"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-turquoise-900/90 via-turquoise-900/40 to-transparent" />
              <div className="relative p-6 text-white">
                <div className="w-12 h-12 rounded-2xl bg-turquoise-400/30 backdrop-blur-md flex items-center justify-center mb-3">
                  <Plane className="w-6 h-6 text-turquoise-100" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Viajes para Solteros Perú</h3>
                <p className="text-sm text-turquoise-50/90 leading-relaxed mb-4">
                  Viajes y eventos para conectar, conocer nuevos destinos y compartir experiencias
                  con personas que también quieren explorar.
                </p>
                <span className="inline-flex items-center gap-1.5 bg-turquoise-400 hover:bg-turquoise-300 text-turquoise-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                  Ver viajes
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Club Social */}
            <Link
              to="/club-social-solteros"
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px] flex flex-col justify-end"
            >
              <img
                src="https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Club Social de Solteros Perú"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 via-plum-900/40 to-transparent" />
              <div className="relative p-6 text-white">
                <div className="w-12 h-12 rounded-2xl bg-plum-400/30 backdrop-blur-md flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-plum-100" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Club Social de Solteros Perú</h3>
                <p className="text-sm text-plum-50/90 leading-relaxed mb-4">
                  Una comunidad para disfrutar tu soltería, conocer gente nueva y participar en
                  actividades sociales seguras y divertidas.
                </p>
                <span className="inline-flex items-center gap-1.5 bg-plum-400 hover:bg-plum-300 text-plum-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                  Conocer el club
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Explorando Experiencias / corporativos */}
            <Link
              to="/experiencias"
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[420px] flex flex-col justify-end"
            >
              <img
                src="https://images.pexels.com/photos/7888988/pexels-photo-7888988.jpeg?auto=compress&cs=tinysrgb&h=800&w=600"
                alt="Experiencias corporativas"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coral-900/90 via-coral-900/40 to-transparent" />
              <div className="relative p-6 text-white">
                <div className="w-12 h-12 rounded-2xl bg-coral-400/30 backdrop-blur-md flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-coral-100" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Experiencias corporativas</h3>
                <p className="text-sm text-coral-50/90 leading-relaxed mb-4">
                  Eventos empresariales, transporte privado, tours a medida y viajes de incentivo
                  para equipos y organizaciones.
                </p>
                <span className="inline-flex items-center gap-1.5 bg-coral-400 hover:bg-coral-300 text-coral-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                  Ver servicios
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Calendario resumido */}
      <section className="bg-gradient-to-br from-forest-50 to-cream-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-forest-600 font-semibold text-sm uppercase tracking-wider">
                Calendario
              </span>
              <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
                Próximos eventos
              </h2>
            </div>
            <Link
              to="/calendario"
              className="hidden sm:inline-flex items-center gap-1.5 text-forest-600 hover:text-forest-700 font-medium text-sm group"
            >
              Ver calendario completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((exp) => {
              const dateObj = exp.start_date ? new Date(exp.start_date + 'T00:00:00') : null;
              return (
                <Link
                  key={exp.id}
                  to="/calendario"
                  className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-forest-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {dateObj && (
                      <div className="shrink-0 w-14 h-14 rounded-xl bg-forest-500 text-white flex flex-col items-center justify-center">
                        <span className="text-xs font-medium uppercase leading-none">
                          {dateObj.toLocaleDateString('es-PE', { month: 'short' })}
                        </span>
                        <span className="text-xl font-bold leading-none mt-0.5">
                          {dateObj.getDate()}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-forest-600 transition-colors line-clamp-2">
                        {exp.title}
                      </p>
                      {exp.location && (
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/calendario"
              className="inline-flex items-center gap-2 text-forest-600 font-medium text-sm"
            >
              Ver calendario completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-coral-600 font-semibold text-sm uppercase tracking-wider">
              Comunidad
            </span>
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
              Historias reales de nuestra comunidad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-solar-400 text-solar-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  {t.image_url && (
                    <img
                      src={t.image_url}
                      alt={t.author_name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.author_name}</p>
                    {t.experience_name && (
                      <p className="text-xs text-gray-500">{t.experience_name}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="bg-gradient-to-r from-forest-600 to-forest-700 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3">
            ¿Listo para tu próxima experiencia?
          </h2>
          <p className="text-forest-50 text-lg mb-6">
            Escríbenos y te ayudamos a encontrar el viaje o evento ideal para ti.
          </p>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-forest-700 px-6 py-3.5 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
