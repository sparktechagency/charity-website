import Donation from "../../../../components/dashboard/charts/donation/Donation";
import PerFormance from "../../../../components/dashboard/charts/performance/PerFormance";

import Visitors from "../../../../components/dashboard/charts/visitors/Visitors";
import { useGetChartQuery } from "../../../../redux/dashboardFeatures/getDashboardChartApi";

const CommonDashboard = () => {
  const { data } = useGetChartQuery();

  const dashboardData = data?.data
  const thisYearData = data?.data
  const lastYearData = data?.data
 


  return (
    <div>
      {/* dashboard curds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2 className="text-white font-roboto">Teams</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">{dashboardData?.teamsCount}</h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2>Subscribers</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">{dashboardData?.subscribersCount}</h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2>Podcasts</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">
            {dashboardData?.podcastsCount}
          </h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-primary text-[#ffffff] p-[20px] rounded-lg">
          <h2>Volunteers</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">
            {dashboardData?.approvedVolunteers}
          </h2>
        </div>
      </div>

      {/* chart one/two components */}
      {/* <div className="flex flex-col lg:flex-row justify-between gap-[20px] py-[20px]">
        <div className="bg-[#1B2324] w-full md:h-[300px] rounded-lg">
          <Visitors />
        </div>
        <div className="bg-[#1B2324] w-full md:h-[300px] rounded-lg ">
          <PerFormance />
        </div>
      </div> */}

      {/* chart three components */}
      <div className="bg-[#1B2324] w-full md:h-[690px] rounded-lg mt-6">
        <Donation />
      </div>

    </div>
  );
};

export default CommonDashboard;
