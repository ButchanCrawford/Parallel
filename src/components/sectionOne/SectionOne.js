import { Parallax, Background } from "react-parallax";

const SectionOne = () => (
  <Parallax
    className="image"
    bgImage={
      "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    strength={800}
  >
    {/* <div className="content">
      <span className="title-text">Parallel</span>
    </div> */}
  </Parallax>
);

export default SectionOne;
