import React from "react";
import Card from "../components/Card";

export default function Blogs() {
  return (
    <div className="my-10 mx-10">
      <h1 className="font-bold text-2xl" data-testid="blogsTitle">
        ブログ記事一覧
      </h1>
      <Card endpoint="cms" />
    </div>
  );
}
