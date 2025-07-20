import React from "react";
import Card from "../components/Card";

export default function Individuals() {
  return (
    <div>
      <h1>個人記事一覧</h1>
      <Card endpoint="qiita?individuals" />
    </div>
  );
}
