import React, { useEffect, useMemo, useState } from "react";

import placeholder from "../../assets/Category placeholders/touristPlace.png";
import background from "../../assets/tourist background.png";

export interface TouristPlace {
  title: string;
  description: string;
  imageUrl?: string;
  location?: string;
  tagline?: string;
}

export interface TouristPlacesDisplayProps {
  places: TouristPlace[];
}

export default function TouristPlacesDisplay({
  places,
}: TouristPlacesDisplayProps) {
  const safePlaces = useMemo(() => (places ?? []).filter(Boolean), [places]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayIndex = hoveredIndex !== null ? hoveredIndex : selectedIndex;
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    setSelectedIndex((i) =>
      Math.min(Math.max(0, i), Math.max(0, safePlaces.length - 1))
    );
  }, [safePlaces.length]);

  useEffect(() => {
    setFadeKey((k) => k + 1);
  }, [displayIndex]);

  const active = safePlaces[displayIndex];

  if (!safePlaces.length) {
    return (
      <div
        className="w-full h-screen p-6 grid place-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <div className="trade-winds-regular text-4xl text-slate-50 mb-2">
            Tourist Places
          </div>
          <div className="opacity-80 text-slate-200">No places to display.</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen overflow-hidden p-6"
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(10, 14, 30, 0.60) 0%,
            rgba(14, 18, 40, 0.60) 45%,
            rgba(8, 10, 22, 0.60) 100%
          ),
          url(${background})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="trade-winds-regular text-4xl md:text-7xl text-center text-slate-300">
        Tourist Places
      </h2>

      <div className="mt-4 h-[calc(100vh-140px)] md:h-[calc(100vh-170px)]">
        <div className="h-full grid grid-rows-[65%_35%] md:grid-rows-1 md:grid-cols-[62%_38%] gap-4">
          <div className="relative h-full rounded-xl overflow-hidden">
            <div
              key={fadeKey}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${active?.imageUrl || placeholder})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                animation: "tpFadeZoom 700ms ease-in-out both",
              }}
              aria-label={active?.title}
              role="img"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

            <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {active?.location ? (
                  <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-slate-300/15 border border-slate-200/20 text-slate-100 backdrop-blur">
                    📍 {active.location}
                  </span>
                ) : null}
              </div>

              <h3 className="trade-winds-regular text-xl md:text-5xl text-[#EAF1FF] drop-shadow">
                {active?.title}
              </h3>

              <p className="mt-3 max-w-2xl text-sm md:text-base text-[#B8C4DD] leading-relaxed line-clamp-3">
                {active?.description}
              </p>
            </div>
          </div>

          <aside
            className="h-full rounded-xl border border-slate-200/15 bg-black/35 backdrop-blur-md overflow-hidden"
            onBlur={() => setHoveredIndex(null)}
          >
            <div className="sticky top-0 z-10 p-4 md:p-5 border-b border-slate-200/10 bg-black/60 backdrop-blur">
              <div className="text-xs tracking-[0.22em] uppercase text-sky-100">
                Popular Places
              </div>
            </div>

            <div className="h-[calc(100%-56px)] overflow-y-auto scrollbar-hide">
              <div className="flex flex-col gap-2 p-3 md:p-4">
                {safePlaces.map((p, idx) => {
                  const isActive = idx === displayIndex;

                  return (
                    <button
                      key={`${p.title}-${idx}`}
                      type="button"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(idx)}
                      onBlur={() => setHoveredIndex(null)}
                      onClick={() => setSelectedIndex(idx)}
                      className={[
                        "w-full flex items-center gap-3",
                        "rounded-xl border text-left",
                        "px-3 py-3 md:px-3.5 md:py-3.5",
                        "transition-all duration-150",
                        isActive
                          ? "border-sky-200/40 bg-slate-700/50"
                          : "border-slate-200/10 bg-black/20 hover:bg-black/30 hover:border-slate-200/20",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/30",
                      ].join(" ")}
                      role="option"
                      aria-selected={isActive}
                    >
                      <div
                        className="w-12 h-12 rounded-lg overflow-hidden flex-none border border-slate-200/15"
                        style={{
                          backgroundImage: `url(${p.imageUrl || placeholder})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        aria-hidden="true"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="trade-winds-regular text-lg text-[#EAF1FF] truncate">
                          {p.title}
                        </div>
                        <div className="text-xs text-[#9CB0D6] truncate">
                          {p.tagline || p.location || "Tap to preview"}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @keyframes tpFadeZoom {
        from { opacity: 0; transform: scale(1.01); }
        to   { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
