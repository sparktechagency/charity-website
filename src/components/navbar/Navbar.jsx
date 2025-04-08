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

const Navbar = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          title="Please choose the way you want to Donate"
          open={modalOpen}
          onCancel={onClose}
          footer={null}
          closable={false}
          centered
          style={{ padding: "15px" }}
          width="400px"
        >
          <Form style={{ paddingTop: "10px" }} layout="vertical">
            <Form.Item name="donation">
              <Radio.Group className="w-full">
                <div className="flex flex-col gap-4">
                  {/* card */}
                  <Radio
                    value="card"
                    className="w-full px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                  >
                    <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                      Card
                    </h1>
                    <span className="block lg:ml-[240px]! md:ml-[245px] ml-[158px] -mt-6 ">
                      {/* Apple Pay Icon */}
                      <FaCcMastercard className=" text-2xl " />
                    </span>
                  </Radio>
                  {/* Apple Pay */}
                  <Radio
                    value="apple_pay"
                    className="w-full px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                  >
                    <h1 className="block mt-3.5 text-[16px]  text-[#263234] leading-6 font-medium">
                      With Apple Pay
                    </h1>
                    <span className="block lg:ml-[240px]! md:ml-[220%] ml-[145%] -mt-6 ">
                      {/* Apple Pay Icon */}
                      <svg
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.3735 8.18824C17.7349 9.17647 16.7229 10.8706 16.7229 12.7529C16.7229 14.8706 18.0241 16.8 20 17.6C19.6145 18.8235 19.0361 19.9529 18.3133 20.9882C17.253 22.4471 16.1446 23.9529 14.506 23.9529C12.8675 23.9529 12.3855 23.0118 10.4578 23.0118C8.57831 23.0118 7.90361 24 6.36145 24C4.81928 24 3.75904 22.6353 2.55422 20.9412C0.963856 18.5882 0.0481928 15.8588 0 12.9882C0 8.32941 3.08434 5.83529 6.16867 5.83529C7.80723 5.83529 9.15663 6.87059 10.1687 6.87059C11.1325 6.87059 12.6747 5.78824 14.506 5.78824C16.4337 5.74118 18.2651 6.63529 19.3735 8.18824Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Radio>

                  {/* Google Pay */}
                  <Radio
                    value="google_pay"
                    className="w-full px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                  >
                    <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                      With Google Pay
                    </h1>
                    <span className="lg:ml-[240px]! md:ml-[200%] ml-[132%] block -mt-6 ">
                      {/* Google Pay Icon */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M11.9999 23C14.9699 23 17.4599 22.015 19.2799 20.335L15.7249 17.575C14.7399 18.235 13.4799 18.625 11.9999 18.625C9.13492 18.625 6.70992 16.69 5.84492 14.09H2.16992V16.94C3.97992 20.535 7.69992 23 11.9999 23Z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.59286 0.999321 10.2846 1 12C1 13.775 1.425 15.455 2.17 16.94L5.845 14.09Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z"
                          fill="#EA4335"
                        />
                      </svg>
                    </span>
                  </Radio>

                  {/* paypal Pay */}
                  <Radio
                    value="paypal_pay"
                    className="w-full px-2! h-[56px]  border border-[#A6ABAC] rounded-lg cursor-pointer "
                  >
                    <h1 className="block mt-3.5 text-[16px] text-[#263234] leading-6 font-medium">
                      With PayPal Pay
                    </h1>
                    <span className="block  lg:ml-[240px]! md:ml-[209%] ml-[140%] -mt-6 ">
                      {/* paypal Pay Icon */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9861 6.91069C19.0396 4.12819 16.7436 1.99219 13.5866 1.99219H7.05757C6.90538 1.99224 6.7582 2.0466 6.64252 2.14551C6.52685 2.24441 6.45027 2.38135 6.42657 2.53169L3.81007 18.8797C3.79837 18.9538 3.80285 19.0295 3.82323 19.1017C3.8436 19.1738 3.87937 19.2407 3.92808 19.2978C3.97678 19.3548 4.03727 19.4006 4.10537 19.432C4.17348 19.4634 4.24758 19.4797 4.32257 19.4797H8.19107L7.58607 23.2657C7.57436 23.3398 7.57886 23.4156 7.59926 23.4878C7.61966 23.56 7.65548 23.6269 7.70424 23.684C7.753 23.741 7.81355 23.7868 7.88172 23.8181C7.94988 23.8495 8.02403 23.8657 8.09907 23.8657H11.2501C11.4026 23.8657 11.5381 23.8107 11.6536 23.7122C11.7691 23.6132 11.7881 23.4767 11.8116 23.3262L12.7366 17.8837C12.7601 17.7337 12.8366 17.5387 12.9526 17.4397C13.0681 17.3407 13.1691 17.2867 13.3211 17.2862H15.2501C18.3416 17.2862 20.9651 15.0892 21.4446 12.0327C21.7836 9.86269 20.8531 7.88919 18.9861 6.91069Z"
                          fill="#001C64"
                        />
                        <path
                          d="M9.02798 13.4502L8.06448 19.5602L7.45948 23.3922C7.44777 23.4663 7.45227 23.542 7.47267 23.6143C7.49308 23.6865 7.52889 23.7534 7.57765 23.8104C7.62642 23.8675 7.68697 23.9132 7.75513 23.9446C7.82329 23.976 7.89745 23.9922 7.97248 23.9922H11.3075C11.4596 23.992 11.6066 23.9376 11.7222 23.8387C11.8378 23.7398 11.9143 23.6029 11.938 23.4527L12.817 17.8827C12.8407 17.7325 12.9172 17.5956 13.0328 17.4968C13.1484 17.398 13.2954 17.3437 13.4475 17.3437H15.411C18.5025 17.3437 21.1255 15.0887 21.605 12.0322C21.945 9.86266 20.853 7.88916 18.986 6.91016C18.981 7.14116 18.961 7.37166 18.9255 7.60016C18.446 10.6562 15.8225 12.9117 12.731 12.9117H9.65848C9.5065 12.9117 9.3595 12.9659 9.24393 13.0646C9.12836 13.1633 9.05179 13.3 9.02798 13.4502Z"
                          fill="#0070E0"
                        />
                        <path
                          d="M8.06398 19.5601H4.18398C4.10896 19.5601 4.03482 19.5439 3.96668 19.5125C3.89853 19.4812 3.83801 19.4354 3.78929 19.3783C3.74056 19.3213 3.70479 19.2544 3.68446 19.1821C3.66412 19.1099 3.65969 19.0342 3.67148 18.9601L6.28748 2.36908C6.31119 2.21879 6.38779 2.08191 6.50348 1.98309C6.61917 1.88427 6.76634 1.83001 6.91848 1.83008H13.587C16.7435 1.83008 19.0395 4.12758 18.986 6.91008C18.2005 6.49808 17.2775 6.26258 16.266 6.26258H10.7065C10.5545 6.26273 10.4075 6.31708 10.2919 6.41587C10.1763 6.51466 10.0998 6.65142 10.076 6.80158L9.02848 13.4501L8.06398 19.5601Z"
                          fill="#003087"
                        />
                      </svg>
                    </span>
                  </Radio>

                  {/* Divider */}
                  <Divider style={{ borderColor: "#A6ABAC", margin: "20px 0" }}>
                    Or
                  </Divider>

                  {/* Luxurious Retreat Option */}
                  <Radio
                    onClick={openLuxuryModal}
                    value="luxurious"
                    className="flex items-center py-3.5! px-2! justify-between w-full  border border-[#A6ABAC] rounded-lg cursor-pointer"
                  >
                    <span className="text-[#263234] font-medium">
                      Donate Art, Antique or Collectables
                    </span>
                  </Radio>
                </div>
              </Radio.Group>
            </Form.Item>

            {/* Modal Buttons */}
            <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
              <Button onClick={onClose} type="text" className="  navBtn1  ">
                Cancel
              </Button>
              <Button onClick={openSecondModal} className="navBtn2">
                Proceed next step
              </Button>
            </div>
          </Form>
        </Modal>
      </div>

      {/* second modal */}
      <Modal
        open={secondModalOpen}
        onCancel={closeSecondModal}
        footer={null}
        centered
        closable={false}
      >
        <h2 className="text-2xl font-semibold leading-8 text-[#263234] mb-4">
          Donate with Luxury retreats
        </h2>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          {/* Name */}
          <Form.Item
            name="name"
            label="Name"
            style={{ marginBottom: "0px" }}
            rules={[
              { required: true, message: "Please input your name!" },
              { min: 6, message: "Name must be at least 6 characters!" },
            ]}
          >
            <Input
              style={{
                padding: "12px",
                border: "1px solid #A6ABAC",
                outline: "none",
              }}
              className=" py-2.5! "
              placeholder="Enter your name"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            name="email"
            label="Email"
            style={{ marginBottom: "0px", marginTop: "16px" }}
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input
              style={{
                padding: "12px",
                border: "1px solid #A6ABAC",
                outline: "none",
              }}
              type="email"
              placeholder="Enter your email address"
            />
          </Form.Item>

          {/* Item */}
          <Form.Item
            name="item"
            label="Item"
            style={{ marginBottom: "0px", marginTop: "16px" }}
            rules={[
              { required: true, message: "Please input the item name!" },
              { min: 6, message: "Item name must be at least 6 characters!" },
            ]}
          >
            <Input
              style={{
                padding: "12px",
                border: "1px solid #A6ABAC",
                outline: "none",
              }}
              placeholder="Enter item name"
            />
          </Form.Item>

          {/* Description */}
          <Form.Item
            name="description"
            label="Item Description"
            style={{ marginBottom: "0px", marginTop: "16px" }}
            rules={[
              { required: true, message: "Please input the item description!" },
              { min: 6, message: "Description must be at least 6 characters!" },
            ]}
          >
            <Input.TextArea
              style={{
                padding: "12px",
                border: "1px solid #A6ABAC",
                outline: "none",
              }}
              placeholder="Enter a description..."
              rows={4}
            />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item
            name="image"
            label="Upload your photo"
            style={{ marginBottom: "0px", marginTop: "16px" }}
            rules={[
              {
                required: true,
                message: "Please upload an image!",
              },
            ]}
          >
            <Dragger {...uploadProps}>
              <div>
                <span>
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
                      d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V15C2 14.4477 2.44772 14 3 14Z"
                      fill="#4B5557"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L12 4.41421L7.70711 8.70711C7.31658 9.09763 6.68342 9.09763 6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289L11.2929 2.29289Z"
                      fill="#4B5557"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C12.5523 2 13 2.44772 13 3V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V3C11 2.44772 11.4477 2 12 2Z"
                      fill="#4B5557"
                    />
                  </svg>
                </span>
                <p className="text-start">
                  Click or drag file to this area to upload
                </p>
                <p className=" text-sm text-start text-[#4B5557]">
                  Supported format: JPG, JPEG, PNG, PDF
                </p>
              </div>
            </Dragger>
          </Form.Item>

          {/* Checkbox */}
          <Form.Item
            name="terms"
            valuePropName="checked"
            style={{ marginBottom: "0px", marginTop: "16px" }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Please agree with the terms!"),
              },
            ]}
          >
            <Checkbox>
              I agree with Virtue Hope's{" "}
              <Link to="#" className="underline">
                terms & conditions
              </Link>
              .
            </Checkbox>
          </Form.Item>

          {/* Modal Buttons */}
          <div className="flex justify-end gap-7">
            <button
              onClick={closeSecondModal}
              className="px-6 py-2 text-[#403730] font-bold text-sm"
              type="button"
            >
              Back
            </button>
            <button
              className="px-6 py-2 bg-[#403730] text-white rounded shadow font-bold text-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Modal>
      {/* 3rd modal  */}

      {/* luxurious modal  */}

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
        >
          <h1 className=" text-[#263234] font-semibold leading-8 text-2xl mb-6  ">
            Donate Art, Antique or Collectables
          </h1>

          <Form form={form} onFinish={submitLuxriousModal} layout="vertical">
            {/* Name */}
            <Form.Item
              name="name"
              label="Name"
              style={{ marginBottom: "0px", marginTop: "16px" }}
              rules={[
                { required: true, message: "Please input your name!" },
                { min: 6, message: "Name must be at least 6 characters!" },
              ]}
            >
              <Input
                style={{
                  padding: "12px",
                  border: "1px solid #A6ABAC",
                  outline: "none",
                }}
                placeholder="Enter your name"
              />
            </Form.Item>

            {/* Email */}
            <Form.Item
              name="email"
              label="Email"
              style={{ marginBottom: "0px", marginTop: "16px" }}
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input
                style={{
                  padding: "12px",
                  border: "1px solid #A6ABAC",
                  outline: "none",
                }}
                type="email"
                placeholder="Enter your email address"
              />
            </Form.Item>

            {/* Item */}
            <Form.Item
              name="item"
              style={{ marginBottom: "0px", marginTop: "16px" }}
              label="Item"
              rules={[
                { required: true, message: "Please input the item name!" },
                { min: 6, message: "Item name must be at least 6 characters!" },
              ]}
            >
              <Input
                style={{
                  padding: "12px",
                  border: "1px solid #A6ABAC",
                  outline: "none",
                }}
                placeholder="Enter item name"
              />
            </Form.Item>

            {/* Description */}
            <Form.Item
              style={{ marginBottom: "0px", marginTop: "16px" }}
              name="description"
              label="Item Description"
              rules={[
                {
                  required: true,
                  message: "Please input the item description!",
                },
                {
                  min: 6,
                  message: "Description must be at least 6 characters!",
                },
              ]}
            >
              <Input.TextArea
                style={{
                  padding: "12px",
                  border: "1px solid #A6ABAC",
                  outline: "none",
                }}
                placeholder="Enter a description..."
                rows={4}
              />
            </Form.Item>

            {/* Image Upload */}
            <Form.Item
              style={{ marginBottom: "0px", marginTop: "16px" }}
              name="image"
              label="Upload your photo"
              rules={[
                {
                  required: true,
                  message: "Please upload an image!",
                },
              ]}
            >
              <Dragger {...uploadPropsFrom}>
                <div>
                  <span>
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
                        d="M3 14C3.55228 14 4 14.4477 4 15V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V15C2 14.4477 2.44772 14 3 14Z"
                        fill="#4B5557"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711C17.3166 9.09763 16.6834 9.09763 16.2929 8.70711L12 4.41421L7.70711 8.70711C7.31658 9.09763 6.68342 9.09763 6.29289 8.70711C5.90237 8.31658 5.90237 7.68342 6.29289 7.29289L11.2929 2.29289Z"
                        fill="#4B5557"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 2C12.5523 2 13 2.44772 13 3V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V3C11 2.44772 11.4477 2 12 2Z"
                        fill="#4B5557"
                      />
                    </svg>
                  </span>
                  <p className="text-start">
                    Click or drag file to this area to upload
                  </p>
                  <p className=" text-sm text-start text-[#4B5557]">
                    Supported format: JPG, JPEG, PNG, PDF
                  </p>
                </div>
              </Dragger>
            </Form.Item>

            {/* Checkbox */}
            <Form.Item
              name="terms"
              style={{ marginBottom: "0px", marginTop: "16px" }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Please agree with the terms!"),
                },
              ]}
            >
              <Checkbox>
                I agree with Virtue Hope's{" "}
                <a href="#" className="underline">
                  terms & conditions
                </a>
                .
              </Checkbox>
            </Form.Item>

            {/* Modal Buttons */}
            {/* Modal Buttons */}
            <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
              <Button
                onClick={closeLuxuryModal}
                type="text"
                className="  navBtn1  "
              >
                Back
              </Button>
              <Button htmlType="submit" className="navBtn2">
                Submit
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
