import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const data = await fetch("http://localhost:3001/posts");
  const result = await data.json();
  return NextResponse.json(result, { status: 200 });
}
