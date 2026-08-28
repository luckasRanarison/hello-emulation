import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const SequentialExecSlide = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 3);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const linePositions = [0, 32, 64];

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
          {"  "}count = count + <span className="text-amber-400">1</span>;
          <br />
          {"  "}
          <span className="text-yellow-300">console</span>.
          <span className="text-indigo-400">log</span>(count);
          <br />
          {"}"}
        </pre>
      </div>
      <div className="px-6 py-2 rounded-xl bg-white text-black text-2xl font-bold">
        Code is sequential
      </div>
    </div>
  );
};
