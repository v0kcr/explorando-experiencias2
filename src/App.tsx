import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { supabase, type Experience, type Testimonial } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Home from '@/pages/Home';
import QuienesSomos from '@/pages/QuienesSomos';
import ViajesParaSolteros from '@/pages/ViajesParaSolteros';
import ClubSocialSolteros from '@/pages/ClubSocialSolteros';
import Experiencias from '@/pages/Experiencias';
import Calendario from '@/pages/Calendario';
import Blog from '@/pages/Blog';
import Productos from '@/pages/Productos';
import Contacto from '@/pages/Contacto';
import Legal from '@/pages/Legal';

function App() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [expRes, testRes] = await Promise.all([
          supabase.from('experiences').select('*').order('sort_order', { ascending: true }),
          supabase.from('testimonials').select('*').order('sort_order', { ascending: true }),
        ]);
        if (expRes.data) setExperiences(expRes.data as Experience[]);
        if (testRes.data) setTestimonials(testRes.data as Testimonial[]);
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-coral-500 to-coral-700 flex items-center justify-center text-white mx-auto mb-4 animate-pulse">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8l-4 8-4-4 8-4z" fill="currentColor" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium">Cargando experiencias...</p>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home experiences={experiences} testimonials={testimonials} />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/viajes-para-solteros" element={<ViajesParaSolteros experiences={experiences} testimonials={testimonials} />} />
            <Route path="/club-social-solteros" element={<ClubSocialSolteros experiences={experiences} testimonials={testimonials} />} />
            <Route path="/experiencias" element={<Experiencias serviceKey="index" />} />
            <Route path="/experiencias/eventos-corporativos" element={<Experiencias serviceKey="eventos-corporativos" />} />
            <Route path="/experiencias/otros-servicios" element={<Experiencias serviceKey="otros-servicios" />} />
            <Route path="/experiencias/transporte-privado" element={<Experiencias serviceKey="transporte-privado" />} />
            <Route path="/experiencias/tours-a-medida" element={<Experiencias serviceKey="tours-a-medida" />} />
            <Route path="/calendario" element={<Calendario experiences={experiences} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/legal/privacidad" element={<Legal docKey="privacidad" />} />
            <Route path="/legal/terminos" element={<Legal docKey="terminos" />} />
            <Route path="/legal/autorizacion-imagen" element={<Legal docKey="autorizacion-imagen" />} />
            <Route path="/legal/cookies" element={<Legal docKey="cookies" />} />
            <Route path="/libro-de-reclamaciones" element={<Legal docKey="reclamaciones" />} />
            <Route path="*" element={<Home experiences={experiences} testimonials={testimonials} />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
