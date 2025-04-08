import React, { useState } from "react";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Tooltip } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "",
      icon: <UserOutlined />,
      label: "Dashboard",
    },
    {
      key: "contributors",
      icon: <UserOutlined />,
      label: "Contributors",
    },
    {
      key: "volunteers",
      icon: <VideoCameraOutlined />,
      label: "Volunteers",
    },
    {
      key: "auction",
      icon: <UploadOutlined />,
      label: "Auction",
    },
    {
      key: "donation-transaction",
      icon: <UploadOutlined />,
      label: "Donation transaction",
    },
    {
      key: "podcast-stories",
      icon: <UploadOutlined />,
      label: "Podcast & stories",
    },
    {
      key: "subscribers",
      icon: <UploadOutlined />,
      label: "Subscribers",
    },
    {
      key: "my-team",
      icon: <UploadOutlined />,
      label: "My team",
    },
    {
      key: "faq",
      icon: <UploadOutlined />,
      label: "FAQs",
    },
    {
      key: "settings",
      icon: <UploadOutlined />,
      label: "Settings",
    },
  ];

  // 📍 When menu item is clicked
  const handleMenuClick = ({ key }) => {
    navigate(`/admin/dashboard/${key}`);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      {/* dashboard header component */}
      <Header
        style={{
          background: colorBgContainer,
          backgroundColor: "#403730",
          color: "white",
          width: "100%",
          height: "65px",
          position: "fixed",
          padding: "0px 10px 0px 10px",
          margin: "0px",
        }}
      >
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleNavigate}
          >
            <img src="/dashboardPhoto/dashboardLogo.png" alt="website logo" />
            <h2>Virtue Hope</h2>
          </div>
          <div className="md:flex items-center justify-between gap-8 hidden">
            <div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_181009_782)">
                  <path
                    d="M13.2118 12.3535L9.15396 8.2957C9.78364 7.48164 10.1243 6.48633 10.1243 5.43945C10.1243 4.18633 9.6352 3.01133 8.75083 2.12539C7.86645 1.23945 6.68833 0.751953 5.43677 0.751953C4.1852 0.751953 3.00708 1.24102 2.1227 2.12539C1.23677 3.00977 0.749268 4.18633 0.749268 5.43945C0.749268 6.69102 1.23833 7.86914 2.1227 8.75352C3.00708 9.63945 4.18364 10.127 5.43677 10.127C6.48364 10.127 7.47739 9.78633 8.29146 9.1582L12.3493 13.2145C12.3612 13.2264 12.3753 13.2358 12.3908 13.2422C12.4064 13.2487 12.4231 13.252 12.4399 13.252C12.4567 13.252 12.4734 13.2487 12.4889 13.2422C12.5045 13.2358 12.5186 13.2264 12.5305 13.2145L13.2118 12.5348C13.2237 12.5229 13.2331 12.5087 13.2396 12.4932C13.246 12.4776 13.2493 12.461 13.2493 12.4441C13.2493 12.4273 13.246 12.4106 13.2396 12.3951C13.2331 12.3795 13.2237 12.3654 13.2118 12.3535ZM7.91177 7.91445C7.24927 8.57539 6.37114 8.93945 5.43677 8.93945C4.50239 8.93945 3.62427 8.57539 2.96177 7.91445C2.30083 7.25195 1.93677 6.37383 1.93677 5.43945C1.93677 4.50508 2.30083 3.62539 2.96177 2.96445C3.62427 2.30352 4.50239 1.93945 5.43677 1.93945C6.37114 1.93945 7.25083 2.30195 7.91177 2.96445C8.57271 3.62695 8.93677 4.50508 8.93677 5.43945C8.93677 6.37383 8.57271 7.25352 7.91177 7.91445Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_181009_782">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(-0.000976562)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* notification count compontnt */}
            <div className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4276 16.5692H16.999V10.4978C16.999 7.97813 15.1365 5.89598 12.7133 5.54955V4.85491C12.7133 4.46027 12.3937 4.14062 11.999 4.14062C11.6044 4.14062 11.2847 4.46027 11.2847 4.85491V5.54955C8.86152 5.89598 6.99902 7.97813 6.99902 10.4978V16.5692H6.57045C6.25438 16.5692 5.99902 16.8246 5.99902 17.1406V17.7121C5.99902 17.7906 6.06331 17.8549 6.14188 17.8549H9.99902C9.99902 18.9585 10.8955 19.8549 11.999 19.8549C13.1026 19.8549 13.999 18.9585 13.999 17.8549H17.8562C17.9347 17.8549 17.999 17.7906 17.999 17.7121V17.1406C17.999 16.8246 17.7437 16.5692 17.4276 16.5692ZM11.999 18.7121C11.5258 18.7121 11.1419 18.3281 11.1419 17.8549H12.8562C12.8562 18.3281 12.4722 18.7121 11.999 18.7121ZM8.28474 16.5692V10.4978C8.28474 9.50491 8.67045 8.57277 9.37224 7.87098C10.074 7.1692 11.0062 6.78348 11.999 6.78348C12.9919 6.78348 13.924 7.1692 14.6258 7.87098C15.3276 8.57277 15.7133 9.50491 15.7133 10.4978V16.5692H8.28474Z"
                  fill="white"
                />
              </svg>
              <p className="absolute -top-2 left-4 bg-red-500 w-8 h-6 rounded-full flex justify-center items-center text-xs">
                11
              </p>
            </div>
            <div>
              <img src="/dashboardPhoto/Setting.png" alt="website logo" />
            </div>
            <div>
              <h2>Serati Ma</h2>
            </div>
          </div>
        </div>
      </Header>

      <Layout style={{ paddingTop: "65px", minHeight: "100vh" }}>
        <Sider
          style={{ backgroundColor: "#263234" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="w-[354px] h-screen !fixed flex flex-col justify-between"
        >
          {/* sidebar parant div */}
          <div className="flex flex-col justify-between h-screen">
            <div>
              <Menu
                style={{ backgroundColor: "#263234" }}
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[""]}
                items={menuItems}
                onClick={handleMenuClick}
              />
            </div>
            {/* Bottom part: Logout */}

            <div className="px-4 py-4 mb-16">
              {collapsed ? (
                <Tooltip title="Log out" placement="right">
                  <button className="w-full text-[#DA453F] hover:text-white px-4 py-2 rounded hover:bg-[#1B2324] transition-all duration-200 flex items-center justify-start h-10">
                    <LogoutOutlined className="shrink-0" />
                    <p className="opacity-0 w-0 overflow-hidden transition-all duration-300">
                      Log out
                    </p>
                  </button>
                </Tooltip>
              ) : (
                <button className="w-full text-[#DA453F] hover:text-white px-4 py-2 rounded hover:bg-[#1B2324] transition-all duration-200 flex items-center justify-start h-10">
                  <LogoutOutlined className="shrink-0" />
                  <p className="opacity-100 pl-3 transition-all duration-300 whitespace-nowrap">
                    Log out
                  </p>
                </button>
              )}
            </div>
          </div>

          {/* Custom collapse button */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-14px",
              transform: "translateY(-200%)",
              zIndex: 10,
            }}
          >
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg
                width="14"
                height="66"
                viewBox="0 0 14 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L14 8V58L0 66V0Z" fill="#4B5557" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.32999 29.8701C8.51223 30.0523 8.51223 30.3478 8.32999 30.53L5.85997 33.0001L8.32999 35.4701C8.51223 35.6523 8.51223 35.9478 8.32999 36.13C8.14774 36.3123 7.85227 36.3123 7.67002 36.13L4.87002 33.33C4.68778 33.1478 4.68778 32.8523 4.87002 32.6701L7.67002 29.8701C7.85227 29.6878 8.14774 29.6878 8.32999 29.8701Z"
                  fill="#E9EBEB"
                />
              </svg>
            </button>
          </div>
        </Sider>

        <Layout
          style={{ margin: "0px 0px 0px 20px", backgroundColor: "#121818" }}
        >
          {/* content */}
          <Content
            style={{
              height: "auto",
              minHeight: "calc(100vh - 65px)",
              margin: "24px 16px",
              marginLeft: collapsed ? 80 : 200,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminDashboard;
