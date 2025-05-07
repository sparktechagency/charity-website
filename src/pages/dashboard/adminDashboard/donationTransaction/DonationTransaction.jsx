import { EyeOutlined } from "@ant-design/icons";
import { Input, Pagination, Select, Space, Table } from "antd";
import { useGetDashboardDonationTransitionApiQuery } from "../../../../redux/dashboardFeatures/dashboardDonationTransitionApi";
import CustomLoading from "../../shared/CustomLoading";
import { useState } from "react";

const DonationTransaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data, isLoading } = useGetDashboardDonationTransitionApiQuery({page: currentPage, per_page: perPage,});
  const allDonationTransitions = data?.data?.data




  if (isLoading) return <CustomLoading />

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
            dataSource={allDonationTransitions}
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
                dataIndex: "phone_number",
              },
              {
                title: "Action",
                key: "view",
                render: (_, record) => (
                  <Space size="middle">
                    <p className={`${record?.payment_status === 'Paid' ? "text-[#658A30]" : "text-[#F79A44]"}`}>
                      {record.payment_status}
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

export default DonationTransaction;
