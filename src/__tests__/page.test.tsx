import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Title Test", () => {
  it("タイルがhello worldになっていること", async () => {
    render(<Home />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("Hello World!");
  });
});
