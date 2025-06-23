import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiUpload } from "react-icons/fi";
import useAxiosPublic from "../../../pages/hooks/useAxiosPublic";
import { imgUrl } from "../../../helper/imgUrl";
import toast from "react-hot-toast";

export default function UpdateProfile({ updateProfileModal, setUpdateProfileModal }) {
  const axiosPublic = useAxiosPublic();
  const token = localStorage.getItem("token");

  const { register, handleSubmit, reset, setValue } = useForm();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
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

    if (updateProfileModal) {
      fetchUserData();
    }
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
        await axiosPublic.get("/profile", config);
        toast.success("Profile updated successfully");
        reset();
        setFile(null);
        setPreviewUrl(null);
        setUpdateProfileModal(false);
      }
    } catch (error) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!updateProfileModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6 relative">
        

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
              <label className="cursor-pointer bg-btnColor text-white px-4 py-2 rounded-lg flex items-center gap-2">
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
            className={`w-full h-11 rounded-lg font-semibold text-white ${loading ? "bg-gray-400" : "bg-btnColor"
              }`}
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}
