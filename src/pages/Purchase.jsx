// src/pages/Purchase.jsx
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Package, Clock, AlertCircle, Plus, Search, Filter } from 'lucide-react';
import { ItemsTable } from '../components/ItemsTable';

const SummaryCard = ({ title, value, sub, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded border border-gray-200 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
      <p className="text-gray-400 text-sm mt-1">{sub}</p>
    </div>
    <div className={`p-3 rounded ${colorClass}`}>
      <Icon size={24} />
    </div>
  </div>
);

function Purchase() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard title="Total Purchase" value="₹1,29,63,910" sub="8 transactions" icon={ShoppingCart} colorClass="bg-blue-50 text-blue-600" />
        <SummaryCard title="Total Quantity" value="510 MT" sub="Multiple varieties" icon={Package} colorClass="bg-green-50 text-green-600" />
        <SummaryCard title="Pending Approval" value="1" sub="₹8,67,320" icon={Clock} colorClass="bg-amber-50 text-amber-600" />
        <SummaryCard title="Draft Orders" value="1" sub="₹6,34,560" icon={AlertCircle} colorClass="bg-gray-100 text-gray-600" />
      </div>

      <div className="bg-white p-4 rounded border border-gray-200 shadow-sm flex justify-between items-center">
        <div className="relative flex-1 max-w-3xl bg-[#f8f9fa] rounded">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by voucher number or party name..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded outline-none focus:border-[#1e715b] transition-colors text-sm"/>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
            <Filter size={16} /> Filters
          </button>
          <button 
            onClick={() => navigate('/purchase/new')}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#1e715b] text-white rounded text-sm font-semibold hover:bg-[#185d4b] transition-all">
            <Plus size={18} /> New Purchase
          </button>
        </div>
      </div>

        <ItemsTable />
      </div>
    );
}

export default Purchase;