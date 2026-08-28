import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const EmulatorLoopSlide = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 4);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const linePositions = [0, 32, 64, 96];

  return (
    <div className="relative flex flex-col justify-center items-center h-full p-8 gap-8">
      <div className="relative">
        <motion.div
          className="absolute inset-x-0 h-8 bg-yellow-400/20 border-l-4 border-yellow-400 rounded-r"
          animate={{ y: linePositions[activeLine] }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        <pre className="relative text-xl leading-8 px-2">
          <span className="text-red-400">while</span>(
          <span className="text-blue-400">true</span>) {"{"}
          <br />
          {"  "}
          <span className="text-red-400">const</span> cycles = cpu.
          <span className="text-indigo-400">advance</span>();
          <br />
          {"  "}video.<span className="text-indigo-400">run</span>(cycles *{" "}
          <span className="text-blue-400">3</span>);
          <br />
          {"  "}audio.<span className="text-indigo-400">run</span>(cycles *{" "}
          <span className="text-blue-400">2</span>);
          <br />
          {"}"}
          <br />
        </pre>
      </div>
    </div>
  );
};
