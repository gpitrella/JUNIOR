import mongoose from "mongoose";

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
      type: Boolean, 
      required: true, 
      default: false
    },
    userId: {
      type: String,
    },
    image: {
      type: String,
      default: "https://res.cloudinary.com/djgghmpgh/image/upload/v1663185370/newproject_xeorkj.webp",
    },
    status: {
      type: String,
      enum: ['develop','finish'],
      default: 'develop'
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", ProjectSchema);