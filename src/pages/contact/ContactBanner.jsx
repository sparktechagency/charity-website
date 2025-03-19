import React from "react";

const ContactBanner = () => {
  return (
    <>
      <div className=" py " >
        <div className="relative max-w-full lg:h-[90vh] h-[50vh]  bg-[url('/contactImg.jpg')] bg-cover bg-center">
          {/* Overlay - top, left, right, bottom */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Main content with white text */}

          <div className="lg:w-6xl mx-auto  relative p-4 lg:p-0 ">
            <div className=" max-w-lg:w-[528px] lg:pt-[114px] pt-[15%] text-white">
              <h1 className="lg:text-[70px] text-xl font-semibold ">
                Empowering <br />{" "}
                <span className="font-bold">
                  women through <br />{" "}
                </span>{" "}
                <span className="font-bold">healing & hope.</span>
              </h1>
            </div>
          </div>

          <div className="lg:w-6xl mx-auto  relative p-4 lg:p-0 ">
            <div className="lg:w-[528px]  text-[#B1ADAA]">
              <p className="lg:text-lg  lg:leading-relaxed">
                Our mission is to empower women to heal and thrive. We provide
                resources, education, and support for women who have experienced
                trauma. Join us in our mission to create a world where all women
                can heal and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default ContactBanner;
