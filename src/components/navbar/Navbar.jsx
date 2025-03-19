import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import logo from "../../assets/image/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  // Check scroll position and change navbar color dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", path: "about" },
    { name: "Service", path: "service" },
    { name: "Fundraising & Get Involved", path: "fundraising-get-involved" },
    { name: "Auction listing & salec", path: "auction" },
    { name: "Contact", path: "contact" },
    { name: "Podcast", path: "podcast" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F9F9F9] shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto py-3 flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <Link className="flex items-center gap-4" to="/">
          <img src={logo} alt="Virtue Hope Logo" className="h-10" />
          <h1
            className={`text-2xl font-semibold transition-colors ${
              isScrolled ? "text-[#263234]" : "text-[#263234]"
            }`}
          >
            Virtue Hope
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden z-50 lg:flex">
          <ul className="flex items-center gap-x-6 mt-1.5">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "font-bold px-6 py-3 bg-[#dee1e6] rounded-3xl"
                        : isScrolled
                        ? "text-[#263234]"
                        : "text-[#263234]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support Button (Desktop Only) */}
        <button
          className={`hidden lg:block px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-300 bg-[#403730] text-white`}
        >
          Support Survivors
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="lg:hidden">
          <MenuOutlined
            className={`text-2xl transition-colors ${
              isScrolled ? "text-[#263234]" : "text-white"
            }`}
          />
        </button>

        {/* Ant Design Drawer */}
        <Drawer
          placement="right"
          onClose={toggleDrawer}
          open={open}
          width={260}
          maskClosable={true}
          className="p-4"
        >
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `text-sm block pt-3 px-4 transition-colors ${
                      isActive
                        ? "font-bold bg-[#e6dede] rounded-md"
                        : "text-[#263234]"
                    }`
                  }
                  onClick={toggleDrawer} // Close drawer on link click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Support Button in Drawer */}
          <button className="mt-6 bg-[#403730] w-full py-3 text-white rounded-md font-medium text-sm">
            Support Survivors
          </button>
        </Drawer>
      </div>

      {/* modal */}
      
    </nav>
  );
};

export default Navbar;
