import React from "react";
import CardList from "./CardList";
import { Articles } from "../domain/Articles";

export default async function Card({ endpoint }: { endpoint: string }) {
  const res = await fetch(`http://localhost:3000/api/${endpoint}`, {
    cache: "no-store",
  });
  let data = await res.json();

  const apiEndpoint = endpoint.split("?")[0];

  let articles: Articles[] = [];

  if (apiEndpoint === "cms") {
    data = data.contents;
  }

  articles = data.map((item: Articles) => {
    return {
      id: item.id,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      publishedAt: item.publishedAt,
      revisedAt: item.revisedAt,
      title: item.title,
      description: item.description,
      content: item.content,
      thumbnail: item.thumbnail,
      tags: item.tags,
      writer: item.writer,
      url: item.url,
    };
  });

  if (apiEndpoint === "qiita") {
    const res = await fetch(`http://localhost:3000/api/ogp`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ data }),
    });
    const imageData = await res.json();
    articles.map((article: Articles) => {
      article.imageUrl = imageData.find(
        (item: Articles) => item.id === article.id
      )?.ogpImage;
    });
  }

  return (
    <>
      <CardList data={articles} apiEndpoint={apiEndpoint} />
    </>
  );
}
