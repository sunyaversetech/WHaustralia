import { connectToDb } from "@/lib/db";
import { OperatingHours } from "@/server/models/OperatingHour.model";
import { NextResponse } from "next/server";
type RouteContext = {
  params: Promise<{ id: string }>;
};
export async function GET(req: Request, { params }: RouteContext) {
  try {
    await connectToDb();
    const { id: business_id } = await params;
    const hours = await OperatingHours.findOne({ business_id: business_id });

    if (!hours) {
      return NextResponse.json({ message: "No hours found" }, { status: 404 });
    }

    return NextResponse.json(
      { data: hours, message: "Hours fetched successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
