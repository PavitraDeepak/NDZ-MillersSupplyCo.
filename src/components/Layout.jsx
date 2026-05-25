import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import logo from "../assets/logo.png";
import xIcon from "../assets/x.png"; 

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen bg-[#f6f8fa] flex flex-col">
      <div className="flex h-[70px] border-b border-gray-200 bg-white shrink-0">
        
        <div 
          onClick={() => !isSidebarOpen && setIsSidebarOpen(true)}
          className={`w-[260px] flex items-center justify-between px-5 border-r border-gray-200 shrink-0 transition-colors ${!isSidebarOpen ? 'cursor-pointer hover:bg-gray-50' : ''}`}
        >
          <img src={logo} alt="Supplyco" className="h-[50px] w-auto object-contain" />
          
          {isSidebarOpen && (
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsSidebarOpen(false); 
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <img src={xIcon} alt="Close" className="h-[20px] w-[20px] object-contain opacity-50" />
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