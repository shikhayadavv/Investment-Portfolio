import { LogOutIcon, TrendingUp, User } from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="flex flex-row items-center text-xl gap-1 font-semibold text-blue-800"><TrendingUp className="h-5 w-5" /> Portfolio Allocator</h1>
      <div className="flex flex-row gap-4">
        <button className=" flex flex-row items-center gap-1 mr-4 text-gray-600 hover:text-blue-700"> <User className="h-5 w-5" />Profile</button>
        <button className="flex flex-row items-center gap-1 text-red-600 hover:text-red-700"> <LogOutIcon className="h-5 w-5"/> Logout</button>
      </div>
    </div>
  );
};

export default TopBar;
