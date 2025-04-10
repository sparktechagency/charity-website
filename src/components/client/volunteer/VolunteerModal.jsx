import { Form } from "antd";
import React from "react";
import { Modal, Input, Button, Checkbox, Upload, Radio } from "antd";
import { Link } from "react-router-dom";
const { Dragger } = Upload;
const VolunteerModal = ({
  form,
  handleVolunterSubmit,
  uploadProps,
  closeVolunteerModal,
  showTermModal
}) => {
  return (
    <div>
      <h1 className=" text-[#263234] font-semibold leading-8 text-3xl mb-6  ">
        Get Involved as a Volunteer
      </h1>

      <Form form={form} onFinish={handleVolunterSubmit} layout="vertical">
        {/* Name Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="name"
          label={
            <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
              {" "}
              Name{" "}
            </span>
          }
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 6, message: "Name must be at least 6 characters!" },
          ]}
        >
          <div className="mb-2">
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="Enter your name"
            />
          </div>
        </Form.Item>

        {/* Email Field */}

        <Form.Item
          style={{ marginBottom: "0px" }}
          label={
            <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
              Email
            </span>
          }
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Enter a valid email!" },
          ]}
        >
          <div className="mb-2">
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
              }}
              type="email"
              placeholder="Enter your email address"
            />
          </div>
        </Form.Item>

        {/* Contact Number Field */}

        <Form.Item
          style={{ marginBottom: "0px" }}
          label={
            <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
              Contact number
            </span>
          }
          name="contactNumber"
          rules={[
            {
              required: true,
              message: "Please input your contact number!",
            },
          ]}
        >
          <div className="mb-2">
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="Enter your contact number"
            />
          </div>
        </Form.Item>

        {/* Location Field */}

        <Form.Item
          style={{ marginBottom: "0px" }}
          label={
            <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
              Location
            </span>
          }
          name="location"
          rules={[{ required: true, message: "Please input your location!" }]}
        >
          <div className="mb-2">
            <Input
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="Street, City name & State name"
            />
          </div>
        </Form.Item>

        {/* Why do you want to be a Volunteer Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          label={
            <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
              Why do you want to be a Volunteer
            </span>
          }
          name="whyYouWantToBeAVolunteer"
          rules={[
            {
              required: true,
              message: "Please input why you want to be a volunteer!",
            },
            {
              min: 6,
              message: "Description must be at least 6 characters!",
            },
          ]}
        >
          <div className="mb-2">
            <Input.TextArea
              style={{
                border: "1px solid #A6ABAC  ",
                padding: "10px 14px ",
                lineHeight: "24px",
                fontSize: "16px",
              }}
              placeholder="Enter a description..."
              rows={4}
            />
          </div>
        </Form.Item>

        {/* File Upload Field */}

        <Form.Item
          style={{ marginBottom: "0px" }}
          label={
            <span className="block! text-sm! font-medium! text-[#263234]! leading-5! ">
              Upload your CV
            </span>
          }
          name="cv"
          rules={[
            {
              required: true,
              message: "Please Upload your CV!",
            },
            {
              type: "file",
              accept: ".doc,.docx,.pdf,.jpg,.jpeg,.png",
              message: "Upload only doc, docx, pdf, jpg, jpeg or png file!",
            },
          ]}
        >
          <div className="mb-2">
            <label className="block text-sm font-medium text-[#263234] leading-5 mb-1.5 "></label>
            <Dragger {...uploadProps} style={{ border: "2px dotted #E9EBEB " }}>
              <div className=" text-start  ">
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
                <p className="ant-upload-text text-[#263234] font-semibold text-[16px] mb-1 ">
                  Click or drag file to this area to upload
                </p>
                <p className="text-sm text-[#4B5557] leading-5 mt-2 mb-6 ">
                  Supported format: JPG, JPEG, PNG, PDF
                </p>
              </div>
            </Dragger>
          </div>
        </Form.Item>

        {/* Terms & Conditions Checkbox */}
        <Form.Item
          name="termsAndConditions"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please accept the terms and conditions!",
            },
          ]}
        >
          <div className="mb-4">
            <Checkbox style={{ color: "" }}>
              I agree with Virtue Hope's{" "}
              <Link to={""} onClick={showTermModal} className="underline">
                terms & conditions.
              </Link>
            </Checkbox>
          </div>
        </Form.Item>

        {/* Modal Buttons */}

        <div className=" flex flex-col md:flex-row md:justify-end justify-start  lg:flex-row  lg:justify-end mt-5 mb-2">
          <Button onClick={closeVolunteerModal} className="  navBtn1  ">
            Cancel
          </Button>
          <Button htmlType="submit" className="navBtn2">
            Apply now
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default VolunteerModal;
