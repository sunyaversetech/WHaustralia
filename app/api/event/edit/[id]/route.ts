import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDb } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import Event from "@/server/models/Event.model";
import { eventSchema } from "@/components/Dashboard/Events/EventsForm";

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

    const { id: eventId } = await params;
    const userId = (session.user as any).id;
    const body = await req.json();

    const validatedData = eventSchema.partial().parse(body);

    const event = await Event.findById(eventId);

    if (!event) {
      return NextResponse.json({ error: "event not found" }, { status: 404 });
    }

    if (event.user.toString() !== userId) {
      return NextResponse.json(
        { error: "You can only edit your own events" },
        { status: 403 },
      );
    }

    const updatedReview = await Event.findByIdAndUpdate(
      eventId,
      { $set: validatedData },
      { new: true, runValidators: true },
    );

    return NextResponse.json({
      message: "Event updated successfully",
      data: updatedReview,
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
