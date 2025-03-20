import { Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

export const Banner = () => {
  return (
    <div className="pt-16">
      <div className="bg-[url('/bg-1.png')] bg-[#050505] w-full bg-no-repeat bg-cover bg-right-top h-auto pb-24 lg:pb-48 lg:pt-[159px] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-[#B1ADAA] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              Empowering women through healing & hope.
            </h1>
            <p className="text-white mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
              Our mission is to empower women to heal and thrive. We provide
              resources, education, and support for women who have experienced
              trauma. Join us in our mission to create a world where all women
              can heal and thrive.
            </p>
            <div className="mt-6 md:mt-10">
              <Button
                style={{
                  backgroundColor: "#403730",
                  border: "none",

                  borderRadius: "5px",
                }}
                icon={<CaretRightOutlined />}
                className="hover:!bg-[#403730] hover:!text-white focus:!bg-[#403730] focus:!text-white active:!bg-[#403730] active:!text-white text-sm bannerBtn "
              >
                Explore our Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
