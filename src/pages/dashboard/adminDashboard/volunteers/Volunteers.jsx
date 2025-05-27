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
import { FiSearch } from "react-icons/fi";
import { usePDF } from 'react-to-pdf';

const Volunteers = () => {
  const [searchText, setSearchText] = useState("");
  const [selectValue, stetSelectValue] = useState("Pending");
  const [selectId, setSelectId] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' }); // pdf file download for

  const dispatch = useDispatch();
  const volunteerModalOne = useSelector(
    (state) => state.modal.volunterModalOne
  );
  const volunterModalTwo = useSelector((state) => state.modal.volunterModalTwo);

  const { data, isLoading, refetch } = useGetAllVolunterDataQuery({ page: currentPage, per_page: perPage, search: searchText, status: selectValue });

  const allVolunterData = data?.data?.data
  const singleVolunterData = allVolunterData?.find(item => item?.id === selectId)



  // date formate function
  const formatDate = (dateString) => {
    if (!dateString) return 'Invalid date';

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';

    const parts = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).formatToParts(date);

    const day = parts.find(p => p.type === 'day')?.value;
    const month = parts.find(p => p.type === 'month')?.value;
    const year = parts.find(p => p.type === 'year')?.value;

    return `${day} ${month}, ${year}`;
  };



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
  const showVolunterModalTwo = (id) => {
    setSelectId(id)
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
      title: 'updated Date',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (text) => formatDate(text),
    },
    {
      title: "Donated",
      dataIndex: "donated",
    },
    {
      title: "Status",
      dataIndex: "status",
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
            onClick={() => showVolunterModalTwo(record?.id)}
            className="cursor-pointer"
          >
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
  ]


  const handleSelect = (e) => {
    stetSelectValue(e.target.value)
  };


  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    // stetSelectValue(e.target.value)
    setCurrentPage(1); // Reset to the first page whenever the search term changes
  };

  useEffect(() => {
    refetch(); // Refetch the data when searchText, currentPage, or perPage changes
  }, [searchText, selectValue, currentPage, perPage, refetch]);


  useEffect(() => {
    document.body.style.overflow =
      volunteerModalOne || volunterModalTwo
        ? "hidden"
        : "auto";
  }, [volunteerModalOne, volunterModalTwo]);

  if (isLoading) return <CustomLoading />

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffff]">
              Manage volunteer
            </h2>
            <div className="relative z-50">
              <select name="" id=""
                value={selectValue}
                onChange={handleSelect}
                className="w-[120px] p-2 rounded bg-gray-200">
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>

          <div>
            <div className="relative w-fit">
              <input
                type="search"
                id="gsearch"
                name="gsearch"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search name or email"
                className="bg-[#1B2324] text-[#ffff] border px-4 py-2 pl-10 rounded-md w-[300px]"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#ffff]" />
            </div>
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
            <p className="text-[20px]  py-6">
              Are you sure want to suspend this user?
            </p>
            <p className="text-[#A6ABAC] text-[16px]">
              Once you suspend the user is no longer available to use the
              application.
            </p>
          </Modal>

          {/* modal two */}
          <Modal
            className="custom-auction-modal custom-view-modal"
            centered
            open={volunterModalTwo}
            onOk={volunterModalOkTwo}
            onCancel={volunterModalCancelTwo}
            width={500}
            footer={null}
          // footer={
          //   <div className="font-roboto flex justify-end">
          //     <button
          //       className="bg-[#ffffff] py-2 px-4 rounded"
          //       onClick={() => toPDF()}
          //     >
          //       PDF Download
          //     </button>
          //   </div>
          // }
          >
            <div ref={targetRef}>
              <div className="flex  items-center gap-3 border-b pb-4 border-gray-700">
                <div>
                  <h1 className="text-[14px] font-semibold ">
                    {singleVolunterData?.name}
                  </h1>
                  <p className="">{singleVolunterData?.email}</p>
                </div>
              </div>

              <div className="pt-4">
                <h1 className="text-[20px]  font-semibold">
                  Personal details
                </h1>

                {/* Personal Information */}
                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 ">
                    <div className="space-y-2">
                      <p className="text-sm ">Contact number</p>
                      <p className="text-sm ">Location</p>
                      <p className="text-sm ">Joined</p>
                      <p className="text-sm ">Donated</p>
                      <p className="text-sm ">Reason</p>

                    </div>
                    <div className="flex justify-end md:text-end">
                      <div className="space-y-2">
                        <p className="text-sm ">{singleVolunterData?.contact_number}</p>
                        <p className="text-sm ">
                          {singleVolunterData?.location}
                        </p>
                        <p className="text-sm ">{formatDate(singleVolunterData?.created_at)}</p>
                        <p className="text-sm ">{singleVolunterData?.donated}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="">{singleVolunterData?.reason}</p>
                {
                  singleVolunterData?.upload_cv && (
                    <img src={`${import.meta.env.VITE_API_IMAGE_BASE_URL}/${singleVolunterData.upload_cv}`} alt="" className="py-8 object-contain  w-full max-h-[300px]"/>
                  )
                }

                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => toPDF()}
                    className="bg-[#ffff] text-[#403730] py-2 px-6 rounded-lg"
                  >Download Pdf</button>
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
