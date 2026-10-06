import { Link } from 'react-router-dom';
import { Compass, MessageCircle, Mail, MapPin, Instagram, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-500 to-coral-700 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-extrabold text-white text-lg block leading-tight">
                  Explorando
                </span>
                <span className="text-coral-400 text-xs">Experiencias</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Diseñamos viajes, eventos y comunidades para que explores Perú y el mundo con la
              compañía correcta.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-forest-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="mailto:hola@explorandoexperiencias.pe"
                className="flex items-center gap-2 text-gray-400 hover:text-coral-300 transition-colors"
              >
                <Mail className="w-4 h-4" /> hola@explorandoexperiencias.pe
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" /> Lima, Perú
              </p>
            </div>
          </div>

          {/* Explorar */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-coral-300 transition-colors">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="text-gray-400 hover:text-coral-300 transition-colors">Quiénes Somos</Link></li>
              <li><Link to="/calendario" className="text-gray-400 hover:text-coral-300 transition-colors">Calendario</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-coral-300 transition-colors">Blog / Comunidad</Link></li>
              <li><Link to="/productos" className="text-gray-400 hover:text-coral-300 transition-colors">Productos</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-coral-300 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Nuestras marcas */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Nuestras marcas
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/viajes-para-solteros" className="text-gray-400 hover:text-turquoise-300 transition-colors">
                  Viajes para Solteros Perú
                </Link>
              </li>
              <li>
                <Link to="/club-social-solteros" className="text-gray-400 hover:text-plum-300 transition-colors">
                  Club Social de Solteros Perú
                </Link>
              </li>
              <li>
                <Link to="/experiencias/eventos-corporativos" className="text-gray-400 hover:text-coral-300 transition-colors">
                  Eventos Corporativos
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/explorando_rutas_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-coral-600 flex items-center justify-center transition-colors"
                aria-label="Instagram Explorando Experiencias"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/viajesparasolteros.lima/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-turquoise-600 flex items-center justify-center transition-colors"
                aria-label="Instagram Viajes para Solteros"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/clubsocialsolterosperu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-plum-600 flex items-center justify-center transition-colors"
                aria-label="Instagram Club Social"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/legal/privacidad" className="text-gray-400 hover:text-coral-300 transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/legal/terminos" className="text-gray-400 hover:text-coral-300 transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/legal/autorizacion-imagen" className="text-gray-400 hover:text-coral-300 transition-colors">Autorización de Uso de Imagen y Voz</Link></li>
              <li><Link to="/legal/cookies" className="text-gray-400 hover:text-coral-300 transition-colors">Política de Cookies</Link></li>
              <li><Link to="/libro-de-reclamaciones" className="text-gray-400 hover:text-coral-300 transition-colors">Libro de Reclamaciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Explorando Experiencias. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <FileText className="w-3 h-3" /> Los documentos legales deben ser revisados por asesoría legal peruana.
          </p>
        </div>
      </div>
    </footer>
  );
}
