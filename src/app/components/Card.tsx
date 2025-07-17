import React from "react";

export default async function Card() {
  const res = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((item: any) => {
        return (
          <div>
            <div
              key={item.id}
              className="card bg-base-100 w-48 xl:w-96 shadow-sm"
            >
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.date}</p>
                <div className="card-actions justify-end">
                  <a href={item.url}>Read more</a>
                </div>
                {/* <p>{item.thumbnail}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
