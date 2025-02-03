import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    render(
      <Input
        labelText="Username"
        placeholder="Enter your name"
        name="username"
        value=""
        onChange={() => {}}
        required
      />
    );
  
    const label = screen.getByLabelText(/username/i);
    const input = screen.getByRole("textbox", { name: /username/i });
  
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter your name");
    expect(input).toHaveAttribute("name", "username");
    expect(input).toHaveAttribute("required");
  });

  test("calls onChange callback on every user input", async () => {
    const handleChange = jest.fn();
  
    render(
      <Input
        labelText="Username"
        placeholder="Enter your name"
        name="username"
        value=""
        onChange={handleChange}
      />
    );
  
    const input = screen.getByRole("textbox", { name: /username/i });
  
    await userEvent.type(input, "John");
  
    expect(handleChange).toHaveBeenCalledTimes(4); 
  });
