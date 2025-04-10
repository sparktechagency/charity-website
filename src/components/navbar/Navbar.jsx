import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MenuOutlined,
  CreditCardOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Drawer,
  Modal,
  Form,
  Button,
  Radio,
  Divider,
  Input,
  Checkbox,
} from "antd";
import { SiStripe } from "react-icons/si";
import logo from "../../assets/image/logo.svg";
import Dragger from "antd/es/upload/Dragger";
import { showSuccessAlert } from "../../helper/showSuccessAlert";
import { FaCcMastercard } from "react-icons/fa";
import AggrementPage from "../../pages/aggrement/AggrementPage";
import PaymentModal from "../client/payment/PaymentModal";
import DonateModal from "../client/donate/DonateModal";
import ArtAntiqModal from "../client/art-antique/ArtAntiqModal";

const Navbar = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // donate modal  terms & conditions. start

  const [termsModal, setTermsModal] = useState(false);

  const showTermModal = () => {
    // e.preventDefault(); // prevent link navigation
    setTermsModal(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const termModalCanel = () => {
    setTermsModal(false);
  };

  // donate modal  terms & conditions. end

  // Donate Art, Antique or Collectables modal  terms & conditions. start

  const [donateTerm, setDonateTerm] = useState(false);

  const showDonateTermModal = () => {
    // e.preventDefault(); // prevent link navigation
    setDonateTerm(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const donateModalCanel = () => {
    setDonateTerm(false);
  };

  // Donate Art, Antique or Collectables modal  terms & conditions. end

  // first modal
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setOpen(false); // Close drawer first
    setModalOpen(true); // Open modal
  };
  const onClose = () => setModalOpen(false);

  // 1st modal end

  // second modal
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    console.log(values.email);
    form.resetFields(); // Reset form after submit
    setSecondModalOpen(false);
    showSuccessAlert();
  };

  const handleFileChange = (info) => {
    console.log("File Upload Info:", info.fileList);
  };

  const uploadProps = {
    beforeUpload: () => false,
    multiple: false,
    onChange: handleFileChange,
    accept: ".jpg,.jpeg,.png,.pdf",
  };

  const openSecondModal = () => {
    setModalOpen(false);
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    form.resetFields(); // Reset form after
    setModalOpen(true);
    setSecondModalOpen(false);
  };

  // const handleSecondCancelModal = () => {
  //   console.log(`second modal opened: `);
  //   setSecondModalOpen(false);
  //   setModalOpen(true);
  // };

  // second modal end

  // 3rd modal luxuryModal

  const [luxuryModal, setLuxuryModal] = useState(false);

  const openLuxuryModal = () => {
    setLuxuryModal(true);
    setModalOpen(false);
  };

  const closeLuxuryModal = () => {
    setLuxuryModal(false);
    setModalOpen(true);
  };

  const uploadPropsFrom = {
    beforeUpload: () => false, // prevent automatic upload
    multiple: false,
    accept: ".jpg,.jpeg,.png,.pdf",
    maxCount: 1,
  };

  const submitLuxriousModal = (values) => {
    console.log("Form Values:", values);
    console.log("Name:", values.name);
    console.log("Email:", values.email);
    console.log("Item:", values.item);
    console.log("Description:", values.description);
    console.log("Image:", values.image?.fileList[0]);
    console.log("Terms Accepted:", values.terms);

    // Reset form fields
    form.resetFields();
    setLuxuryModal(false);
    showSuccessAlert();
  };

  // 3rd modal luxuryModal end

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

  useEffect(() => {
    document.body.style.overflow =
      modalOpen || secondModalOpen || luxuryModal ? "hidden" : "auto";
  }, [modalOpen, secondModalOpen, luxuryModal]);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-[#F9F9F9] shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl  mx-auto py-3 flex items-center justify-between px-4 md:px-3">
        {/* Logo */}
        <Link className="flex items-center gap-4" to="/">
          <img src={logo} alt="Virtue Hope Logo" className="h-10" />
          <h1 className="text-2xl font-semibold text-[#263234]">Virtue Hope</h1>
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
                        : "text-[#263234] hover:text-gray-700"
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
          onClick={showModal}
          className="hidden lg:block px-4 py-2.5 text-sm cursor-pointer font-medium rounded-md bg-[#403730] text-white transition-all hover:opacity-90"
        >
          Support Survivors
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="lg:hidden">
          <MenuOutlined className="text-2xl text-[#263234]" />
        </button>

        {/* Ant Design Drawer */}
        <Drawer
          placement="right"
          onClose={toggleDrawer}
          open={open}
          width={260}
          maskClosable
        >
          <ul className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={`/${item.path}`}
                  className={({ isActive }) =>
                    `text-sm block py-3 px-4 transition-all ${
                      isActive ? "font-bold bg-[#e6dede]" : "text-[#263234]"
                    }`
                  }
                  onClick={toggleDrawer}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Support Button in Drawer (Closes Drawer & Opens Modal) */}
          <button
            onClick={showModal}
            className="mt-6 bg-[#403730] w-full py-3 cursor-pointer text-white rounded-md font-medium text-sm hover:opacity-90"
          >
            Support Survivors
          </button>
        </Drawer>
      </div>

      {/* Payment Modal */}

      <div className="  ">
        <Modal
          open={modalOpen}
          onCancel={onClose}
          footer={null}
          closable={false}
          centered
          width="400px"

          style={{ padding: "15px", top:0 }}

          
         
        >
          {/* openLuxuryModal ,handleCancel,handlieClickNextStep */}

          <PaymentModal
            openLuxuryModal={openLuxuryModal}
            handleCancel={onClose}
            handlieClickNextStep={openSecondModal}
          />
        </Modal>
      </div>

      {/* Donate modal start second modal */}
      <Modal
        open={secondModalOpen}
        onCancel={closeSecondModal}
        footer={null}
        centered
        closable={false}
        
        style={{top:0}}
      >
        

        {/* form, */}
        {/* handleRetreatSubmit, */}
        {/* uploadProps, */}
        {/* showTermModal, */}
        {/* backRetretModal, */}

        <DonateModal form = {form} handleRetreatSubmit = {handleSubmit} uploadProps = {uploadProps} showTermModal = {showTermModal}  backRetretModal = {closeSecondModal}  />

      </Modal>



      {/* 3rd modal  */}

      {/* Donate Art, Antique or Collectables start modal start   */}

      <div className=" w-[600px]  z-50 ">
        <Modal
          visible={luxuryModal}
          onCancel={closeLuxuryModal}
          footer={null}
          width={500}
          height={800}
          // bodyStyle={{ padding: "20px" }}
          destroyOnClose
          closable={false}
          style={{top:0}}
        >

            <ArtAntiqModal form = {form} submitLuxriousModal = {submitLuxriousModal} uploadProps = {uploadProps} showDonateTermModal = {showDonateTermModal}closeLuxuryModal ={closeLuxuryModal}  />

        </Modal>
      </div>



      {/* Donate Art, Antique or Collectables  modal end  */}




      {/* donate modal terms conditions start   */}

      <div className=" ">
        <Modal
          width={"70%"}
          open={termsModal}
          style={{ top: 0 }}
          // onOk={handleOk}
          onCancel={termModalCanel}
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
          // onOk={handleOk}
          onCancel={donateModalCanel}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>

      {/* Donate Art, Antique or Collectables  Terms & Conditions end */}
    </nav>
  );
};

export default Navbar;
