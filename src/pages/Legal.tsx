import { FileText } from 'lucide-react';

const LEGAL_CONTENT: Record<string, { title: string; body: string[] }> = {
  privacidad: {
    title: 'Política de Privacidad',
    body: [
      'Explorando Experiencias respeta la privacidad de los usuarios de este sitio web. Esta política describe qué datos recopilamos, cómo los usamos y qué derechos tienes.',
      'Recopilamos información que nos proporcionas directamente: nombre, correo, teléfono y preferencias, a través de los formularios de contacto y registro.',
      'Usamos tus datos para responder tus consultas, enviarte información sobre experiencias y procesar reservas. No compartimos tus datos con terceros sin tu consentimiento.',
      'Puedes solicitar el acceso, rectificación o eliminación de tus datos personales en cualquier momento escribiendo a hola@explorandoexperiencias.pe.',
      'Este documento es una referencia general y debe ser revisado por asesoría legal peruana antes de su publicación oficial.',
    ],
  },
  terminos: {
    title: 'Términos y Condiciones',
    body: [
      'Los términos y condiciones regulan el uso de este sitio web y la contratación de viajes, eventos y servicios ofrecidos por Explorando Experiencias.',
      'La reserva de cualquier experiencia implica la aceptación de estos términos, así como de la política de cambios, cancelaciones y reembolsos.',
      'El usuario se compromete a proporcionar información veraz en los formularios y a respetar el código de convivencia de cada experiencia.',
      'Explorando Experiencias se reserva el derecho de modificar o cancelar experiencias por causas de fuerza mayor, ofreciendo alternativas o reembolsos según corresponda.',
      'Este documento es una referencia general y debe ser revisado por asesoría legal peruana antes de su publicación oficial.',
    ],
  },
  'autorizacion-imagen': {
    title: 'Autorización de Uso de Imagen y Voz',
    body: [
      'Mediante la aceptación de la casilla correspondiente en nuestros formularios, el usuario autoriza a Explorando Experiencias y sus marcas relacionadas a utilizar su imagen, voz y testimonio en sus canales de comunicación.',
      'Esta autorización incluye el uso de fotografías, videos y testimonios en redes sociales, sitio web, materiales promocionales y publicitarios.',
      'La autorización es voluntaria y puede ser revocada en cualquier momento mediante solicitud por escrito a hola@explorandoexperiencias.pe.',
      'El usuario declara que cuenta con la capacidad legal para otorgar esta autorización y que los contenidos aportados no infringen derechos de terceros.',
      'Este documento debe ser revisado por asesoría legal peruana antes de su publicación oficial.',
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    body: [
      'Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación, analizar el tráfico y personalizar el contenido.',
      'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio.',
      'Puedes configurar tu navegador para bloquear o eliminar cookies, aunque algunas funcionalidades del sitio pueden verse afectadas.',
      'No utilizamos cookies para recopilar información personal sensible sin tu consentimiento expreso.',
      'Este documento es una referencia general y debe ser revisado por asesoría legal peruana antes de su publicación oficial.',
    ],
  },
  reclamaciones: {
    title: 'Libro de Reclamaciones',
    body: [
      'En cumplimiento con la normativa peruana de protección al consumidor, ponemos a disposición el Libro de Reclamaciones.',
      'Para presentar un reclamo o queja, escríbenos a hola@explorandoexperiencias.pe con el asunto "Libro de Reclamaciones".',
      'Tu reclamo será atendido dentro de los plazos establecidos por la normativa vigente.',
    ],
  },
};

type Props = { docKey: string };

export default function Legal({ docKey }: Props) {
  const content = LEGAL_CONTENT[docKey] ?? LEGAL_CONTENT.privacidad;

  return (
    <div className="pt-16 lg:pt-20">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-display font-extrabold text-white text-3xl sm:text-4xl">
            {content.title}
          </h1>
        </div>
      </section>

      <section className="bg-cream-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="space-y-4">
              {content.body.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-sm">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            Estos documentos son referencias generales y no sustituyen la asesoría legal profesional.
            Deben ser preparados o revisados por un abogado en Perú.
          </p>
        </div>
      </section>
    </div>
  );
}
