import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDashboardFaqMutation } from "../../../../redux/dashboardFeatures/postDashboardFaqApi";
import toast from "react-hot-toast";

const FAQs = () => {
  const [dashboardFaq] = useDashboardFaqMutation();
  const [formOne] = useForm();


  const questionData = [
    {
      questionName: "Question",
      title: "first question",
    },
    {
      questionName: "Question",
      title: "first question",
    },
    {
      questionName: "Question",
      title: "first question",
    },
    {
      questionName: "Question",
      title: "first question",
    },
    {
      questionName: "Question",
      title: "first question",
    },
  ];

  const onFinishOne = async (valus) => {
    const faqInfo = {
      question: valus.question,
      answer: valus.answer,
    };

    try {
      const res = await dashboardFaq(faqInfo).unwrap();
      if(res?.data){
        toast.success(res?.message)
        formOne.resetFields()
      }
     
    } catch (errors) {
      toast.error(errors.message);
    }
  };

  return (
    <div className="bg-[#1B2324] p-[20px] rounded-lg">
      <div>
        <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 pb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="font-semibold font-roboto text-[30px] text-[#ffffff]">
              Manage FAQs
            </h2>
          </div>
        </div>
      </div>

      <Form form={formOne} onFinish={onFinishOne}>
        <div>
          <Form.Item name="question">
            <textarea
              placeholder="Enter Your Question"
              style={{
                backgroundColor: "transparent",
                border: "1px solid gray",
                padding: "8px",
                width: "100%",
                color: "#ffffff",
                borderRadius:"10px"
              }}
            />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="answer">
            <textarea
              placeholder="Enter Your Answer"
              style={{
                backgroundColor: "transparent",
                border: "1px solid gray",
                padding: "8px",
                width: "100%",
                color: "#ffffff",
                borderRadius:"10px"
              }}
            />
          </Form.Item>
        </div>
        <div className="flex justify-end">
          <Button htmlType="submit">Add</Button>
        </div>
      </Form>




      <div className=" h-auto text-white p-4">
        {questionData.map((question, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-700 py-4"
          >
            <div className="flex flex-col">
              <span className="text-xl">{question.questionName}</span>
              <span className="text-xs text-gray-400">
                Ans: {question.title}
              </span>
            </div>
            <div className="flex gap-4">
              <EditOutlined className="cursor-pointer hover:text-blue-400" />
              <DeleteOutlined className="cursor-pointer hover:text-red-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
