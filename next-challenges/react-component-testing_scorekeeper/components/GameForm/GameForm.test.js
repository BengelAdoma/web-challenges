import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name of game/i });
  const playersInput = screen.getByRole("textbox", { name: /player names/i });
  const button = screen.getByRole("button", { name: /create game/i });

  expect(nameInput).toBeInTheDocument();
  expect(playersInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={() => {}} />);

  const form = screen.getByRole("form", { name: /create a new game/i });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameInput = screen.getByRole("textbox", { name: /name of game/i });
  const playersInput = screen.getByRole("textbox", { name: /player names/i });
  const submitButton = screen.getByRole("button", { name: /create game/i });

  await userEvent.type(nameInput, "Dodelido");
  await userEvent.type(playersInput, "John Doe, Jane Doe");
  await userEvent.click(submitButton);

  expect(handleCreateGame).toHaveBeenCalledTimes(1);
  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGame = jest.fn();
  render(<GameForm onCreateGame={handleCreateGame} />);

  const nameInput = screen.getByRole("textbox", { name: /name of game/i });
  const playersInput = screen.getByRole("textbox", { name: /player names/i });
  const submitButton = screen.getByRole("button", { name: /create game/i });
  
  await userEvent.type(nameInput, "Dodelido");
  await userEvent.click(submitButton);

  expect(handleCreateGame).not.toHaveBeenCalled();

  await userEvent.clear(nameInput);
  await userEvent.type(playersInput, "John Doe, Jane Doe");
  await userEvent.click(submitButton);

  expect(handleCreateGame).not.toHaveBeenCalled();
});