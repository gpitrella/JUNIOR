import mongoose from "mongoose";

const TechSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tech", TechSchema);

