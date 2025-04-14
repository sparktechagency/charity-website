import { useDispatch, useSelector } from "react-redux";
import {
  closeSettingModalOpenOne,
  settingModalOpenOne,
} from "../../../../features/modal/modalSlice";
import { Modal } from "antd";

const Settings = () => {
  const dispatch = useDispatch();
  const settingModalOne = useSelector((state) => state.modal.settingModalOne);

  // ==== setting modal one start =======
  const showSettingModalOne = () => {
    dispatch(settingModalOpenOne());
  };
  const settingModalOkOne = () => {
    dispatch(closeSettingModalOpenOne());
  };
  const settingModalCancelOne = () => {
    dispatch(closeSettingModalOpenOne());
  };
  // ==== setting modal one end =========

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
                <h2
                  onClick={showSettingModalOne}
                  className="underline cursor-pointer"
                >
                  Update Password
                </h2>
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

      {/* setting modal components */}
      <div>
        {/* setting modal one */}
        <Modal
          centered
          className="custom-ai-modal"
          open={settingModalOne}
          onOk={settingModalOkOne}
          onCancel={settingModalCancelOne}
          width={900}
          footer={
            <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
              <button
                className="hover:bg-[#A6ABAC] px-6 rounded"
                onClick={settingModalCancelOne}
              >
                Cancel
              </button>
              <button
                className="bg-[#ffffff] py-2 px-4 rounded"
                onClick={settingModalCancelOne}
              >
                Update password
              </button>
            </div>
          }
        >
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

            <div className=" max-w-4xl">
              <div className="  text-[#E9EBEB] px-4 sm:px-6 md:px-12 py-8 space-y-12">
                {/* Personal Information */}
                <div className="border-b border-gray-700 pb-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-700 pb-4">
                    <h2 className="text-xl font-semibold">
                      Personal information
                    </h2>
                    <h1 className="underline text-sm text-[#E9EBEB]  mt-2 sm:mt-0">
                      Edit personal information
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mt-6">
                    <div>
                      <p className="text-sm text-[#E9EBEB]">First Name</p>
                      <p className="text-lg">Sarah</p>
                    </div>
                    <div className="text-start md:text-end">
                      <p className="text-sm text-[#E9EBEB]">Last Name</p>
                      <p className="text-lg">Khan</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#E9EBEB]">Phone Number</p>
                      <p className="text-lg">+123 45875 97 5678</p>
                    </div>
                    <div className="text-start md:text-end">
                      <p className="text-sm text-[#E9EBEB]">E-mail</p>
                      <p className="text-lg break-all">marialpicio@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-10">
                    <h1 className="text-[20px] font-semibold">Security</h1>{" "}
                  </div>

                  <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 mt-4">
                    <div>
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
                    <div>
                      <p className="text-[#E9EBEB] font-semibold text-xl mb-1 ">
                        New password
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
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_179933_23255)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.6354 4.00987C3.90082 3.80719 4.27526 3.83217 4.5114 4.06832L7.05545 6.61237C7.057 6.6139 7.05855 6.61545 7.06009 6.617L9.88269 9.4396C9.88426 9.44116 9.88583 9.44273 9.88739 9.4443L12.4314 11.9883C12.5674 12.1243 12.6381 12.3125 12.6252 12.5044C12.6123 12.6963 12.5171 12.8733 12.3641 12.9899C11.1114 13.9449 9.58591 14.4739 8.0109 14.4996L8 14.4997C5.40033 14.4997 3.40299 13.0154 2.09698 11.6223C1.43789 10.9193 0.93471 10.2188 0.596224 9.69474C0.426567 9.43204 0.297195 9.21196 0.209314 9.05573C0.165349 8.97757 0.131693 8.91525 0.108502 8.87143C0.0969045 8.84951 0.0879168 8.8322 0.0815587 8.81984L0.0739934 8.80503L0.0716927 8.80047L0.0709134 8.79892C0.0709134 8.79892 0.070382 8.79786 0.666667 8.49972L0.0703819 8.79786C-0.0264925 8.60411 -0.023193 8.37537 0.0792296 8.1845C0.953436 6.55534 2.16594 5.13196 3.6354 4.00987ZM1.42838 8.50183C1.5011 8.62742 1.59728 8.78712 1.71628 8.97137C2.02362 9.44726 2.47878 10.0801 3.06969 10.7104C4.26263 11.9829 5.93008 13.1643 7.99456 13.1664C9.02487 13.1486 10.0291 12.868 10.9143 12.3568L9.3665 10.809C9.26066 10.8754 9.15005 10.9344 9.03543 10.9854C8.70832 11.1312 8.35521 11.2095 7.99715 11.2159C7.6391 11.2222 7.28344 11.1563 6.95139 11.0222C6.61935 10.8881 6.31772 10.6884 6.06449 10.4352C5.81127 10.182 5.61165 9.88037 5.47753 9.54833C5.34341 9.21628 5.27754 8.86062 5.28386 8.50257C5.29018 8.14451 5.36855 7.7914 5.5143 7.46429C5.56537 7.34967 5.62435 7.23906 5.69069 7.13322L3.9914 5.43393C2.96687 6.30063 2.09956 7.33849 1.42838 8.50183ZM6.68526 8.12779C6.64248 8.25608 6.61938 8.39037 6.61698 8.52609C6.61383 8.70511 6.64676 8.88294 6.71382 9.04897C6.78088 9.21499 6.88069 9.36581 7.0073 9.49242C7.13391 9.61903 7.28473 9.71884 7.45075 9.7859C7.61678 9.85296 7.7946 9.88589 7.97363 9.88273C8.10935 9.88034 8.24364 9.85724 8.37193 9.81446L6.68526 8.12779Z"
                                fill="#A6ABAC"
                              />
                              <path
                                d="M7.99848 3.83335C7.57886 3.83236 7.16056 3.88017 6.75199 3.9758C6.39349 4.05972 6.03484 3.83713 5.95092 3.47863C5.86701 3.12013 6.0896 2.76148 6.4481 2.67756C6.95705 2.55843 7.47811 2.49885 8.00081 2.50002C10.6001 2.50031 12.5972 3.98445 13.9031 5.37739C14.5622 6.08041 15.0653 6.78089 15.4038 7.305C15.5735 7.56769 15.7029 7.78778 15.7907 7.94401L15.9297 8.20187C16.0264 8.39529 16.0233 8.62359 15.9213 8.81429C15.4948 9.61229 14.9861 10.3636 14.4035 11.0559C14.1664 11.3376 13.7459 11.3738 13.4641 11.1368C13.1824 10.8997 13.1462 10.4792 13.3833 10.1975C13.8293 9.66737 14.2271 9.09879 14.572 8.49853C14.4993 8.37284 14.403 8.21292 14.2838 8.02837C13.9764 7.55247 13.5213 6.91962 12.9304 6.28931C11.7364 5.01572 10.067 3.83335 8.00004 3.83335L7.99848 3.83335Z"
                                fill="#A6ABAC"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.195262 0.695262C0.455612 0.434913 0.877722 0.434913 1.13807 0.695262L15.8047 15.3619C16.0651 15.6223 16.0651 16.0444 15.8047 16.3047C15.5444 16.5651 15.1223 16.5651 14.8619 16.3047L0.195262 1.63807C-0.0650874 1.37772 -0.0650874 0.955612 0.195262 0.695262Z"
                                fill="#A6ABAC"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_179933_23255">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-[#E9EBEB] font-semibold text-xl mb-1 ">
                        Confirm new password
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
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_179933_23255)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.6354 4.00987C3.90082 3.80719 4.27526 3.83217 4.5114 4.06832L7.05545 6.61237C7.057 6.6139 7.05855 6.61545 7.06009 6.617L9.88269 9.4396C9.88426 9.44116 9.88583 9.44273 9.88739 9.4443L12.4314 11.9883C12.5674 12.1243 12.6381 12.3125 12.6252 12.5044C12.6123 12.6963 12.5171 12.8733 12.3641 12.9899C11.1114 13.9449 9.58591 14.4739 8.0109 14.4996L8 14.4997C5.40033 14.4997 3.40299 13.0154 2.09698 11.6223C1.43789 10.9193 0.93471 10.2188 0.596224 9.69474C0.426567 9.43204 0.297195 9.21196 0.209314 9.05573C0.165349 8.97757 0.131693 8.91525 0.108502 8.87143C0.0969045 8.84951 0.0879168 8.8322 0.0815587 8.81984L0.0739934 8.80503L0.0716927 8.80047L0.0709134 8.79892C0.0709134 8.79892 0.070382 8.79786 0.666667 8.49972L0.0703819 8.79786C-0.0264925 8.60411 -0.023193 8.37537 0.0792296 8.1845C0.953436 6.55534 2.16594 5.13196 3.6354 4.00987ZM1.42838 8.50183C1.5011 8.62742 1.59728 8.78712 1.71628 8.97137C2.02362 9.44726 2.47878 10.0801 3.06969 10.7104C4.26263 11.9829 5.93008 13.1643 7.99456 13.1664C9.02487 13.1486 10.0291 12.868 10.9143 12.3568L9.3665 10.809C9.26066 10.8754 9.15005 10.9344 9.03543 10.9854C8.70832 11.1312 8.35521 11.2095 7.99715 11.2159C7.6391 11.2222 7.28344 11.1563 6.95139 11.0222C6.61935 10.8881 6.31772 10.6884 6.06449 10.4352C5.81127 10.182 5.61165 9.88037 5.47753 9.54833C5.34341 9.21628 5.27754 8.86062 5.28386 8.50257C5.29018 8.14451 5.36855 7.7914 5.5143 7.46429C5.56537 7.34967 5.62435 7.23906 5.69069 7.13322L3.9914 5.43393C2.96687 6.30063 2.09956 7.33849 1.42838 8.50183ZM6.68526 8.12779C6.64248 8.25608 6.61938 8.39037 6.61698 8.52609C6.61383 8.70511 6.64676 8.88294 6.71382 9.04897C6.78088 9.21499 6.88069 9.36581 7.0073 9.49242C7.13391 9.61903 7.28473 9.71884 7.45075 9.7859C7.61678 9.85296 7.7946 9.88589 7.97363 9.88273C8.10935 9.88034 8.24364 9.85724 8.37193 9.81446L6.68526 8.12779Z"
                                fill="#A6ABAC"
                              />
                              <path
                                d="M7.99848 3.83335C7.57886 3.83236 7.16056 3.88017 6.75199 3.9758C6.39349 4.05972 6.03484 3.83713 5.95092 3.47863C5.86701 3.12013 6.0896 2.76148 6.4481 2.67756C6.95705 2.55843 7.47811 2.49885 8.00081 2.50002C10.6001 2.50031 12.5972 3.98445 13.9031 5.37739C14.5622 6.08041 15.0653 6.78089 15.4038 7.305C15.5735 7.56769 15.7029 7.78778 15.7907 7.94401L15.9297 8.20187C16.0264 8.39529 16.0233 8.62359 15.9213 8.81429C15.4948 9.61229 14.9861 10.3636 14.4035 11.0559C14.1664 11.3376 13.7459 11.3738 13.4641 11.1368C13.1824 10.8997 13.1462 10.4792 13.3833 10.1975C13.8293 9.66737 14.2271 9.09879 14.572 8.49853C14.4993 8.37284 14.403 8.21292 14.2838 8.02837C13.9764 7.55247 13.5213 6.91962 12.9304 6.28931C11.7364 5.01572 10.067 3.83335 8.00004 3.83335L7.99848 3.83335Z"
                                fill="#A6ABAC"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.195262 0.695262C0.455612 0.434913 0.877722 0.434913 1.13807 0.695262L15.8047 15.3619C16.0651 15.6223 16.0651 16.0444 15.8047 16.3047C15.5444 16.5651 15.1223 16.5651 14.8619 16.3047L0.195262 1.63807C-0.0650874 1.37772 -0.0650874 0.955612 0.195262 0.695262Z"
                                fill="#A6ABAC"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_179933_23255">
                                <rect
                                  width="16"
                                  height="16"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Settings;
