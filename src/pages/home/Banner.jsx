import { Button } from "antd";
import { CaretRightOutlined, DownloadOutlined } from "@ant-design/icons";
export const Banner = () => {
  return (
    <div className="bg-[url('/bg-1.png')] bg-[#050505] w-full   bg-no-repeat bg-auto bg-right-top h-[92vh] ">
      <div className=" max-w-xl  broder border-red-600 ml-[384px] pt-[199px] ">
        <h1 className="text-[#B1ADAA] text-[70px] leading-20 font-bold">
          Empowering women through healing & hope.
        </h1>
        <p className="text-white my-6 ">
          Our mission is to empower women to heal and thrive. We <br /> provide
          resources, education, and support for women who <br /> have
          experienced trauma. Join us in our mission to create a <br /> world
          where all women can heal and thrive.
        </p>
        <Button
          style={{
            backgroundColor: "#403730",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            padding: "19px 25px",
            borderRadius: "5px",
          }}
          icon={<CaretRightOutlined />}
          className="hover:!bg-[#403730] hover:!text-white focus:!bg-[#403730] focus:!text-white active:!bg-[#403730] active:!text-white text-sm "
        >
          Download
        </Button>
      </div>
    </div>
  );
};
