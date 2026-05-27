import { Bell, ChevronDown } from "lucide-react"; 
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const getPageTitle = (path) => {
    if (path.startsWith('/dashboard')) return 'Dashboard';
    if (path.startsWith('/purchase')) return 'Purchase Management';
    return 'Dashboard'; 
  };

  return (
    <div className="h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-gray-800">{getPageTitle(location.pathname)}</h1>

      {location.pathname === '/dashboard' && (
        <div className="flex-1 max-w-[700px] mx-8">
          <input type="text" placeholder="Search here.." className="w-full h-[45px] bg-[#f8f9fa] border border-gray-200 rounded-md px-4 text-sm outline-none focus:border-[#1e715b]" />
        </div>
      )}

      <div className="flex items-center gap-6">
        <Bell size={24} className="text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-[#1e715b] text-white flex items-center justify-center font-semibold">J</div>
          <span className="text-gray-700 font-medium">John Smith</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;