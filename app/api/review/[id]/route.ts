import { connectToDb } from "@/lib/db";
import { Review } from "@/server/models/Review.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();

    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get("business_id");

    const query = businessId ? { business_id: businessId } : {};

    const reviews = await Review.find(query)
      .populate("user_id", "name image")
      .sort({ created_at: -1 });

    return NextResponse.json({
      message: "Success",
      count: reviews.length,
      data: reviews,
    });
  } catch (error: any) {
    console.error("Review API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
}
