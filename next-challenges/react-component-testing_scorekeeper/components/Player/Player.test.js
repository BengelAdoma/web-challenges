import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(
      <Player name="John Doe" score={5} onDecreasePlayerScore={() => {}} onIncreasePlayerScore={() => {}} />
    );
  
    const playerName = screen.getByText(/john doe/i);
    const score = screen.getByText(/5/);
    const buttons = screen.getAllByRole("button");
  
    expect(playerName).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(buttons).toHaveLength(2); 
  });

  test("calls callbacks when increasing or decreasing score", async () => {
    const handleIncrease = jest.fn();
    const handleDecrease = jest.fn();
  
    render(
      <Player name="John Doe" score={5} onDecreasePlayerScore={handleDecrease} onIncreasePlayerScore={handleIncrease} />
    );
  
    const increaseButton = screen.getByRole("button", { name: /increase score/i });
    const decreaseButton = screen.getByRole("button", { name: /decrease score/i });
  
    await userEvent.click(increaseButton);
    await userEvent.click(decreaseButton);
  
    expect(handleIncrease).toHaveBeenCalledTimes(1);
    expect(handleDecrease).toHaveBeenCalledTimes(1);
  });
