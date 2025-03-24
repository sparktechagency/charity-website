import { useState } from "react";

const faqData = [
  {
    question: "How can I contribute items to the auction?",
    answer:
      "You can contribute items by contacting our donation coordinator via email or phone. Please provide details about the item, including its condition and estimated value. We will arrange for pickup or drop-off based on your location.",
  },
  {
    question: "Who is eligible for retreat services?",
    answer:
      "Eligibility for retreat services depends on specific criteria. Contact us for more details.",
  },
  {
    question: "How are the funds from the auction used?",
    answer:
      "The funds raised from the auction are used for various community programs and support services.",
  },
  {
    question: "Can I volunteer for the auction event?",
    answer:
      "Yes! We welcome volunteers. Please reach out to us for available opportunities.",
  },
  {
    question: "What types of items are accepted for the auction?",
    answer:
      "We accept a variety of items including artwork, collectibles, and experiences. Contact us for more details.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // First accordion open by default

  return (
    <div className="p-4">
      <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-black via-gray-400 to-gray-700 pb-8 ">
        FAQs
      </h1>

      <div className="max-w-[1174px] mx-auto flex flex-col lg:flex-row gap-4 justify-between ">
        {/* FAQ Section */}
        <div className=" lg:min-w-[751px] min-h-[516px] h-auto  mx-auto ">
          <div className="space-y-4  ">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffff] border border-[#A6ABAC] shadow  rounded"
              >
                <button
                  className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center "
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <p className=" px-2 text-[#263234] text-xl font-semibold mt-6 ">
                    {item.question}
                  </p>
                  <span className=" cursor-pointer " >
                    {openIndex === index ? (
                      <>
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
                            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                            fill="#4B5557"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
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
                            d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
                            fill="#4B5557"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                            fill="#4B5557"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pt-3 pb-3   text-[#4B5557] ">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Information Box */}
        <div className="lg:min-w-[407px] w-full lg:h-[547px] h-auto bg-white lg:p-[64px] p-4 rounded">
          <div className="flex justify-center">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_179666_4037)">
                <path
                  d="M0.5 24L31.316 43.612C31.668 43.872 32.084 44 32.5 44C32.916 44 33.332 43.872 33.684 43.612L64.5 24L33.7 0.399979C33.3535 0.140949 32.9326 0.000976562 32.5 0.000976562C32.0674 0.000976562 31.6465 0.140949 31.3 0.399979L0.5 24Z"
                  fill="#64B5F6"
                />
                <path
                  d="M52.5 0H12.5C10.296 0 8.5 1.796 8.5 4V48C8.5 49.104 9.396 50 10.5 50H54.5C55.604 50 56.5 49.104 56.5 48V4C56.5 1.796 54.708 0 52.5 0Z"
                  fill="#ECEFF1"
                />
                <path
                  d="M18.5 12H46.5C47.604 12 48.5 11.104 48.5 10C48.5 8.896 47.604 8 46.5 8H18.5C17.396 8 16.5 8.896 16.5 10C16.5 11.104 17.396 12 18.5 12ZM46.5 16H18.5C17.396 16 16.5 16.896 16.5 18C16.5 19.104 17.396 20 18.5 20H46.5C47.604 20 48.5 19.104 48.5 18C48.5 16.896 47.604 16 46.5 16ZM34.5 24H18.5C17.396 24 16.5 24.896 16.5 26C16.5 27.104 17.396 28 18.5 28H34.5C35.604 28 36.5 27.104 36.5 26C36.5 24.896 35.604 24 34.5 24Z"
                  fill="#90A4AE"
                />
                <path
                  d="M33.684 43.612C33.332 43.872 32.916 44 32.5 44C32.084 44 31.668 43.872 31.316 43.612L0.5 24V60C0.5 62.208 2.292 64 4.5 64H60.5C62.708 64 64.5 62.208 64.5 60V24L33.684 43.612Z"
                  fill="#1E88E5"
                />
                <path
                  d="M60.5 64H4.5C2.256 64 0.5 62.244 0.5 60C0.500179 59.6862 0.574122 59.3768 0.715865 59.0967C0.857607 58.8167 1.06318 58.574 1.316 58.388L31.316 38.388C31.668 38.128 32.084 38 32.5 38C32.916 38 33.332 38.128 33.684 38.388L63.684 58.388C63.9368 58.574 64.1424 58.8167 64.2841 59.0967C64.4259 59.3768 64.4998 59.6862 64.5 60C64.5 62.244 62.744 64 60.5 64Z"
                  fill="#2196F3"
                />
              </g>
              <defs>
                <clipPath id="clip0_179666_4037">
                  <rect
                    width="64"
                    height="64"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className="lg:mt-8 mt-5 font-semibold lg:text-2xl text-xl  text-center">
            Need More Information?
          </h1>
          <p className="text-center lg:mt-4 mt-2 text-[#4B5557] ">
            Our platform simplifies payments and financial management for
            charities and fundraising. Let us help you make a bigger impact.
          </p>
          <div className=" lg:mt-20 mt-5  " >
            <button className="block mx-auto bg-[#403730] px-6 text-white py-3 text-sm font-bold rounded cursor-pointer " >Hit a mail us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
