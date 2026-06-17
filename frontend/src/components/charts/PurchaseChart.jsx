import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// 1. Hardcoded Mock Data (No Database connection needed)
const mockData = [
  { month: 'Jan', amount: 190000, quantity: 450 },
  { month: 'Feb', amount: 230000, quantity: 520 },
  { month: 'Mar', amount: 130000, quantity: 380 },
  { month: 'Apr', amount: 130000, quantity: 410 },
  { month: 'May', amount: 220000, quantity: 580 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-md rounded-lg text-sm">
        <p className="font-medium text-gray-500 mb-2">{label}</p>
        <p className="text-blue-500 font-medium">Amount (₹) : <span className="font-bold">{data.amount}</span></p>
        <p className="text-emerald-500 font-medium">Quantity (MT) : <span className="font-bold">{data.quantity}</span></p>
      </div>
    );
  }
  return null;
};

export function PurchaseChart() {
  return (
    <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Purchase Trends</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={mockData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
          {/* This bar represents the visual amount */}
          <Bar 
            dataKey="amount" 
            fill="#2d7768" 
            radius={[4, 4, 0, 0]} 
            barSize={40} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}