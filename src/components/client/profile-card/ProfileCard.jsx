import { Modal, Card, Avatar, Button } from "antd";
import { EditOutlined, LogoutOutlined } from "@ant-design/icons";
import { imgUrl } from "../../../helper/imgUrl";

const ProfileCard = ({ handleLogout, closeProfileCardModal, profileData, onEdit, onLogout }) => {
  console.log(profileData.image);
  return (
    <Card
      className="border-none shadow-none"
      cover={
        <div className="h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
      }
    >
      <div className="flex flex-col items-center -mt-12">
        <Avatar
          size={80}
          src={`http://137.59.180.219:8000/${
            profileData?.image || "default-image/defaultImage.jpg"
          }`}
          className="border-4 border-white shadow-md"
        />

        <h2 className="text-xl font-bold mt-4">
          {profileData?.full_name || "John Doe"}
        </h2>
        <p className="text-gray-500">
          {profileData?.email || "johndoe@example.com"}
        </p>

        <div className="flex gap-4 mt-6">
          <Button
            icon={<EditOutlined />}
            onClick={onEdit}
            className="bg-btnColor border-none text-white  rounded-lg font-semibold"
          >
            Edit
          </Button>
          <Button
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            danger
            className="rounded-lg font-semibold border-none "
          >
            Logout
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
