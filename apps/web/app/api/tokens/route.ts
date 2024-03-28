import { NextResponse } from "next/server"
import Json from "~/tokens.json"

export async function GET() {
  return NextResponse.json(Json)
}
