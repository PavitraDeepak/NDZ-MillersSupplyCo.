import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, ShoppingCart, TrendingUp, 
  ChevronDown, ChevronUp, Circle, LogOut 
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Auto-open if the current path starts with /sales
  const [isSalesOpen, setIsSalesOpen] = useState(location.pathname.startsWith('/sales'));

  const getLinkClass = ({ isActive }) => 
    `flex items-center gap-4 p-2.5 rounded transition-colors font-semibold text-sm ${
      isActive 
        ? "bg-green-50 text-green-600" 
        : "text-black hover:bg-gray-50 hover:text-green-600"
    }`;

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await fetch('http://localhost:5000/api/logout', { method: 'POST', credentials: 'include' });
      localStorage.removeItem('accessToken');
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="w-[260px] bg-white border-r border-gray-200 h-full flex flex-col justify-between">
      <div className="p-5 space-y-2">
        <NavLink to="/dashboard" className={getLinkClass}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/purchase" className={getLinkClass}>
          <ShoppingCart size={20} />
          <span>Purchase</span>
        </NavLink>

        {/* Sales Menu */}
        <div>
          <div 
            onClick={() => setIsSalesOpen(!isSalesOpen)}
            className="flex items-center justify-between text-black hover:text-green-600 cursor-pointer p-2.5 rounded hover:bg-gray-50 transition-colors font-semibold text-sm">
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

      {/* Logout Footer */}
      <div className="p-5 border-t border-gray-100">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 p-2.5 w-full text-red-600 hover:bg-red-50 rounded font-semibold text-sm transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;