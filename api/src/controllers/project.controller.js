import Project from "../models/Project.js";
import Tech from "../models/Tech.js";
import User from "../models/User.js";

export const createNewProject = async (req, res) => {
  try {
    const { title, description, gitHubUrl, wspUrl, image, newtech, userId, payment, status } = req.body;
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
      const findInDb = await Project.findOne({ title: title })
      console.log(findInDb)
      if (!findInDb) {
        const techs = newtech.map(f => f.toLowerCase())
        const newProject = new Project({ title, description, gitHubUrl, wspUrl, image, tech: techs, userId, payment, status });
        const saveProject = await newProject.save();
        const mapName = saveProject.tech.map(m => m)
        mapName.forEach(async m => {
          if (!await Tech.findOne({ name: m })) {
            await Tech.create({ name: m })
          }
        })
        await User.findByIdAndUpdate(userId, { $push: { 'projects': saveProject._id } })
        res.status(200).json(saveProject)
      } else {
        res.status(400).json({ error: `the project with title ${title.toUpperCase()} already exist` })
      }
    }
  } catch (err) {
    res.status(400).json(err.message)
  }
}
export const getAllProyect = async (req, res) => {
  try {
    const findInDb = await Project.find({}).sort( { createdAt: 1, "_id": 1 } )
    res.status(200).json(findInDb)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
export const updateProject = async (req, res) => {
  try {
    const { title, description, gitHubUrl, wspUrl, image, newtech, projectId } = req.body;
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
      const findInDb = await Project.findOne({ title })
      if (!findInDb) {
        const techs = newtech.map(f => f.toLowerCase())
        const findInDbAndUpdate = await Project.findOneAndUpdate({ _id: projectId }, { title, description, gitHubUrl, wspUrl, image, tech: techs, })
        const saveProject = await findInDbAndUpdate.save();
        const mapName = saveProject.tech.map(m => m)
        mapName.forEach(async m => {
          if (!await Tech.findOne({ name: m })) {
            await Tech.create({ name: m })
          }
        })
        res.status(200).json(`${saveProject.title} update successfully`)
      }
      else {
        res.status(400).json({ error: `the project with title ${title.toUpperCase()} already exist` })
      }
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}
export const projectDelete = async (req, res) => {
  try {
    const { id } = req.body
    await Project.findByIdAndDelete({ _id: id })
    res.status(200).send('The project was successfully removed')
  } catch (error) {
    res.status(400).json(error.message)
  }
}
