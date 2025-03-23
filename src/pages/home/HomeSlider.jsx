import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Radio, Card, Space } from "antd";
const HomeSlider = () => {
    const [selected, setSelected] = useState(null);
  const paymentOptions = [
    {
      value: "card",
      label: "Card",
      logo: [
        "VISA.png",
        "Mastercard.png",
        "AMEX.png",
        "Discover.png",
      ],
    },
    {
      value: "paypal",
      label: "Donate with PayPal",
      logo: ["https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"],
    },
    {
      value: "stripe",
      label: "Donate with Stripe",
      logo: [
        "stripe_icon.jpeg.png",
      ],
    },
  ];
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [thirdModalOpen, setThirdModalOpen] = useState(false);

  useEffect(() => {
    if (thirdModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [thirdModalOpen]);

  return (
    <div className="relative">
      {/* Slide 1 */}
      <div className="relative lg:w-[675px] lg:h-[648px] w-auto h-auto">
        <img
          src="/slider-img-1.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/80 to-transparent"></div>
        <div className="absolute left-0 pl-6 bottom-0">
          <p className="lg:text-5xl text-2xl text-white lg:pb-8 pb-2">
            Empower women to <br />
            <span className="font-bold">buy or list your</span> <br /> auctions
          </p>
          <div className="lg:pb-8 pb-4">
            <button
              onClick={() => setFirstModalOpen(true)}
              className="bg-[#F6F6F7] cursor-pointer text-[#172B4D] font-bold text-sm hover:bg-[#ecebea] transition-all duration-200 rounded px-6 py-2.5"
            >
              Contribute your Auction
            </button>
          </div>
        </div>
      </div>

      {/* First Modal */}
      <Modal
        title="Auction Contribution"
        centered
        open={firstModalOpen}
        closable={false} // Removes close (X) icon
        footer={
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setFirstModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setFirstModalOpen(false);
                setSecondModalOpen(true);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Proceed to Next Step
            </button>
          </div>
        }
        width={700}
      >
        <p>First modal contents...</p>
      </Modal>

      {/* Second Modal */}
      <Modal
        title="Next Step Confirmation"
        centered
        open={secondModalOpen}
        closable={false}
        footer={
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setSecondModalOpen(false);
                setFirstModalOpen(true);
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Go Back
            </button>
            <button
              onClick={() => {
                setSecondModalOpen(false);
                setThirdModalOpen(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        }
        width={700}
      >
        <p>Second modal contents...</p>
      </Modal>

      {/* Third Modal */}
      <Modal
        // title="Get paid"
        centered
        open={thirdModalOpen}
        closable={false}
        footer={
          <div className="flex justify-end gap-4">
            <button
              onClick={() => {
                setThirdModalOpen(false);
                setSecondModalOpen(true);
              }}
              className=" text-[#403730]text-sm font-bold px-4 py-2 rounded "
            >
              Go Back
            </button>
            <button
              
              className="bg-[#403730] text-white hover:bg-[#363533] transition-all duration-700 px-6 text-sm font-bold py-2 rounded "
            >
              Complete process
            </button>
          </div>
        }
        width={700}
      >
        <div className=" px-6 pt-6  ">
          <h1 className=" text-[#263234] text-2xl font-semibold leading-8 ">
            Get paid
          </h1>
          <div className="flex items-center gap-2 mt-4 ">
            <div>
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
                  d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                  fill="#F5851E"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#263234]">
                Once your auction is sold out, you will get paid and donation
                amount will be funded to the Virtue Hope.
              </p>
            </div>
          </div>
          <div>
            <p className=" text-[#263234] text-sm font-semibold mt-4 ">
              Step 3 of 3
            </p>
          </div>
          <div className="flex gap-3.5 mt-2.5 ">
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
          </div>
          <div className="mt-6">
            <div className="">
              <Radio.Group
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full   "

              >
                <Space direction="vertical" className="w-full">
                  {paymentOptions.map((option) => (
                    <Card
                      key={option.value}
                      className={`border ${
                        selected === option.value
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Radio value={option.value} className="text-lg">
                          {option.label}
                        </Radio>
                        <div className="flex gap-2">
                          {option.logo.map((logo, index) => (
                            <img
                              key={index}
                              src={logo}
                              alt={option.label}
                              className="h-6 w-auto"
                            />
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </Space>
              </Radio.Group>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default HomeSlider;
