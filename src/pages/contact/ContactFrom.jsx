import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Upload,
  Button,
  Select,
  Checkbox,
  Modal,
  InputNumber,
} from "antd";
import {
  AppleOutlined,
  CreditCardOutlined,
  GoogleOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import AggrementPage from "../aggrement/AggrementPage";
import ReCAPTCHA from "react-google-recaptcha";

const { Dragger } = Upload;
const { Option } = Select;

const ContactFrom = () => {
  const [form] = Form.useForm();
  const donateFull = Form.useWatch("donateFull", form);
  const [verified, isVerified] = useState(false);
  // 1st modal useState
  const [firstModal, setFirstModal] = useState(false);
  // 2nd modal useState
  const [secondModal, setSecondModal] = useState(false);
  // 3rd modal useState
  const [thirdModal, setThirdModal] = useState(false);

  function onChange(e) {
    console.log("Captcha value:", e);
    isVerified(true);
  }
  const [openTermsModal, setOpenTermModal] = useState(false);
  const opneModal = () => {
    setOpenTermModal(true);
  };
  const closeModal = () => {
    setOpenTermModal(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    console.log(`modal open`);
    setFirstModal(true);
  };

  // 1st modal start

  const closeFirstModal = () => {
    setFirstModal(false);
  };

  // 1st modal end

  // 2nd modal start
  const openSecondModal = () => {
    setFirstModal(false);
    setSecondModal(true);
  };

  const closeSecondModal = () => {
    setFirstModal(true);
    setSecondModal(false);
  };

  // 2nd modal end

  // 3rd modal start

  useEffect(() => {
    if (donateFull) {
      form.setFieldValue("percentage", null);
    }
  }, [donateFull]);

  useEffect(() => {
    document.body.style.overflow =
      firstModal || secondModal || thirdModal ? "hidden" : "auto";
  }, [firstModal, secondModal, thirdModal]);

  return (
    <div className="relative max-w-full -z-0 lg:pt-[91px] p-3 lg:p-0 bg-[url('/contact-bg-img.png')] bg-cover bg-center">
      <div className="max-w-[620px] mx-auto rounded -z-0 shadow border-[#a6abac] border px-6">
        <h1 className="mt-6 text-xl lg:text-2xl text-[#263234] font-semibold leading-8">
          Donated item submissions form
        </h1>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            style={{ marginTop: "16px", marginBottom: "0px" }}
            label={
              <span className="text-[#263234] font-medium text-sm mb-1">
                Name
              </span>
            }
            name="name"
          >
            <Input
              style={{
                border: "1px solid #a6abac",
                outline: 0,
                padding: "10px 14px",
                fontSize: "17px",
              }}
              placeholder="Enter your name"
            />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "16px", marginBottom: "0px" }}
            label={
              <span className="text-[#263234] font-medium text-sm mb-1">
                Item
              </span>
            }
            name="item"
          >
            <Input
              style={{
                border: "1px solid #a6abac",
                outline: 0,
                padding: "10px 14px",
                fontSize: "17px",
              }}
              placeholder="Enter item name"
            />
          </Form.Item>

          <Form.Item
            style={{ marginTop: "16px", marginBottom: "0px" }}
            label={
              <span className="text-[#263234] font-medium text-sm mb-1">
                Item description
              </span>
            }
            name="description"
          >
            <Input.TextArea
              style={{
                border: "1px solid #a6abac",
                outline: 0,
                padding: "10px 14px",
                fontSize: "17px",
              }}
              placeholder="Enter a description..."
              autoSize={{ minRows: 7, maxRows: 8 }}
            />
          </Form.Item>

          <div className="flex justify-end mt-2.5">
            {/* Delete icon (svg) */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                fill="#DA453F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V5H15V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10ZM17 5V4C17 3.20435 16.6839 2.44129 16.1213 1.87868C15.5587 1.31607 14.7956 1 14 1H10C9.20435 1 8.44129 1.31607 7.87868 1.87868C7.31607 2.44129 7 3.20435 7 4V5H5C4.44772 5 4 5.44772 4 6V20C4 20.7957 4.31607 21.5587 4.87868 22.1213C5.44129 22.6839 6.20435 23 7 23H17C17.7957 23 18.5587 22.6839 19.1213 22.1213C19.6839 21.5587 20 20.7957 20 20V6C20 5.44772 19.5523 5 19 5H17ZM6 7V20C6 20.2652 6.10536 20.5196 6.29289 20.7071C6.48043 20.8946 6.73478 21 7 21H17C17.2652 21 17.5196 20.8946 17.7071 20.7071C17.8946 20.5196 18 20.2652 18 20V7H6Z"
                fill="#DA453F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10Z"
                fill="#DA453F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z"
                fill="#DA453F"
              />
            </svg>
          </div>

          <Form.Item
            style={{ marginTop: "6px", marginBottom: "0px" }}
            label={
              <span className="text-[#263234] font-medium text-sm mb-1">
                Upload photo
              </span>
            }
          >
            <Upload.Dragger
              style={{ border: "3px dotted #E9EBEB", padding: "20px" }}
              beforeUpload={() => false}
              multiple
            >
              <div className="text-start">
                <p className="ant-upload-drag-icon">
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
                </p>
                <p className="ant-upload-text text-[#263234] font-semibold">
                  Upload photo or drag & drop here.
                </p>
                <p className="ant-upload-hint">
                  Supported formats: JPG, JPEG, PNG, PDF.
                </p>
              </div>
            </Upload.Dragger>

            {/* Image Preview Section */}
            <div className="flex gap-3.5 mt-2.5">
              <div>
                <img src="/defaultImage.png" alt="Preview 1" />
              </div>
              <div className="">
                <div>
                  <img src="/defaultImg2.png" alt="Preview 2" />
                </div>
                <div>
                  <img
                    src="/defaultImg3.png"
                    className="my-1"
                    alt="Preview 3"
                  />
                </div>
                <div className="px-2 py-1 rounded-[32px] font-bold text-[#263234] bg-[#EFF1F3]">
                  +4
                </div>
              </div>
            </div>
          </Form.Item>

          {/* Receive Percentage */}
          <Form.Item
            name="percentage"
            label={
              <span className="text-sm text-[#263234] font-medium">
                I want to receive
              </span>
            }
            style={{ marginBottom: 0, marginTop: "16px" }}
          >
            <Select
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "5px",
                outline: 0,
                border: "none",
              }}
              placeholder="30% of net value"
              defaultValue={"30%"}
              disabled={donateFull}
            >
              <Option value="30%">30%</Option>
            </Select>
          </Form.Item>

          {/* Donation Checkbox */}
          <Form.Item
            name="donateFull"
            valuePropName="checked"
            style={{ marginBottom: 0 }}
          >
            <Checkbox>I want to donate 100%.</Checkbox>
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "0px" }}
            name="terms"
            valuePropName="checked"
          >
            <Checkbox style={{ color: "#263234", fontSize: "14px" }}>
              I agree with Virtue Hope's{" "}
              <span
                className=" underline "
                onClick={opneModal}
                style={{ color: "#263234" }}
              >
                terms & conditions
              </span>
              .
            </Checkbox>
          </Form.Item>

          <Button
            style={{
              backgroundColor: "#403730",
              color: "white",
              border: "none",
              outline: "none",
              width: "171px",
              height: "44px",
              display: "block",
              margin: "10px 0px",
            }}
            htmlType="submit"
          >
            Submit my donation
          </Button>
        </Form>
      </div>
      {/* First Modal */}
      <Modal
        centered
        open={firstModal}
        closable={false} // Removes close (X) icon
        width={600}
        footer={null}
      >
        <div className="  ">
          <h1 className=" text-[#263234] font-semibold text-2xl leading-8 ">
            Auction details
          </h1>
          <div className=" flex items-center gap-2 mt-4  ">
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
                  d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                  fill="#F5851E"
                />
              </svg>
            </span>
            <div>
              <h1 className=" text-[16px] text-[#263234] leading-6 ">
                Please input your auction details to help buyer find out exactly
                their needs.
              </h1>
            </div>
          </div>
          {/* step */}
          <div>
            <p className=" text-[#263234] text-sm font-semibold mt-4 ">
              Step 1 of 3
            </p>
          </div>
          {/* step */}
          <div className="flex gap-3.5 mt-2.5 mb-6 ">
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#E9EBEB] "></div>
            <div className=" w-[33%] h-1.5 bg-[#E9EBEB] "></div>
          </div>

          <Form form={form} onFinish={openSecondModal} layout="vertical">
            {/* Auction title */}
            <Form.Item
              name="title"
              label="Auction title"
              style={{ marginBottom: "0px" }}
              rules={[
                { required: true, message: "Please enter Auction title" },
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
            {/* Description */}
            <Form.Item
              style={{ marginBottom: "0px", marginTop: "8px" }}
              name="description"
              label="Item Description"
              rules={[
                {
                  required: true,
                  message: "Please enter the item description!",
                },
                {
                  min: 6,
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
            <Form.Item
              style={{ marginTop: "18px" }}
              name="image"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
              rules={[
                {
                  required: true,
                  message: "Please upload an image!",
                },
              ]}
            >
              <Dragger
                accept=".jpg,.jpeg,.png,.pdf"
                beforeUpload={() => false} // Prevent automatic upload
                multiple={false}
                showUploadList={true}
              >
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

            {/* Receive Percentage */}
            <Form.Item
              name="percentage"
              label={
                <span className="text-sm text-[#263234] font-medium">
                  I want to receive
                </span>
              }
              style={{ marginBottom: 0, marginTop: "16px" }}
            >
              <Select
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "5px",
                  outline: 0,
                  border: "none",
                }}
                placeholder="30% of net value"
                defaultValue={"30%"}
                disabled={donateFull}
              >
                <Option value="30%">30%</Option>
              </Select>
            </Form.Item>

            {/* Donation Checkbox */}
            <Form.Item
              name="donateFull"
              valuePropName="checked"
              style={{ marginBottom: 0 }}
            >
              <Checkbox>I want to donate 100%.</Checkbox>
            </Form.Item>

            {/* Terms Checkbox */}
            <Form.Item
              name="agreeTerms"
              valuePropName="checked"
              style={{ marginBottom: 0 }}
            >
              <Checkbox>
                I agree with Virtue Hope's{" "}
                <span onClick={openTermsModal} className="underline">
                  terms & conditions.
                </span>
              </Checkbox>
            </Form.Item>

            {/* captcha  */}
            <div className="   my-5 ">
              <Form.Item>
                <ReCAPTCHA
                  sitekey="6Len-w8rAAAAAE68L5bXR-wOuwmID9i0xVW1Eqp1"
                  onChange={onChange}
                />
              </Form.Item>
            </div>
            {/* Modal Buttons */}
            <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
              <Button onClick={"cancleFirstModal"} className="  navBtn1  ">
                Cancel
              </Button>
              <Button
                disabled={!verified}
                className="navBtn2"
                onClick={openSecondModal}
              >
                Proceed next step
              </Button>
            </div>
          </Form>
        </div>
      </Modal>

      {/* Second Modal */}

      <div className=" ">
        <Modal
          centered
          open={secondModal}
          closable={false}
          footer={null}
          width={600}
        >
          <div className="  ">
            <h1 className=" text-[#263234] font-semibold text-2xl leading-8 ">
              Personal details
            </h1>
            <div className=" flex items-center gap-2 mt-4  ">
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
                    d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                    fill="#F5851E"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                    fill="#F5851E"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                    fill="#F5851E"
                  />
                </svg>
              </span>
              <div>
                <h1>
                  Help us to collecting your auction item by providing your
                  information <br /> accurate.
                </h1>
              </div>
            </div>
            {/* step */}
            <div>
              <p className=" text-[#263234] text-sm font-semibold mt-4 ">
                Step 2 of 3
              </p>
            </div>
            {/* step */}
            <div className="flex gap-3.5 mt-2.5 mb-6 ">
              <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
              <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
              <div className=" w-[33%] h-1.5 bg-[#E9EBEB] "></div>
            </div>

            <Form layout="vertical" className=" p-6   rounded-lg">
              {/* Name Field */}
              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className=" text-sm text-[#263234] font-medium ">
                    Name
                  </span>
                }
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name!",
                  },
                ]}
              >
                <Input
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #A6ABAC ",
                    fontSize: "14px",
                  }}
                  placeholder="Enter your name"
                />
              </Form.Item>

              {/* Email Field */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "10px" }}
                label={
                  <span className=" text-sm text-[#263234] font-medium ">
                    Email
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
                name="email"
              >
                <Input
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #A6ABAC ",
                    fontSize: "14px",
                    marginBottom: "0px",
                  }}
                  placeholder="Enter your email address"
                />
              </Form.Item>

              {/* Contact Number Field */}
              <Form.Item
                style={{ marginBottom: "0px", marginTop: "10px" }}
                label="Contact number"
                name="contact"
                rules={[
                  {
                    required: true,
                    message: "Please enter your contact number!",
                  },
                ]}
              >
                <InputNumber
                  style={{
                    padding: "8px 14px",
                    border: "1px solid #A6ABAC",
                    fontSize: "14px",
                    marginBottom: "0px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  placeholder={"Uk +123"}
                  controls={false} // Hides the increment/decrement buttons
                />
              </Form.Item>

              {/* City Dropdown */}
              <Form.Item
                style={{ marginBottom: "0px" }}
                label={
                  <span className=" text-sm text-[#263234] font-medium mt-3 ">
                    City
                  </span>
                }
                name="city"
              >
                <Select
                  style={{
                    width: "100%",
                    height: "50px", // Better for consistent spacing
                    borderRadius: "5px",
                    outline: 0,
                    border: "none", // Removes border from Select
                  }}
                  dropdownStyle={{}}
                  placeholder="City name"
                >
                  <Option value="london">London</Option>
                  <Option value="manchester">Manchester</Option>
                  <Option value="birmingham">Birmingham</Option>
                </Select>
              </Form.Item>

              {/* Address Field */}
              <Form.Item
                label={
                  <span className=" text-sm text-[#263234] font-medium mt-3 ">
                    Address
                  </span>
                }
                name="address"
              >
                <Input
                  style={{
                    padding: "12px 14px",
                    border: "1px solid #A6ABAC",
                    fontSize: "14px",
                    marginBottom: "0px",
                    width: "100%",
                    borderRadius: "5px",
                  }}
                  placeholder="Enter your location"
                />
              </Form.Item>

              <Form.Item
                style={{ marginTop: "18px" }}
                name="image"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message: "Please upload an image!",
                  },
                ]}
              >
                <Dragger
                  accept=".jpg,.jpeg,.png,.pdf"
                  beforeUpload={() => false} // Prevent automatic upload
                  multiple={false}
                  showUploadList={true}
                >
                  <div className="flex items-center gap-4 ">
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
                    <p className="ant-upload-text">
                      Upload your photo of drag & drop here.
                    </p>
                  </div>
                </Dragger>
              </Form.Item>
              <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end lg:gap-8 ">
                <Button className="missionModalBtn1">Back</Button>

                <Button onClick={"backFirstModal"} className="missionModalBtn2">
                  Next
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </div>

      {/* Third Modal */}

      {!donateFull && (
        <Modal
          title=""
          // onCancel={handleCancel}
          open={thirdModal}
          footer={null}
          width={400}
          closable={false}
        >
          <h1 className=" text-[#263234] text-2xl font-semibold leading-8 ">
            Get paid
          </h1>
          <div className="flex items-center gap-2 mt-4 ">
            <div>
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
                  d="M8 18C8 17.4477 8.44772 17 9 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z"
                  fill="#F5851E"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05025 3.05025C8.36301 1.7375 10.1435 1 12 1C13.8565 1 15.637 1.7375 16.9497 3.05025C18.2605 4.36103 18.9978 6.13813 19 7.99162C19.0123 8.78605 18.8568 9.57416 18.5438 10.3045C18.2326 11.0306 17.7727 11.6833 17.1937 12.2206C16.5443 12.8733 16.2066 13.456 16.0735 14.1807C15.9738 14.7238 15.4525 15.0833 14.9093 14.9835C14.3662 14.8838 14.0067 14.3625 14.1065 13.8193C14.3324 12.589 14.9311 11.6547 15.7929 10.7929C15.8026 10.7831 15.8126 10.7736 15.8227 10.7643C16.2017 10.4154 16.5026 9.99017 16.7055 9.51666C16.9085 9.04315 17.0089 8.53205 17.0001 8.01696L17 8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40215 3.52678 8.46447 4.46447C7.52678 5.40215 7 6.67392 7 8C7 8.79486 7.16385 9.74236 8.19272 10.7785C9.06407 11.5822 9.65861 12.6414 9.89067 13.8043C9.99874 14.3459 9.6473 14.8726 9.10569 14.9807C8.56409 15.0887 8.03741 14.7373 7.92933 14.1957C7.77899 13.4423 7.39218 12.7564 6.82519 12.238C6.8142 12.2279 6.80343 12.2176 6.79289 12.2071C5.29462 10.7088 5 9.20145 5 8C5 6.14348 5.7375 4.36301 7.05025 3.05025Z"
                  fill="#F5851E"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#263234]">
                Once your auction is sold out, you will get paid and donation
                amount will be funded to the Virtue Hope.
              </p>
            </div>
          </div>
          {/* step */}
          <div>
            <p className=" text-[#263234] text-sm font-semibold mt-4 ">
              Step 3 of 3
            </p>
          </div>
          {/* step */}
          <div className="flex gap-3.5 mt-2.5 mb-6 ">
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
            <div className=" w-[33%] h-1.5 bg-[#457205] "></div>
          </div>
          {/* Form Start */}
          <Form layout="vertical">
            {/* Card Number */}
            <Form.Item
              name="cardNumber"
              label={
                <span className="text-[#414651] text-[14px] font-medium">
                  Enter your card number
                </span>
              }
              rules={[{ required: true, message: "Card number is required" }]}
              style={{ marginBottom: "0px" }}
            >
              <Input
                className="py-3 px-4 placeholder:text-[16px] w-full"
                placeholder="Enter your card number"
                maxLength={19}
                style={{
                  border: "1px solid #D5D7DA",
                  outline: "none",
                }}
              />
            </Form.Item>

            {/* Payment Method */}
            <Form.Item
              name="paymentMethod"
              label={
                <span className="text-[#414651] text-[14px] font-medium">
                  Choose a payment method
                </span>
              }
              rules={[
                { required: true, message: "Please select a payment method" },
              ]}
              style={{ marginBottom: "20px", marginTop: "12px" }}
            >
              <Select
                placeholder="Select Payment Method"
                bordered={false}
                style={{
                  width: "100%",
                  backgroundColor: "#f9f9f9",
                  height: "45px",
                  fontWeight: "500",
                }}
                className="shadow-sm hover:shadow-md focus:shadow-md transition-all"
              >
                <Option value="card">
                  <CreditCardOutlined className="mr-2" /> Card
                </Option>
                <Option value="apple">
                  <AppleOutlined className="mr-2" /> Apple Pay
                </Option>
                <Option value="google">
                  <GoogleOutlined className="mr-2" /> Google Pay
                </Option>
                <Option value="paypal">
                  <span className="flex items-center gap-1">
                    {/* Your PayPal SVG here */}
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
                    PayPal
                  </span>
                </Option>
              </Select>
            </Form.Item>

            {/* Modal Buttons */}
            <div className="flex flex-col lg:flex-row md:flex-row lg:justify-end lg:gap-8">
              <Button className="missionModalBtn1">Go Back</Button>

              <Button htmlType="submit" className="missionModalBtn2">
                Complete process
              </Button>
            </div>
          </Form>
        </Modal>
      )}

      <div className=" ">
        <Modal
          width={"70%"}
          open={openTermsModal}
          style={{ top: 0 }}
          // onOk={handleOk}
          onCancel={closeModal}
          footer={null} // remove if you want buttons
        >
          <AggrementPage></AggrementPage>
        </Modal>
      </div>
    </div>
  );
};

export default ContactFrom;
