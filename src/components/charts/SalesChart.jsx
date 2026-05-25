import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function SalesChart({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <h3 className="font-bold text-gray-800 mb-6">Sales Trend</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="amount" 
            stroke="#d97706" 
            strokeWidth={3} 
            dot={{ r: 5, fill: '#d97706' }} 
            activeDot={{ r: 7 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}