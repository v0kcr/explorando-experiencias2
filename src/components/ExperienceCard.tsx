import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import type { Experience } from '@/lib/supabase';
import { STATUS_LABELS } from '@/lib/supabase';
import { BRAND_CONFIG as BRANDS } from '@/lib/brands';

type Props = {
  experience: Experience;
  compact?: boolean;
};

export default function ExperienceCard({ experience, compact = false }: Props) {
  const status = STATUS_LABELS[experience.status] ?? STATUS_LABELS.disponible;
  const brand = experience.brand_slug
    ? BRANDS[experience.brand_slug as keyof typeof BRANDS]
    : null;

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className={`relative overflow-hidden ${compact ? 'h-40' : 'h-52'}`}>
        {experience.image_url ? (
          <img
            src={experience.image_url}
            alt={experience.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-coral-100 to-coral-200" />
        )}
        {/* Brand chip */}
        {brand && (
          <span className={`absolute top-3 left-3 ${brand.chipBg} ${brand.chipText} text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm`}>
            {brand.short}
          </span>
        )}
        {/* Status badge */}
        <span className={`absolute top-3 right-3 ${status.className} text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm`}>
          {status.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-gray-900 text-base sm:text-lg leading-snug mb-1">
          {experience.title}
        </h3>
        {experience.subtitle && (
          <p className="text-sm text-gray-500 mb-3">{experience.subtitle}</p>
        )}

        <div className="space-y-1.5 text-xs text-gray-600 mb-4">
          {experience.date_label && (
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-coral-500" />
              <span>{experience.date_label}</span>
            </div>
          )}
          {experience.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-coral-500" />
              <span>{experience.location}</span>
            </div>
          )}
          {experience.capacity && (
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-coral-500" />
              <span>{experience.capacity}</span>
            </div>
          )}
        </div>

        {experience.description && !compact && (
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">{experience.description}</p>
        )}

        <div className="mt-auto flex items-center justify-between">
          {experience.price_from && (
            <span className="text-sm font-bold text-gray-900">
              {experience.price_from === 'Consultar' ? (
                <span className="text-gray-500 font-medium">Consultar</span>
              ) : (
                <>
                  <span className="text-gray-400 font-normal text-xs">Desde </span>
                  {experience.price_from}
                </>
              )}
            </span>
          )}
          <Link
            to="/contacto"
            className={`inline-flex items-center gap-1 text-sm font-medium ${brand?.text ?? 'text-coral-600'} hover:gap-2 transition-all`}
          >
            Ver experiencia
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

