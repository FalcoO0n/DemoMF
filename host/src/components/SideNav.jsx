import React from "react";
import { useState } from "react";
import {
  ClipboardDocumentIcon,
  CubeTransparentIcon,
  Bars3BottomLeftIcon,
  ChevronDoubleLeftIcon,
  Cog6ToothIcon,
  InboxStackIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import { HomeIcon } from "@heroicons/react/20/solid";

function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`h-[calc(100%-40px)] ${
        isCollapsed ? "w-[50px]" : "w-[240px]"
      } bg-gray-800 text-white fixed bottom-0 left-0 flex flex-col transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4 text-lg font-bold border-b border-gray-700">
        {isCollapsed ? null : <span>SideNav</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white bg-transparent border-none cursor-pointer"
        >
          {isCollapsed ? (
            <Bars3BottomLeftIcon className="size-5" />
          ) : (
            <ChevronDoubleLeftIcon className="size-5" />
          )}
        </button>
      </div>
      <ul className={`flex-grow ${isCollapsed ? "block" : "block"}`}>
        <li className="flex items-center p-4 hover:bg-gray-700">
          <a href="/" className="flex items-center">
            <HomeIcon className="mr-2 size-5" />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>Home</span>
          </a>
        </li>
        
        <li className="flex items-center p-4 hover:bg-gray-700">
          <a href="/ballooning" className="flex items-center" >
          <CubeTransparentIcon className="mr-2 size-5" />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>Ballooning</span >
          </a >
        </li >
        <li className="flex items-center p-4 hover:bg-gray-700">
          <a href="/mappZen" className="flex items-center" >
          <ClipboardDocumentIcon className="mr-2 size-5" />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>Inspection</span >
          </a >
        </li >
        <li className="flex items-center p-4 hover:bg-gray-700">
          <a href="/mappZen" className="flex items-center">
          <DocumentMagnifyingGlassIcon className="mr-2 size-5" />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>SPC</span>
          
          </a>
        </li>
        <li className="flex items-center p-4 hover:bg-gray-700">
          <a href="/mappZen" className="flex items-center">
          <InboxStackIcon className="mr-2 size-5" />
          <span className={`${isCollapsed ? "hidden" : "block"}`}>Configuration</span>
          
          </a>
        </li>
      </ul>
      <div
        className={`p-4 border-t border-gray-700 flex items-center justify-between ${
          isCollapsed ? "w-[50px] justify-center" : "block"
        }`}
      >
        <span className={`${isCollapsed ? "hidden" : "block"}`}>Footer</span >
        <Cog6ToothIcon className="size-5" />
      </div >
    </div>
  );
}

export default SideNav;
