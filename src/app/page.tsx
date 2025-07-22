import Card from "./components/Card";
import MoreButton from "./components/MoreButton";

export default function Home() {
  return (
    <div>
      <main className="my-10 mx-10">
        <div className="flex w-full flex-col">
          <h2 className="font-bold text-2xl">Qiita記事一覧</h2>
          <div className="flex justify-end">
            <MoreButton href="/individuals" />
          </div>
          <Card endpoint="qiita?home" />
          <div className="divider"></div>
          <h2 className="font-bold text-2xl">ブログ記事一覧</h2>
          <div className="flex justify-end">
            <MoreButton href="/blogs" />
          </div>
          <Card endpoint="cms?limit=4" />
        </div>
      </main>
    </div>
  );
}
