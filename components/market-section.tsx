"use client";
import { Store, Compass, PaintbrushVertical, Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const markets = [
  {
    icon: Store,
    titleKey: "market_1_title",
    descKey: "market_1_desc",
  },
  {
    icon: Compass,
    titleKey: "market_2_title",
    descKey: "market_2_desc",
  },
  {
    icon: PaintbrushVertical,
    titleKey: "market_3_title",
    descKey: "market_3_desc",
  },
  {
    icon: Building2,
    titleKey: "market_4_title",
    descKey: "market_4_desc",
  },
];

export function MarketSection() {
  const { t } = useI18n();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3D3028] mb-4">
            {t("market_title")}{" "}
            <span className="text-[#D4A574]">{t("market_subtitle")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("market_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#F5EFE7]/30 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#E8D5B7] hover:border-[#D4A574] group text-center"
              >
                <div className="w-16 h-16 bg-[#D4A574] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#3D3028] mb-3">
                  {t(market.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(market.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

