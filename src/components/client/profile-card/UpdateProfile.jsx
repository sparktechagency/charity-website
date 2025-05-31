import { Form, Input, Button, Upload, message } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import { imgUrl } from "../../../helper/imgUrl";
import toast from "react-hot-toast";

export default function UserForm({ updateProfileModal, setUpdateProfileModal }) {
  const axiosPublic = useAxiosPublic();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [user, setUserData] = useState("")

  useEffect(() => {
    fetchUserData();
  }, [form]);

  const fetchUserData = async () => {
    try {
      const response = await axiosPublic.get("/profile", config);
      let user = response.data?.data;

      form.setFieldsValue({
        full_name: user.full_name,
      });

      if (user.image) {
        setFileList([
          {
            uid: "-1",
            name: "profile.jpg",
            status: "done",
            url: `${imgUrl}/${user.image}`,
          },
        ]);
      }
    } catch (err) {
      console.error("Failed to load user info", err);
    }
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("full_name", values.full_name);

      const file = fileList[0];
      if (file?.originFileObj) {
        formData.append("image", file.originFileObj);
      }

      await axiosPublic.post("/update-profile?_method=PUT", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("User information submitted successfully!");

      // Re-fetch updated data
      await fetchUserData();

      form.resetFields();
      setFileList([]);
      setUpdateProfileModal(false);
    } catch (error) {
      message.error("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    document.body.style.overflow = updateProfileModal ? "hidden" : "auto";
  }, [updateProfileModal]);

  return (
    <div className="w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">
        User Information
      </h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="space-y-4"
      >
        <Form.Item
          label={<span className="text-sm sm:text-base">Full Name</span>}
          name="full_name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter your full name"
            className="py-2"
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-sm sm:text-base lg:w-full ">Upload Image</span>}
          name="image"
        >
          <Upload.Dragger
            name="image"
            listType="picture"
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={() => false}
          >
            <Button
              icon={<UploadOutlined />}
              className="flex lg:flex items-center justify-start bg-btnColor  text-white font-semibold px-4 py-2  rounded-lg"
            >
              Upload Image
            </Button>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            htmlType="submit"
            className="lg:w-full bg-btnColor border-none h-11 font-semibold text-white rounded-lg"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
