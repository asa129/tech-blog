import Link from "next/link";
import React from "react";

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
    // eslint-disable-next-line
    data.map((item: any) => {
      item.imageUrl = imageData.find(
        // eslint-disable-next-line
        (data: any) => data.id === item.id
      )?.ogpImage;
    });
  }

  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-2">
        {
          // eslint-disable-next-line
          data.map((item: any) => {
            return (
              <div key={item.id}>
                <Link
                  href={apiEndpoint === "cms" ? `blogs/${item.id}` : item.url}
                  target="_blank"
                >
                  <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300">
                    <figure>
                      <img
                        src={
                          apiEndpoint === "cms"
                            ? item.thumbnail.url
                            : item.imageUrl
                        }
                        alt="サムネ画像"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title line-clamp-2">{item.title}</h2>
                      <p>
                        {apiEndpoint === "cms"
                          ? item.updatedAt
                          : item.created_at}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
