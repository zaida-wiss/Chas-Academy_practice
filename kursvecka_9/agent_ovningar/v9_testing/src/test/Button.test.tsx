import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button/Button";
import React from "react";

test("renderar en knapp med rätt text", () => {
  render(<Button>Spara</Button>);
  expect(screen.getByRole("button", { name: /spara/i })).toBeInTheDocument();
});

test("är disabled när disabled=true", () => {
  render(<Button disabled>Spara</Button>);
  expect(screen.getByRole("button", {name: /spara/i})).toBeDisabled();
});

test("anropar onClick när vi klickar", async () => {
  const user = userEvent.setup();
  const onClick = jest.fn();
  render (<Button onClick={onClick}>Spara</Button>);
  await user.click(screen.getByRole("button", { name: /spara/i }));
  expect(onClick).toHaveBeenCalledTimes(1);
});
