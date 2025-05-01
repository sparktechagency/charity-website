import { EyeOutlined } from "@ant-design/icons";
import { Input, Modal, Pagination, Select, Space, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeVlounterModalOpenOne,
  closeVlounterModalOpenTwo,
  volunterModalOpenOne,
  volunterModalOpenTwo,
} from "../../../../features/modal/modalSlice";
import { useGetAllVolunterDataQuery } from "../../../../redux/dashboardFeatures/getVolunteersApi";

const Volunteers = () => {
  const {getAllVolunterData} = useGetAllVolunterDataQuery();
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("");
  const dispatch = useDispatch();
  const volunteerModalOne = useSelector(
    (state) => state.modal.volunterModalOne
  );
  const volunterModalTwo = useSelector((state) => state.modal.volunterModalTwo);

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

  const dataSource = [
    {
      key: 1,
      name: "kodom ali",
      email: "kodom @ gmail.com",
      contactNumber: "012455",
      approvedAction: "05",
      soldOut: "54546464",
      donated: "85464684",
      action: "Suspend",
    },
    {
      key: 2,
      name: "Rashed Hossain",
      email: "rashed@gmail.com",
      contactNumber: "013456",
      approvedAction: "03",
      soldOut: "34567890",
      donated: "12345678",
      action: "Suspend",
    },
    {
      key: 3,
      name: "Shahina Begum",
      email: "shahina@outlook.com",
      contactNumber: "014567",
      approvedAction: "06",
      soldOut: "7891011",
      donated: "11223344",
      action: "Suspend",
    },
    {
      key: 4,
      name: "Mizanur Rahman",
      email: "mizan@ymail.com",
      contactNumber: "015678",
      approvedAction: "02",
      soldOut: "99887766",
      donated: "66554433",
      action: "Suspend",
    },
    {
      key: 5,
      name: "Selina Parvin",
      email: "selina@hotmail.com",
      contactNumber: "016789",
      approvedAction: "07",
      soldOut: "10293847",
      donated: "38475639",
      action: "Suspend",
    },
    {
      key: 6,
      name: "Abdul Kader",
      email: "abdukader@gmail.com",
      contactNumber: "017890",
      approvedAction: "04",
      soldOut: "76543210",
      donated: "12345678",
      action: "Suspend",
    },
    {
      key: 7,
      name: "Nusrat Jahan",
      email: "nusrat@live.com",
      contactNumber: "018901",
      approvedAction: "03",
      soldOut: "65432109",
      donated: "56473829",
      action: "Suspend",
    },
    {
      key: 8,
      name: "Fahim Shahin",
      email: "fahim@yahoo.com",
      contactNumber: "019012",
      approvedAction: "05",
      soldOut: "10293847",
      donated: "73829183",
      action: "Suspend",
    },
    {
      key: 9,
      name: "Kamal Hossain",
      email: "kamal@outlook.com",
      contactNumber: "020123",
      approvedAction: "01",
      soldOut: "19384756",
      donated: "74638492",
      action: "Suspend",
    },
    {
      key: 10,
      name: "Arifa Akter",
      email: "arifa@gmail.com",
      contactNumber: "021234",
      approvedAction: "07",
      soldOut: "10293847",
      donated: "73829183",
      action: "Suspend",
    },
    {
      key: 11,
      name: "Rubi Sultana",
      email: "rubi@live.com",
      contactNumber: "022345",
      approvedAction: "06",
      soldOut: "54673892",
      donated: "84736291",
      action: "Suspend",
    },
    {
      key: 12,
      name: "Tariq Jamil",
      email: "tariq@gmail.com",
      contactNumber: "023456",
      approvedAction: "04",
      soldOut: "56783921",
      donated: "93148362",
      action: "Suspend",
    },
    {
      key: 13,
      name: "Farhana Akter",
      email: "farhana@ymail.com",
      contactNumber: "024567",
      approvedAction: "02",
      soldOut: "11223344",
      donated: "44556677",
      action: "Suspend",
    },
    {
      key: 14,
      name: "Mashiur Rahman",
      email: "mashiur@hotmail.com",
      contactNumber: "025678",
      approvedAction: "01",
      soldOut: "98765432",
      donated: "12345678",
      action: "Suspend",
    },
    {
      key: 15,
      name: "Shahidul Alam",
      email: "shahidul@live.com",
      contactNumber: "026789",
      approvedAction: "05",
      soldOut: "12345678",
      donated: "87654321",
      action: "Suspend",
    },
    {
      key: 16,
      name: "Samiul Islam",
      email: "samiul@yahoo.com",
      contactNumber: "027890",
      approvedAction: "06",
      soldOut: "23456789",
      donated: "45678901",
      action: "Suspend",
    },
  ];

  const handleSelect = (value) => {
    console.log(value);
  };

  
  console.log(getAllVolunterData)
  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Manage volunteer
            </h2>
            <div>
              <Select
                showSearch
                placeholder="Volunteer"
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
              placeholder="Search volunteer..."
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
            dataSource={dataSource}
            columns={[
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
                    String(record.approvedAction)
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
                dataIndex: "contactNumber",
              },
              {
                title: "Approved action",
                dataIndex: "approvedAction",
              },
              {
                title: "Sold out",
                dataIndex: "soldOut",
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
            ]}
            pagination={false}
            className="custom-ant-table"
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
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
