import {
    Button,
    Form,
    Input,
    message,
    Modal,
    Radio,
    Select,
    Upload,
  } from "antd";
  import { UploadCloud } from "lucide-react";
  import { useEffect, useState } from "react";
  import { useUpdateBrandMutation } from "../../../services/pages/BrandSlice";
  
  function UpdateBrand({ update, setUpdate, updateData, refetch }) {
    const [form] = Form.useForm();
    const [ImageFileList, setImageFileList] = useState([]);
  
    useEffect(() => {
      if (updateData) {
        form.setFieldsValue({
          name: updateData.name,
          is_featured: updateData.is_featured,
          is_special_brand: updateData.is_special_brand,
          status: updateData.status,
        });
        if (updateData.image) {
          setImageFileList([
            {
              uid: "-1",
              name: "Existing Image",
              status: "done",
              url: updateData.image_url,
            },
          ]);
        }
      }
    }, [updateData, form]);
  
    const [updatedData, { isLoading }] = useUpdateBrandMutation();
  
    const handleSubmit = async (values) => {
      const formData = new FormData();
      formData.append("id", updateData.id);
      formData.append("name", values.name);
      formData.append("is_featured", values?.is_featured);
      formData.append("is_special_brand", values?.is_special_brand);
      formData.append("status", values.status);
      if (ImageFileList[0]?.originFileObj) {
        formData.append("image", ImageFileList[0].originFileObj);
      }
  
      try {
        const res = await updatedData(formData).unwrap();
        if (res && res?.success) {
          message.success(res?.message);
          setUpdate(false);
          refetch();
        }
      } catch (error) {
        const errorMessage = error?.data?.errors;
        message.error(
          errorMessage?.name[0] ||
            errorMessage?.image[0] ||
            "An Error is occured!"
        );
      }
    };
  
    return (
      <Modal
        open={update}
        onCancel={() => setUpdate(false)}
        title="Update Brand"
        footer={null}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-5"
        >
          <Form.Item
            name="name"
            label="Brand Name"
            rules={[{ required: true }]}
            className="md:col-span-2"
          >
            <Input placeholder="Enter Brand Name" />
          </Form.Item>
  
          <Form.Item
            name="is_featured"
            label="Featured Brand"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={0}>No</Radio>
            </Radio.Group>
          </Form.Item>
  
          <Form.Item
            name="is_special_brand"
            label="Special Brand"
            rules={[{ required: true, message: "Please select an option!" }]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={0}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true }]}
            className="md:col-span-2"
          >
            <Select placeholder="Select status">
              <Select.Option value={1}>Active</Select.Option>
              <Select.Option value={0}>Inactive</Select.Option>
            </Select>
          </Form.Item>
  
          <Form.Item
            className="md:col-span-2"
            name="image"
            label="Image"
            rules={[
              {
                required: ImageFileList.length === 0,
                message: "Image required!",
              },
            ]}
          >
            <Upload
              beforeUpload={false}
              accept="image/*"
              maxCount={1}
              showUploadList={{ showPreviewIcon: true }}
              fileList={ImageFileList}
              onChange={({ fileList }) => setImageFileList(fileList)}
              listType="picture-card"
              className="w-full"
            >
              <div className="flex flex-col items-center">
                <UploadCloud className="w-5 h-5 text-gray-400" />
                <span className="mt-2">Choose File</span>
              </div>
            </Upload>
          </Form.Item>
  
          <Form.Item className="flex justify-end md:col-span-2">
            <Button
              type="primary"
              htmlType="submit"
              disabled={isLoading}
              loading={isLoading}
            >
              {isLoading ? "Updating" : "Update"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
  
  export default UpdateBrand;