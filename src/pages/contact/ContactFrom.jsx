import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Upload,
  Button,
  Select,
  Checkbox,
  Modal,
} from "antd";

import AggrementPage from "../aggrement/AggrementPage";
import PersonalDetailModal from "../../components/client/auctionModal/PersonalDetailModal";
import CardNumberModal from "../../components/client/auctionModal/CardNumberModal";


const { Option } = Select;

const ContactFrom = () => {
  const [form] = Form.useForm();
  const donateFull = Form.useWatch("donateFull", form);
  // 1st modal useState
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

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



  // 2nd modal end

  useEffect(() => {
    if (donateFull) {
      form.setFieldValue("percentage", null);
    }
  }, [donateFull]);

  useEffect(() => {
    document.body.style.overflow =
      firstModal || secondModal ? "hidden" : "auto";
  }, [firstModal, secondModal]);

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

      {/* 1st  Modal */}

      <div className=" ">
        <Modal
          open={firstModal}
          centered
          closable={false}
          footer={null}
          width={600}
        >
          <PersonalDetailModal
            setFirstModal={setFirstModal}
            setSecondModal={setSecondModal}
          />
        </Modal>
      </div>

      {/* second Modal */}

      {
        <Modal
          title=""
          // onCancel={handleCancel}
          open={secondModal}
          footer={null}
          width={400}
          closable={false}
        >
        <CardNumberModal setFirstModal = {setFirstModal} setSecondModal = {setSecondModal} />

        </Modal>
      }

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
