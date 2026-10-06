import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Plus, Filter } from 'lucide-react';
import type { Experience } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/supabase';
import { BRAND_CONFIG } from '@/lib/brands';
import ExperienceCard from '@/components/ExperienceCard';

type Props = { experiences: Experience[] };

const FILTERS = [
  { key: 'todos', label: 'Todos' },
  { key: 'viajes-para-solteros', label: 'Viajes para Solteros Perú' },
  { key: 'club-social-solteros', label: 'Club Social de Solteros Perú' },
  { key: 'explorando-experiencias', label: 'Eventos corporativos' },
  { key: 'taller', label: 'Talleres / actividades' },
];

function formatDate(dateStr: string | null) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-PE', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
}

function googleCalendarLink(exp: Experience) {
  if (!exp.start_date) return null;
  const start = new Date(exp.start_date + 'T00:00:00').toISOString().replace(/[-:]/g, '').replace('.000', 'Z');
  const endDate = exp.end_date ?? exp.start_date;
  const end = new Date(endDate + 'T23:59:00').toISOString().replace(/[-:]/g, '').replace('.000', 'Z');
  const text = encodeURIComponent(exp.title);
  const details = encodeURIComponent(exp.description ?? '');
  const location = encodeURIComponent(exp.location ?? '');
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export default function Calendario({ experiences }: Props) {
  const [filter, setFilter] = useState('todos');

  const filtered = useMemo(() => {
    let list = experiences.filter((e) => e.start_date);
    if (filter === 'todos') {
      // keep all
    } else if (filter === 'taller') {
      list = list.filter((e) => e.category === 'taller' || e.category === 'evento');
    } else {
      list = list.filter((e) => e.brand_slug === filter);
    }
    return list.sort((a, b) => (a.start_date ?? '').localeCompare(b.start_date ?? ''));
  }, [experiences, filter]);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-coral-500 to-coral-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            Calendario
          </span>
          <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-3">
            Próximas experiencias
          </h1>
          <p className="text-coral-50 text-lg max-w-xl mx-auto">
            Consulta fechas, destinos y disponibilidad de todos nuestros viajes y eventos.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
            <Filter className="w-4 h-4 text-gray-400 shrink-0" />
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.key
                    ? 'bg-coral-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="bg-cream-50 py-12 lg:py-16 min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No hay eventos para este filtro en este momento.</p>
              <button
                onClick={() => setFilter('todos')}
                className="mt-4 text-coral-600 font-medium text-sm hover:underline"
              >
                Ver todos los eventos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((exp) => {
                const brand = exp.brand_slug ? BRAND_CONFIG[exp.brand_slug as keyof typeof BRAND_CONFIG] : null;
                const status = STATUS_LABELS[exp.status] ?? STATUS_LABELS.disponible;
                const gcalLink = googleCalendarLink(exp);
                const dateObj = exp.start_date ? new Date(exp.start_date + 'T00:00:00') : null;

                return (
                  <div
                    key={exp.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Date block */}
                      {dateObj && (
                        <div className="sm:w-28 shrink-0 bg-gradient-to-b from-coral-500 to-coral-600 text-white flex flex-col items-center justify-center py-6 sm:py-0">
                          <span className="text-xs font-medium uppercase tracking-wider">
                            {dateObj.toLocaleDateString('es-PE', { month: 'short' })}
                          </span>
                          <span className="text-3xl font-bold font-display">
                            {dateObj.getDate()}
                          </span>
                          <span className="text-xs mt-1">
                            {dateObj.toLocaleDateString('es-PE', { weekday: 'short' })}
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 p-5 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            {brand && (
                              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${brand.chipBg} ${brand.chipText}`}>
                                {brand.short}
                              </span>
                            )}
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${status.className}`}>
                              {status.label}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-gray-900 text-lg mb-1">
                            {exp.title}
                          </h3>
                          {exp.subtitle && (
                            <p className="text-sm text-gray-500 mb-2">{exp.subtitle}</p>
                          )}
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                            {exp.date_label && (
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-coral-500" />
                                {formatDate(exp.start_date)}
                              </span>
                            )}
                            {exp.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-coral-500" />
                                {exp.location}
                              </span>
                            )}
                            {exp.capacity && (
                              <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5 text-coral-500" />
                                {exp.capacity}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 sm:justify-between shrink-0">
                          {exp.price_from && (
                            <span className="text-sm font-bold text-gray-900">
                              {exp.price_from === 'Consultar' ? (
                                <span className="text-gray-500 font-medium text-xs">Consultar</span>
                              ) : (
                                <>
                                  <span className="text-gray-400 font-normal text-xs">Desde </span>
                                  {exp.price_from}
                                </>
                              )}
                            </span>
                          )}
                          <div className="flex gap-2">
                            {gcalLink && (
                              <a
                                href={gcalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-coral-600 border border-gray-200 hover:border-coral-300 px-3 py-1.5 rounded-full transition-colors"
                                title="Agregar a Google Calendar"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                Google Calendar
                              </a>
                            )}
                            <Link
                              to="/contacto"
                              className={`inline-flex items-center gap-1 text-xs font-medium text-white ${brand?.bg ?? 'bg-coral-500'} hover:opacity-90 px-3 py-1.5 rounded-full transition-opacity`}
                            >
                              Información
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Grid view of all experiences (including without dates) */}
          {filter === 'todos' && experiences.filter((e) => !e.start_date).length > 0 && (
            <div className="mt-12">
              <h2 className="font-display font-extrabold text-gray-900 text-2xl mb-6">
                Servicios disponibles todo el año
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.filter((e) => !e.start_date).map((exp) => (
                  <ExperienceCard key={exp.id} experience={exp} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
