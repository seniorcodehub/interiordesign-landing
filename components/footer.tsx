"use client";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Características", nameEn: "Features", href: "#features" },
    { name: "Cómo Funciona", nameEn: "How It Works", href: "#how-it-works" },
    { name: "Mercado", nameEn: "Market", href: "#market" },
    { name: "Precios", nameEn: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "Sobre Nosotros", nameEn: "About Us", href: "#about" },
    { name: "Carreras", nameEn: "Careers", href: "#careers" },
    { name: "Blog", nameEn: "Blog", href: "#blog" },
    { name: "Contacto", nameEn: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacidad", nameEn: "Privacy Policy", href: "#privacy" },
    { name: "Términos", nameEn: "Terms of Service", href: "#terms" },
    { name: "Cookies", nameEn: "Cookie Policy", href: "#cookies" },
    { name: "Seguridad", nameEn: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-[#3D3028] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#D4A574] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">ID</span>
              </div>
              <span className="ml-3 text-white text-2xl font-bold">
                Interior Design XR
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolucionando el diseño de interiores con realidad extendida e
              inteligencia artificial. Visualiza, colabora y crea espacios
              increíbles.
            </p>
            <div className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2 text-[#D4A574]" />
              <a
                href="mailto:info@interiordesignxr.com"
                className="hover:text-[#D4A574] transition-colors"
              >
                info@interiordesignxr.com
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4A574] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4A574] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D4A574] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Interior Design XR. Todos los
              derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#D4A574] transition-colors group"
                  >
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

