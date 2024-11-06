import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ elements, setSelectedElement, onAddElement, onDeleteElement }) => {
  // Drop Logic 
  const [{ isOver }, drop] = useDrop({
    accept: "element",
    drop: (item) => addElementToZone(item), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  // Drop Element function
  const addElementToZone = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      children: [],
    };
    onAddElement(newItem);
  };

  // Delete function
  const handleDelete = (id) => {
    onDeleteElement(id);
  };

  // Edit Function
  const handleEdit = (el) => {
    setSelectedElement(el); 
  };

  const renderElement = (el) => {
    return (
      <div
        key={el.id}
        className="mb-4 p-2 md:p-4 border border-gray-300 bg-white rounded flex justify-between items-center"
      >
        {el.type === "text" && <p>{el.content || "Sample Text"}</p>}
        {el.type === "image" && (
          <img src={el.src || "https://via.placeholder.com/100"} alt="Dropped" className="w-16 md:w-32 rounded-md" />
        )}
        {el.type === "button" && (
          <button className="w-24 md:w-52 py-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded">
            {el.label || "Button"}
          </button>
        )}
        {/* Buttons */}
        <div>
          {/* Delete button */}
          <button
            onClick={() => handleDelete(el.id)}
            className="mt-0 px-3 py-2 bg-red-500 hover:bg-red-400 text-white rounded"
          >
            Delete
          </button>

          {/* Edit button */}
          <button
            onClick={() => handleEdit(el)}
            className="mt-0 ml-2 px-3 py-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded"
          >
            Edit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={drop}
      className={`flex-1 p-2 md:p-6 bg-gray-50 border-dashed border-2 border-gray-300 relative ${isOver ? "bg-green-100" : ""
        }`}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-600">Drop Zone</h2>
      {elements.map((el) => renderElement(el))}
    </div>
  );
};

export default DropZone;
