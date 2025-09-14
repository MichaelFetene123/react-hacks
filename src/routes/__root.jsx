import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import PizzaOfTheDay from "./../PizzaOfTheDay";
import Header from "./../Header";
import { CartContext } from "./../Contexts";

function NotFound() {
  return <div>Page Not Found</div>;
}

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Outlet />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    );
  },
  notFoundComponent: NotFound, // Add this line
});
