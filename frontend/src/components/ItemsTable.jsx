const items =[
    { code:'PUR-2024-001',name:'Hard Red Spring',acc:'10',batch:'2026-12-31',voucherQty:'52',
        stockQty:'150',unit:'150',rate:'52',grossAmt:'100',GSTgroup:'150',GSTamt:'150'},
        { code:'PUR-2024-001',name:'Hard Red Spring',acc:'10',batch:'2026-12-31',voucherQty:'52',
        stockQty:'150',unit:'150',rate:'52',grossAmt:'100',GSTgroup:'150',GSTamt:'150'},
        { code:'PUR-2024-001',name:'Hard Red Spring',acc:'10',batch:'2026-12-31',voucherQty:'52',
        stockQty:'150',unit:'150',rate:'52',grossAmt:'100',GSTgroup:'150',GSTamt:'150'},
        { code:'PUR-2024-001',name:'Hard Red Spring',acc:'10',batch:'2026-12-31',voucherQty:'52',
        stockQty:'150',unit:'150',rate:'52',grossAmt:'100',GSTgroup:'150',GSTamt:'150'},
        { code:'PUR-2024-001',name:'Hard Red Spring',acc:'10',batch:'2026-12-31',voucherQty:'52',
        stockQty:'150',unit:'150',rate:'52',grossAmt:'100',GSTgroup:'150',GSTamt:'150'}
]

export function ItemsTable() {
    return (
        <div className="bg-white rounded border border-gray-200 shadow-sm">
            <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800">Items Details</h3>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <th className="px-6 py-3">ITEM CODE</th>
                            <th className="px-6 py-3">ITEM NAME</th>
                            <th className="px-6 py-3">ACCOUNT</th>
                            <th className="px-6 py-3">BATCH NO.</th>
                            <th className="px-6 py-3">VOUCHER QTY</th>
                            <th className="px-6 py-3">STOCK QTY</th>
                            <th className="px-6 py-3">UNIT</th>
                            <th className="px-6 py-3">RATE</th>
                            <th className="px-6 py-3">GROSS AMOUNT</th>
                            <th className="px-6 py-3">GST GROUP</th>
                            <th className="px-6 py-3">GST AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {items.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap">{item.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.acc}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.batch}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.voucherQty}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.stockQty}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.unit}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.rate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.grossAmt}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.GSTgroup}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.GSTamt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm">
            <span className="text-gray-500">Showing 1-10 of 10 results</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 border rounded bg-teal-800 text-white">1</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
            </div>
        </div>
    </div>
    );
}