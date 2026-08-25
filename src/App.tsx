import { ReelsContainer, ReelSlide } from "./components/ReelsContainer";
import { slides } from "./slides/";

export default function App() {
  return (
    <ReelsContainer>
      {slides.map(({ Component, ...slide }, idx) => {
        return (
          <ReelSlide key={idx} caption={slide.caption}>
            <Component />
          </ReelSlide>
        );
      })}
    </ReelsContainer>
  );
}
