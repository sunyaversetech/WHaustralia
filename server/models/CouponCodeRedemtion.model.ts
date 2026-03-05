import mongoose from "mongoose";
import { Schema } from "mongoose";

export interface IRedemption extends Document {
  deal: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  business: mongoose.Types.ObjectId;
  uniqueKey: string;
  status: "pending" | "verified";
  verifiedAt?: Date;
}

const RedemptionSchema = new Schema<IRedemption>(
  {
    deal: { type: Schema.Types.ObjectId, ref: "Deal", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    business: { type: Schema.Types.ObjectId, ref: "User", required: true },
    uniqueKey: { type: String, required: true, unique: true },
    status: { type: String, enum: ["pending", "verified"], default: "pending" },
    verifiedAt: { type: Date },
  },
  { timestamps: true },
);

export const Redemption =
  mongoose.models.Redemption || mongoose.model("Redemption", RedemptionSchema);
