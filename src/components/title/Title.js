import { Parallax, Background } from "react-parallax";

const Title = () => (
  <Parallax
    // blur={{ min: -15, max: 15 }}
    // bgImage={require("https://cdn.midjourney.com/0e0d7d26-e6bc-4416-a0b2-88c81f07146f/0_0.png")}
    className="image"
    bgImage={
      "https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    strength={800}
  >
    {/* <Background className="custom-bg">
      <img
        src="https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="title"
      />
    </Background> */}
    <div className="content">
      <span className="title-text">Parallel</span>
      {/* <p className="title-text-sub">Heavy Metal Goggles</p> */}
    </div>
  </Parallax>
);

export default Title;
