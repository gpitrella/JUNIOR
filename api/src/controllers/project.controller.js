import Project from "../models/Project.js";
import Tech from "../models/Tech.js";
import User from "../models/User.js";

export const createNewProject = async (req, res) => {
  try {
    const { title, description, gitHubUrl, newtech, userId } = req.body;
    const errors = [];
    if (!title) {
      errors.push({ text: "Please Write a Title." });
    }
    if (!description) {
      errors.push({ text: "Please Write a Description" });
    }
    if (!gitHubUrl) {
      errors.push({ text: "Please Write one gitHubUrl" });
    }
    if (!newtech) {
      errors.push({ text: "Please Write one tech" });
    }
    if (errors.length > 0) {
      return res.send(errors)
    }
    else {
      const techs = newtech.map(f => f.toLowerCase())
      const newProject = new Project({ title, description, gitHubUrl, tech: techs, userId });
      const saveProject = await newProject.save();
      const mapName = saveProject.tech.map(m => m)
      mapName.forEach(async m => {
        if (!await Tech.findOne({ name: m })) {
          await Tech.create({ name: m })
        }
      })
      await User.findByIdAndUpdate(userId, { $push: { 'projects':saveProject._id } })
      res.status(200).json(saveProject)
    }
  } catch (err) {
    res.status(400).json(err.message)
  }
}
