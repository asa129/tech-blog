import { Articles } from "@/app/domain/Articles";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/cms?id=${id}`, {
    cache: "no-store",
  });
  const data: Articles = await res.json();

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center rounded-lg shadow-sm">
          <div className="max-w-xl text-left">
            <img
              className="rounded-sm"
              src={data.thumbnail.url}
              alt="サムネ画像"
            />
            <h1 className="text-2xl font-bold my-2">{data.title}</h1>
            <p className="">{data.description}</p>
            <div
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <p className="text-slate-600 text-sm">
              公開日: {data.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
