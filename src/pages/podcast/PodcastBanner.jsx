import React from "react";

const PodcastBanner = () => {
  const episodes = Array(7).fill({
    title: "Season 2 Episode 6 – The London",
    duration: "3:15:09 sec",
    date: "21 February, 2025",
    image: "/videoImg3.jpg",
  });

  return (
    <div className="pt-20">
      <div className="relative bg-[url('/podcastBg.png')] bg-cover bg-center">
      <div className=" text-white pt-9 pb-6  text-center">
          <h1 className="text-4xl lg:text-5xl text-[#7c8067] font-bold">
          EmpowerINFINITY Podcast:
            <span className="text-[#7c8067] lg:text-6xl text-3xl ">
              {" "}
              Healing,
            </span>{" "}
            <br />
            <span className="text-[#7c8067] lg:text-6xl text-3xl ">
              {" "}
              Help &{" "}
            </span>
            <span className="text-[#7c8067] lg:text-6xl text-3xl ">
              {" "}
              Growth
            </span>
          </h1>
          <p className="mt-6 text-lg lg:text-2xl text-[#ECEBEA] ">
            Real Stories • Real Strength • Real Change
          </p>
        </div>

        {/* Podcast Player Card */}
        <div className="max-w-2xl mx-auto p-6 lg:p-10 border border-[#2c3333] shadow-md bg-[#1B2324]">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Podcast Image */}
            <div className="flex-shrink-0">
              <img
                src="videoImg2.jpg"
                className="w-40 h-40 rounded-lg"
                alt="Podcast"
              />
            </div>

            {/* Podcast Details */}
            <div className="w-full">
              <p className="text-[#A6ABAC] text-xs font-semibold">
                21 February, 2025
              </p>
              <h1 className="text-xl lg:text-2xl text-[#E9EBEB] mt-2">
                Season 2 Episode 6 - The London
              </h1>

              {/* Duration */}
              <div className="flex justify-between text-xs text-[#A6ABAC] mt-2">
                <p>17:14s</p>
                <p>32:24s left</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#263234] h-3 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-gray-500 w-1/2"></div>
              </div>

              {/* Media Controls */}
              <div className="flex items-center gap-4 mt-4">
                <button className="w-8 h-8 text-[#A6ABAC]">
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
                      d="M11.4394 4.10169C11.0963 3.93389 10.6875 3.97617 10.3861 4.21066L1.38606 11.2107C1.14247 11.4001 1 11.6914 1 12C1 12.3086 1.14247 12.5999 1.38606 12.7894L10.3861 19.7894C10.6875 20.0238 11.0963 20.0661 11.4394 19.8983C11.7824 19.7305 12 19.3819 12 19V5.00001C12 4.61807 11.7824 4.2695 11.4394 4.10169ZM10 7.04465V16.9554L3.62882 12L10 7.04465Z"
                      fill="#A6ABAC"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.4394 4.10169C22.0963 3.93389 21.6875 3.97617 21.3861 4.21066L12.3861 11.2107C12.1425 11.4001 12 11.6914 12 12C12 12.3086 12.1425 12.5999 12.3861 12.7894L21.3861 19.7894C21.6875 20.0238 22.0963 20.0661 22.4394 19.8983C22.7824 19.7305 23 19.3819 23 19V5.00001C23 4.61807 22.7824 4.2695 22.4394 4.10169ZM21 7.04465V16.9554L14.6288 12L21 7.04465Z"
                      fill="#A6ABAC"
                    />
                  </svg>
                </button>
                <button className="w-12 h-12 bg-[#263234] rounded-full text-white flex items-center justify-center">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="22" fill="#263234" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.5208 12.1223C16.8419 11.947 17.233 11.961 17.5408 12.1588L31.5408 21.1588C31.827 21.3428 32 21.6597 32 22C32 22.3403 31.827 22.6572 31.5408 22.8412L17.5408 31.8412C17.233 32.039 16.8419 32.053 16.5208 31.8777C16.1997 31.7024 16 31.3658 16 31V13C16 12.6342 16.1997 12.2976 16.5208 12.1223ZM18 14.8317V29.1683L29.1507 22L18 14.8317Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 text-[#A6ABAC]">
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
                      d="M12.5606 4.10169C12.9037 3.93389 13.3125 3.97617 13.6139 4.21066L22.6139 11.2107C22.8575 11.4001 23 11.6914 23 12C23 12.3086 22.8575 12.5999 22.6139 12.7894L13.6139 19.7894C13.3125 20.0238 12.9037 20.0661 12.5606 19.8983C12.2176 19.7305 12 19.3819 12 19V5.00001C12 4.61807 12.2176 4.2695 12.5606 4.10169ZM14 7.04465V16.9554L20.3712 12L14 7.04465Z"
                      fill="#A6ABAC"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.56065 4.10169C1.90375 3.93389 2.31246 3.97617 2.61394 4.21066L11.6139 11.2107C11.8575 11.4001 12 11.6914 12 12C12 12.3086 11.8575 12.5999 11.6139 12.7894L2.61394 19.7894C2.31246 20.0238 1.90375 20.0661 1.56065 19.8983C1.21755 19.7305 1 19.3819 1 19V5.00001C1 4.61807 1.21755 4.2695 1.56065 4.10169ZM3 7.04465V16.9554L9.37118 12L3 7.04465Z"
                      fill="#A6ABAC"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Episode List */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="bg-[#1E2A30] p-4 lg:p-6 h-60 lg:h-[40vh] overflow-y-auto custom-scrollbar">
            {episodes.map((episode, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-700"
              >
                {/* Episode Details */}
                <div className="flex gap-4">
                  <img
                    src={episode.image}
                    className="w-12 h-12 rounded"
                    alt="Episode"
                  />
                  <div>
                    <h2 className="text-[#E9EBEB] font-semibold text-sm">
                      {episode.title}
                    </h2>
                    <p className="text-[#A6ABAC] text-xs mt-1">
                      {episode.duration}
                    </p>
                  </div>
                </div>
                {/* Date */}
                <p className="text-[#A6ABAC] text-xs">{episode.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastBanner;
