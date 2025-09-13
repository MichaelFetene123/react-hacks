import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
const App = () => {
  return (
    <StrictMode>
    <RouterProvider router={router} /> 
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // Use the imported createRoot
root.render(<App />);
