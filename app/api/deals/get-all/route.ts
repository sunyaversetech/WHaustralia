import { connectToDb } from "@/lib/db";
import { Deal } from "@/server/models/DealSchema.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectToDb();
    const { searchParams } = new URL(request.url);
    const rawCategory = searchParams.get("category") || "";
    const category = rawCategory.replace(/\?+$/, "").trim();

    const query: any = {};

    if (category && category !== "all") {
      query.category = category;
    }

    const deals = await Deal.find(query).populate("user").sort({
      createdAt: -1,
    });
    return NextResponse.json({ message: "", data: deals });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
