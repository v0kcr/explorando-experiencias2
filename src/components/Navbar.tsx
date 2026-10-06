import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Compass, MessageCircle } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
  { to: '/viajes-para-solteros', label: 'Viajes para Solteros Perú' },
  { to: '/club-social-solteros', label: 'Club Social de Solteros Perú' },
];

const exploreItems = [
  { to: '/experiencias', label: 'Experiencias' },
  { to: '/calendario', label: 'Calendario' },
  { to: '/blog', label: 'Blog / Comunidad' },
  { to: '/productos', label: 'Productos' },
  { to: '/contacto', label: 'Contacto' },
];

const experiencesDropdown = [
  { to: '/experiencias/eventos-corporativos', label: 'Eventos Corporativos' },
  { to: '/experiencias/otros-servicios', label: 'Otros Servicios' },
  { to: '/experiencias/transporte-privado', label: 'Transporte Privado' },
  { to: '/experiencias/tours-a-medida', label: 'Tours a Medida' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expDropdown, setExpDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setExpDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-500 to-coral-700 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-extrabold text-gray-900 text-lg leading-tight block">
                Explorando
              </span>
              <span className="font-sans text-coral-600 text-xs font-medium leading-tight block">
                Experiencias
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-coral-600 bg-coral-50'
                      : 'text-gray-700 hover:text-coral-600 hover:bg-coral-50/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Experiencias dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setExpDropdown(true)}
              onMouseLeave={() => setExpDropdown(false)}
            >
              <button className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-coral-600 hover:bg-coral-50/60 transition-colors flex items-center gap-1">
                Experiencias
                <ChevronDown className={`w-4 h-4 transition-transform ${expDropdown ? 'rotate-180' : ''}`} />
              </button>
              {expDropdown && (
                <div className="absolute top-full left-0 pt-1 w-56 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    {experiencesDropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-coral-50 hover:text-coral-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {exploreItems
              .filter((i) => i.to !== '/experiencias')
              .map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-coral-600 bg-coral-50'
                        : 'text-gray-700 hover:text-coral-600 hover:bg-coral-50/60'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
          </div>

          {/* WhatsApp CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto animate-fade-in">
          <div className="px-4 py-4 space-y-4">
            {/* Nuestras marcas */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
                Nuestras marcas
              </p>
              <Link
                to="/viajes-para-solteros"
                className="flex items-start gap-3 p-3 rounded-xl bg-turquoise-50 hover:bg-turquoise-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-turquoise-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-turquoise-700 text-sm">Viajes para Solteros Perú</p>
                  <p className="text-xs text-gray-600 mt-0.5">Ver viajes</p>
                </div>
              </Link>
              <Link
                to="/club-social-solteros"
                className="flex items-start gap-3 p-3 rounded-xl bg-plum-50 hover:bg-plum-100 transition-colors mt-2"
              >
                <div className="w-8 h-8 rounded-lg bg-plum-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-plum-700 text-sm">Club Social de Solteros Perú</p>
                  <p className="text-xs text-gray-600 mt-0.5">Conocer el club</p>
                </div>
              </Link>
            </div>

            {/* Explora */}
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
                Explora
              </p>
              <div className="space-y-1">
                {[
                  { to: '/', label: 'Inicio' },
                  { to: '/quienes-somos', label: 'Quiénes Somos' },
                  { to: '/experiencias', label: 'Experiencias' },
                  { to: '/calendario', label: 'Calendario' },
                  { to: '/blog', label: 'Blog / Comunidad' },
                  { to: '/productos', label: 'Productos' },
                  { to: '/contacto', label: 'Contacto' },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'text-coral-600 bg-coral-50' : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Experiencias sub-items */}
            <div className="pl-4 space-y-1 border-l-2 border-gray-100">
              <p className="text-xs text-gray-400 px-3 mb-1">Servicios</p>
              {experiencesDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-forest-500 text-white px-4 py-3 rounded-full text-sm font-medium shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
