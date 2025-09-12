import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaOfTheDay
      ? `${pizzaOfTheDay.id}`
      : "loading... "
    );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const pizzaJson = await response.json();
      setPizzaOfTheDay(pizzaJson);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
