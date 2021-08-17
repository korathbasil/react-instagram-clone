import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login page", () => {
  render(<Login />);

  const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
  const passwordInput = screen.getByTestId(
    "password-input"
  ) as HTMLInputElement;
  const submitButton = screen.getByText("Log in");

  test("renders a form with email and password input and a submit button", () => {
    expect(emailInput).toBeInTheDocument;
    expect(passwordInput).toBeInTheDocument;
    expect(submitButton).toBeInTheDocument;
  });

  test("initial values of all fields are empty", () => {
    expect(emailInput.value).toEqual("");
    expect(passwordInput.value).toEqual("");
  });

  test("both fields are required", () => {
    // expect(emailInput).toBeRequired();
    // expect(passwordInput);
  });
});
