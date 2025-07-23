import CardList from "@/app/components/CardList";
import MoreButton from "@/app/components/MoreButton";
import Title from "@/app/components/Title";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tech Blog Test", () => {
  // MVP1
  it("タイトルコンポーネントがMy Tech Blogになっていること", async () => {
    render(<Title />);
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent("My Tech Blog");
  });

  // MVP2
  it("ユーザーは個人記事をトップで見ることができる", async () => {
    const data = [
      {
        id: "1",
        title: "test",
        url: "test",
        created_at: "test",
      },
    ];
    render(<CardList data={data} apiEndpoint="qiita?home" />);
    const card = await screen.findByTestId("cardId");
    expect(card).toBeInTheDocument();
  });
  //もっとみるボタンを押すと個人記事の一覧を表示する(/individualsに遷移する)
  it("もっとみるボタンを押すと個人記事の一覧を表示する(/individualsに遷移する)", async () => {
    const user = userEvent.setup();
    render(<MoreButton href="/individuals" />);
    const button = await screen.findByTestId("moreButton");
    expect(button).toBeInTheDocument();
  });
  // 個人記事カードを押すとQiitaの記事へ遷移する

  // MVP3
  // ユーザーはブログ記事をトップで見ることができる
  //もっとみるボタンを押すとブログ記事の一覧を表示する(/blogsに遷移する)
  // ブログ記事カードを押すとブログ記事詳細を表示する(/blogs/[id]に遷移する)

  // MVP4
  // ユーザーは個人記事の一覧をみることができる
  // 個人記事一覧というタイトルがある
  // 個人記事カードを押すとQiitaの記事へ遷移する

  // MVP5
  // ユーザーはブログ記事の一覧をみることができる
  // ブログ記事一覧というタイトルがある
  // ブログ記事カードを押すとブログ記事詳細を表示する(/blogs/[id]に遷移する)

  // MVP6
  // ユーザーはブログ記事詳細をみることができる
  // サムネを見ることができる
  // タイトルが表示されている
  // 本文を見ることができる
  // 作成日を見ることができる
});
