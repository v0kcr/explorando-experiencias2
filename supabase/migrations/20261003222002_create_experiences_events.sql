/*
# Create experiences and events tables for Explorando Experiencias

1. New Tables
- `brands` — catalog of the three brands (Explorando Experiencias, Viajes para Solteros Perú, Club Social de Solteros Perú)
  - id (uuid, PK), slug (text, unique), name (text), tagline (text), description (text), color_key (text), instagram_url (text), created_at
- `experiences` — travel packages, events, and services offered across brands
  - id (uuid, PK), brand_slug (text, FK->brands.slug), title (text), subtitle (text), description (text), image_url (text), price_from (text), date_label (text), start_date (date), end_date (date), location (text), capacity (text), status (text), category (text), sort_order (int), created_at
- `testimonials` — community testimonials
  - id (uuid, PK), brand_slug (text), author_name (text), experience_name (text), quote (text), rating (int), image_url (text), sort_order (int), created_at

2. Security
- Enable RLS on all three tables.
- All tables are public-facing (no auth) — allow anon + authenticated SELECT only.
- No INSERT/UPDATE/DELETE policies — data is managed server-side.

3. Seed Data
- 3 brands
- 12 experiences (mix of VPS trips, Club events, and corporate services)
- 6 testimonials
*/

CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  tagline text,
  description text,
  color_key text,
  instagram_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read_brands" ON brands;
CREATE POLICY "public_read_brands" ON brands FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_slug text REFERENCES brands(slug) ON DELETE CASCADE,
  title text NOT NULL,
  subtitle text,
  description text,
  image_url text,
  price_from text,
  date_label text,
  start_date date,
  end_date date,
  location text,
  capacity text,
  status text DEFAULT 'disponible',
  category text DEFAULT 'viaje',
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read_experiences" ON experiences;
CREATE POLICY "public_read_experiences" ON experiences FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_slug text,
  author_name text NOT NULL,
  experience_name text,
  quote text NOT NULL,
  rating int DEFAULT 5,
  image_url text,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public_read_testimonials" ON testimonials;
CREATE POLICY "public_read_testimonials" ON testimonials FOR SELECT TO anon, authenticated USING (true);

-- Seed brands
INSERT INTO brands (slug, name, tagline, description, color_key, instagram_url) VALUES
('explorando-experiencias', 'Explorando Experiencias', 'Viajes, eventos y comunidades para explorar Perú y el mundo', 'Marca paraguas que agrupa viajes, eventos corporativos, transporte y experiencias especiales.', 'coral', 'https://www.instagram.com/explorando_rutas_/'),
('viajes-para-solteros', 'Viajes para Solteros Perú', 'Viajes y eventos para conectar, conocer nuevos destinos y compartir experiencias', 'Creemos que viajar solo no significa estar solo. Cada viaje es una oportunidad para conocer personas que comparten tu espíritu aventurero.', 'turquoise', 'https://www.instagram.com/viajesparasolteros.lima/'),
('club-social-solteros', 'Club Social de Solteros Perú', 'Una comunidad para disfrutar tu soltería de forma segura y divertida', 'Un espacio seguro donde conocer gente nueva, participar en actividades sociales y crear amistades genuinas.', 'plum', 'https://www.instagram.com/clubsocialsolterosperu/')
ON CONFLICT (slug) DO NOTHING;

