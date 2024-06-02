import { render, screen } from "@testing-library/react";
import { MainLayout } from "./MainLayout";
import { MemoryRouter as Router } from "react-router-dom";

describe("MainLayout", () => {
  it("renders children", () => {
    render(
      <Router>
        <MainLayout>
          <div>Child Component</div>
        </MainLayout>
      </Router>,
    );

    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
});
