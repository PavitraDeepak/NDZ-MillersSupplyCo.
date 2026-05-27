

import { CircleCheckBig, Clock } from 'lucide-react';

export function TransactionsTable({ data }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Transactions</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ITEM CODE</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ITEM NAME</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">TYPE</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">UNIT</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">SUPPLY BRANCH</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">BILL QTY</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">AMOUNT</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">DATE</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">STATUS</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((txn, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{txn.code}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{txn.name}</td>
                <td className="px-4 py-4 text-sm">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase ${
                    txn.type === 'Purchase' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                  }`}>
                    {txn.type}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{txn.unit}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{txn.branch}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{txn.billQty}</td>
                
                <td className="px-4 py-4 text-sm font-bold text-gray-900">
                  {Number(txn.amount).toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0
                  })}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">{txn.date}</td>
                <td className="px-4 py-4 text-sm">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase ${
                    txn.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {txn.status === 'Completed' ? (
                      <><CircleCheckBig size={14} /> <span>Completed</span></>
                    ) : (
                      <><Clock size={14} /> <span>Pending</span></>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}