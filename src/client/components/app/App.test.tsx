import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App page test", () => {
  it("should render the texgt 'App component'", () => {
    render(<App />);

    expect(screen.getByText("App Component")).toBeInTheDocument();
  });
});
