import { Link } from 'react-router-dom';
import { Heart, Shield, Users, Calendar, Star, ArrowRight, MessageCircle, ChevronRight, Sparkles, PartyPopper } from 'lucide-react';
import type { Experience, Testimonial } from '@/lib/supabase';
import ExperienceCard from '@/components/ExperienceCard';

type Props = {
  experiences: Experience[];
  testimonials: Testimonial[];
};

const benefits = [
  { icon: Users, title: 'Conoce gente nueva', text: 'Actividades diseñadas para que conectes con personas afines en un ambiente relajado.' },
  { icon: Shield, title: 'Espacio seguro', text: 'Contamos con un código de convivencia que garantiza respeto y seguridad para todos.' },
  { icon: Sparkles, title: 'Experiencias variadas', text: 'From after offices a brunches, tardes de juegos y celebraciones especiales.' },
  { icon: Heart, title: 'Sin presión', text: 'Participa a tu ritmo. Nada es forzado, todo es genuino.' },
];

export default function ClubSocialSolteros({ experiences, testimonials }: Props) {
  const clubEvents = experiences.filter((e) => e.brand_slug === 'club-social-solteros');
  const clubTestimonials = testimonials.filter((t) => t.brand_slug === 'club-social-solteros');

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-plum-900">
        <img
          src="https://images.pexels.com/photos/6405751/pexels-photo-6405751.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1800"
          alt="Grupo de amigos celebrando"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-plum-900/80 via-plum-900/50 to-rose-700/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-plum-400/30 backdrop-blur-md text-plum-50 text-sm font-medium px-4 py-2 rounded-full mb-5 animate-fade-in">
              <Heart className="w-4 h-4" />
              Club Social de Solteros Perú
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5 animate-fade-in-up">
              Disfruta tu soltería,
              <br />
              <span className="text-rose-300">acompañado.</span>
            </h1>
            <p className="text-lg text-plum-50 leading-relaxed mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              El Club Social de Solteros Perú es una comunidad para disfrutar tu soltería de manera
              segura, divertida y acompañada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#proximos-eventos"
                className="inline-flex items-center justify-center gap-2 bg-rose-400 hover:bg-rose-300 text-rose-900 px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Ver próximos eventos
              </a>
              <a
                href="#unirme"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-6 py-3.5 rounded-full font-semibold border border-white/30 transition-all"
              >
                <Heart className="w-5 h-5" />
                Unirme al Club
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es / Beneficios */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-plum-600 font-semibold text-sm uppercase tracking-wider">
              Beneficios
            </span>
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
              Por qué pertenecer al Club
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-plum-50 border border-plum-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-plum-500 text-white flex items-center justify-center mb-3">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section id="proximos-eventos" className="bg-cream-50 py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-plum-600 font-semibold text-sm uppercase tracking-wider">
                Próximos eventos
              </span>
              <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
                Actividades sociales
              </h2>
            </div>
            <Link to="/calendario" className="hidden sm:inline-flex items-center gap-1.5 text-plum-600 font-medium text-sm group">
              Ver calendario completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {clubEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubEvents.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">Próximamente nuevos eventos disponibles.</p>
          )}
        </div>
      </section>

      {/* Código de convivencia */}
      <section className="bg-plum-900 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-plum-500/30 backdrop-blur-md flex items-center justify-center mx-auto mb-5">
            <Shield className="w-7 h-7 text-plum-200" />
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-4">
            Código de convivencia y seguridad
          </h2>
          <p className="text-plum-100 text-lg leading-relaxed mb-8">
            Nuestra comunidad se basa en el respeto, la seguridad y el buen ambiente. Todos los
            miembros aceptan un código de convivencia que garantiza que cada actividad sea un
            espacio seguro y divertido para todos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              'Respeto mutuo en todo momento',
              'Cero tolerancia al acoso',
              'Privacidad y confidencialidad',
            ].map((item, i) => (
              <div key={i} className="bg-plum-800/50 rounded-xl p-4 border border-plum-700">
                <p className="text-plum-100 text-sm flex items-start gap-2">
                  <PartyPopper className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      {clubTestimonials.length > 0 && (
        <section className="bg-plum-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mb-8 text-center">
              Testimonios de miembros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {clubTestimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm border border-plum-100">
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

      {/* Unirme al Club */}
      <section id="unirme" className="bg-white py-16 lg:py-20 scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-plum-600 font-semibold text-sm uppercase tracking-wider">
              Únete
            </span>
            <h2 className="font-display font-extrabold text-gray-900 text-3xl sm:text-4xl mt-1">
              Unirme al Club
            </h2>
            <p className="text-gray-600 mt-3">
              Completa el formulario y te contactaremos para darte la bienvenida a la comunidad.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.open('https://wa.me/51999999999', '_blank');
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-plum-400 focus:ring-2 focus:ring-plum-200 outline-none transition-all text-sm"
              />
              <input
                type="tel"
                placeholder="Celular"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-plum-400 focus:ring-2 focus:ring-plum-200 outline-none transition-all text-sm"
              />
            </div>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-plum-400 focus:ring-2 focus:ring-plum-200 outline-none transition-all text-sm"
            />
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-plum-400 focus:ring-2 focus:ring-plum-200 outline-none transition-all text-sm bg-white">
              <option>¿Qué tipo de actividades te interesan?</option>
              <option>After office / networking</option>
              <option>Brunch y comidas sociales</option>
              <option>Tardes de juegos</option>
              <option>Celebraciones y fiestas</option>
              <option>Todas</option>
            </select>
            <label className="flex items-start gap-3 text-xs text-gray-600">
              <input type="checkbox" required className="mt-0.5 rounded border-gray-300" />
              <span>
                Autorizo a Explorando Experiencias y sus marcas relacionadas a utilizar mi imagen,
                voz y testimonio en sus canales de comunicación, de acuerdo con los términos de la
                autorización de uso de imagen y voz.
              </span>
            </label>
            <button
              type="submit"
              className="w-full bg-plum-500 hover:bg-plum-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-[1.02]"
            >
              Quiero unirme al Club
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
