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
  }
  return (
    <>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-2">
        {data.map((item: any) => {
          return (
            <div key={item.id}>
              <Link
                href={apiEndpoint === "cms" ? `blogs/${item.id}` : item.url}
                target="_blank"
              >
                <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>
                      {apiEndpoint === "cms" ? item.updatedAt : item.created_at}
                    </p>
                    <img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZoPTMzNiZ0eHQ9SmF2YVNjcmlwdCVFMyU4MSVBN1VSTCVFMyU4MSU4QiVFMyU4MiU4OU9HUCVFNSU4RiU5NiVFNSVCRSU5NyVFMyU4MSU5OSVFMyU4MiU4QiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NDM5YjY5NjY3Nzg3ZTExYzdmYTM2YjI1ZDg3NTcyN2Y&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwa3N5dW5ubm4mdHh0LWNvbG9yPSUyMzIxMjEyMSZ0eHQtZm9udD1IaXJhZ2lubyUyMFNhbnMlMjBXNiZ0eHQtc2l6ZT0zNiZ0eHQtYWxpZ249bGVmdCUyQ3RvcCZzPWUxMjJhOTA1NDdiNTMzNDI4MWY3YmU0M2U2Y2I1M2Rh&blend-x=142&blend-y=491&blend-mode=normal&s=1a611f7e8833ff640580434a1b03d27a" />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
