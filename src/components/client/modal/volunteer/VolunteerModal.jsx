import { Form } from "antd";
import React, { useState } from "react";
import { Modal, Input, Button, Checkbox, Upload, Radio } from "antd";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../pages/hooks/useAxiosPublic";
const { Dragger } = Upload;

const VolunteerModal = ({ setIsVolunterModal, setGeneralTerm }) => {
  const axiosPublic = useAxiosPublic();
  const closeVolunteerModal = () => {
    setIsVolunterModal(false);
  };

  const openGeneralTermModal = () => {
    setGeneralTerm(true);
  };

  const [fileList, setFileList] = useState([]);
  console.log(`Uploaded images:  ${fileList}`);

  // Handle file change (dragging or selecting a file)
  const handleFileChange = (info) => {
    let files = [...info.fileList];
    setFileList(files);
  };




  // Handle form submission
  const handleSubmit = async (values) => {
    const formData = new FormData();

    // Append form fields to formData
    for (let key in values) {
      formData.append(key, values[key]);
    }

    // Append each file from fileList
    fileList.forEach((file) => {
      formData.append("upload_cv", file.originFileObj);
    });

    // Log each entry of FormData
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Log key and value of FormData
    }

    // Simulate FormData inspection
    console.log("Form Data object: ", formData);

    try {
      const res = await axiosPublic.post("/create-volunteer", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
      console.log("response is ", res);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Form submission attempt finished");
    }
  };




  return (
    <div>
      <h1 className="text-[#263234] font-semibold leading-8 text-3xl mb-6">
        Get Involved as a Volunteer
      </h1>

      <Form layout="vertical" onFinish={handleSubmit}>
        {/* Name Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="name"
          label="Name"
          rules={[
            { required: true, message: "Please input your name!" },
            { min: 6, message: "Name must be at least 6 characters!" },
          ]}
        >
          <Input
            style={{
              border: "1px solid #A6ABAC",
              padding: "10px 14px",
              lineHeight: "24px",
              fontSize: "16px",
            }}
            placeholder="Enter your name"
          />
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Enter a valid email!" },
          ]}
        >
          <Input
            style={{
              border: "1px solid #A6ABAC",
              padding: "10px 14px",
            }}
            type="email"
            placeholder="Enter your email address"
          />
        </Form.Item>

        {/* Contact Number Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="contact_number"
          label="Contact number"
          rules={[
            { required: true, message: "Please input your contact number!" },
          ]}
        >
          <Input
            style={{
              border: "1px solid #A6ABAC",
              padding: "10px 14px",
              lineHeight: "24px",
              fontSize: "16px",
            }}
            placeholder="Enter your contact number"
          />
        </Form.Item>

        {/* Location Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="location"
          label="Location"
          rules={[{ required: true, message: "Please input your location!" }]}
        >
          <Input
            style={{
              border: "1px solid #A6ABAC",
              padding: "10px 14px",
              lineHeight: "24px",
              fontSize: "16px",
            }}
            placeholder="Street, City name & State name"
          />
        </Form.Item>

        {/* Why Volunteer Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="reason"
          label="Why do you want to be a Volunteer"
          rules={[
            {
              required: true,
              message: "Please input why you want to be a volunteer!",
            },
            { min: 6, message: "Description must be at least 6 characters!" },
          ]}
        >
          <Input.TextArea
            style={{
              border: "1px solid #A6ABAC",
              padding: "10px 14px",
              lineHeight: "24px",
              fontSize: "16px",
            }}
            placeholder="Enter a description..."
            rows={4}
          />
        </Form.Item>

        {/* File Upload Field */}
        <Form.Item
          style={{ marginBottom: "0px" }}
          name="upload_cv"
          label="Upload your CV"
          rules={[{ required: true, message: "Please Upload your CV!" }]}
        >
          <Dragger
            accept=".doc,.docx,.pdf,.jpg,.jpeg,.png"
            style={{ border: "2px dotted #E9EBEB" }}
            beforeUpload={() => false} // Prevent auto upload
            onChange={handleFileChange}
          >
            <div className="text-start">
              <p className="ant-upload-drag-icon">
                <span>{/* SVG Icon here */}</span>
              </p>
              <p className="ant-upload-text text-[#263234] font-semibold text-[16px] mb-1">
                Click or drag file to this area to upload
              </p>
              <p className="text-sm text-[#4B5557] leading-5 mt-2 mb-6">
                Supported format: JPG, JPEG, PNG, PDF
              </p>
            </div>
          </Dragger>
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
          <Checkbox>
            I agree with Virtue Hope's{" "}
            <Link onClick={openGeneralTermModal} className="underline">
              terms & conditions.
            </Link>
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <div className="flex flex-col md:flex-row md:justify-end justify-start lg:flex-row lg:justify-end mt-5 mb-2">
          <Button onClick={closeVolunteerModal} className="navBtn1">
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
