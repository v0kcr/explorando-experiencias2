import { Link } from 'react-router-dom';
import { Compass, Heart, Shield, Users, Target, Eye, ArrowRight, Plane, Building2 } from 'lucide-react';

export default function QuienesSomos() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/15782415/pexels-photo-15782415.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Grupo de amigos en Ollantaytambo, Cusco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4 animate-fade-in">
              <Compass className="w-4 h-4 text-coral-300" />
              Quiénes Somos
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl leading-[1.1] mb-4 animate-fade-in-up">
              Una marca, dos comunidades,
              <br />
              <span className="text-coral-300">infinitas experiencias.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-gray-900 text-3xl mb-6">Nuestra historia</h2>
          <div className="prose prose-lg max-w-none space-y-4 text-gray-600 leading-relaxed">
            <p>
              Explorando Experiencias nació de una idea simple: viajar y conocer gente no deberían
              ser cosas separadas. Lo que empezó como un grupo de amigos organizando salidas se
              convirtió en una marca paraguas que hoy agrupa viajes, eventos sociales y servicios
              corporativos.
            </p>
            <p>
              Con el tiempo descubrimos que las personas solteras buscan cosas distintas: algunas
              quieren viajar y conocer destinos nuevos, otras prefieren actividades sociales más
              cercanas en la ciudad. Por eso creamos dos marcas especializadas: <strong>Viajes para
              Solteros Perú</strong> para los que quieren explorar el mundo, y <strong>Club Social
              de Solteros Perú</strong> para los que buscan comunidad en el día a día.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-coral-500 text-white flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Crear experiencias que conecten personas, destinos y emociones, diseñando viajes,
                eventos y comunidades donde cada persona soltera encuentre su lugar.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-forest-500 text-white flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser la marca líder en experiencias para solteros en Perú, reconocida por la calidad
                de sus viajes, la calidez de su comunidad y el profesionalismo de sus servicios
                corporativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-gray-900 text-3xl mb-8 text-center">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Grupos pequeños', text: 'Mantenemos grupos reducidos para que la experiencia sea cercana.' },
              { icon: Shield, title: 'Seguridad primero', text: 'Logística profesional y protocolos de seguridad en cada salida.' },
              { icon: Heart, title: 'Conexión real', text: 'Dinámicas y espacios diseñados para que las amistades surjan naturalmente.' },
              { icon: Compass, title: 'Experiencias únicas', text: 'Itinerarios pensados al detalle, no paquetes genéricos.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-5">
                <div className="w-12 h-12 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas del grupo */}
      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold text-gray-900 text-3xl mb-8 text-center">
            Marcas que forman parte del grupo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/viajes-para-solteros"
              className="group bg-white rounded-2xl p-6 border border-turquoise-100 hover:shadow-lg transition-shadow flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-turquoise-500 text-white flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">Viajes para Solteros Perú</h3>
                <p className="text-sm text-gray-600 mb-2">Viajes y eventos para conectar y explorar.</p>
                <span className="text-turquoise-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver viajes <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/club-social-solteros"
              className="group bg-white rounded-2xl p-6 border border-plum-100 hover:shadow-lg transition-shadow flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-plum-500 text-white flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-1">Club Social de Solteros Perú</h3>
                <p className="text-sm text-gray-600 mb-2">Comunidad para disfrutar tu soltería.</p>
                <span className="text-plum-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Conocer el club <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="bg-forest-600 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-10 h-10 text-forest-200 mx-auto mb-4" />
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3">
            Compromiso con la seguridad y el cuidado del viajero
          </h2>
          <p className="text-forest-50 text-lg leading-relaxed">
            Cada experiencia está diseñada con protocolos de seguridad, logística profesional y un
            equipo que cuida de cada detalle para que tú solo te preocupes de disfrutar.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-extrabold text-gray-900 text-2xl sm:text-3xl mb-4">
            Conoce nuestras próximas experiencias
          </h2>
          <Link
            to="/calendario"
            className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all hover:scale-105"
          >
            <Building2 className="w-5 h-5" />
            Ver calendario
          </Link>
        </div>
      </section>
    </div>
  );
}
