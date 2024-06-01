import { render, screen } from "@testing-library/react";
import { MainLayout } from "./MainLayout";
describe("MainLayout", () => {
  it("renders children", () => {
    render(
      <MainLayout>
        <div>Child Component</div>
      </MainLayout>,
    );

    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
});
