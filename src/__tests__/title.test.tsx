import Title from "@/app/components/Title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Title Test", () => {
  it("タイトルコンポーネントがhello worldになっていること", async () => {
    render(<Title />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("My Tech Blog");
  });
});
