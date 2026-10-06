import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Plane, MapPin, Heart, Users, Building2 } from 'lucide-react';

const categories = [
  { name: 'Viajes', icon: Plane, color: 'turquoise' },
  { name: 'Destinos', icon: MapPin, color: 'coral' },
  { name: 'Historias de viajeros', icon: Users, color: 'solar' },
  { name: 'Club Social', icon: Heart, color: 'plum' },
  { name: 'Habilidades sociales', icon: BookOpen, color: 'forest' },
  { name: 'Empresas y team building', icon: Building2, color: 'coral' },
];

const posts = [
  { title: '5 destinos en Perú que debes visitar siendo soltero', cat: 'Viajes', date: '2 oct 2026', img: 'https://images.pexels.com/photos/15684889/pexels-photo-15684889.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { title: 'Cómo romper el hielo en un viaje con desconocidos', cat: 'Habilidades sociales', date: '28 sep 2026', img: 'https://images.pexels.com/photos/6405751/pexels-photo-6405751.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { title: 'Valle Sagrado: guía completa para tu próximo viaje', cat: 'Destinos', date: '20 sep 2026', img: 'https://images.pexels.com/photos/15782415/pexels-photo-15782415.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
  { title: 'Team building al aire libre: por qué funciona', cat: 'Empresas y team building', date: '15 sep 2026', img: 'https://images.pexels.com/photos/7888988/pexels-photo-7888988.jpeg?auto=compress&cs=tinysrgb&h=400&w=600' },
];

export default function Blog() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            Blog / Comunidad
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-3">
            Historias, guías y comunidad
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Consejos de viaje, destinos, habilidades sociales y experiencias de nuestra comunidad.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:border-coral-300 hover:text-coral-600 transition-colors"
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.img} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-coral-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.cat}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h2 className="font-display font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-coral-600 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-coral-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer más <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Próximamente más artículos y contenido de nuestra comunidad.</p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-coral-500 hover:bg-coral-600 text-white px-5 py-3 rounded-full text-sm font-medium shadow-md transition-all hover:scale-105"
            >
              Únete a nuestra comunidad
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
