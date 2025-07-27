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

describe("Tech Blog Test MVP2", () => {
  // MVP2
  it("ユーザーは個人記事をトップで見ることができる", async () => {
    render(<CardList data={data} apiEndpoint="qiita?home" />);
    const card = await screen.findByTestId("cardId");
    expect(card).toBeInTheDocument();
  });
  //もっとみるボタンを押すと個人記事の一覧を表示する(/individualsに遷移する)
  it("もっとみるボタンを押すと個人記事の一覧を表示する(/individualsに遷移する)", async () => {
    render(<MoreButton href="/individuals" />);
    const button = await screen.findByTestId("moreButton");
    expect(button).toHaveAttribute("href", "/individuals");
  });
  // 個人記事カードを押すとQiitaの記事へ遷移する
  it("個人記事カードを押すとQiitaの記事へ遷移する", async () => {
    render(<CardList data={data} apiEndpoint="qiita?home" />);
    const link = await screen.findByTestId("cardLink");
    expect(link).toHaveAttribute("href", "testUrl");
  });
});
