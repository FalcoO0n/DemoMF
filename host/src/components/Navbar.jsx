import React from "react";
import { Square3Stack3DIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import DotMenu from "./DotMenu";

function Navbar() {
  return (
    <nav className="h-[40px] w-full bg-gray-700 flex justify-between items-center pr-3">
      {/* <Squares2X2Icon className="mt-2 ml-3 text-white size-6" /> */}
      <DotMenu />
      <span className="text-xl font-bold text-white">MappZen MicrofrontEnd</span>
    </nav>
  );
}

export default Navbar;
