import { Button, Form, Input, Modal, Upload } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePodcastModalOpenOne, podcastModalOpenOne } from "../../../../features/modal/modalSlice";
import { useForm } from "antd/es/form/Form";
import { usePostpodcastApiMutation, useUpdatepodcastApiMutation } from "../../../../redux/dashboardFeatures/podcastApi";
import { UploadOutlined } from "@ant-design/icons";
import { InboxOutlined } from '@ant-design/icons';
import { UploadCloud } from "lucide-react";

const { Dragger } = Upload;

const PodcastStories = () => {
  const [formOne] = useForm()
  const [searchText, setSearchText] = useState('')
  const [ImageFileListHost, setImageFileListHost] = useState([]);
  const [ImageFileListGuest, setImageFileListGuest] = useState([]);
  const [ImageFileListThumbail, setImageFileListThumbail] = useState([]);




  const [postpodcastApi] = usePostpodcastApiMutation(); // post api
  const [updatepodcastApi] = useUpdatepodcastApiMutation();
  const dispatch = useDispatch();
  const podcastModalOne = useSelector((state) => state.modal.podcastModalOne);






  //======== podcast modal one start =========

  const showPodcastModalOne = () => {
    dispatch(podcastModalOpenOne())

  };

  const onFinishOne = async (values) => {
      const formData = new FormData();
    const fileObj = values?.mp3File?.originFileObj;
    if (!fileObj) {
      message.error("No file selected!");
      return;
    }


    //======= image file upload =======

    if (ImageFileListHost[0]?.originFileObj) {
      formData.append("host_profile", ImageFileListHost[0].originFileObj);
    }
    if (ImageFileListGuest[0]?.originFileObj) {
      formData.append("guest_profile", ImageFileListGuest[0].originFileObj);
    }
    if (ImageFileListThumbail[0]?.originFileObj) {
      formData.append("thumbnail", ImageFileListThumbail[0].originFileObj);
    }





  
    formData.append('mp3', fileObj);

    console.log(formData.forEach(item => {
      console.log(item)
    }))

  }


  const podcastModalOkOne = () => {
    // dispatch(closePodcastModalOpenOne());
    formOne.submit()
  };
  const podcastModalCancelOne = () => {
    dispatch(closePodcastModalOpenOne());
  };
  //======== podcast modal one end =========


  const handleSearchChange = () => {
    console.log('click')
  }
  return <section className="text-[#ffff]">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="flex items-center gap-4">
          <h2 className="text-[#ffffff]">Podcast & stories</h2>
          <button
            onClick={showPodcastModalOne}
            className="bg-[#ffffff] text-[#403730] py-2 px-6 rounded-lg flex items-center gap-3">
            Upload new Podcast
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clip-rule="evenodd" d="M1.99999 9.33301C2.36818 9.33301 2.66666 9.63148 2.66666 9.99967V12.6663C2.66666 12.8432 2.7369 13.0127 2.86192 13.1377C2.98695 13.2628 3.15652 13.333 3.33333 13.333H12.6667C12.8435 13.333 13.013 13.2628 13.1381 13.1377C13.2631 13.0127 13.3333 12.8432 13.3333 12.6663V9.99967C13.3333 9.63148 13.6318 9.33301 14 9.33301C14.3682 9.33301 14.6667 9.63148 14.6667 9.99967V12.6663C14.6667 13.1968 14.4559 13.7055 14.0809 14.0806C13.7058 14.4556 13.1971 14.6663 12.6667 14.6663H3.33333C2.8029 14.6663 2.29419 14.4556 1.91911 14.0806C1.54404 13.7055 1.33333 13.1968 1.33333 12.6663V9.99967C1.33333 9.63148 1.63181 9.33301 1.99999 9.33301Z" fill="#403730" />
              <path fillRule="evenodd" clip-rule="evenodd" d="M7.5286 1.52827C7.78894 1.26792 8.21106 1.26792 8.4714 1.52827L11.8047 4.8616C12.0651 5.12195 12.0651 5.54406 11.8047 5.80441C11.5444 6.06476 11.1223 6.06476 10.8619 5.80441L8 2.94248L5.13807 5.80441C4.87772 6.06476 4.45561 6.06476 4.19526 5.80441C3.93491 5.54406 3.93491 5.12195 4.19526 4.8616L7.5286 1.52827Z" fill="#403730" />
              <path fillRule="evenodd" clip-rule="evenodd" d="M7.99999 1.33301C8.36818 1.33301 8.66666 1.63148 8.66666 1.99967V9.99967C8.66666 10.3679 8.36818 10.6663 7.99999 10.6663C7.63181 10.6663 7.33333 10.3679 7.33333 9.99967V1.99967C7.33333 1.63148 7.63181 1.33301 7.99999 1.33301Z" fill="#403730" />
            </svg>

          </button>
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

      {/* modal component */}
      {/* modal one */}
      <Modal
        className="custom-ai-modal"
        centered
        open={podcastModalOne}
        onOk={podcastModalOkOne}
        onCancel={podcastModalCancelOne}
        width={500}
        footer={
          <div className="font-roboto flex justify-end gap-x-4 md:px-7 pt-[24px]">
            <button
              className="hover:bg-[#A6ABAC] px-6 rounded"
              onClick={podcastModalCancelOne}
            >
              Cancel
            </button>
            <button
              className="bg-[#ffffff] py-2 px-4 rounded"
              onClick={podcastModalOkOne}
            >
              Post now
            </button>
          </div>
        }
      >
        <div className="">

          <Form form={formOne} onFinish={onFinishOne}>


            {/* host image upload */}
            <div className="flex justify-center border-2 border-dashed border-[#B6B6BA] rounded-md mb-2 pt-5">
              <Form.Item
                className="md:col-span-2"
                name="image"
                rules={[
                  {
                    required: ImageFileListHost.length === 0,
                    message: "Image required!",
                  },
                ]}
              >
                <Upload

                  accept="image/*"
                  maxCount={1}
                  showUploadList={{ showPreviewIcon: true }}
                  fileList={ImageFileListHost}
                  onChange={({ fileList }) => setImageFileListHost(fileList)}
                  listType="picture-card"
                  className="w-full"
                  beforeUpload={() => false}
                >
                  <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                    <UploadCloud className="w-5 h-5 text-gray-400" />
                    <span className="mt-2">Upload guest photo</span>
                  </div>
                </Upload>
              </Form.Item>
            </div>


            {/* guest image upload */}
            <div className="flex justify-center border-2 border-dashed border-[#B6B6BA] rounded-md mb-2 pt-5">
              <Form.Item
                className="md:col-span-2"
                name="image"
                rules={[
                  {
                    required: ImageFileListGuest.length === 0,
                    message: "Image required!",
                  },
                ]}
              >
                <Upload

                  accept="image/*"
                  maxCount={1}
                  showUploadList={{ showPreviewIcon: true }}
                  fileList={ImageFileListGuest}
                  onChange={({ fileList }) => setImageFileListGuest(fileList)}
                  listType="picture-card"
                  className="w-full"
                  beforeUpload={() => false}
                >
                  <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                    <UploadCloud className="w-5 h-5 text-gray-400" />
                    <span className="mt-2">Upload host photo</span>
                  </div>
                </Upload>
              </Form.Item>
            </div>




            {/* mp3 file upload */}
            <div>
              <Form.Item
                name="mp3File"
                valuePropName="file"
                getValueFromEvent={(e) => e && e.fileList[0]}
                rules={[
                  {
                    required: true,
                    message: 'Please upload an MP3 file!',
                  },
                ]}
              >
                <Dragger
                  beforeUpload={() => false}
                  accept=".mp3"
                  maxCount={1}
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px dashed #888',
                    borderRadius: '8px',
                    padding: '30px 20px',
                  }}
                >
                  <p className="">
                    <InboxOutlined style={{ color: '#fff', fontSize: '32px' }} />
                  </p>
                  <p style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>
                    Upload podcast of drag & drop here.
                  </p>
                  <p style={{ color: '#aaa', marginTop: '4px' }}>
                    Supported format MP3<br />
                    Max file size: 1 GB.
                  </p>
                </Dragger>
              </Form.Item>
            </div>






            {/* guest image upload */}
            <div className="flex justify-center border-2 border-dashed border-[#B6B6BA] rounded-md mb-2 pt-5">
              <Form.Item
                className="md:col-span-2"
                name="image"
                rules={[
                  {
                    required: ImageFileListThumbail.length === 0,
                    message: "Image required!",
                  },
                ]}
              >
                <Upload

                  accept="image/*"
                  maxCount={1}
                  showUploadList={{ showPreviewIcon: true }}
                  fileList={ImageFileListThumbail}
                  onChange={({ fileList }) => setImageFileListThumbail(fileList)}
                  listType="picture-card"
                  className="w-full"
                  beforeUpload={() => false}
                >
                  <div style={{ cursor: "pointer" }} className="flex flex-col items-center">
                    <UploadCloud className="w-5 h-5 text-gray-400" />
                    <span className="mt-2">Upload thumbnail.</span>
                  </div>
                </Upload>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Modal>

    </div>
  </section>;
};

export default PodcastStories;
