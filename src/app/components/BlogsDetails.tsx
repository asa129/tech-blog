import React from "react";
import { Articles } from "../domain/Articles";

export default function BlogsDetails({ data }: { data: Articles }) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center rounded-lg shadow-sm">
        <div className="max-w-xl text-left">
          <img
            className="rounded-sm"
            src={data.thumbnail.url}
            alt="サムネ画像"
            data-testid="thumbnail"
          />
          <h1 className="text-2xl font-bold my-2" data-testid="title">
            {data.title}
          </h1>
          <p className="" data-testid="description">
            {data.description}
          </p>
          <div
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <p className="text-slate-600 text-sm" data-testid="createdAt">
            公開日: {data.createdAt.split("T")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
