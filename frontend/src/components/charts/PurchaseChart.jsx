import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const CustomTooltip=({active, payload, label})=>{
  if (active && payload && payload.length){
    const data=payload[0].payload;
    return(
      <div className="bg-white p-4 border border-gray-200 shadow-md rounded-lg text-sm">
        <p className="font-medium text-gray-500 mb-2">{label}</p>
        <p className="text-blue-500 font-medium">Amount (₹) : <span className="font-bold">{data.amount}</span></p>
        <p className="text-emerald-500 font-medium">Quantity (MT) : <span className="font-bold">{data.quantity}</span></p>
      </div>
    );
  }
  return null;
};

export function PurchaseChart({ data }) {
    return (
        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Purchase Trends</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />   
                    <Tooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                    <Bar dataKey="amount" fill="#2d7768" radius={[4, 4, 0, 0]} barSize={32} /> 
                    <Bar dataKey="quantity" fill="#8884d8" barSize={32} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


