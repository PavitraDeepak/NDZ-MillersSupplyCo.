import { FileText, Box, DollarSign, Clock, Search, Filter, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SummaryCard = ({ title, value, sub, icon, colorClass }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between flex-1">
    <div>
      <p className="text-xs text-gray-500 uppercase font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
      <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
    </div>
    <div className={`p-3 rounded-xl ${colorClass}`}>
      {icon}
    </div>
  </div>
);

const SalesIn = () => {
  const navigate = useNavigate();
  const headers = ["ITEM CODE", "ITEM NAME", "ACCOUNT", "BATCH NO.", "VOUCHER QTY", "STOCK QTY", "UNIT", "RATE", "GROSS AMOUNT", "GST GROUP", "GST AMOUNT"];
  const rowData = ["PUR-2024-001", "Hard Red Spring", "10", "2026-12-31", "₹52.00", "₹50.00", "150", "₹52.00", "₹100.00", "150", "150"];

  return (
    <div className="font-sans">
      <div className="flex gap-6 mb-8">
        <SummaryCard title="Total Entries" value="4" icon={<FileText size={20} />} colorClass="bg-blue-100 text-blue-600" />
        <SummaryCard title="Total Quantity" value="650 MT" icon={<Box size={20} />} colorClass="bg-violet-100 text-violet-600" />
        <SummaryCard title="Total Amount" value="₹8,125" icon={<DollarSign size={20} />} colorClass="bg-green-100 text-green-600" />
        <SummaryCard title="Pending Approval" value="1" icon={<Clock size={20} />} colorClass="bg-amber-100 text-amber-600" />
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by voucher number or party name..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#1e715b] transition-colors text-sm"/>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
            <Filter size={16} /> Filters
          </button>
          <button 
            onClick={() => navigate('/sales/in/new')} 
            className="flex items-center gap-2 px-4 py-2.5 bg-[#1e715b] text-white rounded-lg hover:bg-[#185d4b] transition-colors text-sm font-medium">
            <Plus size={16} /> New Entry</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-lg mb-6">Items Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] text-gray-500 uppercase tracking-wider border-b border-gray-100">
                {headers.map((h, i) => (
                  <th key={i} className="pb-4 text-xs font-semibold bg-gray-100 px-2 py-5">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[...Array(10)].map((_, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {rowData.map((data, i) => (
                    <td key={i} className="py-4 text-sm font-medium text-gray-700 px-2">{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
          <span className="text-sm text-gray-500">Showing 1-10 of 10 results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-[#1e715b] text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50">Next</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default SalesIn;