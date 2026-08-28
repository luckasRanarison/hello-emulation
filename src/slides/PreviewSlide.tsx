import emulatorImgUrl from "../assets/emulators.png";

export const PreviewSlide: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full p-8 text-center gap-3">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-[4px]"
        style={{ backgroundImage: `url(${emulatorImgUrl})` }}
      />

      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Hello Emulation!
        </h1>
        <p className="text-gray-100 text-2xl max-w-2xl drop-shadow-md">
          Une introduction à la programmation d'émulateurs pour consoles retro
        </p>
      </div>
    </div>
  );
};
