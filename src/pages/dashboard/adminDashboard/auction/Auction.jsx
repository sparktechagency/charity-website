import { EyeOutlined } from "@ant-design/icons";
import { Input, Modal, Pagination, Select, Space, Table } from "antd";
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



const Auction = () => {
  const [searchText, setSearchText] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(1);






  const dispatch = useDispatch();
  const actionModalOne = useSelector((state) => state.modal.actionModalOne);
  const actionModalTwo = useSelector((state) => state.modal.actionModalTwo);
  const actionModalThree = useSelector((state) => state.modal.actionModalThree);
  const { data, isLoading, refetch } = useGetDashboardAuctionApiQuery({ search: searchText, status: statusValue });

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
  const showActionModalOne = () => {
    dispatch(actionModalOpenOne());
  };

  const actionModalOkOne = () => {
    dispatch(closeActionModalOpenOne());
  };
  const actionModalCancelOne = () => {
    dispatch(closeActionModalOpenOne());
  };
  //======== action modal one end =========

  //======== action modal two start =========
  const showActionModalTwo = () => {
    dispatch(actionModalOpenTwo());
  };

  const actionModalOkTwo = () => {
    dispatch(closeActionModalOpenTwo());
  };
  const actionModalCancelTwo = () => {
    dispatch(closeActionModalOpenTwo());
  };
  //======== action modal two end =========

  //======== action modal three start =========
  const showActionModalThree = () => {
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
              },
              {
                title: "",
                dataIndex: "donated",
              },
              {
                title: "Action",
                key: "view",
                render: (_, record) => (
                  <Space size="middle">
                    <p
                      onClick={showActionModalOne}
                      className="text-[#658A30] cursor-pointer"
                    >
                      Declare
                    </p>
                    <p
                      onClick={showActionModalTwo}
                      className="text-[#DA453F] cursor-pointer"
                    >
                      Remove
                    </p>
                    <p
                      onClick={showActionModalThree}
                      className="cursor-pointer"
                    >
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
            <div>
              <h1 className="text-[#E9EBEB] font-semibold text-[20px]">
                Declare auction
              </h1>
              <p className="text-[#A6ABAC]">
                Do you want to declare the auction?
              </p>
            </div>
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
                onClick={actionModalCancelTwo}
              >
                Yes, remove
              </button>
              <button
                className="bg-[#ffffff] py-2 px-4 rounded"
                onClick={actionModalOkTwo}
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
          <div>
            <div className="flex justify-between gap-4">
              <div>
                <h2 className="text-[24px] md:text-[48px] text-[#ffff] ">
                  The ancient statue <br /> of Sri Lanka
                </h2>
                <div className="flex flex-col ">
                  <p className="text-[#ffff] py-2">
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
                    <p>07:03: 39sec left</p>
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
                    <h3 className="text-[20px] text-[#ffffff] font-semibold">
                      Alexander Pope
                    </h3>
                    <h4 className="text-[#E9EBEB]">Contributor</h4>
                  </div>
                </div>

                <div className="bg-[#4B5557] text-[#ffffff] p-4 rounded-lg max-w-[433px] mt-4">
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

                <div className="pt-4">
                  <button className="bg-[#ffffff] text-[#403730] p-2 rounded-lg">
                    Mark this auction as featured
                  </button>
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
