"use client";
import React from "react";
import Link from "next/link";
import { Articles } from "../domain/Articles";

export default function CardList({
  data,
  apiEndpoint,
}: {
  data: Articles[];
  apiEndpoint: string;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-2">
      {data.map((item: Articles) => {
        return (
          <div key={item.id} data-testid="cardId">
            <Link
              href={apiEndpoint === "cms" ? `blogs/${item.id}` : item.url!}
              target="_blank"
              data-testid="cardLink"
            >
              <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <figure>
                  <img
                    src={
                      apiEndpoint === "cms"
                        ? item.thumbnail.url
                        : item.imageUrl!
                    }
                    alt="サムネ画像"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title line-clamp-2">{item.title}</h2>
                  <p>{item.createdAt}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
