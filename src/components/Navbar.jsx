import { Bell, ChevronDown } from "lucide-react"; // Import icons from library

function Navbar() {
  return (
    <div className="h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      <div className="flex items-center">
        <h2 className="text-[22px] font-bold text-gray-800">Dashboard</h2>
      </div>

      <div className="flex-1 max-w-[700px] mx-8">
        <input 
          type="text" 
          placeholder="Search here.." 
          className="w-full h-[45px] bg-[#f8f9fa] border border-gray-200 rounded-md px-4 text-sm outline-none focus:border-[#1e715b] transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        {/* Bell Icon */}
        <div className="relative cursor-pointer text-gray-600 hover:text-[#1e715b]">
          <Bell size={24} strokeWidth={2} />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-[#1e715b] text-white flex items-center justify-center font-semibold">
            J
          </div>
          <span className="text-gray-700 font-medium">John Smith</span>
          {/* Chevron Icon */}
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;