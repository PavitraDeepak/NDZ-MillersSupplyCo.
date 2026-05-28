import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, ArrowLeft } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const subPageConfig = {
    '/purchase/new': { title: 'New Purchase Entry', backTo: '/purchase' },
    '/sales/in': { title: 'Sales In', backTo: '/sales' },
    '/sales/out': { title: 'Sales Out', backTo: '/sales' },
  };

  // Helper to determine the title based on the path
  const getPageTitle = (path) => {
    if (subPageConfig[path]) return subPageConfig[path].title;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/purchase') return 'Purchase Management';
    return 'Dashboard';
  };

  const currentConfig = subPageConfig[location.pathname];
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="h-[70px] bg-white border-b border-gray-200 flex items-center px-6">
      
      {/* 1. Back Arrow (Only renders on sub-pages) */}
      {currentConfig && (
        <button 
          onClick={() => navigate(currentConfig.backTo)} 
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
        >
          <ArrowLeft size={20} />
        </button>
      )}

      {/* 2. Unified Title (Removes the double-render issue) */}
      <h1 className="text-xl font-bold text-gray-800 mr-auto">
        {pageTitle}
      </h1>

      {/* 3. Search Bar (Conditional) */}
      {location.pathname === '/dashboard' && (
        <div className="flex-1 max-w-[700px] mx-8">
          <input type="text" placeholder="Search here.." className="w-full h-[45px] bg-[#f8f9fa] border border-gray-200 rounded-md px-4 text-sm outline-none focus:border-[#1e715b]" />
        </div>
      )}

      {/* 4. Right Side Actions */}
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