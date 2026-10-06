import { Link } from 'react-router-dom';
import { Building2, Wrench, Bus, Map, ArrowRight, Check } from 'lucide-react';

type ServiceKey = 'eventos-corporativos' | 'otros-servicios' | 'transporte-privado' | 'tours-a-medida' | 'index';

const services: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: typeof Building2;
  items: string[];
  color: string;
}> = {
  'eventos-corporativos': {
    title: 'Eventos Corporativos',
    subtitle: 'Integración de equipos y celebraciones empresariales',
    description: 'Diseñamos experiencias de team building, viajes de incentivo y celebraciones empresariales que fortalecen la cohesión de tu equipo.',
    image: 'https://images.pexels.com/photos/7888988/pexels-photo-7888988.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    icon: Building2,
    items: ['Integración de equipos', 'Team building', 'Celebraciones empresariales', 'Transporte corporativo', 'Viajes de incentivo'],
    color: 'coral',
  },
  'otros-servicios': {
    title: 'Otros Servicios',
    subtitle: 'Experiencias especiales a tu medida',
    description: 'Producción de actividades, celebraciones personalizadas y experiencias únicas para grupos privados.',
    image: 'https://images.pexels.com/photos/7495218/pexels-photo-7495218.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    icon: Wrench,
    items: ['Viajes privados', 'Celebraciones', 'Tours personalizados', 'Producción de actividades', 'Organización de experiencias especiales'],
    color: 'coral',
  },
  'transporte-privado': {
    title: 'Transporte Privado',
    subtitle: 'Traslados seguros y cómodos',
    description: 'Servicio de transporte privado con vans modernas y choferes profesionales. Ideal para retiros, eventos y traslados corporativos.',
    image: 'https://images.pexels.com/photos/39416598/pexels-photo-39416598.png?auto=compress&cs=tinysrgb&h=900&w=1600',
    icon: Bus,
    items: ['Vans modernas', 'Choferes profesionales', 'Traslados corporativos', 'Servicio a provincias', 'Disponibilidad full time'],
    color: 'coral',
  },
  'tours-a-medida': {
    title: 'Tours a Medida',
    subtitle: 'Diseñamos la experiencia que imaginas',
    description: 'Creamos tours personalizados para grupos privados, celebraciones especiales y experiencias únicas a tu medida.',
    image: 'https://images.pexels.com/photos/30272390/pexels-photo-30272390.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    icon: Map,
    items: ['Itinerarios personalizados', 'Grupos privados', 'Celebraciones especiales', 'Guías especializados', 'Full service'],
    color: 'coral',
  },
};

const serviceCards = [
  { to: '/experiencias/eventos-corporativos', ...services['eventos-corporativos'] },
  { to: '/experiencias/otros-servicios', ...services['otros-servicios'] },
  { to: '/experiencias/transporte-privado', ...services['transporte-privado'] },
  { to: '/experiencias/tours-a-medida', ...services['tours-a-medida'] },
];

type Props = { serviceKey: ServiceKey };

export default function Experiencias({ serviceKey }: Props) {
  if (serviceKey === 'index') {
    return (
      <div className="pt-16 lg:pt-20">
        <section className="bg-gradient-to-br from-coral-500 to-coral-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4" />
              Experiencias
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-3">
              Servicios corporativos y especiales
            </h1>
            <p className="text-coral-50 text-lg max-w-xl mx-auto">
              Eventos empresariales, transporte, tours a medida y experiencias diseñadas a tu
              necesidad.
            </p>
          </div>
        </section>

        <section className="bg-cream-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceCards.map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-coral-900/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <div className="w-9 h-9 rounded-lg bg-coral-500/80 backdrop-blur-md flex items-center justify-center">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <span className="font-display font-bold">{card.title}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                    <span className="text-coral-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const svc = services[serviceKey];
  if (!svc) return null;

  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <img src={svc.image} alt={svc.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-coral-900/85 to-coral-700/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl">
            <Link to="/experiencias" className="text-coral-200 text-sm hover:text-white transition-colors inline-flex items-center gap-1 mb-3">
              ← Experiencias
            </Link>
            <div className="w-12 h-12 rounded-xl bg-coral-500 flex items-center justify-center text-white mb-4">
              <svc.icon className="w-6 h-6" />
            </div>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[1.1] mb-3">
              {svc.title}
            </h1>
            <p className="text-lg text-coral-50">{svc.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{svc.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {svc.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-cream-200">
                <Check className="w-5 h-5 text-forest-500 shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Cotización */}
          <div className="bg-gradient-to-br from-coral-50 to-cream-100 rounded-2xl p-8 border border-coral-100">
            <h2 className="font-display font-bold text-gray-900 text-2xl mb-3">
              Solicita una cotización
            </h2>
            <p className="text-gray-600 mb-5">
              Cuéntanos sobre tu evento o proyecto y te enviaremos una propuesta personalizada.
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.open('https://wa.me/51999999999', '_blank');
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Empresa o nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm" />
                <input type="email" placeholder="Correo" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm" />
              </div>
              <input type="text" placeholder="Tipo de evento o servicio" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm" />
              <textarea placeholder="Cuéntanos más detalles" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-200 outline-none transition-all text-sm resize-none" />
              <button type="submit" className="w-full bg-coral-500 hover:bg-coral-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-[1.02]">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
