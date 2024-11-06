import React from "react";
import DraggableElement from "./DraggableElement";
import { FaTextHeight, FaImage, FaRegHandPointer } from "react-icons/fa"; 

const Sidebar = () => {
  const elements = [
    { type: "text", content: "Sample Text", icon: <FaTextHeight /> },
    { type: "image", src: "https://st.depositphotos.com/2274151/3518/i/450/depositphotos_35186549-stock-photo-sample-grunge-red-round-stamp.jpg", icon: <FaImage /> },
    { type: "button", label: "Click Me", icon: <FaRegHandPointer /> },
  ];

  return (
    <div className="w-[15%] md:w-1/5 p-2 md:p-6 bg-white shadow-lg space-y-4 border-r border-gray-200">
      <h2 className="text-xl font-bold text-gray-700 hidden md:block">Draggable Elements</h2>
      {elements.map((el, index) => (
        <DraggableElement key={index} element={el} /> 
      ))}
    </div>
  );
};

export default Sidebar;
