import Image from "next/image";
import Title from "./components/Title";
import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="my-10 mx-10">
        <div className="flex w-full flex-col">
          <h2 className="font-bold text-2xl">Qiita記事一覧</h2>
          <div className="flex justify-end">
            <Link href="/individuals">
              <button className="btn btn-ghost">もっと見る→</button>
            </Link>
          </div>
          <Card endpoint="qiita?home" />
          <div className="divider"></div>
          <h2 className="font-bold text-2xl">ブログ記事一覧</h2>
          <div className="flex justify-end">
            <Link href="/blogs">
              <button className="btn btn-ghost">もっと見る→</button>
            </Link>
          </div>
          <Card endpoint="cms?limit=4" />
        </div>
      </main>
    </div>
  );
}
