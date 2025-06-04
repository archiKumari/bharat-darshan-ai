import React from "react";
import placeholderImage from "../../assets/Category placeholders/culture.png";

export interface CultureItem {
  title: string;
  description: string;
  imageUrls?: string[];
}

interface Props {
  culture: CultureItem[];
}

const CultureDisplay: React.FC<Props> = ({ culture }) => {
  const PerforationRow = () => (
    <div className="w-screen flex justify-between px-4 space-x-2 py-1 bg-[#3a2b1c] ">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="w-4 h-5 bg-[#1f1a14] rounded-sm" />
      ))}
    </div>
  );

  const PerforationColumn = () => (
    <div className="flex flex-col justify-between gap-1">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="w-4 h-5 bg-[#1f1a14] rounded-sm" />
      ))}
    </div>
  );

  return (
    <div className="w-full h-screen bg-[#1e1b18] overflow-x-auto text-center flex flex-col justify-center">
      <h2 className="text-5xl font-bold font-[cursive] text-[#e7c49a] py-2 -mt-4 mb-5 tracking-widest uppercase bg-[#1e1b18] rounded-sm">
        Culture & Heritage
      </h2>

      <PerforationRow />

      <div className="flex space-x-5 px-4 py-4 overflow-x-auto scrollbar-hide bg-[#3a2b1c]">
        {culture.map((item, index) => {
          const images =
            item.imageUrls && item.imageUrls.length > 0
              ? item.imageUrls
              : [placeholderImage];
          return (
            <React.Fragment key={index}>
              <div
                key={index}
                className="flex flex-col p-2 rounded-md w-[768px] flex-shrink-0 border border-[#5c4026]"
                style={{ width: `${images.length * 256}px` }}
              >
                <div className="h-[300px] w-full overflow-hidden rounded flex">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${item.title} - ${idx + 1}`}
                      className="object-cover h-full rounded w-full"
                    />
                  ))}
                </div>
                <div className="mt-4 text-[#e7c49a]">
                  <h3 className="text-lg font-serif font-semibold mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-snug">{item.description}</p>
                </div>
              </div>
              <PerforationColumn/>
            </React.Fragment>
          );
        })}
      </div>

      <PerforationRow />
    </div>
  );
};

export default CultureDisplay;
