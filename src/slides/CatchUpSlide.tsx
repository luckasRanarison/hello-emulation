import { useState, useEffect } from "react";

export const CatchUpSlide: React.FC = () => {
  const INSTRUCTIONS = [60, 100, 80, 40, 60];

  const TOTAL_LEAD_TARGET = INSTRUCTIONS.reduce((a, b) => a + b, 0);
  const TOTAL_DESIGNER_TARGET = TOTAL_LEAD_TARGET * 3;

  const [stepIndex, setStepIndex] = useState(0);
  const [leadCycles, setLeadCycles] = useState(0);
  const [designerCycles, setDesignerCycles] = useState(0);
  const [phase, setPhase] = useState<"lead_step" | "catchup" | "paused">(
    "lead_step",
  );

  useEffect(() => {
    let timer: number;

    if (phase === "lead_step") {
      timer = setTimeout(() => {
        setLeadCycles((prev) => prev + INSTRUCTIONS[stepIndex]);
        setPhase("catchup");
      }, 1200);
    } else if (phase === "catchup") {
      timer = setTimeout(() => {
        setDesignerCycles((prev) => {
          const next = prev + INSTRUCTIONS[stepIndex] * 3;

          if (stepIndex === INSTRUCTIONS.length - 1) {
            setPhase("paused");
            return next;
          }

          setStepIndex((idx) => idx + 1);
          setPhase("lead_step");
          return next;
        });
      }, 1200);
    } else if (phase === "paused") {
      timer = setTimeout(() => {
        setStepIndex(0);
        setLeadCycles(0);
        setDesignerCycles(0);
        setPhase("lead_step");
      }, 2500);
    }

    return () => clearTimeout(timer);
  }, [phase, stepIndex]);

  const leadPct = (leadCycles / TOTAL_LEAD_TARGET) * 100;
  const designerPct = (designerCycles / TOTAL_DESIGNER_TARGET) * 100;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-8 gap-12 text-white select-none">
      <div className="w-full max-w-3xl flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xl">
            <span className="font-semibold text-yellow-400">Lead (100 Hz)</span>
            <span className="text-gray-200">
              {leadCycles} / {TOTAL_LEAD_TARGET} cycles
            </span>
          </div>
          <div className="w-full h-4 bg-gray-800">
            <div
              className="h-full bg-yellow-400"
              style={{ width: `${leadPct}%` }}
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
          <div className="w-full h-4 bg-gray-800">
            <div
              className="h-full bg-indigo-400"
              style={{ width: `${designerPct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
