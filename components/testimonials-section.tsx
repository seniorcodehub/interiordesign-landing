"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useI18n } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t, locale } = useI18n();
  
  const testimonialsEs = [
    {
      quote:
        "Interior Design XR ha revolucionado completamente nuestra forma de trabajar. Los clientes ahora pueden ver exactamente cómo quedará su espacio antes de tomar decisiones, lo que ha reducido los cambios de último momento en un 80%.",
      name: "Ana Martínez",
      designation: "Arquitecta Senior, Estudio Martínez",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "Como retailer de muebles, integrar nuestro catálogo en Interior Design XR nos ha abierto un canal de ventas completamente nuevo. Los clientes pueden visualizar nuestros productos en sus propios espacios, lo que ha aumentado nuestras conversiones un 45%.",
      name: "Carlos Ruiz",
      designation: "Director de Ventas, MueblesCasa",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "La capacidad de colaborar en tiempo real con mis clientes, sin importar dónde estén, ha sido un cambio radical. Puedo mostrar opciones de diseño inmediatamente y hacer ajustes sobre la marcha. Mis proyectos se cierran un 60% más rápido.",
      name: "Laura Gómez",
      designation: "Diseñadora de Interiores Freelance",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "En nuestra constructora, Interior Design XR nos ha ayudado a reducir errores costosos en la fase de diseño. Los clientes finales están mucho más satisfechos al poder 'caminar' por sus futuros espacios antes de la construcción.",
      name: "Miguel Torres",
      designation: "Gerente de Proyectos, Construcciones Torres",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const testimonialsEn = [
    {
      quote:
        "Interior Design XR has completely revolutionized how we work. Clients can now see exactly how their space will look before making decisions, which has reduced last-minute changes by 80%.",
      name: "Ana Martinez",
      designation: "Senior Architect, Martinez Studio",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "As a furniture retailer, integrating our catalog into Interior Design XR has opened up a completely new sales channel. Customers can visualize our products in their own spaces, which has increased our conversions by 45%.",
      name: "Carlos Ruiz",
      designation: "Sales Director, MueblesCasa",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "The ability to collaborate in real-time with my clients, no matter where they are, has been a game-changer. I can show design options immediately and make adjustments on the fly. My projects close 60% faster.",
      name: "Laura Gomez",
      designation: "Freelance Interior Designer",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    },
    {
      quote:
        "At our construction company, Interior Design XR has helped us reduce costly errors in the design phase. End clients are much more satisfied being able to 'walk through' their future spaces before construction.",
      name: "Miguel Torres",
      designation: "Project Manager, Torres Construction",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const testimonials = locale === "es" ? testimonialsEs : testimonialsEn;

  return (
    <section className="bg-gradient-to-b from-white to-[#F5EFE7]/20 py-16">
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

