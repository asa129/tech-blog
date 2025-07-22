export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { load } from "cheerio";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // eslint-dsisable-next-line
  const promise = body.data.map(async (item: any) => {
    const url = item.url;
    const res = await fetch(url, {
      headers: {
        "X-Linkpreview-Api-Key": process.env.LINKPREVIEW_API_KEY!,
      },
    });
    const data = await res.text();
    const $ = load(data);
    const ogpImage = $("meta[property='og:image']").attr("content");

    return {
      id: item.id,
      ogpImage: ogpImage,
    };
  });

  const ogpImageList = await Promise.all(promise);

  return NextResponse.json(ogpImageList, { status: 200 });
}
