import { ReelsContainer, ReelSlide } from "./components/ReelsContainer";
import { slides } from "./slides/";

export default function App() {
  return (
    <ReelsContainer>
      {slides.map(({ component, ...slide }, idx) => {
        return (
          <ReelSlide key={idx} caption={slide.caption}>
            {component}
          </ReelSlide>
        );
      })}
    </ReelsContainer>
  );
}
