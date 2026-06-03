import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function KpiCard({ title, amount, sub, icon: Icon, trend, isPositive, color, bg }) {
  return (
    <div className="bg-white p-6 rounded border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className={`p-3 ${bg} rounded ${color}`}>
          <Icon size={24} />
        </div>
        <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {trend}
        </span>
      </div>
      
      <div className="mt-4">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <h2 className="text-2xl font-bold text-gray-800 mt-1">{amount}</h2>
        <p className="text-xs text-gray-400 mt-1">{sub}</p>
      </div>
    </div>
  );
}