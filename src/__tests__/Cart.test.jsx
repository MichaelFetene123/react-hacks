import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "./../Cart";

test("snapshot with nothing in cart ", () => {
  const { asFragment } = render(<Cart cart={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

test("lol", () => {
    expect({
        id: "calabrese",
        name: "The Calabrese Pizza",
        category: "Supreme",
        Description: "lol pizza from Calabria",
        image: "/pizzas/pizzas/calabrese.webp",
        size: { S: 12.25, M: 16.25, L: 20.25 },
    }).toMatchSnapshot();
});
