import { BookOpen, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';

const products = [
  {
    name: 'Ebook: Habilidades Sociales',
    brand: 'Club Social de Solteros Perú',
    desc: 'Transforma tu modo de relacionarte con las personas, generando conexiones genuinas y efectivas en corto tiempo.',
    price: 'S/ 25',
    img: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    cat: 'Digital',
    cta: 'Lo quiero',
  },
  {
    name: 'Agenda Viajera',
    brand: 'Explorando Experiencias',
    desc: 'Tu agenda viajera acompañando cada momento de tu día, planificando cada experiencia. Un espacio íntimo solo para ti.',
    price: 'S/ 45',
    img: 'https://images.pexels.com/photos/3452151/pexels-photo-3452151.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    cat: 'Físico',
    cta: 'Lo quiero',
  },
  {
    name: 'Kit de Viaje Soltero',
    brand: 'Viajes para Solteros Perú',
    desc: 'Incluye botella reutilizable, diario de viaje y etiquetas de equipaje.',
    price: 'S/ 65',
    img: 'https://images.pexels.com/photos/16066999/pexels-photo-16066999.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    cat: 'Físico',
    cta: 'Lo quiero',
  },
  {
    name: 'Taller: Cómo Conocer Gente Nueva',
    brand: 'Club Social de Solteros Perú',
    desc: 'Taller virtual con dinámicas prácticas para superar la timidez social.',
    price: 'S/ 80',
    img: 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    cat: 'Taller',
    cta: 'Lo quiero',
  },
];

export default function Productos() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="bg-gradient-to-br from-coral-500 to-solar-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4" />
            Productos
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-3">
            Productos para viajeros
          </h1>
          <p className="text-coral-50 text-lg max-w-xl mx-auto">
            Agendas, ebooks, talleres y kits diseñados para acompañar tus experiencias.
          </p>
        </div>
      </section>

      <section className="bg-cream-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2.5 py-1 rounded-full text-gray-700">
                    {p.cat}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-coral-600 font-medium mb-1">{p.brand}</p>
                  <h3 className="font-display font-bold text-gray-900 text-base mb-1">{p.name}</h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-3 flex-1">{p.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-gray-900 text-sm">{p.price}</span>
                    <a
                      href="https://wa.me/51999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-coral-600 text-sm font-medium hover:gap-2 transition-all"
                    >
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-2xl p-8 border border-gray-100">
            <BookOpen className="w-10 h-10 text-coral-500 mx-auto mb-3" />
            <h2 className="font-display font-bold text-gray-900 text-xl mb-2">
              ¿Buscas algo específico?
            </h2>
            <p className="text-gray-600 mb-4">
              Próximamente más productos. Escríbenos para conocer novedades.
            </p>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-5 py-3 rounded-full text-sm font-medium shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
