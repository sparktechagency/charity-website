const CommonDashboard = () => {
  return (
    <div>
      {/* dashboard curds */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        <div className="max-w-[400px] max-h-[120px] bg-[#1B2324] text-[#ffffff] p-[20px] rounded-lg">
          <h2>Volunteers</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">54,973</h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-[#1B2324] text-[#ffffff] p-[20px] rounded-lg">
          <h2>Survivors</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">8,846</h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-[#1B2324] text-[#ffffff] p-[20px] rounded-lg">
          <h2>Donation received</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">
            $4,500.00{" "}
          </h2>
        </div>
        <div className="max-w-[400px] max-h-[120px] bg-[#1B2324] text-[#ffffff] p-[20px] rounded-lg">
          <h2>Spent on survivors</h2>
          <h2 className="font-semibold text-[30px] text-[#ffffff]">
            $5,999.00
          </h2>
        </div>
      </div>

      {/* chart one/two components */}
      <div className="flex justify-between gap-[20px] py-[20px]">
        <div className="bg-[#1B2324] w-full h-[346px] rounded-lg">one</div>
        <div className="bg-[#1B2324] w-full h-[346px] rounded-lg">one</div>
      </div>

      {/* chart three components */}
      <div className="bg-[#1B2324] w-full h-[478px] rounded-lg">one</div>
    </div>
  );
};

export default CommonDashboard;
