import placeholder from "../../assets/Category placeholders/touristPlace.png";
import tapeImg from "../../assets/torn paper.png";
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
  const rotationAngles = ["4deg", "-5deg", "2deg", "-8deg", "-5deg"];

  return (
    <div
      className="w-full h-screen p-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="trade-winds-regular text-8xl text-center text-yellow-600">
        Tourist Places
      </h2>
      <div className=" h-4/5 overflow-x-auto scrollbar-hide mt-4">
        <div className="flex flex-wrap justify-center items-center h-full gap-3">
          {places.map((place, idx) => (
            <div
              key={idx}
              className="relative m-3 bg-[rgba(255,233,215,0.8)] p-2 shadow-lg rounded-sm transform transition-transform duration-300 hover:scale-105"
              style={{
                transform: `rotate(${
                  rotationAngles[idx % rotationAngles.length]
                })`,
              }}
            >
              <img
                src={tapeImg}
                alt="tape"
                className="absolute top-0 left-1/2 w-16 h-8 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-95"
              />

              <img
                src={place.imageUrl || placeholder}
                alt={place.title}
                className="w-60 h-36 object-cover rounded-sm brightness-90"
              />
              <h3 className="mt-2 text-center font-semibold text-yellow-800">
                {place.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
