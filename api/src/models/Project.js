import mongoose from "mongoose";
const { Schema } = mongoose;

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
    wspUrl:{
      type: String,
      require: false,
    },
    tech: {
      type:[{type: String, required: true}],
    },
    payment: { 
      type: Boolean, required: true
    },
    user: {
      type: String,
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", ProjectSchema);