import React from "react";
import CardList from "./CardList";

export default async function Card({ endpoint }: { endpoint: string }) {
  const res = await fetch(`http://localhost:3000/api/${endpoint}`, {
    cache: "no-store",
  });
  let data = await res.json();

  const apiEndpoint = endpoint.split("?")[0];

  if (apiEndpoint === "cms") {
    data = data.contents;
  } else if (apiEndpoint === "qiita") {
    const res = await fetch(`http://localhost:3000/api/ogp`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ data }),
    });
    const imageData = await res.json();
    data.map((item: any) => {
      item.imageUrl = imageData.find(
        // eslint-disable-next-line
        (data: any) => data.id === item.id
      )?.ogpImage;
    });
  }

  return (
    <>
      <CardList data={data} apiEndpoint={apiEndpoint} />
    </>
  );
}
