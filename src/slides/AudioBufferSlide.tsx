import { useMemo } from "react";

export const AudioBufferSlide: React.FC = () => {
  const samples = useMemo(() => [0.0, 0.38, 0.71], []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black text-white gap-8">
      <div className="flex flex-col items-center gap-2 font-mono">
        <div className="flex items-center">
          {samples.map((val, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 border border-white border-r-0 px-3.5 py-2.5 bg-black text-xl"
            >
              <span className="text-xs text-neutral-500 font-normal">
                [{index}]
              </span>
              <span>{val >= 0 ? `+${val.toFixed(2)}` : val.toFixed(2)}</span>
            </div>
          ))}
          <div className="border border-white px-4 py-2.5 bg-black text-xl text-gray-400">
            ... [253]
          </div>
        </div>
      </div>

      <div className="px-6 py-2 rounded-xl bg-white text-black text-2xl font-bold font-sans">
        Audio buffer (optional)
      </div>
    </div>
  );
};

export default AudioBufferSlide;
