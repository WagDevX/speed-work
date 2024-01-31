import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export default function handler(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    return res.json;
  }
}
