import { FiArrowDownRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const CustomNotFound = ({ offBack }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center lg:h-[840px]">
        <h1 className="lg:text-6xl md:text-1xl text-base font-bold text-gray-600 uppercase text-center">
          data not found
        </h1>
        {!offBack && (
          <div className="flex gap-2 items-center justify-center pt-2">
            <FiArrowLeft size={20} color="#1b69ad" />

            <Link className="text-[#1b69ad] " to={"/"}>
              Go Back
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomNotFound;
