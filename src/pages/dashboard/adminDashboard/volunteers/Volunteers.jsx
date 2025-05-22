import { EyeOutlined } from "@ant-design/icons";
import { Input, Modal, Pagination, Select, Space, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeVlounterModalOpenOne,
  closeVlounterModalOpenTwo,
  volunterModalOpenOne,
  volunterModalOpenTwo,
} from "../../../../features/modal/modalSlice";
import { useGetAllVolunterDataQuery } from "../../../../redux/dashboardFeatures/getVolunteersApi";
import CustomLoading from "../../shared/CustomLoading";

const Volunteers = () => {
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);


  const dispatch = useDispatch();
  const volunteerModalOne = useSelector(
    (state) => state.modal.volunterModalOne
  );
  const volunterModalTwo = useSelector((state) => state.modal.volunterModalTwo);

  const { data, isLoading, refetch } = useGetAllVolunterDataQuery({ page: currentPage, per_page: perPage, search: searchText, status: selectValue });

  const allVolunterData = data?.data?.data

  console.log(allVolunterData)
  // ====== vounter modal one start ===========
  const volunterModalCancelOne = () => {
    dispatch(closeVlounterModalOpenOne());
  };
  const showVolunterModalOne = () => {
    dispatch(volunterModalOpenOne());
  };
  const volunterModalOkOne = () => {
    dispatch(closeVlounterModalOpenOne());
  };
  // ====== vounter modal one end ===========

  // ====== vounter modal two start ===========
  const showVolunterModalTwo = () => {
    dispatch(volunterModalOpenTwo());
  };
  const volunterModalOkTwo = () => {
    dispatch(closeVlounterModalOpenTwo());
  };

  const volunterModalCancelTwo = () => {
    dispatch(closeVlounterModalOpenTwo());
  };
  // ====== vounter modal two end ===========

  const columns = [
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
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Donated",
      dataIndex: "donated",
    },
    {
      title: "Action",
      key: "view",
      render: (_, record) => (
        <Space size="middle">
          <p
            onClick={showVolunterModalOne}
            className="cursor-pointer text-[#DA453F]"
          >
            {record.action}
          </p>
          <p
            onClick={showVolunterModalTwo}
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
  ]



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


  if (isLoading) return <CustomLoading />

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Manage volunteer
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
                dropdownStyle={{ background: "rgba(255, 255, 255, 0.24)"}}
                onChange={handleSelect}
              />
            </div>
          </div>

          <div>
            <Input.Search
              placeholder="Search name or email"
              className="custom-search"
              value={searchText} // Controlled value for the input
              onChange={handleSearchChange} // Handle search input change
              enterButton
            />
          </div>
        </div>

        <div className="overflow-x-auto relative z-10">
          <Table
            dataSource={allVolunterData}
            columns={columns}
            pagination={false}
            className="custom-ant-table"
            loading={isLoading}
          />
        </div>

        {/* modal Components */}
        <div>
          {/* modal one */}
          <Modal
            className="custom-ai-modal"
            centered
            open={volunteerModalOne}
            onOk={volunterModalOkOne}
            onCancel={volunterModalCancelOne}
            width={500}
            footer={
              <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
                <button
                  className="hover:bg-[#A6ABAC] px-6 rounded"
                  onClick={volunterModalCancelOne}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#ffffff] py-2 px-4 rounded"
                  onClick={volunterModalOkOne}
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

          {/* modal two */}
          <Modal
            className="custom-ai-modal"
            centered
            open={volunterModalTwo}
            onOk={volunterModalOkTwo}
            onCancel={volunterModalCancelTwo}
            width={500}
            footer={
              <div className="font-roboto flex justify-end">
                <button
                  className="bg-[#ffffff] py-2 px-4 rounded"
                  onClick={volunterModalOkTwo}
                >
                  Done
                </button>
              </div>
            }
          >
            <div>
              <div className="flex  items-center gap-3 border-b pb-4 border-gray-700">
                <div>
                  <img
                    src="/dashboardPhoto/dashboardLoginLogo.png"
                    alt="photo"
                    className="w-[40px]"
                  />
                </div>
                <div>
                  <h1 className="text-[14px] font-semibold text-[#ffffff]">
                    Sophia Mitchel
                  </h1>
                  <p className="text-[#D9D9D9]">sophiamitchel@gmail.com</p>
                </div>
              </div>

              <div className="pt-4">
                <h1 className="text-[20px] text-[#ffffff] font-semibold">
                  Personal details
                </h1>

                {/* Personal Information */}
                <div className="border-b border-gray-700 pb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6  mt-6">
                    <div className="space-y-2">
                      <p className="text-sm text-[#E9EBEB]">Contact number</p>
                      <p className="text-sm text-[#E9EBEB]">Location</p>
                      <p className="text-sm text-[#E9EBEB]">Joined</p>
                      <p className="text-sm text-[#E9EBEB]">Donated</p>
                    </div>
                    <div className="flex md:justify-end md:text-end">
                      <div className="space-y-2">
                        <p className="text-sm text-[#E9EBEB]">+123 4567 8978</p>
                        <p className="text-sm text-[#E9EBEB]">
                          Town Hall Albert Square
                        </p>
                        <p className="text-sm text-[#E9EBEB]">12 Mar, 2025</p>
                        <p className="text-sm text-[#E9EBEB]">$0.00</p>
                      </div>
                    </div>
                  </div>
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

export default Volunteers;
