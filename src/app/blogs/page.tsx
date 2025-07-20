import React from "react";
import Card from "../components/Card";

export default function page() {
  return (
    <div>
      <h1>ブログ記事一覧</h1>
      <Card endpoint="cms" />
    </div>
  );
}
