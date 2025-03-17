import { Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

export const Banner = () => {
  return (
    <div className="pt-16" >
      <div className="bg-[url('/bg-1.png')] bg-[#050505] w-full bg-no-repeat bg-cover bg-right-top h-auto pb-48 lg:pt-[159px] px-4 max-w-[1512px] mx-auto ">
        <div className="max-w-xl  lg:py-0 py-4 px-6 md:px-0 lg:ml-[155px] text-center  md:text-left">
          <h1 className="text-[#B1ADAA] text-[30px] md:text-[60px] lg:text-[70px] leading-tight font-bold">
            Empowering women through healing & hope.
          </h1>
          <p className="text-white lg:my-10 my-3 text-sm md:text-base">
            Our mission is to empower women to heal and thrive. We provide
            resources, education, and support for women who have experienced
            trauma. Join us in our mission to create a world where all women can
            heal and thrive.
          </p>
          <Button
            style={{
              backgroundColor: "#403730",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              padding: "19px 24px",
              borderRadius: "5px",
            }}
            icon={<CaretRightOutlined />}
            className="hover:!bg-[#403730] hover:!text-white focus:!bg-[#403730] focus:!text-white active:!bg-[#403730] active:!text-white text-sm"
          >
            Explore our Works
          </Button>
        </div>
      </div>
    </div>
  );
};
