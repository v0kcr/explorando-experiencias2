import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Experience = {
  id: string;
  brand_slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  image_url: string | null;
  price_from: string | null;
  date_label: string | null;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  capacity: string | null;
  status: string;
  category: string;
  sort_order: number;
};

export type Brand = {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  description: string | null;
  color_key: string | null;
  instagram_url: string | null;
};

export type Testimonial = {
  id: string;
  brand_slug: string | null;
  author_name: string;
  experience_name: string | null;
  quote: string;
  rating: number;
  image_url: string | null;
  sort_order: number;
};

export const STATUS_LABELS: Record<string, { label: string; className: string }> = {
  disponible: { label: 'Disponible', className: 'bg-forest-100 text-forest-700' },
  pocos_cupos: { label: 'Pocos cupos', className: 'bg-solar-100 text-solar-700' },
  agotado: { label: 'Agotado', className: 'bg-red-100 text-red-700' },
  cancelado: { label: 'Cancelado', className: 'bg-gray-200 text-gray-600' },
};
