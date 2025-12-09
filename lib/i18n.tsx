"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Locale = "es" | "en";

type Dictionary = Record<string, string>;

const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav_features: "Características",
    nav_how: "Cómo funciona",
    nav_market: "Mercado",
    nav_testimonials: "Testimonios",
    nav_get_started: "Comenzar",

    hero_title_1: "Rediseña Espacios con",
    hero_title_2: "Realidad Extendida",
    hero_title_3: "e Inteligencia Artificial",
    hero_desc:
      "Escanea, modifica virtualmente y obtén sugerencias de diseño generadas por IA. Colabora en tiempo real desde cualquier lugar.",
    hero_cta_primary: "Comenzar",
    hero_cta_secondary: "Ver demo",

    features_title: "Características de",
    features_subtitle: "Interior Design XR",
    features_desc:
      "Descubre cómo nuestra plataforma XR transforma el diseño de interiores con tecnología inmersiva e inteligencia artificial.",

    feature_1_title: "Experiencia Inmersiva XR",
    feature_1_desc:
      "Visualiza espacios en realidad aumentada y virtual antes de ejecutar cualquier cambio. Experimenta el diseño como nunca antes.",
    feature_2_title: "Ahorro de Costes",
    feature_2_desc:
      "Evita errores costosos en prototipos y pruebas físicas. Toma decisiones informadas antes de invertir en materiales.",
    feature_3_title: "Colaboración en Tiempo Real",
    feature_3_desc:
      "Conecta arquitectos, interioristas y clientes desde diferentes ubicaciones. Trabaja en el mismo espacio virtual simultáneamente.",
    feature_4_title: "Catálogo Dinámico",
    feature_4_desc:
      "Accede a miles de muebles y elementos decorativos de grandes retailers. Visualiza productos reales en tu espacio virtual.",
    feature_5_title: "Escaneo 3D Preciso",
    feature_5_desc:
      "Captura las proporciones exactas de cualquier estancia. Tecnología de escaneo avanzada para resultados profesionales.",
    feature_6_title: "Renderizado Fotorrealista",
    feature_6_desc:
      "Genera imágenes hiperrealistas de tus diseños con IA. Presenta propuestas impactantes que parecen fotografías reales.",

    showcase_title: "Experiencias",
    showcase_subtitle: "Inmersivas",
    showcase_desc:
      "Descubre cómo transformamos espacios reales en entornos virtuales completamente interactivos",
    showcase_video_1_title: "Visualización en Tiempo Real",
    showcase_video_1_desc:
      "Experimenta cambios instantáneos en el diseño de interiores",
    showcase_video_2_title: "Colaboración Inmersiva",
    showcase_video_2_desc:
      "Trabaja con tu equipo en un espacio virtual compartido",

    how_title: "Cómo",
    how_subtitle: "Funciona",
    how_desc: "Cuatro pasos para transformar cualquier espacio",

    step_1_title: "Escanea el Espacio",
    step_1_desc:
      "Usa tu dispositivo para capturar el entorno en 3D. El escaneo se adapta automáticamente a las proporciones reales.",
    step_2_title: "Modifica Virtualmente",
    step_2_desc:
      "Experimenta con mobiliario, colores e iluminación en realidad extendida. Prueba infinitas configuraciones sin límites.",
    step_3_title: "Sugerencias de IA",
    step_3_desc:
      "Obtén recomendaciones de diseño personalizadas generadas por inteligencia artificial basadas en tus preferencias.",
    step_4_title: "Implementa Cambios",
    step_4_desc:
      "Comparte el diseño final con clientes y proveedores. Ejecuta con confianza sabiendo exactamente cómo quedará.",

    stats_title: "El Futuro del",
    stats_subtitle: "Diseño de Interiores",
    stats_desc:
      "El mercado de AR/VR en diseño está experimentando un crecimiento exponencial",

    market_title: "Nuestro",
    market_subtitle: "Mercado Objetivo",
    market_desc:
      "Interior Design XR está diseñado para profesionales y empresas del sector",

    market_1_title: "Retailers de Muebles",
    market_1_desc:
      "Integra tu catálogo y ofrece a tus clientes una experiencia de compra inmersiva.",
    market_2_title: "Arquitectos",
    market_2_desc:
      "Presenta proyectos de forma impactante y colabora eficientemente con clientes.",
    market_3_title: "Interioristas",
    market_3_desc:
      "Acelera tu proceso creativo y muestra tus ideas de forma tangible e inmersiva.",
    market_4_title: "Constructoras",
    market_4_desc:
      "Reduce errores en proyectos y mejora la comunicación con clientes finales.",

    cta_title: "¿Listo para Transformar tu Forma de Diseñar?",
    cta_sub:
      "Únete a la revolución del diseño inmersivo. Empieza a crear experiencias XR hoy y descubre el poder de la realidad extendida con IA.",
    cta_primary: "Comenzar Gratis",
    cta_secondary: "Agenda una Demo",
    cta_note: "Sin tarjeta • Prueba gratis 14 días • Cancela cuando quieras",

    testimonials_title: "Lo que dicen nuestros clientes",
    testimonials_sub:
      "Profesionales del diseño que transforman su trabajo con Interior Design XR",
  },
  en: {
    nav_features: "Features",
    nav_how: "How It Works",
    nav_market: "Market",
    nav_testimonials: "Testimonials",
    nav_get_started: "Get Started",

    hero_title_1: "Redesign Spaces with",
    hero_title_2: "Extended Reality",
    hero_title_3: "and Artificial Intelligence",
    hero_desc:
      "Scan, modify virtually, and get AI-generated design suggestions. Collaborate in real-time from anywhere.",
    hero_cta_primary: "Get Started",
    hero_cta_secondary: "Watch Demo",

    features_title: "Features of",
    features_subtitle: "Interior Design XR",
    features_desc:
      "Discover how our XR platform transforms interior design with immersive technology and artificial intelligence.",

    feature_1_title: "Immersive XR Experience",
    feature_1_desc:
      "Visualize spaces in augmented and virtual reality before making any changes. Experience design like never before.",
    feature_2_title: "Cost Savings",
    feature_2_desc:
      "Avoid costly mistakes in prototypes and physical tests. Make informed decisions before investing in materials.",
    feature_3_title: "Real-Time Collaboration",
    feature_3_desc:
      "Connect architects, interior designers, and clients from different locations. Work in the same virtual space simultaneously.",
    feature_4_title: "Dynamic Catalog",
    feature_4_desc:
      "Access thousands of furniture and decorative elements from major retailers. Visualize real products in your virtual space.",
    feature_5_title: "Precise 3D Scanning",
    feature_5_desc:
      "Capture exact proportions of any room. Advanced scanning technology for professional results.",
    feature_6_title: "Photorealistic Rendering",
    feature_6_desc:
      "Generate hyperrealistic images of your designs with AI. Present impactful proposals that look like real photographs.",

    showcase_title: "Immersive",
    showcase_subtitle: "Experiences",
    showcase_desc:
      "Discover how we transform real spaces into fully interactive virtual environments",
    showcase_video_1_title: "Real-Time Visualization",
    showcase_video_1_desc: "Experience instant changes in interior design",
    showcase_video_2_title: "Immersive Collaboration",
    showcase_video_2_desc: "Work with your team in a shared virtual space",

    how_title: "How",
    how_subtitle: "It Works",
    how_desc: "Four steps to transform any space",

    step_1_title: "Scan the Space",
    step_1_desc:
      "Use your device to capture the environment in 3D. Scanning automatically adapts to real proportions.",
    step_2_title: "Modify Virtually",
    step_2_desc:
      "Experiment with furniture, colors, and lighting in extended reality. Try infinite configurations without limits.",
    step_3_title: "AI Suggestions",
    step_3_desc:
      "Get personalized design recommendations generated by artificial intelligence based on your preferences.",
    step_4_title: "Implement Changes",
    step_4_desc:
      "Share the final design with clients and suppliers. Execute with confidence knowing exactly how it will look.",

    stats_title: "The Future of",
    stats_subtitle: "Interior Design",
    stats_desc: "The AR/VR market in design is experiencing exponential growth",

    market_title: "Our",
    market_subtitle: "Target Market",
    market_desc:
      "Interior Design XR is designed for professionals and companies in the sector",

    market_1_title: "Furniture Retailers",
    market_1_desc:
      "Integrate your catalog and offer customers an immersive shopping experience.",
    market_2_title: "Architects",
    market_2_desc:
      "Present projects impressively and collaborate efficiently with clients.",
    market_3_title: "Interior Designers",
    market_3_desc:
      "Accelerate your creative process and showcase your ideas tangibly and immersively.",
    market_4_title: "Construction Companies",
    market_4_desc:
      "Reduce errors in projects and improve communication with end clients.",

    cta_title: "Ready to Transform How You Design?",
    cta_sub:
      "Join the immersive design revolution. Start creating XR experiences today and discover the power of extended reality with AI.",
    cta_primary: "Get Started Free",
    cta_secondary: "Schedule a Demo",
    cta_note: "No credit card required • Free 14-day trial • Cancel anytime",

    testimonials_title: "What Our Clients Say",
    testimonials_sub:
      "Design professionals transforming their work with Interior Design XR",
  },
};

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({
  children,
  initialLocale = "es",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = useCallback(
    (key: string) => {
      const dict = dictionaries[locale];
      return dict[key] ?? key;
    },
    [locale]
  );

  const toggle = useCallback(() => {
    setLocale((l) => (l === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ locale, t, toggle, setLocale }),
    [locale, t, toggle]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
