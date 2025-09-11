import { usePizzaOfTheDay } from "./PizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }
};

return <div className="pizza-of-the-day"></div>;

export default PizzaOfTheDay;
