const Settings = () => {
  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Account settings
            </h2>
          </div>
        </div>

        {/* setting */}
        <div className="bg-[#263234] py-3 px-3 md:px-0 md:py-10 rounded-lg flex justify-center items-center">
          <div className="relative">
            <img
              src="/dashboardPhoto/myTeamPhoto/photo4.png"
              alt=""
              className="h-[200px] object-cover rounded-lg "
            />
            <span className="absolute bottom-0 right-0">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="2" fill="#263234" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7318 7.35982C12.9218 7.13182 13.2032 7 13.5 7H18.5C18.7968 7 19.0782 7.13182 19.2682 7.35982L21.4684 10H24C24.7957 10 25.5587 10.3161 26.1213 10.8787C26.6839 11.4413 27 12.2043 27 13V22C27 22.7957 26.6839 23.5587 26.1213 24.1213C25.5587 24.6839 24.7957 25 24 25H8C7.20435 25 6.44129 24.6839 5.87868 24.1213C5.31607 23.5587 5 22.7956 5 22V13C5 12.2044 5.31607 11.4413 5.87868 10.8787C6.44129 10.3161 7.20435 10 8 10H10.5316L12.7318 7.35982ZM13.9684 9L11.7682 11.6402C11.5782 11.8682 11.2968 12 11 12H8C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13V22C7 22.2652 7.10536 22.5196 7.29289 22.7071C7.48043 22.8946 7.73478 23 8 23H24C24.2652 23 24.5196 22.8946 24.7071 22.7071C24.8946 22.5196 25 22.2652 25 22V13C25 12.7348 24.8946 12.4804 24.7071 12.2929C24.5196 12.1054 24.2652 12 24 12H21C20.7032 12 20.4218 11.8682 20.2318 11.6402L18.0316 9H13.9684Z"
                  fill="#E9EBEB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15ZM12 17C12 14.7909 13.7909 13 16 13C18.2091 13 20 14.7909 20 17C20 19.2091 18.2091 21 16 21C13.7909 21 12 19.2091 12 17Z"
                  fill="#E9EBEB"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className=" max-w-2xl">
          <div className="  text-[#E9EBEB] px-4 sm:px-6 md:px-12 py-8 space-y-12">
            {/* Personal Information */}
            <div className="border-b border-gray-700 pb-12">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold">Personal information</h2>
                <h1 className="underline text-sm text-[#E9EBEB]  mt-2 sm:mt-0">
                  Edit personal information
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mt-6">
                <div>
                  <p className="text-sm text-[#E9EBEB]">First Name</p>
                  <p className="text-lg">Sarah</p>
                </div>
                <div>
                  <p className="text-sm text-[#E9EBEB]">Last Name</p>
                  <p className="text-lg">Khan</p>
                </div>
                <div>
                  <p className="text-sm text-[#E9EBEB]">Phone Number</p>
                  <p className="text-lg">+123 45875 97 5678</p>
                </div>
                <div>
                  <p className="text-sm text-[#E9EBEB]">E-mail</p>
                  <p className="text-lg break-all">marialpicio@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-10">
                <h1 className="text-[20px] font-semibold">Security</h1>
                <h2 className="underline cursor-pointer">Update Password</h2>
              </div>

              <div className="mt-4">
                <p className="text-[#E9EBEB] font-semibold text-xl mb-1 ">
                  Password
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="**********"
                    className="bg-transparent border-b border-gray-400 pt-3 w-full"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.33334 7.99935C2.96515 7.99935 2.66668 8.29783 2.66668 8.66602V13.3327C2.66668 13.7009 2.96515 13.9993 3.33334 13.9993H12.6667C13.0349 13.9993 13.3333 13.7009 13.3333 13.3327V8.66602C13.3333 8.29783 13.0349 7.99935 12.6667 7.99935H3.33334ZM1.33334 8.66602C1.33334 7.56145 2.22877 6.66602 3.33334 6.66602H12.6667C13.7712 6.66602 14.6667 7.56145 14.6667 8.66602V13.3327C14.6667 14.4373 13.7712 15.3327 12.6667 15.3327H3.33334C2.22877 15.3327 1.33334 14.4373 1.33334 13.3327V8.66602Z"
                        fill="#A6ABAC"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 1.99935C7.29276 1.99935 6.61448 2.2803 6.11438 2.7804C5.61428 3.28049 5.33333 3.95877 5.33333 4.66602V7.33268C5.33333 7.70087 5.03486 7.99935 4.66667 7.99935C4.29848 7.99935 4 7.70087 4 7.33268V4.66602C4 3.60515 4.42143 2.58773 5.17157 1.83759C5.92172 1.08744 6.93913 0.666016 8 0.666016C9.06087 0.666016 10.0783 1.08744 10.8284 1.83759C11.5786 2.58773 12 3.60515 12 4.66602V7.33268C12 7.70087 11.7015 7.99935 11.3333 7.99935C10.9651 7.99935 10.6667 7.70087 10.6667 7.33268V4.66602C10.6667 3.95877 10.3857 3.28049 9.88562 2.7804C9.38552 2.2803 8.70724 1.99935 8 1.99935Z"
                        fill="#A6ABAC"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
