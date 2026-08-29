import { colorMap } from "./DiscordIllustrationSlide";

export const box = [
  {
    id: "video",
    name: "Graphics Designer (Video)",
    color: "pink",
    message: "I've finished the work",
    timestamp: "now",
    seen: false,
  },
  {
    id: "audio",
    name: "Sound Designer (Audio)",
    color: "green",
    message: "I need some help",
    timestamp: "10 minutes ago",
    seen: true,
  },
  {
    id: "qa",
    name: "Q&A (Input)",
    color: "red",
    message: "We got new feedbacks",
    timestamp: "15 minutes ago",
    seen: true,
  },
];

const MessageEntry = (props: {
  name: string;
  color: string;
  message: string;
  timestamp: string;
  seen: boolean;
}) => {
  const bgClass = colorMap[props.color];

  return (
    <div
      className={`w-full p-4 flex items-center gap-4 rounded-xl ${!props.seen ? "bg-gray-600/20" : ""}`}
    >
      <div
        className={`w-16 h-16 flex-shrink-0 flex justify-center items-center ${bgClass} rounded-full text-2xl font-semibold`}
      >
        {props.name[0]}
      </div>
      <div className={`w-full space-y-1 ${!props.seen ? "font-bold" : ""}`}>
        <div className="w-full flex justify-between">
          <div className="text-xl">{props.name}</div>
          <div className="text-md text-gray-400">{props.timestamp}</div>
        </div>
        <div className="text-xl text-gray-400">{props.message}</div>
      </div>
    </div>
  );
};

export const InterruptSlide = () => {
  return (
    <div className="h-full w-full px-8 py-20 space-y-4">
      {box.map((p) => (
        <MessageEntry key={p.id} {...p} />
      ))}
    </div>
  );
};
