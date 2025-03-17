import React from "react";

const FundraisingBanner = () => {
  return (
    <div className=" max-w-[1512px] mx-auto  ">
      <div className="relative w-full h-[90vh] -z-0  bg-[url('/funderingBannerImg.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white px-6 text-center">
          <p className="text-lg mb-2 uppercase tracking-wide">Way to help</p>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Support our mission by-
          </h1>

          {/* List */}
          <ul className="mt-6 space-y-3 text-lg lg:text-xl">
            <li className="flex items-center gap-3">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2071 5.29289C21.5976 5.68342 21.5976 6.31658 21.2071 6.70711L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929C4.18342 10.9024 4.81658 10.9024 5.20711 11.2929L9.5 15.5858L19.7929 5.29289C20.1834 4.90237 20.8166 4.90237 21.2071 5.29289Z"
                  fill="white"
                />
              </svg>
              Participating in art auctions
            </li>
            <li className="flex items-center gap-3">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2071 5.29289C21.5976 5.68342 21.5976 6.31658 21.2071 6.70711L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929C4.18342 10.9024 4.81658 10.9024 5.20711 11.2929L9.5 15.5858L19.7929 5.29289C20.1834 4.90237 20.8166 4.90237 21.2071 5.29289Z"
                  fill="white"
                />
              </svg>
              Donating antiques
            </li>
            <li className="flex items-center gap-3">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.2071 5.29289C21.5976 5.68342 21.5976 6.31658 21.2071 6.70711L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071L3.79289 12.7071C3.40237 12.3166 3.40237 11.6834 3.79289 11.2929C4.18342 10.9024 4.81658 10.9024 5.20711 11.2929L9.5 15.5858L19.7929 5.29289C20.1834 4.90237 20.8166 4.90237 21.2071 5.29289Z"
                  fill="white"
                />
              </svg>
              Contributing directly to help us build the retreat
            </li>
            <li className="flex items-center gap-3"> Expand our programs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FundraisingBanner;
