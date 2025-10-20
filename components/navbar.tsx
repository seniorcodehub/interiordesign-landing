"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { key: "nav_features", href: "#features" },
  { key: "nav_how", href: "#how-it-works" },
  { key: "nav_market", href: "#market" },
  { key: "nav_testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const contact = useContactModal();
  const { t, toggle, locale } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8D5B7] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#D4A574] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">ID</span>
            </div>
            <span className="ml-3 text-xl font-bold text-[#3D3028]">
              Interior Design XR
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-700 hover:text-[#D4A574] font-medium transition-colors"
              >
                {t(link.key)}
              </a>
            ))}
            <Button
              className="bg-white text-[#D4A574] border border-[#D4A574] hover:bg-gray-50 font-semibold"
              onClick={toggle}
            >
              {locale === "es" ? "EN" : "ES"}
            </Button>
            <Button
              className="bg-[#D4A574] hover:bg-[#C9A87C] text-white font-semibold"
              onClick={() => contact.open()}
            >
              {t("nav_get_started")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#E8D5B7]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-gray-700 hover:text-[#D4A574] font-medium transition-colors px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
              <Button
                className="bg-white text-[#D4A574] border border-[#D4A574] font-semibold"
                onClick={() => {
                  toggle();
                }}
              >
                {locale === "es" ? "EN" : "ES"}
              </Button>
              <Button
                className="bg-[#D4A574] hover:bg-[#C9A87C] text-white font-semibold w-full"
                onClick={() => {
                  contact.open();
                  setIsOpen(false);
                }}
              >
                {t("nav_get_started")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

