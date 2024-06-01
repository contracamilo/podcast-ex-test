import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header", () => {
  test("renders header title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const headerTitle = screen.getByText("Podcaster");
    expect(headerTitle).toBeInTheDocument();
  });

  test("displays loading indicator when loading is true", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const loadingIndicator = screen.getByText("Loading...");
    expect(loadingIndicator).toBeInTheDocument();
  });
});
