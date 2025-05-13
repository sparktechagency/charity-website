import { EyeOutlined } from "@ant-design/icons";
import { Form, Input, InputNumber, Modal, Pagination, Select, Space, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionModalOpenOne,
  actionModalOpenThree,
  actionModalOpenTwo,
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
  const [selectId, setSelectId] = useState('')
  const [modalThreeData, setModalThreeData] = useState({})
  const [searchText, setSearchText] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'}); // pdf file download for





  const dispatch = useDispatch();
  const actionModalOne = useSelector((state) => state.modal.actionModalOne);
  const actionModalTwo = useSelector((state) => state.modal.actionModalTwo);
  const actionModalThree = useSelector((state) => state.modal.actionModalThree);
  const { data, isLoading, refetch } = useGetDashboardAuctionApiQuery({ search: searchText, status: statusValue });
  const [deleteAction] = useDeleteActionMutation();
  const [updateAction] = useUpdateActionMutation();






  const allAuctionData = data?.data?.data

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset to the first page whenever the search term changes
  };

  useEffect(() => {
    refetch(); // Refetch the data when searchText, currentPage, or perPage changes
  }, [searchText, currentPage, perPage, refetch]);


  if (isLoading) return <CustomLoading />

  const handleSelect = (value) => {
    console.log(value);
  };

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



  if (isLoading) return <CustomLoading />

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Manage auction listing
            </h2>
            <div>
              <Select
                showSearch
                placeholder="Active"
                style={{
                  width: "100%",
                  height: "30px",
                }}
                options={[
                  { value: "approved", label: "Approved" },
                  { value: "pending", label: "Pending" },
                ]}
                dropdownStyle={{ background: "rgba(255, 255, 255, 0.24)" }}
                onChange={handleSelect}
              />
            </div>
          </div>

          <div>
            <Input.Search
              placeholder="Search contributors..."
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
        <div className="overflow-x-auto">
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
                filteredValue: [searchText],
                onFilter: (value, record) => {
                  return (
                    String(record.name)
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    String(record.email)
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    String(record.contactNumber)
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    String(record.DeclareAction)
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    String(record.soldOut)
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    String(record.donated)
                      .toLowerCase()
                      .includes(value.toLowerCase()) ||
                    String(record.action)
                      .toLowerCase()
                      .includes(value.toLowerCase())
                  );
                },
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
                    {record.id}
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
                      onClick={() => showActionModalTwo(record)}
                      className="text-[#DA453F] cursor-pointer"
                    >
                      Remove
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
          className="custom-ai-modal custom-view-modal"
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

        {/* pagination */}
        <div className="flex justify-end pt-4">
          <Pagination
            current={currentPage}
            pageSize={perPage}
            total={data?.data?.data?.total || 0}
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
