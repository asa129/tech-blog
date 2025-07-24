import CardList from "@/app/components/CardList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blogs from "@/app/blogs/page";

const data = [
  {
    id: "1",
    title: "test",
    url: "testUrl",
    createdAt: "test",
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

jest.mock("@/app/components/Card", () => {
  const MockCard = () => <div data-testid="mockCard" />;
  MockCard.displayName = "MockCard";
  return MockCard;
});

describe("Tech Blog Test MVP5", () => {
  // MVP5

  // ユーザーはブログ記事の一覧をみることができる
  it("ユーザーはブログ記事の一覧をみることができる", async () => {
    render(<CardList data={data} apiEndpoint="cms" />);
    const card = await screen.findByTestId("cardId");
    expect(card).toBeInTheDocument();
  });
  // ブログ記事一覧というタイトルがある
  it("ブログ記事一覧というタイトルがある", async () => {
    render(<Blogs />);
    const title = await screen.findByTestId("blogsTitle");
    expect(title).toHaveTextContent("ブログ記事一覧");
  });
  // ブログ記事カードを押すとブログ記事詳細を表示する(/blogs/[id]に遷移する)
  it("ブログ記事カードを押すとブログ記事詳細を表示する(/blogs/[id]に遷移する)", async () => {
    data[0].url = `blogs/${data[0].id}`;
    render(<CardList data={data} apiEndpoint="cms" />);
    const link = await screen.findByTestId("cardLink");
    expect(link).toHaveAttribute("href", `blogs/${data[0].id}`);
  });
});
