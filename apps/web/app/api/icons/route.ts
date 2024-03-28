import { NextResponse } from "next/server"
import Json from "~/icons.json"

export async function GET() {
  return NextResponse.json(Json)
}
