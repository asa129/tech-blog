import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url;
  let editUrl = url.split("cms")[1];

  if (url.includes("id")) {
    editUrl = url.split("cms")[1].replace("?id=", "/");
  }
  const microCmsUrl = process.env.MICROCMS_URL! + editUrl;
  const res = await fetch(microCmsUrl, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY!,
    },
  });

  if (res.status != 200) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: res.status }
    );
  }

  const data = await res.json();

  return NextResponse.json(data, { status: 200 });
}
