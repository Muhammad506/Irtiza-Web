import AboutBar from "../../components/AboutUs/AboutBar";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurMission from "../../components/AboutUs/OurMission";
import OurWork from "../../components/AboutUs/OurWork";
import Slider from "../../components/AboutUs/Slider";

const About = () => {
  return (
    <div>
      <Slider />
      <AboutBar />
      <AboutUs />
      <OurMission />
      <OurWork />
    </div>
  );
};

export default About;
