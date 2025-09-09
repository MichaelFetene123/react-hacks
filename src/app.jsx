import { createRoot } from "react-dom/client"; // Correct import
import Pizza from "./Pizza";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza - Order Now</h1>
      <Pizza name="miki" description="like's hunburger" />
      <Pizza name="kid" description="like's pizza" />
      <Pizza name="my kid" description="like's egg" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // Use the imported createRoot
root.render(<App />);
