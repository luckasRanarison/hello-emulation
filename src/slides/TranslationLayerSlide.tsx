import wineLogoUrl from "../assets/logo/wine.svg";
import rosettaLogoUrl from "../assets/logo/rosetta.webp";
import { emulators } from "./ConsoleEmulatorSlide";

export const TranslationLayerSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center px-8 text-center gap-4">
      <div className="gap-4 p-2 flex flex-col justify-center">
        <div className="text-[2.25vw] text-green-500">Emulation</div>
        <div className="text-[2vw]">Hardware simulation</div>
        <div className="mt-2 grid grid-cols-4 gap-2 place-items-center">
          {emulators.map((emu) => (
            <img
              key={emu.name}
              src={emu.logo}
              alt={emu.name}
              className="w-[40px]"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="h-1/4 border-r-[1px] border-gray-300" />
        <img src={rosettaLogoUrl} className="my-4 w-[100px]" />
        <div className="h-1/4 border-r-[1px] border-gray-300" />
      </div>
      <div className="gap-4 p-2 flex flex-col justify-center">
        <div className="text-[2.25vw] text-red-500">Translation Layer</div>
        <div className="text-[2vw]">Software level API translation</div>
        <div className="flex justify-center">
          <img src={wineLogoUrl} className="h-[100px]" />
        </div>
      </div>
    </div>
  );
};
