import React from "react";
import Card from "../components/Card";

export default function Individuals() {
  return (
    <div className="my-10 mx-10 flex flex-col justify-center">
      <h1
        className="font-bold text-2xl text-start"
        data-testid="individualsTitle"
      >
        個人記事一覧
      </h1>
      <Card endpoint="qiita?individuals" />
    </div>
  );
}
