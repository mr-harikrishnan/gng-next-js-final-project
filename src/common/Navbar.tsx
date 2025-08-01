"use client"
import React, { useState } from 'react'
import Sidebar from './SideBar'
import Header from './Header'

function NavBar() {

  const [sideBar, setSideBar] = useState(false)

  const toggleSideBar: () => void = () => {
    setSideBar(!sideBar);
  };

  return (
    <div>
      <Sidebar setSideBar={setSideBar} sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <div
        onClick={toggleSideBar}
        className={`lg:hidden ${sideBar == true ? "block" : "hidden"} fixed inset-0 bg-[#00000060] bg-opacity-10 -sm z-[40]`}>

      </div>
      <Header toggleSideBar={toggleSideBar}></Header>
    </div>
  )
}

export default NavBar