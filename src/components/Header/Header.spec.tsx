import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the header component", () => {
    render(<Header />);
    const headerElement = screen.getByText("Podcaster");
    expect(headerElement).toBeInTheDocument();
  });
});
