import Project from "../models/Project.js";
import Tech from "../models/Tech.js";
import { createNewTech } from "./tech.controller.js";

// export const renderNoteForm = (req, res) => res.render("notes/new-note");

export const createNewProject = async (req, res) => {
  const { title, description, gitHubUrl, newtech } = req.body;
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
  if (errors.length > 0)
    return res.send(errors)
    // return res.render("notes/new-note", {
    //   errors,
    //   title,
    //   description,
    // });
    else{

      const findTech = await Tech.findOne({ name: newtech })
      console.log('id',findTech._id)
      const newProject = await new Project({ title, description, gitHubUrl, newtech});
      const saveProject = await newProject.save();
      await Project.findByIdAndUpdate(saveProject._id, { $push: { 'tech':findTech._id } })
      console.log('project',newProject)
      // const create = await createNewTech(newtech)
      // await Project.findByIdAndUpdate(saveProject._id,{ $push: {}})
      res.json(saveProject)
    }
}
  
  
  // const addTech = await Tech.findOne({ name: newtech });
  // const tech = { "$ref": "teches", "$id": addTech._id }
  // console.log('Este es la tech:', addTech)
  // newProject.user = req.user.id;
  // console.log(newProject._id)
  // db.teches.insert([{"idFrom": {"$ref": "users", "$id": ObjectId("5c9ccc140aee604c4ab6cd07")}, "idTo": {"$ref": "users", "$id": ObjectId("5c9ccc140aee604c4ab6cd06")}, "message": "Gracias por responder"}])
  
//   newProject.user = req.user.id;
  
//   req.flash("success_msg", "Note Added Successfully");
//   res.redirect("/notes");

// export const renderNotes = async (req, res) => {
//   const notes = await Note.find({ user: req.user.id })
//     .sort({ date: "desc" })
//     .lean();
//   res.render("notes/all-notes", { notes });
// };

// export const renderEditForm = async (req, res) => {
//   const note = await Note.findById(req.params.id).lean();
//   if (note.user != req.user.id) {
//     req.flash("error_msg", "Not Authorized");
//     return res.redirect("/notes");
//   }
//   res.render("notes/edit-note", { note });
// };

// export const updateNote = async (req, res) => {
//   const { title, description } = req.body;
//   await Note.findByIdAndUpdate(req.params.id, { title, description });
//   req.flash("success_msg", "Note Updated Successfully");
//   res.redirect("/notes");
// };

// export const deleteNote = async (req, res) => {
//   await Note.findByIdAndDelete(req.params.id);
//   req.flash("success_msg", "Note Deleted Successfully");
//   res.redirect("/notes");
// };