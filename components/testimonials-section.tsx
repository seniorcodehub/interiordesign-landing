"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useI18n } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t, locale } = useI18n();

  const testimonialsEs = [
    {
      quote:
        "Interior Design XR nos ha permitido rediseñar más de 50 tiendas en toda España de forma ágil y coordinada. La visualización en realidad extendida ha sido clave para mantener la coherencia de nuestra imagen de marca mientras adaptamos cada espacio a las necesidades locales.",
      name: "El Corte Inglés",
      designation: "Líder en Distribución Comercial en España",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/02/Logo_Corte_Ingl%C3%A9s.svg",
    },
    {
      quote:
        "Implementar Interior Design XR en nuestras oficinas corporativas y estaciones de servicio ha transformado nuestro proceso de diseño. Podemos planificar y visualizar espacios que reflejan nuestra identidad corporativa con precisión milimétrica, reduciendo tiempos de proyecto en un 40%.",
      name: "Repsol",
      designation: "Empresa Energética Multienergética Global",
      src: "https://cdn.cookielaw.org/logos/7ac73671-dcc7-49ac-8bc8-62378218ce5c/2746fc61-d6e4-4a21-aaf4-b38c2ebe618b/717a9471-1ce2-4ec9-95e5-c3cb8058b16d/Repsol-Logo.wine.png",
    },
    {
      quote:
        "La precisión es fundamental en nuestro sector. Interior Design XR nos permite diseñar espacios de cabina y áreas corporativas con un nivel de detalle excepcional. La colaboración entre nuestros equipos en diferentes países se ha vuelto infinitamente más eficiente.",
      name: "Airbus",
      designation: "Líder Mundial en Aeronáutica",
      src: "https://logos-world.net/wp-content/uploads/2020/04/Airbus-Logo-2001-2010.png",
    },
  ];

  const testimonialsEn = [
    {
      quote:
        "Interior Design XR has enabled us to redesign over 50 stores across Spain in an agile and coordinated manner. Extended reality visualization has been key to maintaining brand image consistency while adapting each space to local needs.",
      name: "El Corte Inglés",
      designation: "Leading Retail Distribution Company in Spain",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/02/Logo_Corte_Ingl%C3%A9s.svg",
    },
    {
      quote:
        "Implementing Interior Design XR in our corporate offices and service stations has transformed our design process. We can plan and visualize spaces that reflect our corporate identity with millimeter precision, reducing project timelines by 40%.",
      name: "Repsol",
      designation: "Global Multi-Energy Company",
      src: "https://cdn.cookielaw.org/logos/7ac73671-dcc7-49ac-8bc8-62378218ce5c/2746fc61-d6e4-4a21-aaf4-b38c2ebe618b/717a9471-1ce2-4ec9-95e5-c3cb8058b16d/Repsol-Logo.wine.png",
    },
    {
      quote:
        "Precision is paramount in our industry. Interior Design XR allows us to design cabin spaces and corporate areas with exceptional detail. Collaboration between our teams in different countries has become infinitely more efficient.",
      name: "Airbus",
      designation: "World Leader in Aeronautics",
      src: "https://logos-world.net/wp-content/uploads/2020/04/Airbus-Logo-2001-2010.png",
    },
  ];

  const testimonials = locale === "es" ? testimonialsEs : testimonialsEn;

  return (
    <section className="bg-gradient-to-b from-white to-[#F5EFE7]/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3028] mb-4">
            {t("testimonials_title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("testimonials_sub")}
          </p>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}
