"use client";
import { TrendingUp, DollarSign, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: "$20B",
    label: "Mercado AR/VR",
    labelEn: "AR/VR Market",
    description: "Para 2030",
    descriptionEn: "By 2030",
  },
  {
    icon: DollarSign,
    value: "30%",
    label: "Ahorro en costes",
    labelEn: "Cost Savings",
    description: "Reducción de errores",
    descriptionEn: "Error reduction",
  },
  {
    icon: Users,
    value: "100%",
    label: "Colaboración",
    labelEn: "Collaboration",
    description: "En tiempo real",
    descriptionEn: "Real-time",
  },
];

export function StatsSection() {
  const { t, locale } = useI18n();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5EFE7]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#3D3028] mb-4">
              {t("stats_title")}{" "}
              <span className="text-[#D4A574]">{t("stats_subtitle")}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("stats_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#E8D5B7] text-center group hover:border-[#D4A574]"
                >
                  <div className="w-16 h-16 bg-[#F5EFE7] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4A574] transition-colors duration-300">
                    <Icon className="h-8 w-8 text-[#D4A574] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-[#D4A574] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-[#3D3028] mb-2">
                    {locale === "es" ? stat.label : stat.labelEn}
                  </div>
                  <p className="text-gray-600">
                    {locale === "es" ? stat.description : stat.descriptionEn}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

