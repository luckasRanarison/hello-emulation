import * as Slide1 from "./Slide1";
import * as Slide10 from "./Slide10";

import HandheldsImage from "../assets/handhelds.jpg";
import fakePspImage from "../assets/fake-psp.jpg";
import emulatorQuoteImage from "../assets/emulator-quote.png";
import nesImage from "../assets/nes.jpg";
import gbaImage from "../assets/gba.webp";
import nfsmwImage from "../assets/nfsmw.jpg";

export type SlideModule = {
  caption: string;
  Component: React.FC;
};

const Slide2: SlideModule = {
  caption: "...",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center text-[2.5vw]">
      (Please don't judge me)
    </div>
  ),
};

const Slide3: SlideModule = {
  caption: "introduction",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center text-[2.5vw] text-yellow-300">
      Emulation?
    </div>
  ),
};

const Slide4: SlideModule = {
  caption: "10 years ago",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center">
      <img src={HandheldsImage} />
    </div>
  ),
};

const Slide5: SlideModule = {
  caption: '"PSP" at home',
  Component: () => (
    <div className="w-full h-full flex justify-center items-center">
      <img src={fakePspImage} />
    </div>
  ),
};

const Slide6: SlideModule = {
  caption: "Emulator?",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center">
      <img src={emulatorQuoteImage} className="w-full" />
    </div>
  ),
};

const Slide7: SlideModule = {
  caption: "Nintendo Entertainment System (NES)",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center">
      <img src={nesImage} className="w-full" />
    </div>
  ),
};

const Slide8: SlideModule = {
  caption: "GameBoy Advance (GBA)",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center">
      <img src={gbaImage} className="w-full" />
    </div>
  ),
};

const Slide9: SlideModule = {
  caption: "NFS Most Wanted at home",
  Component: () => (
    <div className="w-full h-full flex justify-center items-center">
      <img src={nfsmwImage} className="w-full" />
    </div>
  ),
};

export const slides: SlideModule[] = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
];
