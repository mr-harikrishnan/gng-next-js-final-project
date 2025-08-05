"use client"
import React from 'react'
type SideBarProps = {
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  sideBar: boolean;
};

type SideBarToggleProps = {
  toggleSideBar: () => void;
};

// Combine both
type SidebarProps = SideBarProps & SideBarToggleProps;

function Sidebar({
  sideBar,
  toggleSideBar,
}: SidebarProps) {
  const menuItems = [
    { id: 'demos', label: 'Demos', hasDropdown: true },
    { id: 'about', label: 'About Us', hasDropdown: true },
    { id: 'courses', label: 'Courses', hasDropdown: true },
    { id: 'events', label: 'Events', hasDropdown: false },
    { id: 'pages', label: 'All Pages', hasDropdown: true },
  ]

  return (
    <div className={`${sideBar == false ?"hidden":""} fixed w-72 h-full bg-[#FAF5FF] shadow-lg flex flex-col z-48 lg:hidden`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 relative">
        <div className="flex flex-col">
          <img
          className='w-26'
           src="https://cdn.prod.website-files.com/64184874f371bc785f2236eb/6419a7c46528562f35083c63_Logo%20Language%20School.png" alt="" />
        </div>
        <button className="absolute top-5 right-5 p-1 text-gray-400 hover:text-gray-600 transition-colors">
          <svg
          onClick={toggleSideBar}
           className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-5">
        {menuItems.map(function(item) {
          return (
            <button
              key={item.id}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-medium transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:bg-purple-100 focus:text-primary focus:border-r-4 focus:border-secondary"
            >
              <span className="text-base">{item.label}</span>
              {item.hasDropdown && (
                <svg className="w-4 h-4 transition-transform duration-200 hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          )
        })}
      </nav>

      {/* Login Button */}
      <div className="p-5 border-t border-gray-200">
        <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Log In
        </button>
      </div>
    </div>
  )
}

export default Sidebar