function Dashboard() {
  return (
    <div>

      <div className="grid grid-cols-3 gap-5 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
           <p className="text-gray-500 text-sm">Today Purchase</p>
           <h1 className="text-[30px] font-bold mt-2">₹2,45,680</h1>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
           <p className="text-gray-500 text-sm">Sales Today</p>
           <h1 className="text-[30px] font-bold mt-2">₹3,89,450</h1>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
           <p className="text-gray-500 text-sm">Current Stock</p>
           <h1 className="text-[30px] font-bold mt-2">2,458 MT</h1>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 h-[300px] shadow-sm">
        <h2 className="text-[18px] font-semibold text-gray-800">Recent Transactions</h2>
      </div>
    </div>
  );
}

export default Dashboard;