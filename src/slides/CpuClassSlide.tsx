import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CpuClassSlide = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 9);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const linePositions = [0, 32, 64, 96, 128, 160, 192, 224, 256];

  return (
    <div className="relative flex flex-col justify-center items-center h-full p-8 gap-4">
      <div className="relative font-mono">
        <motion.div
          className="absolute inset-x-0 h-8 bg-yellow-400/20 border-l-4 border-yellow-400 rounded-r"
          animate={{ y: linePositions[activeLine] }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        <pre className="relative text-xl leading-8 px-2">
          <span className="text-red-400">class</span>{" "}
          <span className="text-yellow-300">CPU6502</span> {"{"}
          <br />
          {"  "}
          <span className="text-blue-400">a</span> ={" "}
          <span className="text-purple-400">0x00</span>;{" "}
          <span className="text-emerald-500">// Accumulator</span>
          <br />
          {"  "}
          <span className="text-blue-400">x</span> ={" "}
          <span className="text-purple-400">0x00</span>;{" "}
          <span className="text-emerald-500">// X Register</span>
          <br />
          {"  "}
          <span className="text-blue-400">y</span> ={" "}
          <span className="text-purple-400">0x00</span>;{" "}
          <span className="text-emerald-500">// Y Register</span>
          <br />
          {"  "}
          <span className="text-blue-400">pc</span> ={" "}
          <span className="text-purple-400">0x8000</span>;{" "}
          <span className="text-emerald-500">// Program Counter</span>
          <br />
          {"  "}
          <span className="text-blue-400">sp</span> ={" "}
          <span className="text-purple-400">0xff</span>;{" "}
          <span className="text-emerald-500">// Stack Pointer</span>
          <br />
          {"  "}
          <span className="text-blue-400">status</span> ={" "}
          <span className="text-purple-400">0x00</span>;{" "}
          <span className="text-emerald-500">// Flags (NV-BDIZC)</span>
          <br />
          {"  "}
          <span className="text-indigo-400">step</span>() {"{"}{" "}
          <span className="text-emerald-500">/* fetch, decode, execute */</span>{" "}
          {"}"}
          <br />
          {"}"}
        </pre>
      </div>
    </div>
  );
};
