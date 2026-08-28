import { ReelsContainer, ReelSlide } from "./components/ReelsContainer";
import { slides } from "./slides/";
import { formatCount, getRandomInt } from "./utils/math";

export default function App() {
  return (
    <ReelsContainer>
      {slides.map(({ component, ...slide }, idx) => {
        return (
          <ReelSlide
            key={idx}
            caption={slide.caption}
            likes={formatCount(getRandomInt(1000, 500000))}
            comments={formatCount(getRandomInt(100, 15000))}
            reposts={formatCount(getRandomInt(50, 5000))}
            shares={formatCount(getRandomInt(200, 25000))}
            saves={formatCount(getRandomInt(300, 40000))}
          >
            {component}
          </ReelSlide>
        );
      })}
    </ReelsContainer>
  );
}
