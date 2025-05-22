
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

    const handleSingleRed = async (id) => {
        try {
            const res = await redNotificationApi({ id: id }).unwrap()
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
                            className={`grid grid-cols-12 gap-4 items-center border border-[#ccc] rounded-lg mb-4 p-4 ${item?.read_at === null ? '' : 'bg-red-400 text-[#ffff] border-none'
                                }`}
                        >
                            {/* 1st div: image */}
                            <div className="col-span-1">
                                <img src='/videoImg.jpg' alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
                            </div>

                            {/* 2nd div: title or short info */}
                            <div className="col-span-2">
                                <h3 className="font-semibold text-xl">{item?.data?.name}</h3>
                            </div>

                            {/* 3rd div: description */}
                            <div className="col-span-7">
                                <p className=" text-lg">
                                    {item?.data?.message}
                                </p>
                            </div>

                            {/* 4th div: button */}
                            {
                                item?.read_at === null ?
                                    <div className="col-span-2 text-right">
                                        <button 
                                        onClick={() => handleSingleRed(item?.id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                            Read
                                        </button>
                                    </div>
                                    :
                                    ''
                            }

                        </div>
                    );
                })
            }

        </section>
    )
}

export default Notification