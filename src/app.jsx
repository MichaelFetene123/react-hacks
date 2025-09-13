import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });
const App = () => {
  return (
    <StrictMode>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // Use the imported createRoot
root.render(<App />);
import { RouterProvider } from "./../node_modules/@tanstack/react-router/src/RouterProvider";
import { routeTree } from "./../node_modules/@tanstack/router-generator/dist/esm/generator";
