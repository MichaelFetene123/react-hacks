import React from "react";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Cart = ({ cart, checkout }) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const current = cart[i];
    total += current.pizza.sizes[current.size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <u>
        {cart.map((item, index) => (
          <li key={index}>
            <span></span>
          </li>
        ))}
      </u>
    </div>
  );
};

export default Cart;
