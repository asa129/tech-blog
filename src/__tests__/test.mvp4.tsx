import CardList from "@/app/components/CardList";
import Individuals from "@/app/individuals/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

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

describe("Tech Blog Test MVP4", () => {
  // MVP4
  // ユーザーは個人記事の一覧をみることができる
  it("ユーザーは個人記事の一覧をみることができる", async () => {
    render(<CardList data={data} apiEndpoint="qiita?individuals" />);
    const card = await screen.findByTestId("cardId");
    expect(card).toBeInTheDocument();
  });
  // 個人記事一覧というタイトルがある
  it("個人記事一覧というタイトルがある", async () => {
    render(<Individuals />);
    const title = await screen.findByTestId("individualsTitle");
    expect(title).toHaveTextContent("個人記事一覧");
    expect(screen.getByTestId("mockCard")).toBeInTheDocument();
  });
  // 個人記事カードを押すとQiitaの記事へ遷移する
  it("個人記事カードを押すとQiitaの記事へ遷移する", async () => {
    render(<CardList data={data} apiEndpoint="qiita?individuals" />);
    const link = await screen.findByTestId("cardLink");
    expect(link).toHaveAttribute("href", "testUrl");
  });
});
