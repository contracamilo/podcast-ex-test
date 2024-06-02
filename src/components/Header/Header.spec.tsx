import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header", () => {
  test("renders header component with title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const headerElement = screen.getByTestId("header-component");
    const titleElement = screen.getByText("Podcaster");

    expect(headerElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  test("renders loading indicator when loading is true", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const loadingIndicator = screen.getByTestId("loading-indicator");

    expect(loadingIndicator).toBeInTheDocument();
  });

  test("does not render back button on home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>,
    );

    const backButton = screen.queryByText("< Back");

    expect(backButton).not.toBeInTheDocument();
  });

  test("renders back button on non-home pages", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>,
    );

    const backButton = screen.getByLabelText("Back button");

    expect(backButton).toBeInTheDocument();
  });
});
