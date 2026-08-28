import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ConcurrentExecSlide: React.FC = () => {
  const LEAD_FREQ_PER_MS = 0.1;
  const DESIGNER_FREQ_PER_MS = 0.3;

  const DURATION_MS = 3400;
  const TOTAL_LEAD_TARGET = Math.floor(DURATION_MS * LEAD_FREQ_PER_MS);
  const TOTAL_DESIGNER_TARGET = Math.floor(DURATION_MS * DESIGNER_FREQ_PER_MS);

  const [leadCycles, setLeadCycles] = useState(0);
  const [designerCycles, setDesignerCycles] = useState(0);

  useEffect(() => {
    let animFrameId: number;
    let timeoutId: number;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < DURATION_MS) {
        setLeadCycles(Math.floor(elapsed * LEAD_FREQ_PER_MS));
        setDesignerCycles(Math.floor(elapsed * DESIGNER_FREQ_PER_MS));

        animFrameId = requestAnimationFrame(tick);
      } else {
        setLeadCycles(TOTAL_LEAD_TARGET);
        setDesignerCycles(TOTAL_DESIGNER_TARGET);

        timeoutId = setTimeout(() => {
          setLeadCycles(0);
          setDesignerCycles(0);
          startTime = null;
          animFrameId = requestAnimationFrame(tick);
        }, 1500);
      }
    };

    animFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameId);
      clearTimeout(timeoutId);
    };
  }, [DURATION_MS, TOTAL_LEAD_TARGET, TOTAL_DESIGNER_TARGET]);

  const leadPct = (leadCycles / TOTAL_LEAD_TARGET) * 100;
  const designerPct = (designerCycles / TOTAL_DESIGNER_TARGET) * 100;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 text-white select-none">
      <div className="w-full max-w-3xl flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xl">
            <span className="font-semibold text-yellow-400">Lead (100 Hz)</span>
            <span className="text-gray-200">
              {leadCycles} / {TOTAL_LEAD_TARGET} cycles
            </span>
          </div>
          <div className="w-full h-4 bg-gray-800 rounded overflow-hidden">
            <motion.div
              className="h-full bg-yellow-400"
              style={{ width: `${leadPct}%` }}
              transition={{ ease: "linear", duration: 0 }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xl">
            <span className="font-semibold text-indigo-400">
              Graphic Designer (300 Hz)
            </span>
            <span className="text-gray-200">
              {designerCycles} / {TOTAL_DESIGNER_TARGET} cycles
            </span>
          </div>
          <div className="w-full h-4 bg-gray-800 rounded overflow-hidden">
            <motion.div
              className="h-full bg-indigo-400"
              style={{ width: `${designerPct}%` }}
              transition={{ ease: "linear", duration: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
