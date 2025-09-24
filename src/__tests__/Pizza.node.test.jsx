import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza.jsx";

afterEach(cleanup);

test("alt test renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description="supper cool pizza" />
  );

  const img = screen.getByRole("img");
  expect(img.getAttribute("src")).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have adefault image if none is provided", async () => { 
const screen = render(
  <Pizza name="something else"  description="supper cool pizza" />
    );
    
    const img = screen.getByRole("img");
    expect(img.src).not.toBe("");
});