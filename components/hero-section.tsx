"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { Play } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function HeroSection() {
  const contact = useContactModal();
  const { t } = useI18n();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3769951/3769951-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            {t("hero_title_1")} <br />
            <span className="text-[#E8D5B7] italic font-playfair">
              {t("hero_title_2")}
            </span>
            <br />
            {t("hero_title_3")}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            {t("hero_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-[#D4A574] hover:bg-[#C9A87C] text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => contact.open()}
            >
              {t("hero_cta_primary")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/90 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#D4A574] px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200"
              onClick={() => contact.open()}
            >
              <Play className="mr-2 h-5 w-5" />
              {t("hero_cta_secondary")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

