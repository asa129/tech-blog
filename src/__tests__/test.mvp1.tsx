import Title from "@/app/components/Title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Tech Blog Test MVP1", () => {
  // MVP1
  it("タイトルコンポーネントがMy Tech Blogになっていること", async () => {
    render(<Title />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("My Tech Blog");
  });
});
