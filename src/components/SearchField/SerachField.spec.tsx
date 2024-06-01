import { render, screen, fireEvent } from "@testing-library/react";
import { SearchField } from "./SearchField";

describe("SearchField", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <SearchField
        type="text"
        placeholder="Search"
        searchTerm=""
        action={mockOnChange}
        label="Search Field"
        errorMessage="Invalid search term"
      />,
    );
  });

  test("renders the search field with correct props", () => {
    const searchField = screen.getByRole("textbox");
    expect(searchField).toBeInTheDocument();
    expect(searchField).toHaveAttribute("type", "text");
    expect(searchField).toHaveAttribute("placeholder", "Search");
    expect(searchField).toHaveValue("");
    expect(searchField).toHaveAttribute("aria-label", "Search field");
    expect(searchField).toHaveAttribute("aria-describedby", "searchFieldError");
    expect(searchField).toHaveAttribute("autoComplete", "off");
    expect(searchField).toHaveFocus();
  });

  test("calls the onChange function when the search term changes", () => {
    const searchField = screen.getByRole("textbox");
    fireEvent.change(searchField, { target: { value: "test" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });

  test("displays the error message when provided", () => {
    const errorMessage = screen.getByText("Invalid search term");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("id", "searchFieldError");
  });
});
