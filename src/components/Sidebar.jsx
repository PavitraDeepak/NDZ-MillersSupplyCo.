import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp,
  Circle // Added for sub-menu items
} from "lucide-react";

function Sidebar() {
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  return (
    <div className="w-[260px] bg-white border-r border-gray-200 h-full">
      <div className="p-5 space-y-4">
        
        <div className="flex items-center gap-4 text-[#1e715b] font-medium cursor-pointer p-2 rounded-md hover:bg-[#edf7f4]">
          <LayoutDashboard size={22} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-4 text-gray-600 hover:text-[#1e715b] cursor-pointer p-2 rounded-md hover:bg-gray-50">
          <ShoppingCart size={22} />
          <span>Purchase</span>
        </div>

        <div>
          <div 
            onClick={() => setIsSalesOpen(!isSalesOpen)}
            className="flex items-center justify-between text-gray-600 hover:text-[#1e715b] cursor-pointer p-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <TrendingUp size={22} />
              <span>Sales</span>
            </div>
            {isSalesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>

          {isSalesOpen && (
            <div className="ml-10 mt-2 space-y-2 text-gray-500 text-sm animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:text-[#1e715b] hover:bg-gray-50">
                <Circle size={10} strokeWidth={3} />
                <span>Sales In</span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:text-[#1e715b] hover:bg-gray-50">
                <Circle size={10} strokeWidth={3} />
                <span>Sales Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;