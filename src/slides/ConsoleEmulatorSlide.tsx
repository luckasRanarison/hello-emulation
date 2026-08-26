import React from "react";
import pcsx2LogoUrl from "../assets/logo/pcsx2.png";
import citraLogoUrl from "../assets/logo/citra.svg";
import dolphinLogoUrl from "../assets/logo/dolphin.svg";
import mesenLogoUrl from "../assets/logo/mesen.png";
import ppssppLogoUrl from "../assets/logo/ppsspp.svg";
import shadps4LogoUrl from "../assets/logo/shadps4.png";
import cemuLogoUrl from "../assets/logo/cemu.png";
import yuzuLogoUrl from "../assets/logo/yuzu.svg";

interface EmulatorAsset {
  name: string;
  logo: string;
}

export const emulators: EmulatorAsset[] = [
  { name: "Mesen", logo: mesenLogoUrl },
  { name: "PCSX2", logo: pcsx2LogoUrl },
  { name: "Dolphin", logo: dolphinLogoUrl },
  { name: "Citra", logo: citraLogoUrl },
  { name: "PPSSPP", logo: ppssppLogoUrl },
  { name: "Cemu", logo: cemuLogoUrl },
  { name: "Yuzu", logo: yuzuLogoUrl },
  { name: "ShadPS4", logo: shadps4LogoUrl },
];

export const ConsoleEmulatorSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl">
        {emulators.map((emu) => (
          <div
            key={emu.name}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-20 h-20 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img
                src={emu.logo}
                alt={`${emu.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="mt-3 text-[1.5vw] font-semibold">{emu.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
