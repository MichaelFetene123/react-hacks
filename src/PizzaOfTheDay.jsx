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

return (
  <div className="pizza-of-the-day">
    <h2>Pizza of the Day</h2>
    <div>
      <div className="pizza-of-the-day-info">
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.description}</p>
      </div>
    </div>
  </div>
);

export default PizzaOfTheDay;
