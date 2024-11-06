import React, { useState, useEffect } from "react";

const ElementForm = ({ element, onSave, onClose }) => {
  const [formValues, setFormValues] = useState({ ...element });
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the form when the component mounts
    setShow(true);
    return () => setShow(false);
  }, []);

  // Edit the element 
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Save Function 
  const handleSave = () => {
    onSave(formValues);
  };

  // Close function 
  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-xl border-l p-4 md:p-6 z-10 rounded-l-xl transition-transform duration-300 ease-in-out ${show ? "translate-x-0" : "translate-x-full"
        } w-[85%] md:w-1/4`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Edit Element</h2>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="text-gray-700 text-2xl font-bold hover:text-red-600"
        >
          &times;
        </button>
      </div>

      {/* Editable Text Field  */}
      {element.type === "text" && (
        <input
          name="content"
          value={formValues.content}
          onChange={handleChange}
          placeholder="Edit text"
          className="p-2 border rounded w-full mb-4"
        />
      )}
      {/* Editable Image Field  */}
      {element.type === "image" && (
        <input
          name="src"
          value={formValues.src}
          onChange={handleChange}
          placeholder="Image URL"
          className="p-2 border rounded w-full mb-4"
        />
      )}
      {/* Editable Button text Field  */}
      {element.type === "button" && (
        <input
          name="label"
          value={formValues.label}
          onChange={handleChange}
          placeholder="Button Label"
          className="p-2 border rounded w-full mb-4"
        />
      )}
      {/* Save Button  */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded w-full mr-2"
        >
          Save
        </button>
        <button
          onClick={handleClose}
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ElementForm;
