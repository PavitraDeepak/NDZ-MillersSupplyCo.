import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, ArrowLeft } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

const subPageConfig = {
  '/purchase/new': { title: 'New Purchase Entry', backTo: '/purchase' },
  '/sales/in': { title: 'Material In Management', backTo: '/dashboard' }, 
  '/sales/out': { title: 'Material Out Management', backTo: '/sales' },
    '/sales/in/new': { title: 'New Material In Entry', backTo: '/sales/in' }, 
  '/sales/out/new': { title: 'New Material Out Entry', backTo: '/sales/out' }, 
};

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
      
      {currentConfig && (
        <button 
          onClick={() => navigate(currentConfig.backTo)} 
          className="mr-4 p-2 hover:bg-gray-100 rounded transition-colors text-gray-600"
        >
          <ArrowLeft size={20} />
        </button>
      )}

      <h1 className="text-xl font-bold text-gray-800 mr-auto">
        {pageTitle}
      </h1>

      {location.pathname === '/dashboard' && (
        <div className="flex-1 max-w-[700px] mx-8">
          <input type="text" placeholder="Search here.." className="w-full h-[45px] bg-[#f8f9fa] border border-gray-200 rounded-md px-4 text-sm outline-none focus:border-[#1e715b]" />
        </div>
      )}

      <div className="flex items-center gap-6">
        <Bell size={24} className="text-gray-600 cursor-pointer" />
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="h-10 w-10 rounded bg-[#1e715b] text-white flex items-center justify-center font-semibold">J</div>
          <span className="text-gray-700 font-medium">John Smith</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;