import { ShoppingCart, Package, Clock, AlertCircle } from 'lucide-react';

const SummaryCard = ({ title, value, sub, icon: Icon, colorClass }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-start">
    <div>
      <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
      <p className="text-gray-400 text-sm mt-1">{sub}</p>
    </div>
    <div className={`p-3 rounded-lg ${colorClass}`}>
      <Icon size={24} />
    </div>
  </div>
);

function Purchase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <SummaryCard 
        title="Total Purchase" 
        value="₹1,29,63,910" 
        sub="8 transactions" 
        icon={ShoppingCart} 
        colorClass="bg-blue-50 text-blue-600" 
      />
      <SummaryCard 
        title="Total Quantity" 
        value="510 MT" 
        sub="Multiple varieties" 
        icon={Package} 
        colorClass="bg-green-50 text-green-600" 
      />
      <SummaryCard 
        title="Pending Approval" 
        value="1" 
        sub="₹8,67,320" 
        icon={Clock} 
        colorClass="bg-amber-50 text-amber-600" 
      />
      <SummaryCard 
        title="Draft Orders" 
        value="1" 
        sub="₹6,34,560" 
        icon={AlertCircle} 
        colorClass="bg-gray-100 text-gray-600" 
      />
    </div>
  );
}

export default Purchase;  