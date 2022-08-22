import mongoose from "mongoose";
var Schema = mongoose.Schema;

// const Tech = mongoose.model("Tech", TechSchema)
const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    gitHubUrl: {
        type: String,
        required: true,
    },
    tech: {
      type:[{type: String, required: true}],
  },
    user: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", ProjectSchema);