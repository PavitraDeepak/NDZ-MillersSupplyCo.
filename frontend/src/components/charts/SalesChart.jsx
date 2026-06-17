import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border border-gray-100 shadow-xl rounded-lg text-sm min-w-[160px]">
        <p className="font-medium text-gray-500 mb-2">{label}</p>
        <p className="text-emerald-600 font-medium">
          Amount (₹) : <span className="font-bold">{data.amount?.toLocaleString() || 0}</span>
        </p>
        <p className="text-orange-500 font-medium">
          Orders : <span className="font-bold">{data.orders || 0}</span>
        </p>
      </div>
    );
  }
  return null;
};

export function SalesChart({ data }) {
  // Defensive check: If data is missing or empty, render a placeholder
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded border border-gray-100 shadow-sm h-[250px] flex items-center justify-center text-gray-400">
        No sales data available
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded border border-gray-100 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-6">Sales Trend</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f9f9f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 12 }} 
          />
          <Tooltip 
            cursor={{ stroke: '#e5e7eb', strokeWidth: 2, strokeDasharray: '4 4' }} 
            content={<CustomTooltip />} 
          />
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#d97706" 
            strokeWidth={3} 
            dot={{ r: 5, fill: '#d97706', strokeWidth: 2, stroke: '#fff' }} 
            activeDot={{ r: 7, strokeWidth: 0 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}