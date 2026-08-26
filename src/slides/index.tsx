import { PreviewSlide } from "./PreviewSlide";
import { DefinitionSlide } from "./DefinitionSlide";

import handheldsImage from "../assets/handhelds.jpg";
import fakePspImage from "../assets/fake-psp.jpg";
import emulatorQuoteImage from "../assets/emulator-quote.png";
import nesImage from "../assets/nes.jpg";
import nesGamesImage from "../assets/nes-games.jpeg";
import gbaImage from "../assets/gba.jpeg";
import gbaGamesImage from "../assets/gba-games.png";
import nfsmwImage from "../assets/nfsmw.jpg";
import androidEmuImage from "../assets/android-emulator.png";
import gamepadEmuImage from "../assets/gamepad-emu.png";
import fpgaBoardImage from "../assets/fpga-board.webp";
import analoguePocketImage from "../assets/analogue-pocket.jpg";
import emuIcebergImgUrl from "../assets/emulation-iceberg.jpg";

import { TranslationLayerSlide } from "./TranslationLayerSlide";
import { ConsoleEmulatorSlide } from "./ConsoleEmulatorSlide";

export type Slide = {
  caption: string;
  component: React.ReactNode;
};

export const slides: Slide[] = [
  {
    caption: "Presentation",
    component: <PreviewSlide />,
  },
  {
    caption: "...",
    component: (
      <div className="w-full h-full flex justify-center items-center text-[2.5vw]">
        (Please don't judge me)
      </div>
    ),
  },
  {
    caption: "introduction",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="text-[2.5vw] text-yellow-300">Emulation?</div>
        <div className="text-[2vw] text-gray-300">(Émulation)</div>
      </div>
    ),
  },
  {
    caption: "10 years ago",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={handheldsImage} alt="Handhelds" />
      </div>
    ),
  },
  {
    caption: '"PSP" at home',
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={fakePspImage} alt="Fake PSP" />
      </div>
    ),
  },
  {
    caption: "Emulator?",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={emulatorQuoteImage} className="w-full" alt="Emulator Quote" />
      </div>
    ),
  },
  {
    caption: "Nintendo Entertainment System (NES)",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nesImage} className="w-full" alt="NES" />
      </div>
    ),
  },
  {
    caption: "NES games",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nesGamesImage} className="w-full" alt="NES games" />
      </div>
    ),
  },
  {
    caption: "GameBoy Advance (GBA)",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={gbaImage} className="w-full" alt="GBA" />
      </div>
    ),
  },
  {
    caption: "GBA games",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={gbaGamesImage} className="w-full" alt="GBA games" />
      </div>
    ),
  },
  {
    caption: "NFS Most Wanted at home",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nfsmwImage} className="w-full" alt="NFS Most Wanted" />
      </div>
    ),
  },
  {
    caption: "Definition",
    component: <DefinitionSlide />,
  },
  {
    caption: "Software based emulators",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="text-[2.5vw] text-yellow-300 text-center">
          1. Software-based emulators
        </div>
      </div>
    ),
  },
  {
    caption: "Examples of console emulators",
    component: <ConsoleEmulatorSlide />,
  },
  {
    caption: "Android emulator",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={androidEmuImage} className="w-full" alt="Android emulators" />
      </div>
    ),
  },
  {
    caption: "Gamepad emulator",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={gamepadEmuImage} className="w-full" alt="Gamepad emulators" />
      </div>
    ),
  },
  {
    caption: "Hardware based emulators",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="text-[2.5vw] text-yellow-300 text-center">
          2. Hardware-based emulators
        </div>
      </div>
    ),
  },
  {
    caption: "FPGA board",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center">
        <div className="text-[2.5vw]">FPGA</div>
        <div className="text-[2vw]">(Field Programmable Gate Array)</div>
        <img src={fpgaBoardImage} className="w-1/2" alt="FPGA board" />
      </div>
    ),
  },
  {
    caption: "Analogue pocket",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={analoguePocketImage}
          className="w-full"
          alt="Analogue pocket"
        />
      </div>
    ),
  },
  {
    caption: "Emulator vs Translation Layer",
    component: <TranslationLayerSlide />,
  },
  {
    caption: "Emulation iceberg",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={emuIcebergImgUrl}
          className="w-full"
          alt="Android emulators"
        />
      </div>
    ),
  },
];
