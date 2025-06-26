import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Modal, Form, Dropdown, Menu, message } from "antd";
import logo from "../../assets/image/logo.svg";
import AggrementPage from "../../pages/aggrement/AggrementPage";
import PaymentModal from "../client/modal/payment/PaymentModal";
import ArtAntiqModal from "../client/modal/art-antique/ArtAntiqModal";
import SupportModal from "../client/modal/support-modal/SupportModal";
import LoginForm from "../client/login/LoginFrom";
import useAxiosPublic from "../../pages/hooks/useAxiosPublic";
import ProfileCard from "../client/profile-card/ProfileCard";
import { imgUrl } from "../../helper/imgUrl";
import { MdOutlineMenu } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  // api and token related function start
  const [profileData, setProfileData] = useState({});
  const [profileCard, setProfileCard] = useState(false);
  const axiosPublic = useAxiosPublic();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token; // 👈 true if token exists

  const config = {
    headers: {
      Authorization: `Bearer ${token}`, // Bearer added
    },
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("authId");
    window.location.reload();
    toast.success("Logout successfully");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axiosPublic.get(`/profile`, config);
        if (res.data.success) {
          setProfileData(res.data.data);
        }
      } catch (error) {
        // message.error(error.response.data.message);
      }
    };
    fetchData();
  }, []);


  // profile card modal 

  const openProfileCardModal = () => {
    setProfileCard(true)
  };
  const closeProfileCardModal = () => {
    setProfileCard(false)
  }

  // api and token related function start


  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // donate modal  terms & conditions. start

  const [termsModal, setTermsModal] = useState(false);

  const termModalCanel = () => {
    setTermsModal(false);
  };

  // donate modal  terms & conditions. end

  // Donate Art, Antique or Collectables modal  terms & conditions. start

  const [donateTerm, setDonateTerm] = useState(false);

  const donateModalCanel = () => {
    setDonateTerm(false);
  };



  // support modal useState
  const [supportModal, setSupportModal] = useState(false);
  // payment modal useState
  const [paymentModal, setPaymentModal] = useState(false);
  /* Donate Art, Antiques or Collectible useState   */
  const [antiquesModal, setAntiquesModal] = useState(false);

  // support modal start
  const openSupportModal = () => {
    setSupportModal(true);
    setOpen(false);
  };
  const closeSupportModal = () => {
    setSupportModal(false);
  };

  // support modal end

  const toggleDrawer = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", path: "about" },
    { name: "Service", path: "service" },
    { name: "Fundraising & Get Involved", path: "fundraising-get-involved" },
    { name: "Auction listing & sale", path: "auction" },
    { name: "Contact", path: "contact" },
    { name: "Podcast", path: "podcast" },
  ];

  // login madal start
  const [loginModal, setLoginModal] = useState(false);
  const [form] = Form.useForm();
  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    form.resetFields();
    setLoginModal(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      supportModal || paymentModal || antiquesModal || loginModal || profileCard
        ? "hidden"
        : "auto";
  }, [supportModal, paymentModal, antiquesModal, loginModal, profileCard]);






  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 400) {
        // Automatically close drawer on large screens
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Optionally trigger once on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const closeUserDetailsModal = () => {
    form.resetFields()
    setPaymentModal(false)
  }


  const drawerRef = useRef(null);











  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? "bg-[#F9F9F9] shadow" : "bg-transparent"
        }`}
    >
      <div className="max-w-[1480px]  px-4 lg:px-0  mx-auto py-3 flex items-center justify-between ">
        {/* Logo */}
        <Link className="flex items-center gap-4" to="/">
          <img src={logo} alt="Virtue Hope Logo" className="h-10" />
          <h1 className="text-2xl font-semibold text-[#263234]">Virtue Hope</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ fontFamily: 'Kind Sans', fontWeight: 400 }} className="hidden z-50 lg:flex">
          <ul className="flex items-center gap-x-6 mt-1.5">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `text-sm transition-colors ${isActive
                      ? "font-bold px-6 py-3 bg-[#dee1e6] rounded-3xl"
                      : "text-[#263234] text-lg hover:text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Login Button (Desktop Only) */}

        <div className="relative hidden lg:block">
          {isLoggedIn ? (
            <div className="flex items-center gap-x-3 ">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="profile">
                      <button
                        onClick={openProfileCardModal}
                        className="w-full text-left"
                      >
                        Profile
                      </button>
                    </Menu.Item>
                    <Menu.Item key="logout">
                      <button onClick={handleLogout} className="w-full text-left">
                        Logout
                      </button>
                    </Menu.Item>
                  </Menu>
                }
                trigger={["hover"]}
              >
                <div className="cursor-pointer">
                  <img
                    className="w-10 h-10 object-cover border border-green-900 rounded-full"
                    src={`${imgUrl}/${profileData?.image || "default-image/defaultImage.jpg"}`}
                    alt="Profile"
                  />
                </div>
              </Dropdown>
              <h1 className="text-sm font-medium font-kindsans text-black ml-1">
                {profileData?.full_name}
              </h1>
            </div>
          ) : (
            <button
              onClick={() => {
                // closeDrawer?.(); // safe call
                openLoginModal();
              }}
              className="px-4 py-2.5 text-sm font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90"
            >
              Login
            </button>
          )}
        </div>




        <button
          style={{ fontFamily: 'Kind Sans' }}
          onClick={openSupportModal}
          className="hidden lg:block px-4 py-2.5 text-sm cursor-pointer font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90"
        >
          Support Survivors
        </button>

        {/* Drawer Toggle Button */}
        <button
          className="lg:hidden fixed top-4 right-4 z-50 bg-[#403730] text-white px-4 py-2 rounded"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Drawer */}
        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setOpen(false)} className="text-xl">×</button>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-60px)]">
            {/* Nav Items */}
            <ul className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={`/${item.path}`}
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded transition ${isActive
                        ? "bg-[#403730] text-white font-semibold"
                        : "text-gray-800 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Profile or Login */}
            <div className="border-t pt-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-2    ">
                  <div className="relative group w-[50%]">
                    <img
                      className="w-10 h-10 rounded-full border border-green-800 cursor-pointer"
                      src={`${imgUrl}/${profileData.image}`}
                      alt="Profile"
                    />
                    {/* Hover Dropdown */}
                    <div className="absolute hidden group-hover:flex flex-col right-0 mt-2  bg-gray-200 w-full rounded shadow  z-50">
                      <button
                        onClick={() => {
                          openProfileCardModal();
                          setOpen(false);
                        }}
                        className="px-4 py-2 text-sm hover:bg-gray-100 text-left"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          handleLogout();
                          setOpen(false);
                        }}
                        className="px-4 py-2 text-sm hover:bg-gray-100 text-left"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                  <span className="text-sm font-medium -ml-16 text-black">
                    {profileData.full_name}
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setOpen(false);
                    openLoginModal();
                  }}
                  className="w-full py-2 bg-[#403730] text-white rounded text-sm font-medium py-1 hover:opacity-90"
                >
                  Login
                </button>
              )}
            </div>

            {/* Support Button */}
            <button
              onClick={() => {
                openSupportModal();
                setOpen(false);
              }}
              className="mt-6 bg-[#403730] w-full py-3 text-white rounded-md font-medium text-sm hover:opacity-90"
            >
              Support Survivors
            </button>
          </div>
        </div>
      </div>

      {/* support modal start  */}

      <Modal
        title={
          <span className=" text-2xl mb-4 text-[#263234] font-semibold leading-8 block ">
            Choose How to Support
          </span>
        }
        open={supportModal}
        footer={null}
        closable={true}
        onCancel={closeSupportModal}
        centered
        width="500px"
        style={{ top: "0px" }}
        closeIcon={<span className="text-black text-2xl">×</span>}
      >
        <SupportModal
          setPaymentModal={setPaymentModal}
          setSupportModal={setSupportModal}
          setAntiquesModal={setAntiquesModal}
        />
      </Modal>

      {/* support modal end  */}

      {/* Payment Modal start */}

      <Modal
        open={paymentModal}
        onCancel={closeUserDetailsModal}
        footer={null}
        closable={true}
        maskClosable={false}
        centered
        closeIcon={<span className="text-black text-2xl">×</span>}
      // width="50%"
      >
        <div style={{ padding: "15px" }}>
          <PaymentModal
            paymentModal={paymentModal}
            setPaymentModal={setPaymentModal}
            setSupportModal={setSupportModal}
          />
        </div>
      </Modal>

      {/* Payment Modal end */}

      {/* Donate Art, Antiques or Collectibles modal start */}

      <Modal
        open={antiquesModal}
        footer={null}
        closable={false}
        centered
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <ArtAntiqModal
          setSupportModal={setSupportModal}
          setAntiquesModal={setAntiquesModal}
          setPaymentModal={setPaymentModal}
          setDonateTerm={setDonateTerm}
        />
      </Modal>

      {/* Donate Art, Antiques or Collectibles modal end */}

      {/* donate modal terms conditions start   */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={termsModal}
          style={{ top: 0 }}
          onCancel={termModalCanel}
          zIndex={1100}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* donate modal terms conditions end   */}

      {/* Donate Art, Antique or Collectables  Terms & Conditions start */}
      <div className=" ">
        <Modal
          width={"70%"}
          open={donateTerm}
          style={{ top: 0 }}
          zIndex={1100}
          onCancel={donateModalCanel}
          // closeIcon={<span className="text-black text-2xl">×</span>}
          footer={null} // remove if you want buttons
          closeIcon={<span className="text-black text-2xl">×</span>}
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* Donate Art, Antique or Collectables  Terms & Conditions end */}

      {/* login modal start  */}

      <Modal
        open={loginModal}
        footer={null}
        closable={true}
        onCancel={closeLoginModal}
        centered
        maskClosable={false}
        closeIcon={<span className="text-black text-2xl">×</span>}
        // width="400px"
        style={{ padding: "15px", top: 0 }}
      >
        <LoginForm form={form} setLoginModal={setLoginModal} loginModal={loginModal} />
      </Modal>

      {/* profile card modal  */}

      <Modal
        open={profileCard}
        onCancel={closeProfileCardModal}
        footer={null}
        centered
        // width={400}
        closeIcon={<span className="text-black text-2xl">×</span>}
      >
        <ProfileCard setProfileCard={setProfileCard} profileData={profileData} handleLogout={handleLogout} />
      </Modal>
      <Toaster position="top-center" />
    </nav>
  );
};
export default Navbar;
