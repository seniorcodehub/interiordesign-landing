import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/components/ui/contact-modal";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Interior Design XR - Realidad Extendida e IA para Diseño de Interiores",
  description:
    "Escanea espacios reales, modifica virtualmente y obtén sugerencias de diseño generadas por inteligencia artificial. Colabora en tiempo real con arquitectos, interioristas y clientes desde cualquier ubicación.",
  keywords: [
    "interior design",
    "XR",
    "realidad extendida",
    "realidad aumentada",
    "realidad virtual",
    "IA",
    "inteligencia artificial",
    "arquitectura",
    "diseño de interiores",
    "3D scanning",
  ],
  openGraph: {
    title: "Interior Design XR - Realidad Extendida e IA",
    description:
      "Rediseña espacios con realidad extendida e inteligencia artificial. Visualiza, colabora y crea espacios increíbles.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const country = (headersList.get("x-vercel-ip-country") || "ES").toUpperCase();

  const spanishCountries = [
    "ES",
    "MX",
    "AR",
    "CO",
    "PE",
    "CL",
    "VE",
    "EC",
    "GT",
    "CU",
    "BO",
    "DO",
    "HN",
    "PY",
    "SV",
    "NI",
    "CR",
    "PA",
    "UY",
    "PR",
    "GQ",
  ];
  const initialLocale = spanishCountries.includes(country) ? "es" : "en";
  return (
    <html lang={initialLocale}>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <I18nProvider initialLocale={initialLocale}>
          <ContactModalProvider>{children}</ContactModalProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

