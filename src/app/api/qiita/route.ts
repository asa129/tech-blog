export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const endpoint = req.url.split("?")[1];

  const apiUrl: string = process.env.QIITA_API_URL!;
  const token: string = process.env.QIITA_API_TOKEN!;

  const url = endpoint === "home" ? `${apiUrl}?page=1&per_page=4` : apiUrl;

  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (data.status !== 200) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: data.status }
    );
  }
  const result = await data.json();
  return NextResponse.json(result, { status: 200 });
}
