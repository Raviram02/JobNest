import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[160px] h-[38px] mr-3 cursor-pointer text-3xl"
    >
      <i className="ri-user-search-fill text-gray-500 mr-1 text-2.5xl"></i>
      <span className="font-bold text-blue-500">job</span>
      <span className="font-bold text-gray-800">Nest</span>
    </div>
  );
};

export default Logo;
