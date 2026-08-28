import { PreviewSlide } from "./PreviewSlide";
import { DefinitionSlide } from "./DefinitionSlide";

import handheldsImgUrl from "../assets/handhelds.jpg";
import fakePspImgUrl from "../assets/fake-psp.jpg";
import emulatorQuoteImgUrl from "../assets/emulator-quote.png";
import nesImgUrl from "../assets/nes.jpg";
import nesGamesImgUrl from "../assets/nes-games.jpeg";
import gbaImgUrl from "../assets/gba.jpeg";
import gbaGamesImgUrl from "../assets/gba-games.png";
import nfsmwImgUrl from "../assets/nfsmw.jpg";
import androidEmuImgUrl from "../assets/android-emulator.png";
import gamepadEmuImgUrl from "../assets/gamepad-emu.png";
import fpgaBoardImgUrl from "../assets/fpga-board.webp";
import analoguePocketImgUrl from "../assets/analogue-pocket.jpg";
import wineImgUrl from "../assets/logo/wine.svg";
import singlBusImgUrl from "../assets/single-bus.png";

import { TranslationLayerSlide } from "./TranslationLayerSlide";
import { ConsoleEmulatorSlide } from "./ConsoleEmulatorSlide";
import { PartialDefinitionSlide } from "./PartialDefinitionSlide";
import { BaseLoopSlide } from "./BaseLoopSlide";
import { YellowHeader } from "../components/YellowHeader";
import { DiscordIllustrationSlide } from "./DiscordIllustrationSlide";
import { InterruptSlide } from "./InterruptSlide";
import { FrameBufferSlide } from "./FrameBufferSlide";

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
      <div className="w-full h-full flex justify-center items-center text-3xl">
        (Please don't judge me)
      </div>
    ),
  },
  {
    caption: "introduction",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <YellowHeader>Introduction</YellowHeader>
      </div>
    ),
  },
  {
    caption: "10 years ago",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={handheldsImgUrl} className="w-full" alt="Handhelds" />
      </div>
    ),
  },
  {
    caption: '"PSP" at home',
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={fakePspImgUrl} className="w-full" alt="Fake PSP" />
      </div>
    ),
  },
  {
    caption: "Emulator?",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={emulatorQuoteImgUrl}
          className="w-full"
          alt="Emulator Quote"
        />
      </div>
    ),
  },
  {
    caption: "Nintendo Entertainment System (NES)",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nesImgUrl} className="w-full" alt="NES" />
      </div>
    ),
  },
  {
    caption: "NES games",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nesGamesImgUrl} className="w-full" alt="NES games" />
      </div>
    ),
  },
  {
    caption: "GameBoy Advance (GBA)",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={gbaImgUrl} className="w-full" alt="GBA" />
      </div>
    ),
  },
  {
    caption: "GBA games",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={gbaGamesImgUrl} className="w-full" alt="GBA games" />
      </div>
    ),
  },
  {
    caption: "NFS Most Wanted at home",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nfsmwImgUrl} className="w-full" alt="NFS Most Wanted" />
      </div>
    ),
  },
  {
    caption: "Incomplete definition",
    component: <PartialDefinitionSlide />,
  },
  {
    caption: "Android emulator",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={androidEmuImgUrl}
          className="w-full"
          alt="Android emulators"
        />
      </div>
    ),
  },
  {
    caption: "Wine",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-3xl">
        <img src={wineImgUrl} className="w-[20%]" alt="Wine" />
        <span className="leading-relaxed">
          <span className="text-yellow-300">W</span>ine{" "}
          <span className="text-yellow-300">I</span>s{" "}
          <span className="text-yellow-300">N</span>ot an{" "}
          <span className="text-yellow-300">E</span>mulator
        </span>
      </div>
    ),
  },
  {
    caption: "Gamepad emulator",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={gamepadEmuImgUrl}
          className="w-full"
          alt="Gamepad emulators"
        />
      </div>
    ),
  },
  {
    caption: "Definition",
    component: <DefinitionSlide />,
  },
  {
    caption: "Emulator vs Translation Layer",
    component: <TranslationLayerSlide />,
  },
  {
    caption: "Emulator != Emulation",
    component: (
      <div className="w-full h-full flex items-center px-8 text-center gap-4">
        <div className="w-full gap-4 p-2 flex flex-col justify-center">
          <YellowHeader size={3}>Emulator</YellowHeader>
          <div className="text-2xl">Tool</div>
          <div className="text-2xl">(Software/Hardware)</div>
        </div>
        <div className="h-1/2 border-r-[1px] border-gray-300" />
        <div className="w-full gap-4 p-2 flex flex-col justify-center">
          <YellowHeader size={3}>Emulation</YellowHeader>
          <div className="text-2xl">Process</div>
          <div className="text-2xl">(Software/Hardware)</div>
        </div>
      </div>
    ),
  },
  {
    caption: "Hardware based emulation",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <YellowHeader>Hardware-based emulation</YellowHeader>
      </div>
    ),
  },
  {
    caption: "FPGA board",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center">
        <div className="text-4xl">FPGA</div>
        <div className="text-2xl">(Field Programmable Gate Array)</div>
        <img src={fpgaBoardImgUrl} className="w-1/2" alt="FPGA board" />
      </div>
    ),
  },
  {
    caption: "Analogue pocket",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={analoguePocketImgUrl}
          className="w-full"
          alt="Analogue pocket"
        />
      </div>
    ),
  },
  {
    caption: "Video game console emulators",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Video game console emulators</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Examples of console emulators",
    component: <ConsoleEmulatorSlide />,
  },
  {
    caption: "Prerequisites",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Prerequisites</YellowHeader>
      </div>
    ),
  },
  {
    caption: "List of prerequisites",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center text-2xl p-2">
        <ul className="list-disc list-inside space-y-2">
          <li>Understanding english</li>
          <li>Knowing one programming language</li>
          <li>Having (a lot of) patience and motivation</li>
        </ul>
      </div>
    ),
  },
  {
    caption: "Understanding retro computer architecture",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Retro computer architecture</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Updated Von Neuman architecture",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <div className="py-12 px-4 bg-white w-full">
          <img
            src={singlBusImgUrl}
            className="w-full"
            alt="Von Neuman architecture"
          />
        </div>
        <YellowHeader size={3}>Single System Bus architecture</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Discord example",
    component: <DiscordIllustrationSlide />,
  },
  {
    caption: "System details",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center text-2xl p-2">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Processors do their own work in parallel, possibly at different
            clock speeds
          </li>
          <li>Only one unit at a time can access the system bus</li>
        </ul>
      </div>
    ),
  },
  {
    caption: "Interrupts",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Interrupts (IRQs)</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Message box illustration",
    component: <InterruptSlide />,
  },
  {
    caption: "Software model and limitations",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Software model and limitations</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Sequential execution",
    component: <BaseLoopSlide />,
  },
  {
    caption: 'The "Catch-Up" workaround',
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>"Catch-up"</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Buffers",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Buffers</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Frame buffer (Video)",
    component: <FrameBufferSlide />,
  },
  {
    caption: "Where to start?",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Where to start?</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Pick a machine to emulate",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Pick a machine to emulate</YellowHeader>
      </div>
    ),
  },
];
