import { EyeOutlined } from "@ant-design/icons";
import { Input, Pagination, Select, Space, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

const Volunteers = () => {
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("");

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
                    <p className="text-[#DA453F]">{record.action}</p>
                    <p className="cursor-pointer">
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

        {/* pagination */}
        <div className="flex justify-end pt-4">
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
