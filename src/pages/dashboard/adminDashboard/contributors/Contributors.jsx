import { EyeOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Pagination, Select, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalOpenOne,
  closeModalOpenThree,
  closeModalOpenTwo,
  modalOpenOne,
  modalOpenThree,
  modalOpenTwo,
} from "../../../../features/modal/modalSlice";
import { useGetDashboardContibutorsApiQuery } from "../../../../redux/dashboardFeatures/getDashboardContibutors";
import CustomLoading from "../../shared/CustomLoading";

const Contributors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(20);
  const [perPage, setPerPage] = useState(4);
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("");

  const dispatch = useDispatch();
  const modalOne = useSelector((state) => state.modal.modalOne);
  const modalTwo = useSelector((state) => state.modal.modalTwo);
  const modalThree = useSelector((state) => state.modal.modalThree);

  // const { data, isLoading,refetch } = useGetDashboardContibutorsApiQuery({ page: currentPage, per_page: perPage, search: searchText });

  const { data, isLoading, refetch } = useGetDashboardContibutorsApiQuery();




  const allContibutorData = data?.data?.contributors

  console.log(allContibutorData)








  // ============== modal one start =========
  const showModalOne = () => {
    dispatch(modalOpenOne());
  };

  const handleOkOne = () => {
    dispatch(closeModalOpenOne());
  };
  const handleCancelOne = () => {
    dispatch(closeModalOpenOne());
  };

  // ============== modal one end ===========

  // ============== modal two start =========
  const showModalTwo = () => {
    dispatch(modalOpenTwo());
  };
  const handleOkTwo = () => {
    dispatch(closeModalOpenTwo);
  };
  const handleCancelTwo = () => {
    dispatch(closeModalOpenTwo());
  };

  // ============== modal two end ===========

  // ============== modal three start ============
  const showModalThree = () => {
    dispatch(modalOpenThree());
    dispatch(closeModalOpenTwo());
  };
  const handleOkThree = () => {
    dispatch(closeModalOpenThree());
  };
  const handleCancelThree = () => {
    dispatch(closeModalOpenThree());
  };
  // ============== modal three end  =============

  // {max_bit_online, status, payment_status }
  // {auction_ title,profile,name,image,email,donate_share,description,contact_number,city,address,}
  // {user_  email,image,name  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => record?.auction?.name,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, record) => record?.auction?.email,
    },
    {
      title: "Contact number",
      dataIndex: "contact_number",
      render: (_, record) => record?.auction?.contact_number,
    },
    {
      title: "City",
      dataIndex: "city",
      render: (_, record) => record?.auction?.city,
    },
    {
      title: "Donate",
      dataIndex: "donate_share",
      render: (_, record) => record?.auction?.donate_share,
    },
    {
      title: "Payment status",
      dataIndex: "payment_status",
    },
    {
      title: "Action",
      key: "view",
      render: (_, record) => (
        <Space size="middle">
          <p
            onClick={showModalOne}
            className="text-[#DA453F] cursor-pointer"
          >
            {record.action}
          </p>
          <p onClick={showModalTwo} className="cursor-pointer">
            {" "}
            <EyeOutlined
              style={{
                color: "#A6ABAC",
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={() => handleView(record)}
            />
          </p>
        </Space>
      ),
    },
  ]

  const handleSelect = (value) => {
    console.log(value);
  };

  const handleclcik = () => {
    console.log("click");
  };

  useEffect(() => {
    refetch(); // Refetch the data when searchText, currentPage, or perPage changes
  }, [searchText, currentPage, perPage, refetch]);


  if (isLoading) return <CustomLoading />
  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Manage contributors
            </h2>
            <div>
              <Select
                showSearch
                placeholder="Approved"
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
              onSearch={(value) => {
                setSearchText(value);
              }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table
            dataSource={allContibutorData}
            columns={columns}
            pagination={false}
            className="custom-ant-table"
          />
        </div>

        {/* ============== modal components ========== */}
        <div>
          {/* modal one */}
          <Modal
            className="custom-ai-modal"
            centered
            open={modalOne}
            onOk={handleOkOne}
            onCancel={handleCancelOne}
            width={500}
            footer={
              <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
                <button
                  className="hover:bg-[#A6ABAC] px-6 rounded"
                  onClick={handleCancelOne}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#ffffff] py-2 px-4 rounded"
                  onClick={handleOkOne}
                >
                  Yes, suspend
                </button>
              </div>
            }
          >
            <p className="text-[20px] text-[#E9EBEB] py-6">
              Are you sure want to suspend this user?
            </p>
            <p className="text-[#A6ABAC] text-[16px]">
              Once you suspend the user is no longer available to use the
              application.
            </p>
          </Modal>

          <Modal
            className="custom-ai-modal"
            centered
            open={modalTwo}
            onOk={handleOkTwo}
            onCancel={handleCancelTwo}
            width={600}
            footer={
              <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
                <button
                  className="text-[#FFFFFF] hover:bg-[#A6ABAC] hover:text-gray-900 px-6 rounded"
                  onClick={handleCancelTwo}
                >
                  Go back
                </button>
                <button
                  className="bg-[#ffffff] py-2 px-4 rounded"
                  onClick={handleOkTwo}
                >
                  Download as PDF
                </button>
              </div>
            }
          >
            <div>
              <div className="flex gap-3 border-b border-gray-600 pb-4">
                <div className="">
                  <img
                    src="/dashboardPhoto/dashboardLoginLogo.png"
                    alt="login logo"
                    className="object-cover w-[40px]"
                  />
                </div>
                <div className="">
                  <h1 className="text-[24px] font-bold text-[#ffffff]">
                    Sophia Mitchel
                  </h1>
                  <p className="text-[#D9D9D9]">sophiamitchel@gmail.com</p>
                </div>
              </div>

              <div className="border-b border-gray-600 pb-4">
                <h2 className="font-bold text-[16px] text-[#ffffff] py-6">
                  Personal details
                </h2>
                <div className="flex items-center justify-between ">
                  <div className="text-[#ffff]">
                    <p>Contact number</p>
                    <p>City</p>
                    <p>Address</p>
                  </div>

                  <div className="text-end text-[#ffff]">
                    <p>+123 4567 8978</p>
                    <p>Manchester</p>
                    <p>Town Hall Albert Square</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-600 pb-4 text-[#ffffff] pt-4">
                <p className="font-bold text-[16px]">Payment method</p>
                <p className="font-bold text-[16px]">Stripe</p>
              </div>

              <div className="flex justify-between items-center py-4">
                <p className="text-[#ffff] font-bold text-[16px]">
                  Approved auctions
                </p>
                <p className="bg-[#4B5557] w-10 h-8 flex justify-center items-center rounded-full">
                  04
                </p>
              </div>

              {/* view section */}
              <div className="border-b border-gray-600 pb-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-[#ffffff]">
                        Hearts & Bids Charity Auction for a Cause
                      </h2>
                      <div className="flex items-center gap-2 text-[#A6ABAC]">
                        <span>Price range: $1,200-$2,500</span>
                        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        <span>Sold out</span>
                      </div>
                    </div>
                    <div
                      onClick={showModalThree}
                      className="cursor-pointer text-[#1890FF] font-semibold"
                    >
                      View
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-[#ffffff]">
                        Hearts & Bids Charity Auction for a Cause
                      </h2>
                      <div className="flex items-center gap-2 text-[#A6ABAC]">
                        <span>Price range: $1,200-$2,500</span>
                        <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                        <span>Not sold</span>
                      </div>
                    </div>
                    <div
                      onClick={showModalThree}
                      className="cursor-pointer text-[#1890FF] font-semibold"
                    >
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          <Modal
            className="custom-ai-modal custom-view-modal"
            centered
            open={modalThree}
            onOk={handleOkThree}
            onCancel={handleCancelThree}
            width={1000}
            footer={null}
          >
            <div>
              <div className="flex justify-between gap-4">
                <div>
                  <h2 className="text-[24px] md:text-[48px] text-[#ffff] ">
                    The ancient statue <br /> of Sri Lanka
                  </h2>
                  <div className="flex items-center gap-1">
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
                          d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2Z"
                          fill="#E9EBEB"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"
                          fill="#E9EBEB"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14C19 10.134 15.866 7 12 7ZM3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 18.9706 16.9706 23 12 23C7.02944 23 3 18.9706 3 14Z"
                          fill="#E9EBEB"
                        />
                      </svg>
                    </span>
                    <p className="text-[#ffff]">
                      Estimated price: <span>$5,900-$20,000</span>
                    </p>
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
                      <h3 className="text-[20px] text-[#ffffff] font-semibold">
                        Alexander Pope
                      </h3>
                      <h4 className="text-[#E9EBEB]">Contributor</h4>
                    </div>
                  </div>

                  <div className="bg-[#4B5557] text-[#ffffff] p-4 rounded-lg max-w-[433px] mt-4">
                    <p>
                      I am privileged to donate The Ancient Statue of Sri Lanka
                      to this auction, supporting Healing and Hope for Women.
                      This piece reflects the resilience of history, much like
                      the strength of the women this cause uplifts.
                    </p>

                    <p className="pt-4">
                      Your bid or donation can make a profound impact. Let us
                      come together to preserve both heritage and hope.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h1 className="text-[30px] font-bold text-[#FFFFFF] flex items-center gap-2">
                      $18000{" "}
                      <span className="text-[16px] font-normal">(12 bid)</span>
                    </h1>
                  </div>
                </div>

                <div>
                  <img
                    src="/dashboardPhoto/contributors/photo1.png"
                    alt="contributors"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>

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

export default Contributors;
