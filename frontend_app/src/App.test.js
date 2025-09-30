import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders brand title", () => {
  render(<App />);
  const brand = screen.getByText(/Ocean App/i);
  expect(brand).toBeInTheDocument();
});

test("renders call to action button", () => {
  render(<App />);
  const cta = screen.getByRole("button", { name: /Create Project/i });
  expect(cta).toBeInTheDocument();
});
