import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Circle 
} from "lucide-react";

function Sidebar() {
  const [isSalesOpen, setIsSalesOpen] = useState(false);

  const getLinkClass = ({ isActive }) => 
    `flex items-center gap-4 p-2.5 rounded-md transition-colors font-semibold text-sm ${
      isActive 
        ? "bg-green-50 text-green-600" 
        : "text-black hover:bg-gray-50 hover:text-green-600"
    }`;

  return (
    <div className="w-[260px] bg-white border-r border-gray-200 h-full">
      <div className="p-5 space-y-2">

        <NavLink to="/dashboard" className={getLinkClass}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/purchase" className={getLinkClass}>
          <ShoppingCart size={20} />
          <span>Purchase</span>
        </NavLink>

        <div>
          <div 
            onClick={() => setIsSalesOpen(!isSalesOpen)}
            className="flex items-center justify-between text-black hover:text-green-600 cursor-pointer p-2.5 rounded-md hover:bg-gray-50 transition-colors font-semibold text-sm"
          >
            <div className="flex items-center gap-4">
              <TrendingUp size={20} />
              <span>Sales</span>
            </div>
            {isSalesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          {isSalesOpen && (
            <div className="ml-8 mt-1 space-y-1">
              <NavLink to="/sales/in" className={getLinkClass}>
                <Circle size={8} strokeWidth={4} />
                <span>Sales In</span>
              </NavLink>
              <NavLink to="/sales/out" className={getLinkClass}>
                <Circle size={8} strokeWidth={4} />
                <span>Sales Out</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;