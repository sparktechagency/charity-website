import { Modal } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import FirstSection from "./home-slider-section/FirstSection";
import SecondSection from "./home-slider-section/SecondSection";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: false, // Prevents wrapping issues
    speed: 500,
    slidesToShow: 1, // Show 4 slides at a time
    slidesToScroll: 1,
    variableWidth: true, // Ensures each slide keeps its width
    adaptiveHeight: false, // Prevents height jumps
    centerMode: false, // Keeps slides inline
  };

  return (
    <div className=" bg-[#ecebea] py-4 mb-5   ">
      <div className=" max-w-[1512px] mx-auto ">
        <div className="relative hidden lg:flex ">
          <Slider {...settings} className="w-full">
            <div>
              <FirstSection />
            </div>
            <div>
              <SecondSection />
            </div>
            <div>
              <SecondSection />
            </div>
            
          </Slider>
        </div>
        <div className="relative lg:hidden ">
            <div>
              <FirstSection />
            </div>
            <div>
              <SecondSection />
            </div>
            <div>
              <SecondSection />
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
