import { ChevronDown, Gavel, Quote } from "lucide-react";
import { Modal, Button, Form, Input, Checkbox } from "antd";
import React, { useEffect, useState } from "react";

const SecondSection = () => {
  const bids = [
    { value: "$25", label: "$25" },
    { value: "$30", label: "$30" },
    { value: "$40", label: "$40" },
    { value: "$50", label: "$50" },
    { value: "None", label: "None" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBid, setSelectedBid] = useState(false);
  console.log(selectedBid);

  const handleToggle = () => setIsOpen(true);

  // first modal

  const [firstModal, setFirstModal] = useState(false);

  const openFirstModal = () => {
    if (selectedBid && selectedBid !== "None") {
      setFirstModal(true);
      console.log("Modal opened!"); // Debugging log
    } else {
      console.log("No bid selected, modal won't open.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setFirstModal(false);
  };

  // second modal

  const backFirstModal = () => {
    setFirstModal(true);
    setSecondModal(false);
    console.log("First modal closed, second modal opened."); // Debugging log
  };

  const [secondModal, setSecondModal] = useState(false);

  const openSecondModal = () => {
    setSecondModal(true);
    firstModal(false);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  useEffect(() => {
    if (firstModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [firstModal]);

  useEffect(() => {
    if (secondModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [secondModal]);

  return (
    <div>
      <div className=" bg-[#ecebea] ml-5 ">
        <div className=" w-[1036px]  mx-auto    ">
          <div className="  bg-white shadow  rounded-2xl  flex flex-col lg:flex-row lg:justify-between px-6 py-6 gap-6  ">
            <div className=" w-[433px]  ">
              <h1 className=" font-semibold lg:text-5xl text-2xl lg:leading-12 text-black lg:pb-4  ">
                Capturing the first light of day in a serene landscape
              </h1>
              <p className=" lg:mt-4 text-[#263234] lg:text-xl ">
                Estimated price :
                <span className=" text-[#263234] font-bold "> $59-$200</span>
              </p>
              <div className="flex items-center gap-1 mt-1 ">
                {/* icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                    fill="#4B5557"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                    fill="#4B5557"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                    fill="#4B5557"
                  />
                </svg>
                <p className=" text-[#263234] lg:text-xl font-semibold ">
                  07:03: <span>39sec left </span>
                </p>
              </div>
              <div className="flex items-center lg:gap-3 gap-1.5 lg:mt-6 mt-2.5 ">
                <div>
                  <img
                    src="./sliderImg-2.jpg"
                    className=" w-12 h-12  rounded-full "
                    alt=""
                  />
                </div>
                <div>
                  <h1 className=" text-sm font-semibold text-[#263234] ">
                    Illena D’cruz
                  </h1>
                  <p className=" text-[#4B5557] text-xs ">Contributor</p>
                </div>
              </div>
              <div className="bg-[#e9ebeb] mt-6 lg:p-6 p-2.5 rounded-lg max-w-2xl mx-auto shadow-md">
                <p className=" text-lg leading-relaxed">
                  I am honored to donate Whispers of Dawn to this auction in
                  support of Healing and Hope for Women. This initiative
                  empowers women facing adversity, providing them with the
                  resources to rebuild their lives. We can create a masterpiece
                  of change.
                </p>
              </div>

              <div className="flex lg:flex-row flex-col items-center justify-between mt-8 gap-4">
                {/* Price & Bids */}
                <div className="text-gray-900 text-xl font-bold">
                  $1,80 <span className="text-gray-500 text-sm">(12 bids)</span>
                </div>

                {/* Bid Button */}
                <div className=" flex items-center ">
                  <div>
                    <button
                      onClick={openFirstModal}
                      disabled={secondModal}
                      className="flex items-center gap-1 cursor-pointer  bg-[#403730] text-white text-sm font-semibold px-[12px] py-2.5  hover:bg-[#2c241f] transition"
                    >
                      <Gavel className="w-4 h-4" />
                      Bid online {selectedBid == "None" ? `  ` : selectedBid}
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleToggle}
                      disabled={secondModal}
                      className="bg-[#403730] cursor-pointer text-white text-sm font-semibold py-2 px-3  hover:bg-[#2c241f] transition"
                    >
                      <ChevronDown className=" " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative ">
              <img
                src="/homeSliderImage.jpg"
                className=" lg:w-[532px]  rounded-2xl lg:h-[630px] mb-6  "
                alt=""
              />
              <div className="absolute top-0 ml-3 mt-4 px-2 py-1 text-sm text-[#263234] bg-white rounded ">
                <button>Featured</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute left-[24.2%]   ${
          isOpen
            ? " transition-all duration-500 ease-in-out top-[59%]  "
            : " transition-all duration-500 ease-in-out top-[0%] "
        }  z-50  `}
      >
        {isOpen &&
          bids.map((bid, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-white list-none cursor-pointer hover:bg-gray-200 hover:scale-95 transition-all  my-1 w-[183px] "
              onClick={() => {
                setSelectedBid(bid.value);
                setIsOpen(false);
                if (bid.value === "None") {
                  setIsOpen(false);
                }
              }}
            >
              {bid.label}
            </li>
          ))}
      </div>

      {/* first modal  */}

      {firstModal && (
        <div className="bg-white top-[30%] left-[20%] absolute z-50 w-[600px] p-6 rounded-lg shadow-lg ">
          <h1 className=" text-[#263234] leading-8 text-2xl font-semibold ">
            Buyer info.
          </h1>
          <h2 className=" text-[#263234] mt-4 mb-6 text-[16px]  ">
            Please input your real data so that we can reach to you. Thank you.
          </h2>
          <form onSubmit={handleSubmit}>
            <label
              className=" text-[#263234] text-sm font-medium  mb-1.5 "
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full py-2.5 mt-1.5 border border-[#A6ABAC] px-3.5  rounded mb-3 hover:outline-0 focus:outline-0 "
            />
            <label
              className=" text-[#263234] text-sm font-medium  mb-1.5 "
              htmlFor="contact"
            >
              Contact number
            </label>
            <input
              type="tel"
              name="contact"
              id="contact"
              placeholder="UK +123"
              className="w-full py-2.5 mt-1.5 border border-[#A6ABAC] px-3.5  rounded mb-3 hover:outline-0 focus:outline-0 "
            />
            <label
              className=" text-[#263234] text-sm font-medium  mb-1.5 "
              htmlFor="email"
            >
              Contact number
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full py-2.5 mt-1.5 border border-[#A6ABAC] px-3.5  rounded mb-3 hover:outline-0 focus:outline-0 "
            />
            <div className="flex items-center mb-3">
              <input type="checkbox" name="agree" className="mr-2" />
              <label className="text-[#263234] text-sm font-medium  ">
                I agree with Virtue Hope’s{" "}
                <span className="underline">terms & conditions.</span>{" "}
              </label>
            </div>
            <div className="flex justify-end gap-4 ">
              <button
                type="button"
                className="px-6 py-2 text-sm font-bold text-[#403730] "
                onClick={() => setFirstModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={openSecondModal}
                type="submit"
                className="px-6 bg-[#403730] text-white font-bold rounded cursor-pointer py-2 w-[92px] "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* second modal  */}

      {secondModal && (
        <div className="bg-white absolute top-[20%] z-50 left-[20%] w-[398px] lg:w-96 lg:p-6 p-2 rounded-lg shadow-lg ">
          {/* Modal Title */}
          <h2 className="lg:text-2xl text-xl font-semibold leading-8 text-[#263234]">
            Choose a payment getway
          </h2>
          <div className="flex items-center mb-6 mt-4 ">
            <div>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_179849_6497"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_179849_6497)">
                    <path
                      d="M10.95 15.55L16.6 9.9L15.175 8.475L10.95 12.7L8.85 10.6L7.425 12.025L10.95 15.55ZM12 22C9.68333 21.4167 7.77083 20.0875 6.2625 18.0125C4.75417 15.9375 4 13.6333 4 11.1V5L12 2L20 5V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22Z"
                      fill="#658A30"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div>
              <h1 className=" text-[#263234] text-[16px] ">
                You won’t be charged until won the bid called.
              </h1>
            </div>
          </div>

          {/* Donation Options */}
          <form action="">
            <div className="lg:mt-4 mt-2 ">
              <div className="flex flex-col  gap-4">
                {/* card */}

                <label className="flex items-center justify-between w-full lg:p-4 p-3 border border-[#A6ABAC]  rounded-lg cursor-pointer">
                  {/* payple */}
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="donation"
                      value="card"
                      className="py-4 border "
                    />
                    <span className="text-[#263234] font-medium ">Card</span>
                  </div>

                  {/* svg list */}

                  <div className="flex gap-2">
                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_180032_1496)">
                        <path
                          d="M21.75 0.25H2.25C1.14543 0.25 0.25 1.14543 0.25 2.25V13.75C0.25 14.8546 1.14543 15.75 2.25 15.75H21.75C22.8546 15.75 23.75 14.8546 23.75 13.75V2.25C23.75 1.14543 22.8546 0.25 21.75 0.25Z"
                          fill="white"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="0.5"
                        />
                        <path
                          d="M2.78773 5.91444C2.26459 5.62751 1.66754 5.39674 1 5.23659L1.028 5.11188H3.76498C4.13596 5.12489 4.43699 5.23651 4.53495 5.63071L5.12977 8.46659L5.31198 9.32073L6.97797 5.11188H8.77679L6.10288 11.2775H4.30397L2.78773 5.91444ZM10.1 11.2841H8.39883L9.46285 5.11188H11.1639L10.1 11.2841ZM16.2668 5.26277L16.0354 6.59559L15.8816 6.53004C15.5737 6.40525 15.1674 6.28054 14.6144 6.29371C13.9427 6.29371 13.6415 6.56277 13.6345 6.82546C13.6345 7.11441 13.9989 7.30484 14.5939 7.58725C15.574 8.02719 16.0286 8.56557 16.0218 9.26819C16.0081 10.5486 14.846 11.3761 13.0611 11.3761C12.2979 11.3694 11.5628 11.2181 11.1638 11.0476L11.4019 9.66205L11.6259 9.76066C12.1789 9.99071 12.5428 10.089 13.222 10.089C13.7118 10.089 14.2369 9.89838 14.2436 9.48488C14.2436 9.21565 14.0199 9.01851 13.3617 8.71646C12.7178 8.42087 11.8568 7.92848 11.8708 7.04198C11.8781 5.84042 13.0611 5 14.741 5C15.399 5 15.9312 5.13789 16.2668 5.26277ZM18.5278 9.09749H19.9417C19.8718 8.78889 19.5496 7.31147 19.5496 7.31147L19.4307 6.77964C19.3467 7.00943 19.1999 7.38373 19.2069 7.37056C19.2069 7.37056 18.6678 8.7429 18.5278 9.09749ZM20.6276 5.11188L22 11.284H20.4249C20.4249 11.284 20.2708 10.5748 20.2219 10.3581H18.0378C17.9746 10.5222 17.6808 11.284 17.6808 11.284H15.8958L18.4226 5.62399C18.5977 5.22342 18.906 5.11188 19.3118 5.11188H20.6276Z"
                          fill="#171E6C"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180032_1496">
                          <rect width="24" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_180032_1504)">
                        <path
                          d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z"
                          fill="#252525"
                        />
                        <path
                          d="M9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z"
                          fill="#F79E1B"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 3.99963C13.2144 4.91184 14 6.36418 14 8C14 9.63582 13.2144 11.0882 12 12.0004C10.7856 11.0882 10 9.63582 10 8C10 6.36418 10.7856 4.91184 12 3.99963Z"
                          fill="#FF5F00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180032_1504">
                          <rect width="24" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_180032_1510)">
                        <path
                          d="M22 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H22C23.1046 16 24 15.1046 24 14V2C24 0.89543 23.1046 0 22 0Z"
                          fill="#016FD0"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.7642 13.3939V7.69247L23.9117 7.70158V9.27647L22.7388 10.5299L23.9117 11.7948V13.4031H22.0391L21.0439 12.3049L20.0558 13.4072L13.7642 13.3939Z"
                          fill="#FFFFFE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.4419 12.7688V8.31992H18.2142V9.3448H15.6633V10.0405H18.1534V11.0483H15.6633V11.7316H18.2142V12.7688H14.4419Z"
                          fill="#016FD0"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.1954 12.7688L20.2827 10.5418L18.1953 8.32001H19.811L21.0865 9.73004L22.3656 8.32001H23.9117V8.35501L21.8689 10.5418L23.9117 12.7057V12.7688H22.35L21.0519 11.3446L19.7671 12.7688H18.1954Z"
                          fill="#016FD0"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.2374 2.63196H16.6834L17.5426 4.58281V2.63196H20.5624L21.0832 4.09353L21.6057 2.63196H23.9116V8.33335H11.7251L14.2374 2.63196Z"
                          fill="#FFFFFE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.7006 3.25134L12.7266 7.69651H14.0805L14.4529 6.80635H16.4708L16.843 7.69651H18.2306L16.2648 3.25134H14.7006ZM14.8702 5.80878L15.4622 4.39371L16.0538 5.80878H14.8702Z"
                          fill="#016FD0"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.2119 7.69572V3.25064L20.115 3.25718L21.0943 5.98991L22.0799 3.25064H23.9115V7.69572L22.7329 7.70615V4.65281L21.6204 7.69572H20.5446L19.4089 4.64238V7.69572H18.2119Z"
                          fill="#016FD0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180032_1510">
                          <rect width="24" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_180032_1520)">
                        <path
                          d="M21.9972 15.7499L21.9994 15.7499C22.9545 15.7581 23.7381 14.9773 23.75 14.0042L23.75 2.0063C23.7462 1.53569 23.5589 1.08617 23.2297 0.756802C22.9014 0.428269 22.4589 0.246149 21.9972 0.250071L2.00064 0.250062C1.54109 0.246149 1.09858 0.428269 0.770279 0.756802C0.441145 1.08617 0.253838 1.53569 0.250008 2.00426L0.25 13.9937C0.253838 14.4643 0.441145 14.9138 0.770279 15.2432C1.09858 15.5717 1.54109 15.7538 2.00277 15.7499H21.9972ZM21.9962 16.2499C21.9958 16.2499 21.9955 16.2499 21.9951 16.2499L21.9972 16.2499H21.9962Z"
                          fill="white"
                          stroke="black"
                          stroke-opacity="0.2"
                          stroke-width="0.5"
                        />
                        <path
                          d="M12.6123 15.9999H21.9971C22.5239 16.0043 23.0309 15.7993 23.4065 15.4299C23.7821 15.0605 23.9955 14.5571 23.9999 14.0303V11.6717C20.4561 13.706 16.6127 15.1668 12.6123 15.9999Z"
                          fill="#F27712"
                        />
                        <path
                          d="M23.1725 9.29649H22.32L21.3601 8.03029H21.269V9.29649H20.5738V6.15167H21.6C22.4028 6.15167 22.8663 6.4827 22.8663 7.07856C22.8663 7.56684 22.5766 7.88132 22.0552 7.98063L23.1725 9.29649ZM22.1463 7.10339C22.1463 6.79718 21.9145 6.63994 21.4842 6.63994H21.269V7.59167H21.4676C21.9145 7.59167 22.1463 7.42615 22.1463 7.10339ZM18.1407 6.15167H20.1104V6.68132H18.8359V7.38477H20.0607V7.9227H18.8359V8.77512H20.1104V9.30477H18.1407V6.15167ZM15.9063 9.37925L14.4001 6.14339H15.1614L16.1132 8.26201L17.0732 6.14339H17.818L16.2952 9.37925H15.9228H15.9063ZM9.60833 9.37098C8.54902 9.37098 7.72143 8.65098 7.72143 7.71581C7.72143 6.80546 8.56557 6.06891 9.62488 6.06891C9.92281 6.06891 10.1711 6.12684 10.4773 6.25925V6.98753C10.2454 6.75971 9.9334 6.63194 9.60833 6.63167C8.94626 6.63167 8.44143 7.11167 8.44143 7.71581C8.44143 8.35305 8.93798 8.80822 9.64143 8.80822C9.95591 8.80822 10.1959 8.70891 10.4773 8.46063V9.18891C10.1628 9.32132 9.89798 9.37098 9.60833 9.37098ZM7.50626 8.33649C7.50626 8.94891 7.00143 9.37098 6.27315 9.37098C5.7435 9.37098 5.36281 9.18891 5.04005 8.77512L5.49522 8.38615C5.65246 8.66753 5.91729 8.80822 6.24833 8.80822C6.56281 8.80822 6.78626 8.61787 6.78626 8.3696C6.78626 8.22891 6.72005 8.12132 6.57936 8.03856C6.4251 7.96371 6.26446 7.90277 6.09936 7.85649C5.44557 7.6496 5.22212 7.42615 5.22212 6.98753C5.22212 6.47443 5.70212 6.08546 6.33109 6.08546C6.72833 6.08546 7.08419 6.2096 7.38212 6.44132L7.01798 6.85512C6.87366 6.6969 6.66938 6.60677 6.45522 6.60684C6.15729 6.60684 5.94212 6.75581 5.94212 6.95443C5.94212 7.11994 6.06626 7.21098 6.48005 7.35167C7.27453 7.59994 7.50626 7.83167 7.50626 8.34477V8.33649ZM4.08833 6.15167H4.7835V9.30477H4.08833V6.15167ZM1.85384 9.30477H0.827637V6.15167H1.85384C2.97936 6.15167 3.75729 6.79718 3.75729 7.72408C3.75729 8.19581 3.52557 8.6427 3.12005 8.94063C2.77246 9.18891 2.3835 9.30477 1.84557 9.30477H1.85384ZM2.66488 6.93787C2.43315 6.75581 2.16833 6.6896 1.71315 6.6896H1.52281V8.77512H1.71315C2.16005 8.77512 2.44143 8.69236 2.66488 8.52684C2.90488 8.32822 3.04557 8.03029 3.04557 7.72408C3.04557 7.41787 2.90488 7.12822 2.66488 6.93787Z"
                          fill="black"
                        />
                        <path
                          d="M12.414 6.06891C11.5036 6.06891 10.7588 6.79718 10.7588 7.69925C10.7588 8.65925 11.4705 9.37925 12.414 9.37925C13.3409 9.37925 14.0691 8.65098 14.0691 7.72408C14.0691 6.79718 13.3491 6.06891 12.414 6.06891Z"
                          fill="#F27712"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180032_1520">
                          <rect width="24" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </label>

                {/* Pay with PayPal */}

                <label className="flex items-center justify-between lg:mt-2 mt-1 w-full lg:p-4 p-3 border border-[#A6ABAC] rounded-lg cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="donation" value="paypal" />
                    <span className=" text-[#263234] font-medium ">
                      Pay with PayPal
                    </span>
                  </div>

                  {/* svg 1 */}

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9861 6.90999C19.0396 4.12749 16.7436 1.99149 13.5866 1.99149H7.05757C6.90538 1.99153 6.7582 2.0459 6.64252 2.1448C6.52685 2.24371 6.45027 2.38065 6.42657 2.53099L3.81007 18.879C3.79837 18.9531 3.80285 19.0288 3.82323 19.101C3.8436 19.1731 3.87937 19.24 3.92808 19.2971C3.97678 19.3541 4.03727 19.3999 4.10537 19.4313C4.17348 19.4627 4.24758 19.479 4.32257 19.479H8.19107L7.58607 23.265C7.57436 23.3391 7.57886 23.4149 7.59926 23.4871C7.61966 23.5593 7.65548 23.6262 7.70424 23.6833C7.753 23.7403 7.81355 23.7861 7.88172 23.8174C7.94988 23.8488 8.02403 23.865 8.09907 23.865H11.2501C11.4026 23.865 11.5381 23.81 11.6536 23.7115C11.7691 23.6125 11.7881 23.476 11.8116 23.3255L12.7366 17.883C12.7601 17.733 12.8366 17.538 12.9526 17.439C13.0681 17.34 13.1691 17.286 13.3211 17.2855H15.2501C18.3416 17.2855 20.9651 15.0885 21.4446 12.032C21.7836 9.86199 20.8531 7.88849 18.9861 6.90999Z"
                      fill="#001C64"
                    />
                    <path
                      d="M9.02798 13.45L8.06448 19.56L7.45948 23.392C7.44777 23.4661 7.45227 23.5419 7.47267 23.6141C7.49308 23.6863 7.52889 23.7532 7.57765 23.8103C7.62642 23.8673 7.68697 23.9131 7.75513 23.9445C7.82329 23.9758 7.89745 23.9921 7.97248 23.992H11.3075C11.4596 23.9918 11.6066 23.9374 11.7222 23.8385C11.8378 23.7396 11.9143 23.6028 11.938 23.4525L12.817 17.8825C12.8407 17.7323 12.9172 17.5955 13.0328 17.4967C13.1484 17.3979 13.2954 17.3436 13.4475 17.3435H15.411C18.5025 17.3435 21.1255 15.0885 21.605 12.032C21.945 9.8625 20.853 7.889 18.986 6.91C18.981 7.141 18.961 7.3715 18.9255 7.6C18.446 10.656 15.8225 12.9115 12.731 12.9115H9.65848C9.5065 12.9115 9.3595 12.9658 9.24393 13.0645C9.12836 13.1632 9.05179 13.2999 9.02798 13.45Z"
                      fill="#0070E0"
                    />
                    <path
                      d="M8.06398 19.56H4.18398C4.10896 19.5601 4.03482 19.5438 3.96668 19.5125C3.89853 19.4811 3.83801 19.4353 3.78929 19.3782C3.74056 19.3212 3.70479 19.2543 3.68446 19.1821C3.66412 19.1098 3.65969 19.0341 3.67148 18.96L6.28748 2.36899C6.31119 2.2187 6.38779 2.08182 6.50348 1.983C6.61917 1.88418 6.76634 1.82992 6.91848 1.82999H13.587C16.7435 1.82999 19.0395 4.12749 18.986 6.90999C18.2005 6.49799 17.2775 6.26249 16.266 6.26249H10.7065C10.5545 6.26264 10.4075 6.31699 10.2919 6.41578C10.1763 6.51457 10.0998 6.65133 10.076 6.80149L9.02848 13.45L8.06398 19.56Z"
                      fill="#003087"
                    />
                  </svg>
                </label>

                {/* Pay with Stripe */}

                <label className="flex items-center justify-between w-full p-3 lg:p-4 border border-[#A6ABAC]  rounded-lg cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input type="radio" name="donation" value="stripe" />
                    <span className="text-[#263234] font-medium ">
                      Pay with Stripe
                    </span>
                  </div>

                  {/* svg */}

                  <img src="stripe_icon.jpeg.png" alt="" />
                </label>
              </div>
            </div>
          </form>

          {/* Modal Buttons */}
          <div className="flex justify-end mt-5 gap-6 mb-2 lg:mt-6">
            <button
              onClick={backFirstModal}
              className=" px-6 text-[#403730]  font-bold rounded cursor-pointer py-2 "
            >
              Back
            </button>
            <button
              // onClick={handleProceed}
              className="px-6 bg-[#403730] text-white font-bold rounded cursor-pointer py-2   "
            >
              Save my card
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondSection;
