
import toast from "react-hot-toast";
import CustomLoading from "../../pages/dashboard/shared/CustomLoading";
import { useGetNotificationApiQuery, useRedAllNotificationApiMutation, useRedNotificationApiMutation, } from "../dashboardFeatures/dashboardNotificationApi"




const Notification = () => {
    const { data, isLoading } = useGetNotificationApiQuery(); // get
    const [redAllNotificationApi] = useRedAllNotificationApiMutation()
    const [redNotificationApi] = useRedNotificationApiMutation()

    const allNotifacitionData = data?.data




    const handleReadAll = async () => {
        try {
            const res = await redAllNotificationApi().unwrap()
            console.log(res)
            if (res.status === true) {
                toast.success(res.message)
            }
        } catch (error) {
            if (error) {
                toast.error(error?.data?.message)
            }
        }
    }

    const handleSingleRed = async(id) => {
        try {
            const res = await redNotificationApi({id:id}).unwrap()
            console.log(res)
            if (res.success === true) {
                toast.success(res.message)
            }
        } catch (error) {
            if (error) {
                toast.error(error?.data?.message)
            }
        }
    }



    if (isLoading) return <CustomLoading />
    return (
        <section className="text-[#ffff]">
            <div className="flex justify-end mb-3">
                <button onClick={handleReadAll} className="border px-8 py-2 rounded-lg ">Read all</button>
            </div>
            {
                allNotifacitionData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleSingleRed(item?.id)}
                            className={`border border-[#ccc] rounded-lg p-2 mb-4 ${item?.read_at === null ? '' : 'bg-green-400 border-none'}`}>
                            <div className={`flex items-center justify-evenly py-8 cursor-pointer `}>
                                <p>id: {item.id}</p>
                                <img src='/videoImg.jpg' alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
                                <p>{item.data.message}</p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Notification