import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import logo from "../../assets/image/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="max-w-6xl mx-auto py-3 my-1.5 flex items-center justify-between px-4 md:px-0">
      {/* Logo */}
      <Link className="flex items-center gap-4" to="/">
        <img src={logo} alt="Virtue Hope Logo" className="h-10" />
        <h1 className="text-2xl font-semibold text-[#263234]">Virtue Hope</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-x-6 mt-1.5">
          {[
            "about",
            "service",
            "involved",
            "auction",
            "contact",
            "podcast",
          ].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#263234] font-bold px-6 py-2 bg-[#dee1e6] rounded-md text-sm"
                    : "text-[#263234] text-sm"
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Support Button (Desktop Only) */}
      <button className="hidden md:block bg-[#403730] px-4 py-2.5 text-white rounded-md font-medium text-sm">
        Support Survivors
      </button>

      {/* Mobile Menu Button */}
      <button onClick={toggleDrawer} className="md:hidden">
        <MenuOutlined className="text-2xl text-[#263234]" />
      </button>

      {/* Ant Design Drawer */}
      <Drawer
        placement="right"
        onClose={toggleDrawer}
        open={open}
        width={260}
        className="p-4"
      >
        <ul className="flex flex-col gap-5">
          {[
            "about",
            "service",
            "involved",
            "auction",
            "contact",
            "podcast",
          ].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#263234] font-bold px-4 py-2 bg-[#dee1e6] rounded-md text-sm block"
                    : "text-[#263234] text-sm block"
                }
                onClick={toggleDrawer} // Close drawer on link click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
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
  );
};

export default Navbar;
