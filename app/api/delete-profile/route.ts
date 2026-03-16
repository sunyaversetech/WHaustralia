import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectToDb } from "@/lib/db";
import User from "@/server/models/Auth.model";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectToDb();
  const user = await User.findByIdAndDelete(session.user.id);
  return NextResponse.json(user);
}
