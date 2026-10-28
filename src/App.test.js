import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the contact call to action", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /have a project in mind/i })).toBeInTheDocument();
});
