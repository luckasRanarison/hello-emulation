import React from "react";

export const caption = "definition";

export const Component: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 sm:px-12 text-left font-sans">
      <div className="max-w-xl mx-auto space-y-4">
        <div className="flex items-baseline gap-3 border-b border-white/20 pb-3">
          <h1 className="text-[3vw] text-yellow-300 tracking-tight">
            emulation
          </h1>
          <span className="text-[1.5vw] text-gray-400 font-mono">
            /ˌɛmjʊˈleɪʃn/
          </span>
        </div>

        <p className="text-[1.2vw] italic text-gray-300 font-serif">noun</p>

        <ol className="space-y-3 text-[1.25vw] leading-relaxed text-white">
          <li className="flex gap-2">
            <span className="font-semibold text-yellow-300">1.</span>
            <span>
              The process of imitating the behavior of one computer system or
              device using another system.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-yellow-300">2.</span>
            <span>
              Hardware or software techniques that enable a host system to
              execute programs written for a target system.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};
