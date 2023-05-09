import { Parallax, Background } from "react-parallax";

const SectionTwo = () => (
  <Parallax
    className="image"
    bgImage={
      "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1image.png"
    }
    strength={800}
  >
    {/* <div className="content">
      <span className="title-text">Parallel</span>
    </div> */}
  </Parallax>
);

export default SectionTwo;
