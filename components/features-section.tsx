"use client";
import {
  Sparkles,
  DollarSign,
  Users,
  Package,
  ScanLine,
  Lightbulb,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const features = [
  {
    icon: Sparkles,
    titleKey: "feature_1_title",
    descKey: "feature_1_desc",
  },
  {
    icon: DollarSign,
    titleKey: "feature_2_title",
    descKey: "feature_2_desc",
  },
  {
    icon: Users,
    titleKey: "feature_3_title",
    descKey: "feature_3_desc",
  },
  {
    icon: Package,
    titleKey: "feature_4_title",
    descKey: "feature_4_desc",
  },
  {
    icon: ScanLine,
    titleKey: "feature_5_title",
    descKey: "feature_5_desc",
  },
  {
    icon: Lightbulb,
    titleKey: "feature_6_title",
    descKey: "feature_6_desc",
  },
];

export function FeaturesSection() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5EFE7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3D3028] mb-4">
            {t("features_title")}{" "}
            <span className="text-[#D4A574]">{t("features_subtitle")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("features_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#D4A574]/30 group"
              >
                <div className="w-14 h-14 bg-[#F5EFE7] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4A574] transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[#D4A574] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#3D3028] mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
