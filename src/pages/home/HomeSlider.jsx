import { Modal } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import FirstSection from "./home-slider-section/FirstSection";
import SecondSection from "./home-slider-section/SecondSection";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className=" bg-[#ecebea] py-4 mb-5 " >
      <div className=" max-w-[1512px] mx-auto ">
      <div className="relative">
        <Slider {...settings}>
          <div>
            {/* Slide 1 */}

            <FirstSection></FirstSection>
          </div>
          <div>
            <SecondSection></SecondSection>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default HomeSlider;
