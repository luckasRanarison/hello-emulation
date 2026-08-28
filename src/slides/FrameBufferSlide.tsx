import { useMemo } from "react";

export const FrameBufferSlide: React.FC = () => {
  const colors = useMemo(() => {
    return Array.from({ length: 256 }, () => {
      const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
      return `#${randomColor.toUpperCase()}`;
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black text-white gap-8">
      <div className="flex flex-col items-center gap-2">
        <span className="font-semibold tracking-wider text-neutral-300">
          16 × 16
        </span>
        <div className="border border-neutral-700 bg-neutral-800 p-[1px]">
          <div className="grid grid-cols-[repeat(16,20px)] gap-[1px]">
            {colors.map((hex, index) => (
              <div
                key={index}
                style={{ backgroundColor: hex }}
                className="w-[20px] h-[20px]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-md font-semibold tracking-wider text-neutral-300">
          1D ARRAY (256 ELEMENTS)
        </span>
        <div className="flex items-center font-mono">
          {colors.slice(0, 2).map((hex, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 border border-white border-r-0 px-3.5 py-2.5 bg-black text-base"
            >
              <div
                style={{ backgroundColor: hex }}
                className="w-[18px] h-[18px]"
              />
              <span>{hex}</span>
            </div>
          ))}
          <div className="border border-white px-4 py-2.5 bg-black text-base text-gray-400">
            ... [254]
          </div>
        </div>
      </div>

      <div className="px-6 py-2 rounded-xl bg-white text-black text-2xl font-bold">
        Frame buffer
      </div>
    </div>
  );
};

export default FrameBufferSlide;
