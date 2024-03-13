/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import "./styles.css";
import Sidebar from "./components/sidbar";
import Blog from "./components/blog";

function App() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <div className="relative min-h-screen md:flex">
      {/* sidemenu */}
      <Sidebar setExpand={setSideMenuIsExpand} />
      {/* content */}
      <div
        className={`pl-40 flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
        <Blog />
      </div>
    </div>
  );
}

export { App };
