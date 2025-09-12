import { useState , useEffect } from 'react';

export default function usePizzaOfTheDay() { 

    const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

    useEffect(() => { 
        async function fetchPizzaOfTheDay() {
            const response = await fetch('/api/pizza-of-the-day');
            const pizzaJson = await response.json();
            setPizzaOfTheDay(pizzaJson);
        }
        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
}