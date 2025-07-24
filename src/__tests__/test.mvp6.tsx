import BlogsDetails from "@/app/components/BlogsDetails";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  usePathname: () => "/blogs/1",
}));

const data = [
  {
    id: "1",
    title: "てすと",
    url: "testUrl",
    createdAt: "2025-07-24T00:00:00.000Z",
    updatedAt: "test",
    publishedAt: "test",
    revisedAt: "test",
    description: "本文",
    content: "test",
    thumbnail: {
      url: "test",
      height: 1,
      width: 1,
    },
    tags: ["test"],
    writer: "test",
    imageUrl: "test",
  },
];

describe("Tech Blog Test MVP6", () => {
  // MVP6
  // ユーザーはブログ記事詳細をみることができる
  it("ユーザーはブログ記事詳細をみることができる", async () => {
    render(<BlogsDetails data={data[0]} />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("てすと");
  });
  // サムネを見ることができる
  it("サムネを見ることができる", async () => {
    render(<BlogsDetails data={data[0]} />);
    const thumbnail = await screen.findByTestId("thumbnail");
    expect(thumbnail).toBeInTheDocument();
  });
  // タイトルが表示されている
  it("タイトルが表示されている", async () => {
    render(<BlogsDetails data={data[0]} />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("てすと");
  });
  // 本文を見ることができる
  it("本文を見ることができる", async () => {
    render(<BlogsDetails data={data[0]} />);
    const content = await screen.findByTestId("description");
    expect(content).toHaveTextContent("本文");
  });
  // 作成日を見ることができる
  it("作成日を見ることができる", async () => {
    render(<BlogsDetails data={data[0]} />);
    const createdAt = await screen.findByTestId("createdAt");
    expect(createdAt).toHaveTextContent("2025-07-24");
  });
});
