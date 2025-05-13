import { EyeOutlined } from "@ant-design/icons";
import { Form, Input, InputNumber, Modal, Pagination, Select, Space, Table, Upload } from "antd";
import { EyeIcon, UploadCloud } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionModalOpenFour,
  actionModalOpenOne,
  actionModalOpenThree,
  actionModalOpenTwo,
  closeActionModalOpenFour,
  closeActionModalOpenOne,
  closeActionModalOpenThree,
  closeActionModalOpenTwo,
} from "../../../../features/modal/modalSlice";

import CustomLoading from "../../shared/CustomLoading";
import { useGetDashboardAuctionApiQuery } from "../../../../redux/dashboardFeatures/dashboardAuctionApi";
import { useDeleteActionMutation, useUpdateActionMutation, } from "../../../../redux/dashboardFeatures/getActionApi";
import { useForm } from "antd/es/form/Form";
import toast from "react-hot-toast";
import { usePDF } from 'react-to-pdf';



const Auction = () => {
  const [formOne] = useForm();
  const [formFour] = useForm();
  const [selectId, setSelectId] = useState('')
  const [modalThreeData, setModalThreeData] = useState({})
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [ImageFileListOne, setImageFileListOne] = useState([]);
  const [ImageFileListTwo, setImageFileListTwo] = useState([]);

  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' }); // pdf file download for





  const dispatch = useDispatch();
  const actionModalOne = useSelector((state) => state.modal.actionModalOne);
  const actionModalTwo = useSelector((state) => state.modal.actionModalTwo);
  const actionModalThree = useSelector((state) => state.modal.actionModalThree);
  const actionModalFour = useSelector((state) => state.modal.actionModalFour);
  const { data, isLoading, refetch } = useGetDashboardAuctionApiQuery({ page: currentPage, per_page: perPage, search: searchText, status: selectValue });
  const [deleteAction] = useDeleteActionMutation();
  const [updateAction] = useUpdateActionMutation();






  const allAuctionData = data?.data?.data




  // useEffect(() => {
  //   if (singleTeamData?.photo) {
  //     const imageObj = {
  //       uid: '-1',
  //       name: 'existing_image.jpg',
  //       status: 'done',
  //       url: `${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singleTeamData?.photo}`
  //       // url: singleTeamData.photo,
  //     };

  //     // First set form values
  //     formThree.setFieldsValue({
  //       name: singleTeamData.name,
  //       designation: singleTeamData.designation,
  //       work_experience: singleTeamData.work_experience,
  //       twitter_link: singleTeamData.twitter_link,
  //       linkedIn_link: singleTeamData.linkedIn_link,
  //       instagram_link: singleTeamData.instagram_link,
  //       image: [imageObj], // ✅ use it after defining
  //     });

  //     // Then set image file list
  //     setImageFileList([imageObj]);
  //   }
  // }, [singleTeamData]);






  //======== action modal one start =========
  const onFinishOne = async (values) => {

    const formData = new FormData();

    formData.append("start_budget", values.start_budget)
    formData.append("end_budget", values.end_budget)
    formData.append("duration", values.duration)
    formData.append("_method", "PUT");

    //  console.log(formData.forEach(value => {
    //     console.log(value)
    //   }))

    try {
      const res = await updateAction({
        updateInfo: formData,
        auction_id: selectId,
      }).unwrap()
      console.log(res)

      if (res?.data) {
        toast.success(res?.message)
        formOne.resetFields();
        dispatch(closeActionModalOpenOne());
      }
    }
    catch (errors) {
      toast.error(errors?.message);
    }
  }


  const showActionModalOne = (record) => {
    setSelectId(record?.id)
    dispatch(actionModalOpenOne());
  };

  const actionModalOkOne = () => {
    formOne.submit()

  };
  const actionModalCancelOne = () => {
    dispatch(closeActionModalOpenOne());
  };
  //======== action modal one end =========

  //======== action modal two start =========
  const showActionModalTwo = (record) => {
    setSelectId(record?.id)
    dispatch(actionModalOpenTwo());
  };

  const actionModalOkTwo = async () => {
    try {
      const res = await deleteAction({ id: selectId }).unwrap()
      if (res?.data) {
        refetch()
        toast.success(res?.message)
        dispatch(closeActionModalOpenTwo());
      }
    } catch (errors) {
      toast.error(errors?.message)
    }



  };
  const actionModalCancelTwo = () => {
    dispatch(closeActionModalOpenTwo());
  };
  //======== action modal two end =========

  //======== action modal three start =========
  const showActionModalThree = (record) => {
    setSelectId(record?.id)
    setModalThreeData(record)
    dispatch(actionModalOpenThree());
  };

  const actionModalOkThree = () => {
    dispatch(closeActionModalOpenThree());
  };
  const actionModalCancelThree = () => {
    dispatch(closeActionModalOpenThree());
  };
  //======== action modal three end =========










  //======== action modal four start =========
  const onFinishFour = (values) => {

    const formData = new FormData();
    if (ImageFileListOne[0]?.originFileObj) {
      formData.append("photo", ImageFileListOne[0].originFileObj);
    }

    if (ImageFileListTwo[0]?.originFileObj) {
      formData.append("photo", ImageFileListTwo[0].originFileObj);
    }

    formData.append("title", values.title)
    formData.append("description", values.description)
    formData.append("donate_share", values.donate_share)
    formData.append("name", values.name)
    formData.append("email", values.email)
    formData.append("contact_number", values.contact_number)
    formData.append("city", values.city)
    formData.append("address", values.address)

    console.log(formData.forEach(value => {
      console.log(value)
    }))
  }

  const showActionModalFour = (record) => {
    setSelectId(record?.id)
    dispatch(actionModalOpenFour());

  };

  const actionModalOkFour = () => {
    formFour.submit()
    // dispatch(closeActionModalOpenFour());
  };
  const actionModalCancelFour = () => {
    dispatch(closeActionModalOpenFour());
  };
  //======== action modal four end =========





















  const handleSelect = (value) => {
    stetSelectValue(value)
  };


  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    // stetSelectValue(e.target.value)
    setCurrentPage(1); // Reset to the first page whenever the search term changes
  };

  useEffect(() => {
    refetch(); // Refetch the data when searchText, currentPage, or perPage changes
  }, [searchText, selectValue, currentPage, perPage, refetch]);



  useEffect(() => {
    document.body.style.overflow =
      actionModalFour
        ? "hidden"
        : "auto";
  }, [actionModalFour]);


  if (isLoading) return <CustomLoading />

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Manage auction listing
            </h2>
            <div className="relative z-50">
              <Select
                showSearch
                placeholder="Volunteer"
                style={{
                  width: "100%",
                  height: "30px",

                }}
                options={[
                  { value: "Pending", label: "Pending" },
                  { value: "Approved", label: "Approved" },
                  { value: "Suspended", label: "Suspended" },
                ]}
                dropdownStyle={{ background: "rgba(255, 255, 255, 0.24)" }}
                onChange={handleSelect}
              />
            </div>
          </div>

          <div>
            <Input.Search
              placeholder="Search volunteer..."
              className="custom-search"
              value={searchText} // Controlled value for the input
              onChange={handleSearchChange} // Handle search input change
              enterButton
            />
          </div>
        </div>

        {/* 
        // donate_share,
        // status,title, */}
        <div className="overflow-x-auto relative z-10">
          <Table
            dataSource={allAuctionData}
            columns={[
              {
                title: "Image",
                dataIndex: "image",
                render: (_, record) => {
                  const hasImage = record.image && record.image !== "null" && record.image !== null;

                  return hasImage ? (
                    <img
                      src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${record.image}`}
                      alt="user"
                      className="object-cover w-[30px] h-[30px] rounded-full"
                    />
                  ) : (
                    <div className="w-[30px] h-[30px]"></div> // Empty space
                  );
                },
              },
              {
                title: "Name",
                dataIndex: "name",
              },
              {
                title: "Email",
                dataIndex: "email",
              },
              {
                title: "Contact number",
                dataIndex: "contact_number",
              },
              {
                title: "City",
                dataIndex: "city",
              },
              {
                title: "Status",
                dataIndex: "status",
                render: (_, record) => (
                  <div>
                    {record.status}
                  </div>
                ),
              },

              {
                title: "Action",
                key: "view",
                render: (_, record) => (
                  <Space size="middle">
                    <p
                      onClick={() => showActionModalOne(record)}
                      className="text-[#658A30] cursor-pointer"
                    >
                      Declare
                    </p>

                    <p
                      onClick={() => showActionModalFour(record)}
                      className=" cursor-pointer"
                    >
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22V18H20V22H0ZM4 14H5.4L13.2 6.225L11.775 4.8L4 12.6V14ZM2 16V11.75L13.2 0.575C13.3833 0.391667 13.5958 0.25 13.8375 0.15C14.0792 0.05 14.3333 0 14.6 0C14.8667 0 15.125 0.05 15.375 0.15C15.625 0.25 15.85 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15833 18 3.425C18 3.675 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L6.25 16H2Z" fill="#658A30" />
                      </svg>

                    </p>

                    <p
                      onClick={() => showActionModalTwo(record)}
                      className=" cursor-pointer"
                    >
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z" fill="#FF5353" />
                      </svg>

                    </p>


                    <p
                      onClick={() => showActionModalThree(record)}
                      className="cursor-pointer"
                    >
                      {" "}
                      <EyeOutlined
                        style={{
                          color: "#A6ABAC",
                          fontSize: "18px",
                          cursor: "pointer",
                        }}
                      />
                    </p>
                  </Space>
                ),
              },
            ]}
            pagination={false}
            className="custom-ant-table"
          />
        </div>

        {/* modal components */}
        {/* modal one */}
        <Modal
          className="custom-ai-modal"
          centered
          open={actionModalOne}
          onOk={actionModalOkOne}
          onCancel={actionModalCancelOne}
          width={500}
          footer={
            <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
              <button
                className="hover:bg-[#A6ABAC] px-6 rounded"
                onClick={actionModalCancelOne}
              >
                Cancel
              </button>
              <button
                className="bg-[#ffffff] py-2 px-4 rounded"
                onClick={actionModalOkOne}
              >
                Yes, declare
              </button>
            </div>
          }
        >
          <div className="">
            <div className="pb-6">
              <h1 className="text-[#E9EBEB] font-semibold text-[20px]">
                Declare auction
              </h1>
            </div>
            <Form form={formOne} onFinish={onFinishOne}>
              {/* maximum budget */}
              <div>
                <p className="text-[#fff]">Maximum budget</p>
                <Form.Item name="start_budget" rules={[
                  { required: true, message: 'Please enter the maximum budget' },
                  {
                    type: 'number',
                    min: 0,
                    message: 'Budget must be a positive number',
                  },
                ]}>
                  <InputNumber style={{ width: "100%", height: "40px", backgroundColor: "transparent", WebkitTextFillColor: "#fff", }}
                  />
                </Form.Item>
              </div>

              {/* minimum budget */}
              <div>
                <p className="text-[#fff]">Minimum budget</p>
                <Form.Item name="end_budget" rules={[
                  { required: true, message: 'Please enter the minimum budget' },
                  {
                    type: 'number',
                    min: 0,
                    message: 'Budget must be a positive number',
                  },
                ]}>
                  <InputNumber style={{ width: "100%", height: "40px", backgroundColor: "transparent", WebkitTextFillColor: "#fff", }} />
                </Form.Item>
              </div>
              {/* duration time */}
              <div>
                <p className="text-[#fff]">Duration time</p>
                <Form.Item name="duration" rules={[
                  { required: true, message: 'Please enter the duration time' },
                  {
                    type: 'number',
                    min: 1,
                    message: 'Duration must be at least 1',
                  },
                ]}>
                  <InputNumber style={{ width: "100%", height: "40px", backgroundColor: "transparent", WebkitTextFillColor: "#fff", }} />
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>

        {/* modal two */}
        <Modal
          className="custom-ai-modal"
          centered
          open={actionModalTwo}
          onOk={actionModalOkTwo}
          onCancel={actionModalCancelTwo}
          width={500}
          footer={
            <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
              <button
                className="hover:bg-[#A6ABAC] text-[#DA453F] px-6 rounded"
                onClick={actionModalOkTwo}
              >
                Yes, remove
              </button>
              <button
                className="bg-[#ffffff] py-2 px-4 rounded"
                onClick={actionModalCancelTwo}
              >
                No, keep it
              </button>
            </div>
          }
        >
          <div className="">
            <div>
              <h1 className="text-[#E9EBEB] font-semibold text-[20px]">
                Remove auction
              </h1>
              <p className="text-[#A6ABAC]">
                Do you want to remove the auction <br /> permanently from your
                website?
              </p>
            </div>
          </div>
        </Modal>

        {/* modal three */}
        <Modal
          className="custom-auction-modal custom-view-modal"
          centered
          open={actionModalThree}
          onOk={actionModalOkThree}
          onCancel={actionModalCancelThree}
          width={1000}
          footer={null}
        >

          {/* address, city, contact_number, description, donate_share, duration, email, ennd_budget, image, name,profile, start_buget,status, title*/}

          <div>
            <div ref={targetRef} className="flex justify-between gap-4">
              <div>
                <span className="text-5xl font-semibold text-red-500"> {modalThreeData.id}</span>
                <h2 className="text-[24px] md:text-[48px]  ">
                  The ancient statue <br /> of Sri Lanka
                </h2>
                <div className="flex flex-col ">
                  <p className=" py-2">
                    Estimated price: <span>$5,900-$20,000</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <span>
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
                          d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                          fill="#263234"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                          fill="#263234"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                          fill="#263234"
                        />
                      </svg>
                    </span>
                    <p className="">07:03: 39sec left</p>
                  </div>
                </div>

                <div className="flex  items-center gap-2 pt-[24px]">
                  <div>
                    <img
                      src="/dashboardPhoto/dashboardLoginLogo.png"
                      alt="photo"
                      className="object-cover w-[40px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-[20px]  font-semibold">
                      Alexander Pope
                    </h3>
                    <h4 className="">Contributor</h4>
                  </div>
                </div>

                <div className="bg-[#4b55571e]  p-4 rounded-lg max-w-[433px] mt-4">
                  <p>
                    I am privileged to donate The Ancient Statue of Sri Lanka to
                    this auction, supporting Healing and Hope for Women. This
                    piece reflects the resilience of history, much like the
                    strength of the women this cause uplifts.
                  </p>

                  <p className="pt-4">
                    Your bid or donation can make a profound impact. Let us come
                    together to preserve both heritage and hope.
                  </p>
                </div>


              </div>

              <div>
                <img
                  src="/dashboardPhoto/contributors/photo1.png"
                  alt="contributors"
                />
              </div>
            </div>
            <div className="pt-4">
              <button onClick={() => toPDF()} className="bg-[#ffff] text-[#403730] py-2 px-6 rounded-lg">
                Download as PDF
              </button>
            </div>
          </div>
        </Modal>





        {/* modal four */}
        <Modal
          className="custom-ai-modal"
          centered
          open={actionModalFour}
          onOk={actionModalOkFour}
          onCancel={actionModalCancelFour}
          width={900}
          footer={
            <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
              <button
                className="hover:bg-[#A6ABAC] text-[#DA453F] px-6 rounded"
                onClick={actionModalCancelFour}
              >
                Cancel
              </button>

              <button
                className="bg-[#ffffff] py-2 px-4 rounded"
                onClick={actionModalOkFour}
              >
                Update
              </button>

            </div>
          }
        >
          <div className="">
            <Form form={formFour} onFinish={onFinishFour} style={{marginTop:"20px"}}>
              <div className="flex items-center gap-4">
                {/* name */}
                <div className="w-[50%]">
                  <p className="text-[#FFFFFF]">Name</p>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input
                      placeholder="Enter Your Name"
                      style={{ padding: "10px" }}
                    />
                  </Form.Item>
                </div>

                {/* email */}
                <div className="w-[50%]">
                  <p className="text-[#FFFFFF]">Email</p>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      placeholder="Enter Your Email"
                      style={{ padding: "10px" }}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* title */}
                <div className="w-[50%]">
                  <p className="text-[#FFFFFF]">Title</p>
                  <Form.Item
                    name="title"
                    rules={[{ required: true, message: "Please enter your title" }]}
                  >
                    <Input
                      placeholder="Enter Your Title"
                      style={{ padding: "10px" }}
                    />
                  </Form.Item>
                </div>

                {/* description */}
                <div className="w-[50%]">
                  <p className="text-[#FFFFFF]">Description</p>
                  <Form.Item
                    name="description"
                    rules={[{ required: true, message: "Please enter your description" }]}
                  >
                    <Input
                      placeholder="Enter Your description"
                      style={{ padding: "10px" }}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* city */}
                <div className="w-[50%]">
                  <p className="text-[#FFFFFF]">City</p>
                  <Form.Item
                    name="city"
                    rules={[{ required: true, message: "Please enter your city" }]}
                  >
                    <Input
                      placeholder="Enter Your City"
                      style={{ padding: "10px" }}
                    />
                  </Form.Item>
                </div>

                {/* address */}
                <div className="w-[50%]">
                  <p className="text-[#FFFFFF]">Address</p>
                  <Form.Item
                    name="address"
                    rules={[{ required: true, message: "Please enter your address" }]}
                  >
                    <Input
                      placeholder="Enter Your Address"
                      style={{ padding: "10px" }}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* contact number */}
                <div className="w-[50%]">
                  <p className="text-[#fff]">Contact number</p>
                  <Form.Item name="contact_number" rules={[
                    { required: true, message: 'Please enter the Contact number' },
                    {
                      type: 'number',
                      min: 1,
                      message: 'Contact number must be at least 1',
                    },
                  ]}>
                    <InputNumber style={{ width: "100%", height: "40px", backgroundColor: "transparent", WebkitTextFillColor: "#fff", }} />
                  </Form.Item>
                </div>

                {/* donate share */}
                <div className="w-[50%]">
                  <p className="text-[#fff]">Donate share</p>
                  <Form.Item name="donate_share" rules={[
                    { required: true, message: 'Please enter the Donate share' },
                    {
                      type: 'number',
                      min: 1,
                      message: 'Donate share must be at least 1',
                    },
                  ]}>
                    <InputNumber style={{ width: "100%", height: "40px", backgroundColor: "transparent", WebkitTextFillColor: "#fff", }} />
                  </Form.Item>
                </div>
              </div>

              {/* image */}
              <div className="flex justify-center border border-[#B6B6BA] rounded-md mb-2 pt-5">
                <Form.Item
                  className="md:col-span-2"
                  name="image"
                  rules={[
                    {
                      required: ImageFileListOne.length === 0,
                      message: "Image required!",
                    },
                  ]}
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListOne}
                    onChange={({ fileList }) => setImageFileListOne(fileList)}
                    listType="picture-card"
                    className="w-full"
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className="mt-2 text-[#fff]">Choose Your photo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>




              {/*profile image  */}
              <div className="flex justify-center border border-[#B6B6BA] rounded-md mb-2 pt-5">
                <Form.Item
                  className="md:col-span-2"
                  name="image"
                  rules={[
                    {
                      required: ImageFileListTwo.length === 0,
                      message: "Image required!",
                    },
                  ]}
                >
                  <Upload

                    accept="image/*"
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: true }}
                    fileList={ImageFileListTwo}
                    onChange={({ fileList }) => setImageFileListTwo(fileList)}
                    listType="picture-card"
                    className="w-full"
                    beforeUpload={() => false}
                  >
                    <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                      <UploadCloud className="w-5 h-5 text-gray-400" />
                      <span className="mt-2 text-[#fff]">Choose profile photo</span>
                    </div>
                  </Upload>
                </Form.Item>
              </div>

            </Form>
          </div>
        </Modal>







        {/* pagination */}
        <div className="flex justify-end pt-4">
          <Pagination
            current={currentPage}
            pageSize={perPage}
            total={data?.data?.total || 0}
            onChange={(page, pageSize) => {
              setCurrentPage(page)
              setPerPage(pageSize)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Auction;
