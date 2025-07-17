import Image from "next/image";
import Title from "./components/Title";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <main className="my-10 mx-10">
        <Title />
        <Card />
      </main>
      <footer></footer>
    </div>
  );
}
