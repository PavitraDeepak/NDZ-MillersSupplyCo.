import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function PurchaseChart({ data }) {
    return (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Purchase Trends</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />   
                    <Tooltip cursor={{ fill: '#f8fafc' }} />  
                    <Bar dataKey="amount" fill="#2d7768" radius={[4, 4, 0, 0]} barSize={32} /> 
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}