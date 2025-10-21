"use client";

import { useI18n } from "@/lib/i18n";

export function ShowcaseSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-[#281f19] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D4A574 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("showcase_title")}{" "}
            <span className="text-[#D4A574]">{t("showcase_subtitle")}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {t("showcase_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#D4A574]/20 transition-all duration-500 hover:scale-[1.02]">
            <div className="aspect-video relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/interior-1.mp4" type="video/mp4" />
              </video>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3028]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t("showcase_video_1_title")}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {t("showcase_video_1_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video 2 */}
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#D4A574]/20 transition-all duration-500 hover:scale-[1.02]">
            <div className="aspect-video relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/interior-2.mp4" type="video/mp4" />
              </video>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3028]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {t("showcase_video_2_title")}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {t("showcase_video_2_desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4A574] to-transparent" />
        </div>
      </div>
    </section>
  );
}
