export const DefinitionSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 sm:px-12 text-left font-sans">
      <div className="max-w-xl mx-auto space-y-6">
        <div>
          <div className="flex gap-4 items-baseline">
            <h1 className="text-[3vw] text-yellow-300 tracking-tight">
              emulator
            </h1>
            <span className="font-mono text-gray-300">/ˈɛmjʊleɪtər/</span>
          </div>
          <div className="flex items-center gap-3 text-[1vw] text-gray-400 mt-1">
            <span className="text-[1.3vw] italic">fr: émulateur</span>
          </div>
        </div>

        <div className="space-y-2 text-white">
          <p className="text-[1.5vw] leading-relaxed font-medium">
            A <u className="underline-offset-4">software</u> or{" "}
            <u className="underline-offset-4">hardware</u> that pretends to be{" "}
            <u className="underline-offset-4">physical hardware</u>.
          </p>
          <p className="text-[1.3vw] text-gray-400 italic">
            Un logiciel ou du matériel qui se fait passer pour du matériel
            physique.
          </p>
        </div>
      </div>
    </div>
  );
};
