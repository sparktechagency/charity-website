import { EyeOutlined } from "@ant-design/icons";
import { Input, Pagination, Select, Space, Table } from "antd";
import { EyeIcon } from "lucide-react";
import { useGetDonationTransitionQuery } from "../../../../redux/dashboardFeatures/getDonationTransition";

const DonationTransaction = () => {
  const { data } = useGetDonationTransitionQuery({ page: 1 });

  console.log(data, "data---------");

  const dataSource = [
    {
      key: 1,
      name: "kodom ali",
      email: "kodom @ gmail.com",
      contactNumber: "012455",
      DeclareAction: "05",
      soldOut: "54546464",
      donated: "85464684",
      action: "Paid",
    },
    {
      key: 2,
      name: "Rashed Hossain",
      email: "rashed@gmail.com",
      contactNumber: "013456",
      DeclareAction: "03",
      soldOut: "34567890",
      donated: "12345678",
      action: "Paid",
    },
    {
      key: 3,
      name: "Shahina Begum",
      email: "shahina@outlook.com",
      contactNumber: "014567",
      DeclareAction: "06",
      soldOut: "7891011",
      donated: "11223344",
      action: "Paid",
    },
    {
      key: 4,
      name: "Mizanur Rahman",
      email: "mizan@ymail.com",
      contactNumber: "015678",
      DeclareAction: "02",
      soldOut: "99887766",
      donated: "66554433",
      action: "Paid",
    },
    {
      key: 5,
      name: "Selina Parvin",
      email: "selina@hotmail.com",
      contactNumber: "016789",
      DeclareAction: "07",
      soldOut: "10293847",
      donated: "38475639",
      action: "Pending",
    },
    {
      key: 6,
      name: "Abdul Kader",
      email: "abdukader@gmail.com",
      contactNumber: "017890",
      DeclareAction: "04",
      soldOut: "76543210",
      donated: "12345678",
      action: "Paid",
    },
    {
      key: 7,
      name: "Nusrat Jahan",
      email: "nusrat@live.com",
      contactNumber: "018901",
      DeclareAction: "03",
      soldOut: "65432109",
      donated: "56473829",
      action: "Paid",
    },
    {
      key: 8,
      name: "Fahim Shahin",
      email: "fahim@yahoo.com",
      contactNumber: "019012",
      DeclareAction: "05",
      soldOut: "10293847",
      donated: "73829183",
      action: "Paid",
    },
    {
      key: 9,
      name: "Kamal Hossain",
      email: "kamal@outlook.com",
      contactNumber: "020123",
      DeclareAction: "01",
      soldOut: "19384756",
      donated: "74638492",
      action: "Paid",
    },
    {
      key: 10,
      name: "Arifa Akter",
      email: "arifa@gmail.com",
      contactNumber: "021234",
      DeclareAction: "07",
      soldOut: "10293847",
      donated: "73829183",
      action: "Pending",
    },
    {
      key: 11,
      name: "Rubi Sultana",
      email: "rubi@live.com",
      contactNumber: "022345",
      DeclareAction: "06",
      soldOut: "54673892",
      donated: "84736291",
      action: "Paid",
    },
    {
      key: 12,
      name: "Tariq Jamil",
      email: "tariq@gmail.com",
      contactNumber: "023456",
      DeclareAction: "04",
      soldOut: "56783921",
      donated: "93148362",
      action: "Paid",
    },
    {
      key: 13,
      name: "Farhana Akter",
      email: "farhana@ymail.com",
      contactNumber: "024567",
      DeclareAction: "02",
      soldOut: "11223344",
      donated: "44556677",
      action: "Paid",
    },
    {
      key: 14,
      name: "Mashiur Rahman",
      email: "mashiur@hotmail.com",
      contactNumber: "025678",
      DeclareAction: "01",
      soldOut: "98765432",
      donated: "12345678",
      action: "Pending",
    },
    {
      key: 15,
      name: "Shahidul Alam",
      email: "shahidul@live.com",
      contactNumber: "026789",
      DeclareAction: "05",
      soldOut: "12345678",
      donated: "87654321",
      action: "Paid",
    },
    {
      key: 16,
      name: "Samiul Islam",
      email: "samiul@yahoo.com",
      contactNumber: "027890",
      DeclareAction: "06",
      soldOut: "23456789",
      donated: "45678901",
      action: "Paid",
    },
  ];

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div>
          <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
            Transactions
          </h2>
        </div>

        <div className="overflow-x-auto">
          <Table
            dataSource={dataSource}
            columns={[
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
                dataIndex: "contactNumber",
              },
              {
                title: "Declare action",
                dataIndex: "DeclareAction",
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
                      className={
                        (record.action === "Paid" && "text-[#658A30]") ||
                        (record.action === "Pending" && "text-[#F79A44]")
                      }
                    >
                      {record.action}
                    </p>
                    <p className="cursor-pointer">
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

        {/* pagination */}
        <div className="flex justify-end pt-4">
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </div>
  );
};

export default DonationTransaction;
