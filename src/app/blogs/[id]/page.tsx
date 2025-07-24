import BlogsDetails from "@/app/components/BlogsDetails";
import { Articles } from "@/app/domain/Articles";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/cms?id=${id}`, {
    cache: "no-store",
  });
  const data: Articles = await res.json();

  return (
    <>
      <BlogsDetails data={data} />
    </>
  );
}
