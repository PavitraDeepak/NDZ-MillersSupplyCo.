import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { X } from 'lucide-react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import logo from "../assets/logo.png";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen bg-[#f6f8fa] flex flex-col">
      <div className="flex h-[70px] border-b border-gray-200 bg-white shrink-0">
        
        <div 
          onClick={() => !isSidebarOpen && setIsSidebarOpen(true)}
          className={`w-[260px] flex items-center justify-between px-5 shrink-0 transition-colors ${!isSidebarOpen ? 'cursor-pointer hover:bg-gray-50' : ''}`}>
          <img src={logo} alt="Supplyco" className="h-[70px] w-auto object-contain" />
          
          {isSidebarOpen && (
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsSidebarOpen(false); 
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          )}
        </div>
        
          <div className="flex-1">
          <Navbar />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && <Sidebar />}
        
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default Layout;