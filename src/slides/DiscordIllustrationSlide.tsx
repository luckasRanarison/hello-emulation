import { useState, useEffect } from "react";
import { MicOff } from "lucide-react";

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500",
  yellow: "bg-yellow-400",
  pink: "bg-pink-400",
  green: "bg-green-400",
  red: "bg-red-500",
};

export const YellowHeader = ({
  children,
  size = 2,
}: {
  children: React.ReactNode;
  size?: number;
}) => (
  <div
    className={`text-${size}xl text-yellow-300 text-center leading-snug tracking-wide`}
  >
    {children}
  </div>
);

const Participant = (props: {
  name: string;
  color: string;
  isMuted: boolean;
  isSpeaking: boolean;
}) => {
  const bgClass = colorMap[props.color];

  return (
    <div
      className={`relative w-full h-full flex items-end justify-between p-2 ${bgClass} rounded-2xl border-4 transition-all duration-200 ${
        props.isSpeaking ? "border-green-500 shadow-lg" : "border-transparent"
      }`}
    >
      {props.isSpeaking && (
        <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
      )}

      <div className="relative z-10 h-8 px-3 flex items-center rounded-xl bg-gray-700/40 text-gray-900 font-medium text-sm">
        {props.name}
      </div>

      {props.isMuted && (
        <div className="relative z-10 h-8 w-8 rounded-xl bg-gray-700/50 text-gray-900 flex items-center justify-center">
          <MicOff className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

const participants = [
  { id: "lead", name: "Lead (CPU)", color: "indigo" },
  { id: "ram", name: "Level Designer (RAM)", color: "yellow" },
  { id: "video", name: "Graphics Designer (Video)", color: "pink" },
  { id: "audio", name: "Sound Designer (Audio)", color: "green" },
  { id: "qa", name: "Q&A (Input)", color: "red" },
];

interface TargetRule {
  mustRespond: boolean;
}

interface BusParticipantRule {
  canInitiate: boolean;
  targets: Record<string, TargetRule>;
}

const BUS_RULES: Record<string, BusParticipantRule> = {
  lead: {
    canInitiate: true,
    targets: {
      ram: { mustRespond: false },
      qa: { mustRespond: true },
      video: { mustRespond: false },
      audio: { mustRespond: false },
    },
  },
  video: {
    canInitiate: true,
    targets: {
      ram: { mustRespond: true },
    },
  },
  audio: {
    canInitiate: true,
    targets: {
      ram: { mustRespond: true },
    },
  },
  ram: {
    canInitiate: false,
    targets: {},
  },
  qa: {
    canInitiate: false,
    targets: {},
  },
};

export const DiscordIllustrationSlide = () => {
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);
  const [unmutedTarget, setUnmutedTarget] = useState<string | null>(null);
  const [pendingResponse, setPendingResponse] = useState<{
    responder: string;
    caller: string;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pendingResponse) {
        setActiveSpeaker(pendingResponse.responder);
        setUnmutedTarget(pendingResponse.caller);
        setPendingResponse(null);
        return;
      }

      const validInitiators = participants
        .map((p) => p.id)
        .filter((id) => BUS_RULES[id]?.canInitiate);

      const speakerId =
        validInitiators[Math.floor(Math.random() * validInitiators.length)];

      const speakerRules = BUS_RULES[speakerId];
      const availableTargetIds = Object.keys(speakerRules.targets);

      const targetId =
        availableTargetIds[
          Math.floor(Math.random() * availableTargetIds.length)
        ];

      setActiveSpeaker(speakerId);
      setUnmutedTarget(targetId);

      const targetRule = speakerRules.targets[targetId];

      if (targetRule?.mustRespond) {
        setPendingResponse({ responder: targetId, caller: speakerId });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [pendingResponse]);

  const speakerObj = participants.find((p) => p.id === activeSpeaker);
  const targetObj = participants.find((p) => p.id === unmutedTarget);

  const formatShortName = (name?: string) =>
    name ? name.replace(" Designer", "") : "";

  return (
    <div className="relative h-full w-full py-12 px-6">
      <div className="h-full w-full grid grid-cols-2 gap-6 pb-8">
        {participants.map((p) => {
          const isSpeaking = activeSpeaker === p.id;
          const isMuted = !isSpeaking && unmutedTarget !== p.id;

          return (
            <Participant
              key={p.id}
              name={p.name}
              color={p.color}
              isMuted={isMuted}
              isSpeaking={isSpeaking}
            />
          );
        })}
      </div>

      <div className="absolute flex justify-center bottom-[25%] left-0 right-0 z-20 pointer-events-none">
        {speakerObj && targetObj && (
          <div className="w-fit bg-white text-black text-center font-bold text-xl rounded-xl m-6 py-2 px-6 shadow-md">
            {formatShortName(speakerObj.name)} {"-> "}{" "}
            {formatShortName(targetObj.name)}
          </div>
        )}
      </div>
    </div>
  );
};
