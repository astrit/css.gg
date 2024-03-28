import { NextResponse } from "next/server"
import Json from "~/data.json"

export async function GET() {
  return NextResponse.json(Json)
}
