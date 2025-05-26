import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import placeholder from "../../assets/Category placeholders/touristPlace.png";

interface TouristPlace {
  title: string;
  description: string;
  imageUrl?: string;
  location?: string;
  tagline?: string;
}

interface TouristPlacesDisplayProps {
  places: TouristPlace[];
}

export default function TouristPlacesDisplay({
  places,
}: TouristPlacesDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % places.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + places.length) % places.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [places.length]);

  const place = places[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${place.imageUrl || placeholder})`,
        }}
      ></div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg max-w-md">
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-md max-w-md text-center">
          <h2 className="text-3xl font-bold text-white mb-2 drop-shadow">
            {place.title}
          </h2>
          {place.tagline && (
            <p className="text-lg text-white/80 italic mb-1 drop-shadow">
              {place.tagline}
            </p>
          )}
          {place.location && (
            <p className="text-sm text-white/70 mb-2 drop-shadow">
              📍 {place.location}
            </p>
          )}
          <p className="text-white/90 drop-shadow">{place.description}</p>
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white hover:text-indigo-400 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft size={36} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:text-indigo-400 z-10"
        onClick={nextSlide}
      >
        <ChevronRight size={36} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {places.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
