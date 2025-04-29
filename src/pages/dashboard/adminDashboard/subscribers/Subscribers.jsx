import { EyeOutlined } from "@ant-design/icons";
import { Input, Pagination, Select, Space, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

const Subscribers = () => {
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("");

  const dataSource = [
    {
      key: 1,
      name: "kodom ali",
      email: "kodom @ gmail.com",
      subscribedOn: "09/05/2025",
    },
    {
      key: 2,
      name: "Rashed Hossain",
      email: "rashed@gmail.com",
      subscribedOn: "04/05/2025",
    },
    {
      key: 3,
      name: "Shahina Begum",
      email: "shahina@outlook.com",
      subscribedOn: "26/05/2025",
    },
    {
      key: 4,
      name: "Mizanur Rahman",
      email: "mizan@ymail.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 5,
      name: "Selina Parvin",
      email: "selina@hotmail.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 6,
      name: "Abdul Kader",
      email: "abdukader@gmail.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 7,
      name: "Nusrat Jahan",
      email: "nusrat@live.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 8,
      name: "Fahim Shahin",
      email: "fahim@yahoo.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 9,
      name: "Kamal Hossain",
      email: "kamal@outlook.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 10,
      name: "Arifa Akter",
      email: "arifa@gmail.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 11,
      name: "Rubi Sultana",
      email: "rubi@live.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 12,
      name: "Tariq Jamil",
      email: "tariq@gmail.com",
      subscribedOn: "17/05/2025",
    },
    {
      key: 13,
      name: "Farhana Akter",
      email: "farhana@ymail.com",
      subscribedOn: "14/05/2025",
    },
    {
      key: 14,
      name: "Mashiur Rahman",
      email: "mashiur@hotmail.com",
      subscribedOn: "19/05/2025",
    },
    {
      key: 15,
      name: "Shahidul Alam",
      email: "shahidul@live.com",
      subscribedOn: "10/05/2025",
    },
    {
      key: 16,
      name: "Samiul Islam",
      email: "samiul@yahoo.com",
      subscribedOn: "17/05/2025",
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
              Subscribers
            </h2>
            <div>
              <h2 className="text-[#ffffff]">( 102 )</h2>
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
                    String(record.subscribedOn)
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
                title: "Subscribed on",
                dataIndex: "subscribedOn",
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

export default Subscribers;
