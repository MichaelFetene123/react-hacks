import { createRoot } from "react-dom/client"; // Correct import
import Order from "./Order";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza - Order Now</h1>
     <Order/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // Use the imported createRoot
root.render(<App />);
