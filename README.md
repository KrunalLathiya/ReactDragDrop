# React Drag-and-Drop List

This project is a React application that demonstrates how to create a drag-and-drop list using `@dnd-kit` and Material-UI. The list supports reordering items and persisting the order to a backend JSON server.

## Features

- Display items in a list format with drag-and-drop functionality
- Update the order of items dynamically
- Persist changes to the backend JSON server
- Manage loading and error states

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/KrunalLathiya/ReactDragDrop.git
    ```
2. Install the dependencies:

    ```bash
    npm install
    ```
3. Start the development server:

    ```bash
    npm run dev
    ```
4. Start the JSON server:

    ```bash
    npm run server
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5173/` to view the application.
2. Use the drag-and-drop functionality to reorder the list items.
3. The changes will be saved and persisted in the `db.json` file served by the JSON server.

## Project Structure

- `src/components`: Contains the React components for the application.
  - `SortableItem.jsx`: A reusable component for sortable list items.
  - `DragDropList.jsx`: The main component for handling the drag-and-drop functionality.
- `src/services`: Contains utility functions for API calls.
  - `api.js`: API utility functions for fetching and updating items.
- `src/App.jsx`: The root component that uses the `DragDropList` component.
- `db.json`: The JSON server file containing the list items.

## Dependencies

- `@dnd-kit/core`: Core utilities for drag-and-drop functionality.
- `@dnd-kit/sortable`: Utilities for creating sortable lists.
- `@dnd-kit/utilities`: Utility functions for drag-and-drop.
- `@mui/material`: Material-UI components for styling.
- `axios`: Promise-based HTTP client for making API requests.
- `json-server`: Fake REST API server for serving the `db.json` file.

## License

This project is licensed under the MIT License.