-- Seed experiences
INSERT INTO experiences (brand_slug, title, subtitle, description, image_url, price_from, date_label, start_date, end_date, location, capacity, status, category, sort_order) VALUES
('viajes-para-solteros', 'Cusco y Valle Sagrado', '5 días de aventura inolvidable', 'Recorre Cusco, el Valle Sagrado y Machu Picchu en compañía de un grupo de solteros aventureros. Incluye hospedaje, tours guiados y actividades sociales.', 'https://images.pexels.com/photos/29980400/pexels-photo-29980400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 1,890', '15–19 de noviembre', '2026-11-15', '2026-11-19', 'Cusco, Perú', '20 cupos', 'disponible', 'viaje', 1),
('viajes-para-solteros', 'Ica, Paracas y Huacachina', 'Fin de semana de sol, arena y diversión', 'Desierto, oasis y playa en un fin de semana diseñado para conectar. Incluye buggy, sandboard y paseo en bote por las Islas Ballestas.', 'https://images.pexels.com/photos/16948961/pexels-photo-16948961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 690', '5–7 de diciembre', '2026-12-05', '2026-12-07', 'Ica, Perú', '15 cupos', 'pocos_cupos', 'viaje', 2),
('viajes-para-solteros', 'Rainbow Mountain y Valle Rojo', 'Caminata de altura entre colores imposibles', 'Una experiencia de un día Full Day para conocer la montaña de colores y el Valle Rojo con un grupo de viajeros solteros.', 'https://images.pexels.com/photos/20561309/pexels-photo-20561309.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 180', '23 de noviembre', '2026-11-23', '2026-11-23', 'Cusco, Perú', '12 cupos', 'disponible', 'viaje', 3),
('viajes-para-solteros', 'Ollantaytambo y Maras', 'Día cultural en el Valle Sagrado', 'Visita las salineras de Maras, el sitio arqueológico de Ollantaytambo y disfruta de un almuerzo comunitario con el grupo.', 'https://images.pexels.com/photos/15782415/pexels-photo-15782415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 250', '30 de noviembre', '2026-11-30', '2026-11-30', 'Cusco, Perú', '12 cupos', 'disponible', 'viaje', 4),
('club-social-solteros', 'After Office en Miraflores', 'Conoce gente nueva en un ambiente relajado', 'Una noche de networking social para solteros en un bar exclusivo de Miraflores. Bebida de bienvenida y dinámicas de integración.', 'https://images.pexels.com/photos/6405751/pexels-photo-6405751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 60', '8 de noviembre', '2026-11-08', '2026-11-08', 'Miraflores, Lima', '30 cupos', 'disponible', 'evento', 5),
('club-social-solteros', 'Brunch Dominical de Solteros', 'Desayuno tardío con buenas conversaciones', 'Un brunch dominical para empezar el domingo con buena comida y mejor compañía. Reserva tu lugar con anticipación.', 'https://images.pexels.com/photos/32333373/pexels-photo-32333373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 75', '16 de noviembre', '2026-11-16', '2026-11-16', 'Barranco, Lima', '20 cupos', 'disponible', 'evento', 6),
('club-social-solteros', 'Tarde de juegos de mesa', 'Risitas, estrategia y nuevas amistades', 'Una tarde de juegos de mesa en un café acogedor. Perfecto para conocer personas en un ambiente tranquilo y divertido.', 'https://images.pexels.com/photos/6405767/pexels-photo-6405767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 40', '22 de noviembre', '2026-11-22', '2026-11-22', 'San Isidro, Lima', '16 cupos', 'pocos_cupos', 'evento', 7),
('club-social-solteros', 'Celebración de fin de año', 'Despide el año con tu comunidad', 'Una gran fiesta de fin de año para toda la comunidad del Club. Música, sorpresas y la mejor energía para cerrar 2026.', 'https://images.pexels.com/photos/6405799/pexels-photo-6405799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'S/ 120', '27 de diciembre', '2026-12-27', '2026-12-27', 'Lima, Perú', '50 cupos', 'disponible', 'evento', 8),
('explorando-experiencias', 'Team Building Corporativo', 'Integración de equipos al aire libre', 'Programa de team building personalizado para empresas. Incluye dinámicas de integración, retos de equipo y almuerzo.', 'https://images.pexels.com/photos/7888988/pexels-photo-7888988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Consultar', 'Fecha a coordinar', NULL, NULL, 'A convenir', 'A convenir', 'disponible', 'corporativo', 9),
('explorando-experiencias', 'Transporte Privado Corporativo', 'Traslados seguros y cómodos para tu equipo', 'Servicio de transporte privado con vans modernas y choferes profesionales. Ideal para retiros, eventos y traslados de empresa.', 'https://images.pexels.com/photos/39416598/pexels-photo-39416598.png?auto=compress&cs=tinysrgb&h=650&w=940', 'Consultar', 'Fecha a coordinar', NULL, NULL, 'Lima y provincias', 'A convenir', 'disponible', 'servicio', 10),
('explorando-experiencias', 'Tours a Medida', 'Diseñamos la experiencia que imaginas', 'Creamos tours personalizados para grupos privados, celebraciones especiales y experiencias únicas a tu medida.', 'https://images.pexels.com/photos/30272390/pexels-photo-30272390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Consultar', 'Fecha a coordinar', NULL, NULL, 'Todo Perú', 'A convenir', 'disponible', 'servicio', 11),
('explorando-experiencias', 'Viaje de Incentivo Empresarial', 'Premia a tu equipo con una experiencia inolvidable', 'Viajes de incentivo diseñados para motivar y premiar a los colaboradores de tu empresa. Full service: logística, hospedaje y actividades.', 'https://images.pexels.com/photos/7495218/pexels-photo-7495218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Consultar', 'Fecha a coordinar', NULL, NULL, 'A convenir', 'A convenir', 'disponible', 'corporativo', 12)
ON CONFLICT (id) DO NOTHING;

-- Seed testimonials
INSERT INTO testimonials (brand_slug, author_name, experience_name, quote, rating, image_url, sort_order) VALUES
('viajes-para-solteros', 'María Fernanda C.', 'Cusco y Valle Sagrado', 'Fui con miedo de viajar sola y terminé con un grupo de amigos increíbles. La organización fue perfecta de principio a fin.', 5, 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 1),
('viajes-para-solteros', 'Carlos A.', 'Ica y Huacachina', 'El ambiente fue lo mejor. Gente de todas las edades, todos con ganas de divertirse y conocer. Repetiré sin duda.', 5, 'https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 2),
('club-social-solteros','Andrea R.', 'After Office Miraflores', 'Llegé sin conocer a nadie y me fui con tres nuevas amigas. El ambiente es súper cómodo, nada forzado.', 5, 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 3),
('club-social-solteros', 'Roberto M.', 'Brunch Dominical', 'Me gustó que fue algo relajado, sin presión. Conversaciones reales y gente genuina. Ideal para solteros que no les gusta la fiesta.', 4, 'https://images.pexels.com/photos/35681211/pexels-photo-35681211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 4),
('explorando-experiencias', 'Daniela P.', 'Team Building Corporativo', 'Contratamos el team building para 40 colaboradores y superó las expectativas. El equipo quedó más unido que nunca.', 5, 'https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 5),
('viajes-para-solteros', 'José Luis V.', 'Rainbow Mountain', 'Una caminata retadora pero el grupo se apoyó todo el tiempo. La experiencia de compartir la cima con nuevos amigos no tiene precio.', 5, 'https://images.pexels.com/photos/15019490/pexels-photo-15019490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 6)
ON CONFLICT (id) DO NOTHING;
