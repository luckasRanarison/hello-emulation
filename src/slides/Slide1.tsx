import React from "react";
import emulatorImage from "../assets/emulators.png";

export const caption = "Presentation";

export const Component: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full p-8 text-center space-y-3 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[4px]"
        style={{ backgroundImage: `url(${emulatorImage})` }}
      />

      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 flex flex-col justify-center items-center space-y-3">
        <h1 className="text-[3vw] font-bold text-white drop-shadow-lg">
          Hello Emulation!
        </h1>
        <p className="text-gray-100 text-[1.5vw] max-w-2xl drop-shadow-md">
          Une introduction à la programmation d'émulateurs pour consoles retro
        </p>
      </div>
    </div>
  );
};
