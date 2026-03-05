import { connectToDb } from "@/lib/db";
import { Redemption } from "@/server/models/CouponCodeRedemtion.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectToDb();
    const { uniqueKey, businessId } = await request.json();

    const redemption = await Redemption.findOne({ uniqueKey, businessId });

    if (!redemption) {
      return NextResponse.json(
        { message: "Invalid or unauthorized code" },
        { status: 404 },
      );
    }

    if (redemption.status === "verified") {
      return NextResponse.json(
        { message: "This deal has already been used" },
        { status: 400 },
      );
    }

    redemption.status = "verified";
    redemption.verifiedAt = new Date();
    await redemption.save();

    return NextResponse.json(
      {
        success: true,
        message: "Deal verified and recorded!",
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
