import React from "react";
import { useDrag } from "react-dnd";

const DraggableElement = ({ element }) => {
  // Dragging code 
  const [{ isDragging }, drag] = useDrag({
    type: "element",
    item: element,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-2 border rounded shadow ${
        isDragging ? "opacity-50" : "opacity-100"
      } cursor-pointer bg-white flex items-center`}
    >
      
      <div className="text-xl text-gray-600 block md:hidden">{element.icon}</div>
      <div className="hidden md:block w-full">
        {element.type === "text" && <span>{element.content}</span>}
        {element.type === "image" && (
          <img src={element.src} alt="Draggable" className="w-full rounded-md" />
        )}
        {element.type === "button" && (
          <button className="w-full py-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded">
            {element.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default DraggableElement;
