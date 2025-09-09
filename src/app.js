import React from "react";
import { createRoot } from "react-dom/client"; // Correct import



const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "padre Gino's"),
    React.createElement(Pizza, {
      name: "The pepperoni Pizza ",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs ",
    }),
    React.createElement(Pizza, {
      name: "Ethiopian Pizza",
      description: "Doro fries and hot dogs ",
    }),
    React.createElement(Pizza, {
      name: "Frankia Pizza",
      description: "pasta fries and hot dogs ",
    }),
    React.createElement(Pizza, {
      name: "italy Pizza",
      description: "spagety fries and hot dogs ",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container); // Use the imported createRoot
root.render(React.createElement(App));
