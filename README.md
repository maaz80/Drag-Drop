
# Drag & Drop App

This project is a simple Drag-and-Drop application built using **React** and **React DnD** (Drag-and-Drop). The app allows users to drag elements (text, images, and buttons) from a sidebar into a drop zone, and edit or delete them.

## Features

- **Drag and Drop**: Users can drag elements (text, images, buttons) from the sidebar to the drop zone.
- **Element Edit and Save**: Users can click on elements in the drop zone to edit their content, save the changes, or cancel.
- **Element Deletion**: Users can delete elements from the drop zone.
- **Mobile Responsiveness**: The app is designed to be responsive, with a mobile-friendly menu for easy access to options on smaller screens.

## Technologies Used

- **React**: For building the user interface.
- **React DnD**: For drag-and-drop functionality.
- **Tailwind CSS**: For styling and responsive design.
- **React Icons**: For adding icons like text, image, and button.

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/drag-and-drop-app.git
```

### Navigate to the project directory

```bash
cd drag-and-drop-app
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

This will start the development server and you can access the app at `http://localhost:3000`.

## File Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Sidebar component where draggable elements are displayed.
│   ├── DropZone.jsx         # DropZone component where elements can be dropped.
│   ├── ElementForm.jsx      # Form component to edit elements.
│   ├── DraggableElement.jsx # Component for individual draggable elements.
├── App.jsx                  # Main application component with state management.
└── index.js                 # Entry point for the application.
```

## Components

### App.jsx

- This is the main component that holds the state for selected elements and all the elements.
- It includes the sidebar, drop zone, and element form.
- The app provides functionality for adding, updating, and deleting elements.

### Sidebar.jsx

- Displays a list of draggable elements (text, image, and button).
- Elements can be dragged and dropped into the drop zone.

### DropZone.jsx

- The drop area where elements are dropped.
- Allows users to edit or delete elements that have been dropped into the zone.

### ElementForm.jsx

- A form that allows the user to edit properties of the selected element.
- Users can save the updated element or cancel the changes.

### DraggableElement.jsx

- A component that represents an individual draggable element in the sidebar.

## Styling

This project uses **Tailwind CSS** for utility-first styling. You can customize the design further by modifying the classes in the JSX components.

## Mobile Responsiveness

The app is responsive, and the navbar turns into a mobile-friendly menu that can be toggled by clicking the hamburger icon on smaller screens.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature xyz'`).
5. Push to the branch (`git push origin feature-xyz`).
6. Create a new Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
