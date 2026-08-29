import { PreviewSlide } from "./PreviewSlide";
import { DefinitionSlide } from "./DefinitionSlide";

import fakePspImgUrl from "../assets/fake-psp.jpg";
import emulatorQuoteImgUrl from "../assets/emulator-quote.png";
import nesImgUrl from "../assets/nes.jpg";
import nesGamesImgUrl from "../assets/nes-games.jpeg";
import gbaImgUrl from "../assets/gba.jpeg";
import gbaGamesImgUrl from "../assets/gba-games.png";
import androidEmuImgUrl from "../assets/android-emulator.png";
import gamepadEmuImgUrl from "../assets/gamepad-emu.png";
import fpgaBoardImgUrl from "../assets/fpga-board.webp";
import analoguePocketImgUrl from "../assets/analogue-pocket.jpg";
import wineImgUrl from "../assets/logo/wine.svg";
import singlBusImgUrl from "../assets/single-bus.png";
import consoleTierlistImgUrl from "../assets/tierlist.jpg";
import nesdevImgUrl from "../assets/nesdev.png";
import emudevImgUrl from "../assets/emudev.png";
import sdlImgUrl from "../assets/logo/sdl.svg";
import icebergImgUrl from "../assets/emulation-iceberg.jpg";
import castleGIFImgUrl from "../assets/castle.gif";
import qrcodeImgUrl from "../assets/qrcode.svg";

import { TranslationLayerSlide } from "./TranslationLayerSlide";
import { ConsoleEmulatorSlide } from "./ConsoleEmulatorSlide";
import { PartialDefinitionSlide } from "./PartialDefinitionSlide";
import { SequentialExecSlide } from "./SequentialExecSlide";
import { YellowHeader } from "../components/YellowHeader";
import { DiscordIllustrationSlide } from "./DiscordIllustrationSlide";
import { InterruptSlide } from "./InterruptSlide";
import { FrameBufferSlide } from "./FrameBufferSlide";
import { CatchUpSlide } from "./CatchUpSlide";
import { ConcurrentExecSlide } from "./ConcurrentExecSlide";
import AudioBufferSlide from "./AudioBufferSlide";
import { EmulatorLoopSlide } from "./EmulatorLoopSlide";

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
    caption: "Emulator is distintinct from Emulation",
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
          <li>Only one unit at a time can control the system bus</li>
          <li>All the units except the CPU have a memory address</li>
          <li>
            Processors do their own work in parallel (possibly at different
            clock speeds)
          </li>
        </ul>
      </div>
    ),
  },
  {
    caption: "Operations and clock cycles",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Operations and clock cycles</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Herz",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <YellowHeader>Hertz = frequency unit</YellowHeader>
        <div className="text-2xl space-y-4">
          <div>1 hz = 1 cycle/second</div>
          <div>1 Khz = 1,000 cycles/second</div>
          <div>1 Mhz = 1,000,000 cycles/second</div>
          <div>1 Ghz = 1,000,000,000 cycles/second</div>
        </div>
      </div>
    ),
  },
  {
    caption: "Lead operations",
    component: (
      <div className="w-full h-full flex items-center jus px-8 text-center gap-4">
        <div className="w-full gap-4 p-2 flex flex-col justify-center items-center">
          <YellowHeader>Lead</YellowHeader>
          <div className="text-2xl">clock speed: 100hz (100 cycles/s)</div>
          <div className="w-3/4 border-b-[1px] border-b-gray-600 my-8" />
          <ul className="list-disc list-inside text-left text-2xl space-y-4">
            <li>Check new emails: 6,000 cycles (60 seconds)</li>
            <li>Build the planning: 60,000 cycles (10 minutes)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    caption: "Graphic designer operations",
    component: (
      <div className="w-full h-full flex items-center jus px-8 text-center gap-4">
        <div className="w-full gap-4 p-2 flex flex-col justify-center items-center">
          <YellowHeader>Graphic designer</YellowHeader>
          <div className="text-2xl">clock speed: 300hz (300 cycles/s)</div>
          <div className="w-3/4 border-b-[1px] border-b-gray-600 my-8" />
          <ul className="list-disc list-inside text-left text-2xl space-y-4">
            <li>Draw an illustration: 3,240,000 cycles (3 hours)</li>
            <li>Animate a sketch: 1,080,000 cycles (1 hour)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    caption: "Concurrent execution",
    component: <ConcurrentExecSlide />,
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
    component: <SequentialExecSlide />,
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
    caption: "The Catch-Up process",
    component: <CatchUpSlide />,
  },
  {
    caption: "The emulator loop",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>The emulator loop</YellowHeader>
      </div>
    ),
  },
  {
    caption: "The emulator loop skeleton",
    component: <EmulatorLoopSlide />,
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
    caption: "Ring buffer (Audio)",
    component: <AudioBufferSlide />,
  },
  {
    caption: "The frontend",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>The frontend</YellowHeader>
      </div>
    ),
  },
  {
    caption: "SDL",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={sdlImgUrl} className="w-1/2" alt="Nesdev Wiki" />
      </div>
    ),
  },
  {
    caption: "Is it all?",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>And that's roughly it...</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Emulation iceberg",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={icebergImgUrl} className="w-full" alt="Emulation iceberg" />
      </div>
    ),
  },
  {
    caption: "Where to start?",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>But where to start?</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Choose a machine to emulate",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Choose a machine to emulate</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Console tier list",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={consoleTierlistImgUrl}
          className="w-full"
          alt="Console tier list"
        />
      </div>
    ),
  },
  {
    caption: "Find documentations, videos, and datasheets",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Find documentations, videos, and datasheets</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Nesdev Wiki",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={nesdevImgUrl} className="w-full" alt="Nesdev Wiki" />
      </div>
    ),
  },
  {
    caption: "Join communities",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Join communities</YellowHeader>
      </div>
    ),
  },
  {
    caption: "r/emudev",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <img src={emudevImgUrl} className="w-full" alt="r/emudev" />
      </div>
    ),
  },
  {
    caption: "Start coding!",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Start coding!</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Implementation order",
    component: (
      <div className="w-full h-full flex flex-col justify-center items-center text-2xl p-2">
        <ol className="list-decimal list-inside space-y-2">
          <li>CPU</li>
          <li>Tests</li>
          <li>Memory</li>
          <li>Video</li>
          <li>Frontend</li>
          <li>Audio (optional)</li>
        </ol>
      </div>
    ),
  },
  {
    caption: "The whole point",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Last step: have fun!</YellowHeader>
      </div>
    ),
  },
  {
    caption: "Thanks for your attention!",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <YellowHeader>Thank you for your attention :)</YellowHeader>
      </div>
    ),
  },
  {
    caption: "The finale",
    component: (
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden group">
          <img
            src={castleGIFImgUrl}
            className="w-full h-full object-cover transition-all duration-1000 ease-out filter blur-md"
            alt="background"
          />

          <img
            src={qrcodeImgUrl}
            className="absolute inset-0 m-auto w-64 md:w-80 shadow-2xl rounded-xl z-10"
            alt="qrcode"
          />
        </div>
      </div>
    ),
  },
];
