import { StrictMode,useState } from "react";
import { createRoot } from "react-dom/client"; // Correct import
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./Contexts";

const App = () => {
const cartHook = useState([]);  
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
