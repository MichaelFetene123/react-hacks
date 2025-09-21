import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../Pizza.jsx";

test("alt test renders on Pizza image", async () => {
  const name = " my favorite pizza";
  const src = " https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} src={src} description="supper cool pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.src).toBe(name);
});
