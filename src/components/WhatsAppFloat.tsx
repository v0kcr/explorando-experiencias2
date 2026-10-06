import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-forest-500 hover:bg-forest-600 shadow-xl flex items-center justify-center text-white transition-all hover:scale-110 animate-fade-in"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full bg-forest-500 animate-ping opacity-20" />
    </a>
  );
}
