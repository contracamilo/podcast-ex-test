import { render, screen } from "@testing-library/react";
import { SidePanel } from "./SidePanel";

describe("SidePanel", () => {
  const mockProps = {
    title: "Test Title",
    url: "https://example.com/image.jpg",
    author: "Test Author",
    description: "Test Description",
  };

  it("renders the component with correct props", () => {
    render(<SidePanel {...mockProps} />);
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();
    const authorElement = screen.getByText(`by ${mockProps.author}`);
    expect(authorElement).toBeInTheDocument();
    const descriptionElement = screen.getByText(mockProps.description);
    expect(descriptionElement).toBeInTheDocument();
    const imageElement = screen.getByAltText(mockProps.title);
    expect(imageElement).toHaveAttribute("src", mockProps.url);
  });
});
