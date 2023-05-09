import { Parallax, Background } from "react-parallax";

const SectionThree = () => (
  <Parallax
    className="image"
    bgImage={
      "https://images.pexels.com/photos/60130/pexels-photo-60130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    strength={800}
  >
    {/* <div className="content">
      <span className="title-text">Parallel</span>
    </div> */}
  </Parallax>
);

export default SectionThree;
