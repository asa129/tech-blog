import Image from "next/image";
import Title from "./components/Title";
import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <Title />
      </header>
      <main className="my-10 mx-10">
        <Link href="/individuals">
          <button className="btn btn-soft">もっと見る</button>
        </Link>
        <Card endpoint="qiita?home" />
        <Link href="/blogs">
          <button className="btn btn-soft">もっと見る</button>
        </Link>
        <Card endpoint="cms?limit=4" />
      </main>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}
