import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDb } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { Deal } from "@/server/models/DealSchema.model";
import { dealSchema } from "@/components/Dashboard/Deals/DealForm";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(req: NextRequest, { params }: RouteContext) {
  try {
    await connectToDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id: dealId } = await params;
    const userId = (session.user as any).id;
    const body = await req.json();

    const validatedData = dealSchema.partial().parse(body);

    const deal = await Deal.findById(dealId);

    if (!deal) {
      return NextResponse.json({ error: "deal not found" }, { status: 404 });
    }

    if (deal.user.toString() !== userId) {
      return NextResponse.json(
        { error: "You can only edit your own deals" },
        { status: 403 },
      );
    }

    const updatedDeal = await Deal.findByIdAndUpdate(
      dealId,
      { $set: validatedData },
      { new: true, runValidators: true },
    );

    return NextResponse.json({
      message: "deal updated successfully",
      data: updatedDeal,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
