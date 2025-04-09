import { EyeOutlined } from "@ant-design/icons";
import { Input, Pagination, Select, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

const Contributors = () => {
  const [searchText, setSearchText] = useState("");
  const dataSource = [
    {
      key: 1,
      name: "kodom ali",
      email: "kodom @ gmail.com",
      contactNumber: "012455",
      approvedAction: "05",
      soldOut: "54546464",
      donated: "85464684",
      action: "suspered",
    },
    {
      key: 2,
      name: "Rashed Hossain",
      email: "rashed@gmail.com",
      contactNumber: "013456",
      approvedAction: "03",
      soldOut: "34567890",
      donated: "12345678",
      action: "approved",
    },
    {
      key: 3,
      name: "Shahina Begum",
      email: "shahina@outlook.com",
      contactNumber: "014567",
      approvedAction: "06",
      soldOut: "7891011",
      donated: "11223344",
      action: "pending",
    },
    {
      key: 4,
      name: "Mizanur Rahman",
      email: "mizan@ymail.com",
      contactNumber: "015678",
      approvedAction: "02",
      soldOut: "99887766",
      donated: "66554433",
      action: "approved",
    },
    {
      key: 5,
      name: "Selina Parvin",
      email: "selina@hotmail.com",
      contactNumber: "016789",
      approvedAction: "07",
      soldOut: "10293847",
      donated: "38475639",
      action: "suspered",
    },
    {
      key: 6,
      name: "Abdul Kader",
      email: "abdukader@gmail.com",
      contactNumber: "017890",
      approvedAction: "04",
      soldOut: "76543210",
      donated: "12345678",
      action: "approved",
    },
    {
      key: 7,
      name: "Nusrat Jahan",
      email: "nusrat@live.com",
      contactNumber: "018901",
      approvedAction: "03",
      soldOut: "65432109",
      donated: "56473829",
      action: "pending",
    },
    {
      key: 8,
      name: "Fahim Shahin",
      email: "fahim@yahoo.com",
      contactNumber: "019012",
      approvedAction: "05",
      soldOut: "10293847",
      donated: "73829183",
      action: "approved",
    },
    {
      key: 9,
      name: "Kamal Hossain",
      email: "kamal@outlook.com",
      contactNumber: "020123",
      approvedAction: "01",
      soldOut: "19384756",
      donated: "74638492",
      action: "approved",
    },
    {
      key: 10,
      name: "Arifa Akter",
      email: "arifa@gmail.com",
      contactNumber: "021234",
      approvedAction: "07",
      soldOut: "10293847",
      donated: "73829183",
      action: "suspered",
    },
    {
      key: 11,
      name: "Rubi Sultana",
      email: "rubi@live.com",
      contactNumber: "022345",
      approvedAction: "06",
      soldOut: "54673892",
      donated: "84736291",
      action: "approved",
    },
    {
      key: 12,
      name: "Tariq Jamil",
      email: "tariq@gmail.com",
      contactNumber: "023456",
      approvedAction: "04",
      soldOut: "56783921",
      donated: "93148362",
      action: "pending",
    },
    {
      key: 13,
      name: "Farhana Akter",
      email: "farhana@ymail.com",
      contactNumber: "024567",
      approvedAction: "02",
      soldOut: "11223344",
      donated: "44556677",
      action: "approved",
    },
    {
      key: 14,
      name: "Mashiur Rahman",
      email: "mashiur@hotmail.com",
      contactNumber: "025678",
      approvedAction: "01",
      soldOut: "98765432",
      donated: "12345678",
      action: "suspered",
    },
    {
      key: 15,
      name: "Shahidul Alam",
      email: "shahidul@live.com",
      contactNumber: "026789",
      approvedAction: "05",
      soldOut: "12345678",
      donated: "87654321",
      action: "approved",
    },
    {
      key: 16,
      name: "Samiul Islam",
      email: "samiul@yahoo.com",
      contactNumber: "027890",
      approvedAction: "06",
      soldOut: "23456789",
      donated: "45678901",
      action: "pending",
    },
    {
      key: 17,
      name: "Nabila Sultana",
      email: "nabila@outlook.com",
      contactNumber: "028901",
      approvedAction: "03",
      soldOut: "10293847",
      donated: "84736291",
      action: "approved",
    },
    {
      key: 18,
      name: "Abdul Qadir",
      email: "abdukadir@gmail.com",
      contactNumber: "029012",
      approvedAction: "07",
      soldOut: "38475639",
      donated: "93284756",
      action: "suspered",
    },
    {
      key: 19,
      name: "Rokeya Begum",
      email: "rokeya@hotmail.com",
      contactNumber: "030123",
      approvedAction: "02",
      soldOut: "23847362",
      donated: "56473839",
      action: "approved",
    },
    {
      key: 20,
      name: "Tahmina Hossain",
      email: "tahmina@ymail.com",
      contactNumber: "031234",
      approvedAction: "04",
      soldOut: "87462391",
      donated: "45673821",
      action: "pending",
    },
    {
      key: 21,
      name: "Azizur Rahman",
      email: "azizur@gmail.com",
      contactNumber: "032345",
      approvedAction: "01",
      soldOut: "91238476",
      donated: "74638492",
      action: "approved",
    },
    {
      key: 22,
      name: "Salma Akter",
      email: "salma@live.com",
      contactNumber: "033456",
      approvedAction: "07",
      soldOut: "98765432",
      donated: "12345678",
      action: "approved",
    },
    {
      key: 23,
      name: "Rina Sultana",
      email: "rina@ymail.com",
      contactNumber: "034567",
      approvedAction: "05",
      soldOut: "34875639",
      donated: "73829183",
      action: "suspered",
    },
    {
      key: 24,
      name: "Nasir Uddin",
      email: "nasir@yahoo.com",
      contactNumber: "035678",
      approvedAction: "02",
      soldOut: "10293847",
      donated: "38475639",
      action: "approved",
    },
    {
      key: 25,
      name: "Mofazzal Hossain",
      email: "mofazzal@live.com",
      contactNumber: "036789",
      approvedAction: "06",
      soldOut: "65748392",
      donated: "84736291",
      action: "approved",
    },
    {
      key: 26,
      name: "Anwar Hossain",
      email: "anwar@gmail.com",
      contactNumber: "037890",
      approvedAction: "03",
      soldOut: "12345678",
      donated: "54736291",
      action: "suspered",
    },
    {
      key: 27,
      name: "Kumari Saha",
      email: "kumari@outlook.com",
      contactNumber: "038901",
      approvedAction: "07",
      soldOut: "76543210",
      donated: "12345678",
      action: "approved",
    },
    {
      key: 28,
      name: "Sultana Begum",
      email: "sultana@live.com",
      contactNumber: "039012",
      approvedAction: "01",
      soldOut: "19384756",
      donated: "86547392",
      action: "approved",
    },
    {
      key: 29,
      name: "Kawsar Ali",
      email: "kawsar@gmail.com",
      contactNumber: "040123",
      approvedAction: "06",
      soldOut: "74839265",
      donated: "38475639",
      action: "pending",
    },
    {
      key: 30,
      name: "Shahana Sultana",
      email: "shahana@ymail.com",
      contactNumber: "041234",
      approvedAction: "04",
      soldOut: "11223344",
      donated: "93284756",
      action: "approved",
    },
  ];

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center pb-8">
          <div className="flex items-center gap-2">
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
                dropdownStyle={{ background: "#A6ABAC" }}
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
              dataIndex: "action",
            },
            {
              title: "",
              key: "view",
              render: (_, record) => (
                <EyeOutlined
                  style={{
                    color: "#A6ABAC",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleView(record)}
                />
              ),
            },
          ]}
          pagination={false}
          className="custom-ant-table"
        />

        {/* pagination */}
        <div className="flex justify-end pt-4">
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
};

export default Contributors;
