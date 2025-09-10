import { createRoot } from "react-dom/client"; // Correct import
import Pizza from "./Pizza";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's Pizza - Order Now</h1>
      <Pizza name="miki" description="like's hunburger" image="/public/pizzas/pepperoni.webp" />
      <Pizza name="kid" description="like's pizza" image="/public/pizzas/hawaiian.webp"/>
      <Pizza name="my kid" description="like's egg" image="/public/pizzas/big_meat.webp"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // Use the imported createRoot
root.render(<App />);
