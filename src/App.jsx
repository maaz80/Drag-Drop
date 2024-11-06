import React, { useState } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import Sidebar from "./components/Sidebar";
import DropZone from "./components/DropZone";
import ElementForm from "./components/ElementForm";

function App() {
  const [selectedElement, setSelectedElement] = useState(null);
  const [elements, setElements] = useState([]);

  // Dop element Function 
  const handleAddElement = (newElement) => {
    setElements((prev) => [...prev, newElement]);
  };

  // Update element Function 
  const handleUpdateElement = (updatedElement) => {
    setElements((prev) =>
      prev.map((el) => (el.id === updatedElement.id ? updatedElement : el))
    );
    setSelectedElement(null); 
  };

  // Delete Element Function 
  const handleDeleteElement = (id) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
  };

  // Close edit FOrm 
  const handleCloseForm = () => {
    setSelectedElement(null); 
  };

  return (
    <DndProvider options={HTML5toTouch}>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <DropZone
          elements={elements}
          setSelectedElement={setSelectedElement}
          onAddElement={handleAddElement}
          onDeleteElement={handleDeleteElement}
        />
        {selectedElement && (
          <ElementForm
            element={selectedElement}
            onSave={handleUpdateElement}
            onClose={handleCloseForm}
          />
        )}
      </div>
    </DndProvider>
  );
}

export default App;
