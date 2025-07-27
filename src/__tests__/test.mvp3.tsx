import CardList from "@/app/components/CardList";
import MoreButton from "@/app/components/MoreButton";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const data = [
  {
    id: "1",
    title: "test",
    url: "testUrl",
    createdAt: "test",
    created_at: "test",
    updatedAt: "test",
    publishedAt: "test",
    revisedAt: "test",
    description: "test",
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

describe("Tech Blog Test MVP3", () => {
  // MVP3
  // ユーザーはブログ記事をトップで見ることができる
  it("ユーザーは個人記事をトップで見ることができる", async () => {
    render(<CardList data={data} apiEndpoint="cms?limit=4" />);
    const card = await screen.findByTestId("cardId");
    expect(card).toBeInTheDocument();
  });
  //もっとみるボタンを押すとブログ記事の一覧を表示する(/blogsに遷移する)
  it("もっとみるボタンを押すとブログ記事の一覧を表示する(/blogsに遷移する)", async () => {
    render(<MoreButton href="/blogs" />);
    const button = await screen.findByTestId("moreButton");
    expect(button).toHaveAttribute("href", "/blogs");
  });
  // ブログ記事カードを押すとブログ記事詳細を表示する(/blogs/[id]に遷移する)
  it("ブログ記事カードを押すとブログ記事詳細を表示する(/blogs/[id]に遷移する)", async () => {
    data[0].url = `blogs/${data[0].id}`;
    render(<CardList data={data} apiEndpoint="cms?limit=4" />);
    const link = await screen.findByTestId("cardLink");
    expect(link).toHaveAttribute("href", `blogs/${data[0].id}`);
  });
});
