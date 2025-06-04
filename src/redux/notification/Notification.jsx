
import toast from "react-hot-toast";
import CustomLoading from "../../pages/dashboard/shared/CustomLoading";
import { useGetNotificationApiQuery, useRedAllNotificationApiMutation, useRedNotificationApiMutation, } from "../dashboardFeatures/dashboardNotificationApi"




const Notification = () => {
    const { data, isLoading } = useGetNotificationApiQuery(); // get
    const [redAllNotificationApi] = useRedAllNotificationApiMutation()
    const [redNotificationApi] = useRedNotificationApiMutation()

    const allNotifacitionData = data?.data

    // ✅ Sort notifications: read first
    const sortedNotifications = allNotifacitionData?.slice().sort((a, b) => {
        if (a.read_at && !b.read_at) return -1;
        if (!a.read_at && b.read_at) return 1;
        return 0;
    });


    const handleReadAll = async () => {
        try {
            const res = await redAllNotificationApi().unwrap()
            if (res.status === true) {
                toast.success(res.message)
            }
        } catch (error) {
            if (error) {
                toast.error(error?.data?.message)
            }
        }
    }

    const handleSingleRed = async (item) => {

        if (item?.read_at !== null) {
            return toast.error("This notification has already been marked as read.");
        }

        try {
            const res = await redNotificationApi({ id: item?.id }).unwrap()
            if (res.success === true) {
                toast.success(res.message)
            }
        } catch (error) {
            if (error) {
                toast.error(error?.data?.message)
            }
        }
    }

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

    const getOnlyTime = (dateString) => {
        if (!dateString) return 'Invalid time';

        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid time';

        return new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true, // Change to false for 24-hour format
        }).format(date); // Example: "01:45 PM"
    };



    if (isLoading) return <CustomLoading />
    return (
        <section className="text-[#ffff]">
            <div className="flex justify-end mb-3">
                <button onClick={handleReadAll} className="bg-gray-400 text-black px-8 py-2 rounded-lg hover:bg-gray-200 hover:border-none text-xl font-roboto">Read all</button>
            </div>
            {
                sortedNotifications?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleSingleRed(item)}
                            className={`cursor-pointer rounded-lg mb-4 p-4 ${item?.read_at === null ? 'bg-[#1B2324]' : ' bg-[#1b232423] text-[#ffff] border-none '
                                }`}
                        >
                            <div>
                                <div>
                                    {
                                        item?.name === null ? <P>{item?.name}</P> : "User"
                                    }
                                    <p>{item?.name}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-lg">{item?.data.message}</p>
                                    <div className="flex items-center gap-4">
                                        <p className="text-gray-500">
                                            {formatDate(item?.created_at)}
                                        </p>
                                        <p className="text-gray-500">
                                            {getOnlyTime(item?.created_at)}
                                        </p>
                                    </div>
                                </div>
                                {item?.read_at === null ? ''
                                    :
                                    <div className="flex items-center gap-4 ">
                                        <p>
                                            Read Time and Date
                                        </p>
                                        <p className="text-gray-500">{formatDate(item?.read_at)}</p>
                                        <p className="text-gray-500">{getOnlyTime(item?.read_at)}</p>
                                    </div>
                                }

                            </div>

                        </div>
                    );
                })
            }

        </section>
    )
}

export default Notification