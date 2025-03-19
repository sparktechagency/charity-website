import React from "react";
import logo from "../../assets/image/logo.svg";
import { Link } from "react-router-dom";
import { Menu, Input } from "antd";

const Footer = () => {
  const items = [
    {
      type: "group",
      children: [
        { key: "overview", label: <Link to="/overview">Overview</Link> },
        { key: "about", label: <Link to="/about">About us</Link> },
        { key: "mission", label: <Link to="/mission">Our mission</Link> },
        {
          key: "podcast",
          label: <Link to="/podcast">Podcast & success stories</Link>,
        },
        { key: "help", label: <Link to="/help">Way to help</Link> },
        { key: "contact", label: <Link to="/contact">Contact us</Link> },
      ],
    },
  ];

  const itemsTwo = [
    {
      type: "group",
      children: [
        { key: "services", label: <Link to="/services">Services</Link> },
        {
          key: "involved",
          label: <Link to="/involved">Fundraising & Get Involved</Link>,
        },
        { key: "sale", label: <Link to="/sale">Auction Listing & Sale</Link> },
        {
          key: "survivors",
          label: <Link to="/survivors">Support Survivors</Link>,
        },
      ],
    },
  ];

  return (
    <div className="bg-[#ECEBEA]  pt-8 lg:pt-16 lg:pb-12 pb-6  z-50   ">
      <div className="max-w-[1074px]   mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center lg:items-start">
          {/* Section 1 - Logo & Text */}
          <div className="text-center mt-4 lg:text-left">
            <Link
              className="flex items-center justify-center lg:justify-start gap-4"
              to="/"
            >
              <img src={logo} alt="Virtue Hope Logo" className="h-10" />
              <h1 className="text-2xl font-semibold text-[#263234]">
                Virtue Hope
              </h1>
            </Link>
            <p className="text-[#4B5557] mt-4">
              Empowering women through healing and hope.
            </p>
          </div>

          {/* Section 2 - Explore Menu */}
          <div className="w-full lg:w-auto   ">
            <span className="font-semibold text-[#263234] text-sm ml-8 pt-3 block ">
              Explore
            </span>
            <Menu
              mode="vertical"
              items={items}
              className="custom-menu  "
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            />
          </div>

          {/* Section 3 - Get Involved Menu */}
          <div className="w-full lg:w-auto">
            <span className="font-semibold text-[#263234] text-sm ml-8 pt-3 block ">
              Get Involved
            </span>
            <Menu
              mode="vertical"
              items={itemsTwo}
              className="custom-menu"
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            />
          </div>

          {/* Section 4 - Newsletter */}
          <div className="w-full lg:w-auto text-center mt-3 lg:text-left">
            <h1 className="text-[#263234] font-semibold text-sm">
              Stay Up to Date
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-4">
              <Input
                style={{
                  border: "1px solid #818889",
                  width: "100%",
                  maxWidth: "226px",
                  borderRadius: "0px",
                  backgroundColor: "#ECEBEA",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                placeholder="Enter your email address"
                size="large"
              />
              <button className="px-6 py-2 rounded text-sm font-bold text-white bg-[#403730]">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-3 mt-10 lg:mt-28">
              <span className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#A6ABAC"
                  />
                </svg>
              </span>
              <span className="">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9455 22L10.396 14.0901L3.44886 22H0.509766L9.09209 12.2311L0.509766 0H8.05571L13.286 7.45502L19.8393 0H22.7784L14.5943 9.31648L23.4914 22H15.9455ZM19.2185 19.77H17.2398L4.71811 2.23H6.6971L11.7121 9.25316L12.5793 10.4719L19.2185 19.77Z"
                    fill="#A6ABAC"
                  />
                </svg>
              </span>
              <span className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_179642_1592)">
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                      fill="#A6ABAC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_179642_1592">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_179642_1593)">
                    <path
                      d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                      fill="#A6ABAC"
                    />
                    <path
                      d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                      fill="#A6ABAC"
                    />
                    <path
                      d="M19.8469 5.59238C19.8469 6.38926 19.2 7.03145 18.4078 7.03145C17.6109 7.03145 16.9688 6.38457 16.9688 5.59238C16.9688 4.79551 17.6156 4.15332 18.4078 4.15332C19.2 4.15332 19.8469 4.8002 19.8469 5.59238Z"
                      fill="#A6ABAC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_179642_1593">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1074px] lg:mt-16 mt-4  mx-auto ">
        <div className=" flex flex-col items-center lg:flex-row lg:justify-between text-[#4B5557] font-thin " >
          <div>
            <p>© 2077 Virtue Hope. All rights reserved.</p>
          </div>
          <div>
            <nav>
              <ul className="flex gap-4 " >
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/cookies">Cookies</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
