"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Articles } from "../domain/Articles";
import Pagination from "./Pagination";

export default function CardList({
  data,
  apiEndpoint,
}: {
  data: Articles[];
  apiEndpoint: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(data.length / 8);
  const [sliceData, setSliceData] = useState(data);

  useEffect(() => {
    setSliceData(data.slice((currentPage - 1) * 8, currentPage * 8));
    if (currentPage > pageCount) {
      setCurrentPage(pageCount);
    }
    if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage]);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-2">
        {sliceData.map((item: Articles) => {
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
                    <p>
                      {apiEndpoint === "cms"
                        ? item.createdAt.split("T")[0]
                        : item.created_at.split("T")[0]}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {pageCount > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}
