import { useState } from 'react';
import { Upload, X, Calendar, Save, Send, Trash2, Plus } from 'lucide-react';

const InputField = ({ label, type, placeholder, required, showIcon }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex items-center">
        {showIcon && <Calendar className="absolute left-3 text-gray-400" size={18} />}
        <input 
          type={type === "date" && !isFocused ? "text" : type}
          placeholder={placeholder || (type === "date" ? "22-05-2026" : "")}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => !e.target.value && setIsFocused(false)}
          className={`w-full ${showIcon ? 'pl-10' : 'px-4'} py-2.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#1e715b] transition-colors`}
        />
      </div>
    </div>
  );
};

const SummaryRow = ({ label, value, isGreen, isRed }) => (
  <div className="flex justify-between items-center py-2">
    <span className="text-sm text-gray-600">{label}</span>
    <span className={`text-sm font-semibold ${isGreen ? 'text-emerald-600' : isRed ? 'text-red-500' : 'text-gray-900'}`}>
      {value}
    </span>
  </div>
);

function MaterialInEntry() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => { if (e.target.files) setSelectedFile(e.target.files[0]); };

  const fields = [
    { label: "Purchase Date", type: "date", required: true, showIcon: true },
    { label: "Purchase No", placeholder: "PO-2026-0542", required: true },
    { label: "Acknowledgement", required: true },
    { label: "Party", required: true },
    { label: "Place of Supply", required: true },
    { label: "Delivery Date", type: "date", required: true },
    { label: "Bill Date", type: "date", required: true, showIcon: true },
    { label: "Bill No.", placeholder: "PO-2026-0542", required: true },
    { label: "Location", placeholder: "Kochi", required: true },
    { label: "Incharge", required: true },
  ];

  const headers = ["#", "ITEM CODE", "ITEM NAME", "BATCH NO.", "BATCH EXP. DATE", "BATCH MRP", "BATCH OLD MRP", "ITEM STOCK QTY", "FOR BRANCH", "SUPPLY BRANCH"];
  const items = [1, 2, 3];

  return (
    <div className="p-2 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

        <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded border border-gray-200 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Material In Entry  </h3>
          <div className="mb-8">
            <label className="w-72 border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center gap-4 cursor-pointer hover:border-[#1e715b]">
              <div className="text-[#1e715b] bg-emerald-50 p-2 rounded"><Upload size={20} /></div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800">Upload Purchase Order</h3>
                <p className="text-[10px] text-gray-400">Upload DOC, PDF</p>
              </div>
              <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
            </label>
            {selectedFile && (
              <div className="mt-2 text-sm text-[#1e715b] flex items-center justify-between bg-emerald-50 p-3 rounded-lg w-72">
                <span className="truncate">{selectedFile.name}</span>
                <button onClick={() => setSelectedFile(null)}><X size={16} /></button>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fields.map((f, i) => <InputField key={i} {...f} />)}
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700">Remarks / Notes</label>
            <textarea rows="4" className="w-full mt-1.5 p-3 resize-none border border-gray-200 rounded outline-none focus:border-[#1e715b]" placeholder="Enter any additional notes or remarks..." />
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded border border-gray-200 shadow-sm flex flex-col justify-between">
          
          {/* Top: summary content */}
          <div>
            <h3 className="font-bold text-lg mb-6">Order Summary</h3>
            <div className="space-y-1 mb-4 border-b border-gray-100 pb-4">
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600">Total Items</span>
                <span className="text-sm font-bold">3</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-gray-600">Total Quantity</span>
                <span className="text-sm font-bold">100 MT</span>
              </div>
            </div>
            <div className="space-y-2">
              <SummaryRow label="Gross Total" value="₹38,30,000" />
              <SummaryRow label="Discount (-)" value="₹500" isRed />
              <SummaryRow label="GST (+)" value="₹1,91,475" isGreen />
              <SummaryRow label="TDS (-)" value="₹3,830" isRed />
            </div>
            <div className="border-t border-gray-100 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">Final Amount</span>
                <span className="text-xl font-bold text-emerald-600">₹40,17,145</span>
              </div>
            </div>
          </div>

          {/* Bottom: buttons always at bottom */}
          <div className="flex flex-col gap-2 pt-4">
            <button className="w-full py-2.5 flex items-center justify-center gap-2 border border-gray-200 rounded text-gray-700 hover:bg-gray-50 transition-colors">
              <Save size={18} /> Save as Draft
            </button>
            <button className="w-full py-2.5 flex items-center justify-center gap-2 bg-[#1e715b] text-white rounded hover:bg-[#185d4b] transition-colors">
              <Send size={18} /> Submit for Approval
            </button>
          </div>
        </div>

        {/* BOTTOM: Item Details */}
        <div className="col-span-12 bg-white p-6 rounded border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Item Details</h3>
            <button className="bg-[#1e715b] text-white px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-[#185d4b]">
              <Plus size={16} /> Add Item
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  {headers.map((h, i) => <th key={i} className="pb-4 font-semibold px-2 whitespace-nowrap">{h}</th>)}
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((row) => (
                  <tr key={row}>
                    <td className="py-4 text-sm text-gray-600 px-2">{row}</td>
                    <td className="py-2 px-2"><input className="w-28 p-2 border border-gray-200 rounded text-sm" defaultValue="PUR-2024-001" /></td>
                    <td className="py-2 px-2"><input className="w-32 p-2 border border-gray-200 rounded text-sm" defaultValue="Hard Red Spring" /></td>
                    <td className="py-2 px-2"><input className="w-16 p-2 border border-gray-200 rounded text-sm" defaultValue="10" /></td>
                    <td className="py-2 px-2"><input className="w-32 p-2 border border-gray-200 rounded text-sm" defaultValue="2026-12-31" /></td>
                    <td className="py-2 px-2"><input className="w-20 p-2 border border-gray-200 rounded text-sm" defaultValue="₹52.00" /></td>
                    <td className="py-2 px-2"><input className="w-20 p-2 border border-gray-200 rounded text-sm" defaultValue="₹50.00" /></td>
                    <td className="py-2 px-2"><input className="w-16 p-2 border border-gray-200 rounded text-sm" defaultValue="150" /></td>
                    <td className="py-2 px-2"><input className="w-32 p-2 border border-gray-200 rounded text-sm" defaultValue="Central Warehouse" /></td>
                    <td className="py-2 px-2"><input className="w-32 p-2 border border-gray-200 rounded text-sm" defaultValue="Kochi Branch" /></td>
                    <td className="py-2 px-2 text-center text-red-500 cursor-pointer"><Trash2 size={16} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MaterialInEntry;