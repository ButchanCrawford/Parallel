import React from "react";
import Title from "./components/title/Title";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import TextOne from "./components/text/TextOne";
import TextTwo from "./components/text/TextTwo";
// import TextThree from "./components/text/TextThree";
// import TextFour from "./components/text/TextFour";

function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <Title />
        <SectionOne />
        <TextOne />
        <SectionTwo />
        <TextTwo />
        <SectionThree />
      </div>
    </div>
  );
}

export default App;
