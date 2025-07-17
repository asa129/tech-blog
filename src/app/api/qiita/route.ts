export const runtime = "nodejs";

import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const url = process.env.NEXT_PUBLIC_QIITA_API_URL!;
  const token = process.env.NEXT_PUBLIC_QIITA_API_TOKEN!;
  const data = await fetch(`${url}?page=1&per_page=4`, {
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
