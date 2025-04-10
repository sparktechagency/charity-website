import { EyeOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Pagination, Select, Space, Table } from "antd";
import { useState } from "react";

const Contributors = () => {
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("");
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);

  // ============== modal one start =========
  const showModalOne = () => {
    setModalOne(true);
  };

  const handleOkOne = () => {
    setModalOne(false);
  };
  const handleCancelOne = () => {
    setModalOne(false);
  };

  // ============== modal one end ===========

  // ============== modal two start =========
  const showModalTwo = () => {
    setModalTwo(true);
  };
  const handleOkTwo = () => {
    setModalTwo(false);
  };
  const handleCancelTwo = () => {
    setModalTwo(false);
  };

  // ============== modal two end ===========

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
            ]}
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
                    <div className="text-[#1890FF] font-semibold">View</div>
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
                    <div className="text-[#1890FF] font-semibold">View</div>
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

export default Contributors;
