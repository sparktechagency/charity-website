import { Modal, Card, Avatar, Button } from "antd";
import { EditOutlined, LogoutOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { imgUrl } from "../../../helper/imgUrl";
import { FiUser, FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const ProfileCard = ({ handleLogout, setProfileCard, profileData }) => {
  const [updateProfileModal, setUpdateProfileModal] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic()
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const openUpdateProfileModal = () => {
    setUpdateProfileModal(true);
    setProfileCard(false);
  };

  const closeUpdateProfileModal = () => {
    setUpdateProfileModal(false);
  };

  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (updateProfileModal) {
      const fetchUserData = async () => {
        try {
          const res = await axiosPublic.get("/profile", config);
          const user = res.data?.data;
          setValue("full_name", user.full_name);
          setPreviewUrl(`${imgUrl}/${user.image}`);
        } catch (err) {
          toast.error("Failed to load user info");
        }
      };
      fetchUserData();
    }
  }, [updateProfileModal, setValue]);

  useEffect(() => {
    document.body.style.overflow = updateProfileModal ? "hidden" : "auto";
  }, [updateProfileModal]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("full_name", data.full_name);

      if (file) {
        formData.append("image", file);
      }

      const res = await axiosPublic.post("/update-profile?_method=PUT", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      if (res) {
        toast.success("Profile updated successfully");
        reset();
        setFile(null);
        setPreviewUrl(null);
        setUpdateProfileModal(false); // ✅ Modal closes only on success
      } else {
        toast.error("Update failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card
        className="border-none shadow-none"
        cover={
          <div className="h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
        }
      >
        <div className="flex flex-col items-center -mt-12">
          <Avatar
            size={80}
            src={`${imgUrl}/${profileData?.image || "default-image/defaultImage.jpg"}`}
            className="border-4 border-white shadow-md"
          />

          <h2 className="text-xl font-bold mt-4">
            {profileData?.full_name || "John Doe"}
          </h2>
          <p className="text-gray-500">{profileData?.email || "johndoe@example.com"}</p>

          <div className="mt-5 flex flex-row lg:items-center lg:justify-center  gap-x-3 gap-y-5  ">
            <Button
              icon={<EditOutlined className="text-white" />}
              onClick={openUpdateProfileModal}
              className=" navBtn2   hover:bg-[#2e2723] text-white font-semibold px-6 py-2 rounded-md border-none  "
            >
              Edit
            </Button>
            <Button
              icon={<LogoutOutlined className="text-white" />}
              onClick={handleLogout}
              className="navBtn2  hover:bg-[#2e2723] text-white font-semibold px-6 py-2 rounded-md border-none"
            >
              Logout
            </Button>
          </div>
        </div>
      </Card>

      <Modal
        open={updateProfileModal}
        footer={null}
        onCancel={closeUpdateProfileModal}
        centered
        maskClosable={false}
        closeIcon={<span className="text-black text-2xl">×</span>}
        width={400}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Update Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-sm font-semibold mb-1 block">Full Name</label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-2">
                <FiUser className="text-gray-600" />
              </div>
              <input
                type="text"
                {...register("full_name", { required: true })}
                placeholder="Enter your name"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold mb-1 block">Upload Image</label>
            <div className="flex items-center gap-4">
              {previewUrl && (
                <img src={previewUrl} alt="Preview" className="w-16 h-16 rounded-full object-cover" />
              )}
              <label className="cursor-pointer bg-[#403730] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <FiUpload />
                Upload
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full h-11 rounded-lg font-semibold text-white ${loading ? "bg-gray-400" : "bg-[#403730]"
              }`}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </Modal>
      <Toaster position="top-end"></Toaster>
    </>
  );
};

export default ProfileCard;
