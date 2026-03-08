import { connectToDb } from "@/lib/db";
import User from "@/server/models/Auth.model";
import { NextRequest, NextResponse } from "next/server";

type Props = { params: Promise<{ id: string }> };
export async function GET(req: NextRequest, { params }: Props) {
  try {
    await connectToDb();
    const { id } = await params;

    const business = await User.findById(
      id,
      "-accpetalltermsandcondition -password -provider -googleId",
    ).sort({ createdAt: -1 });

    return NextResponse.json(
      { data: business, message: "Businesses retrieved successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//  owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       unique: true,
//     },
//     business_name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     business_category: {
//       type: String,
//       required: true,
//     },
//     service_category: {
//       type: String,
//       required: true,
//     },
//     business_service: [ServiceSchema],
//     location: {
//       address: { type: String, required: true },
//       city: { type: String },
//       coordinates: {
//         lat: Number,
//         lng: Number,
//       },
//     },
