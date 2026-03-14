import mongoose from "mongoose";

const operatingHoursSchema = new mongoose.Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    is24_7: { type: Boolean, default: false },
    schedule: [
      {
        day: { type: String, required: true },
        isOpen: { type: Boolean, default: true },
        openTime: { type: String, default: "06:00 AM" },
        closeTime: { type: String, default: "10:00 PM" },
      },
    ],
  },
  { timestamps: true },
);

export const OperatingHours =
  mongoose.models.OperatingHours ||
  mongoose.model("OperatingHours", operatingHoursSchema);
