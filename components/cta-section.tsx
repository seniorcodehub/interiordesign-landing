"use client";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ui/contact-modal";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function CTASection() {
  const contact = useContactModal();
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F5EFE7]/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#D4A574] to-[#C9A87C] rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t("cta_title")}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("cta_sub")}
            </p>
            <div className="flex justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-[#D4A574] hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
                onClick={() => contact.open()}
              >
                {t("cta_primary")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="mt-8 text-white/70 text-sm">{t("cta_note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
