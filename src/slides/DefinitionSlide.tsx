export const DefinitionSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center px-8 sm:px-12 text-left font-sans">
      <div className="max-w-xl mx-auto space-y-6">
        <div>
          <div className="flex gap-4 items-baseline">
            <h1 className="text-4xl text-yellow-300 tracking-tight">
              emulator
            </h1>
            <span className="font-mono text-gray-300 text-xl">
              /ˈɛmjʊleɪtər/
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300 mt-1">
            <span className="text-xl italic">fr: émulateur</span>
          </div>
        </div>

        <div className="space-y-6 text-white">
          <p className="text-2xl leading-relaxed font-medium">
            A <u className="underline-offset-4">software</u> or{" "}
            <u className="underline-offset-4">hardware</u> that{" "}
            <u className="underline-offset-4">replicates</u> the function of a
            real or virtual <u className="underline-offset-4">hardware</u>.
          </p>
          <p className="pl-4 border-l-2 border-l-yellow-300 text-xl text-gray-300 italic">
            Un logiciel ou un composant matériel qui reproduit le fonctionnement
            d'un appareil physique ou virtuel.
          </p>
        </div>
      </div>
    </div>
  );
};
