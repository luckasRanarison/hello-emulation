import doroImage from "../assets/doro.jpg";

import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";

import {
  Heart,
  MessageCircle,
  Repeat,
  Bookmark,
  Send,
  MoreVertical,
  Music,
  type LucideIcon,
} from "lucide-react";

interface ReelContextType {
  isActive: boolean;
  slideIndex: number;
}

const ReelContext = createContext<ReelContextType>({
  isActive: false,
  slideIndex: 0,
});

export const useReelActive = (): ReelContextType => useContext(ReelContext);

export interface ActionButtonProps {
  icon: LucideIcon;
  count?: string;
  size?: number;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  count,
  size = 26,
}) => (
  <button
    type="button"
    className="flex flex-col items-center gap-0.5 text-white bg-transparent border-none p-0 text-xs cursor-pointer"
  >
    <Icon size={size} />
    {count !== undefined && <span>{count}</span>}
  </button>
);

export interface ReelSlideProps {
  children: React.ReactNode;
  likes?: string;
  comments?: string;
  reposts?: string;
  shares?: string;
  saves?: string;
  username?: string;
  avatarUrl?: string;
  caption?: string;
  audioTitle?: string;
  index?: number;
  activeIndex?: number;
}

export interface ReelsContainerProps {
  children: React.ReactNode;
  onSlideChange?: (index: number) => void;
}

export const ReelSlide: React.FC<ReelSlideProps> = ({
  children,
  likes = "0",
  comments = "0",
  reposts = "0",
  shares = "0",
  saves = "0",
  username = "@luckasRanarison",
  avatarUrl = doroImage,
  caption = "",
  audioTitle = "Original Audio",
  index = 0,
  activeIndex = 0,
}) => {
  return (
    <ReelContext.Provider
      value={{ isActive: index === activeIndex, slideIndex: index }}
    >
      <section className="relative w-full h-full shrink-0 snap-start snap-always overflow-hidden">
        {/* Slide Body Container */}
        <div className="absolute inset-0 z-0">{children}</div>

        {/* Full-Width Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-64 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Action Bar Overlay */}
        <aside className="absolute right-3 bottom-6 z-20 flex flex-col items-center gap-3">
          <ActionButton icon={Heart} count={likes} />
          <ActionButton icon={MessageCircle} count={comments} />
          <ActionButton icon={Repeat} count={reposts} />
          <ActionButton icon={Send} count={shares} />
          <ActionButton icon={Bookmark} count={saves} />
          <ActionButton icon={MoreVertical} size={24} />
        </aside>

        {/* Caption Overlay */}
        <footer className="absolute bottom-0 left-0 w-full z-20 p-4 pr-16 pointer-events-none">
          <div className="flex items-center gap-2 mb-1.5 pointer-events-auto">
            {/* User Profile Picture */}
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden border border-white/20 rounded-full">
              <img
                src={avatarUrl}
                alt={username}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="font-semibold text-sm">{username}</span>

            <button
              type="button"
              className="bg-transparent border border-white text-white text-xs px-2 py-0.5 cursor-pointer rounded-md"
            >
              Follow
            </button>
          </div>

          {caption && (
            <p className="text-sm mb-1.5 text-gray-200 pointer-events-auto">
              {caption}
            </p>
          )}

          <div className="flex items-center gap-1.5 text-xs text-gray-300 pointer-events-auto">
            <Music size={14} />
            <span>{audioTitle}</span>
          </div>
        </footer>
      </section>
    </ReelContext.Provider>
  );
};

export const ReelsContainer: React.FC<ReelsContainerProps> = ({
  children,
  onSlideChange,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const slides = React.Children.toArray(children);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
    const target = e.currentTarget;
    const { scrollTop, clientHeight } = target;
    const newIndex = Math.round(scrollTop / clientHeight);

    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < slides.length) {
      setActiveIndex(newIndex);
      if (onSlideChange) onSlideChange(newIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent): void => {
      if (!containerRef.current) return;
      const { clientHeight } = containerRef.current;

      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        (e.key === " " && !e.shiftKey)
      ) {
        e.preventDefault();
        const nextIndex = Math.min(activeIndex + 1, slides.length - 1);
        containerRef.current.scrollTo({
          top: nextIndex * clientHeight,
          behavior: "smooth",
        });
      } else if (
        e.key === "ArrowUp" ||
        e.key === "PageUp" ||
        (e.key === " " && e.shiftKey)
      ) {
        e.preventDefault();
        const prevIndex = Math.max(activeIndex - 1, 0);
        containerRef.current.scrollTo({
          top: prevIndex * clientHeight,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, slides.length]);

  return (
    <div className="bg-black text-white flex justify-center items-center h-screen w-screen overflow-hidden">
      <main
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full aspect-[4/5] max-w-full bg-black overflow-y-scroll snap-y snap-mandatory relative [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="sticky top-0 left-0 right-0 z-30 h-0 pointer-events-none">
          <div className="flex gap-1 p-3">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className="flex-1 h-[2px] bg-white/30 rounded-full overflow-hidden"
              >
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    idx <= activeIndex ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {slides.map((child, idx) => {
          if (React.isValidElement<ReelSlideProps>(child)) {
            return React.cloneElement(child, { index: idx, activeIndex });
          }
          return child;
        })}
      </main>
    </div>
  );
};

export default ReelsContainer;
