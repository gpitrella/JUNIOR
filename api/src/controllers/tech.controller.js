import Tech from "../models/Tech.js";

// export const renderNoteForm = (req, res) => res.render("notes/new-note");

export const createNewTech = async (req, res) => {
  const { name } = req.body;
  const errors = [];
  if (!name) {
    errors.push({ text: "Please Write a Tech's Name." });
  }
  if (errors.length > 0)
    return res.send(errors)
    // return res.render("notes/new-note", {
    //   errors,
    //   title,
    //   description,
    // });

  const newTech = Tech.create({ name });
//   newProject.user = req.user.id;
  await newTech.save();
  res.send('Tech created successfully!')
//   req.flash("success_msg", "Note Added Successfully");
//   res.redirect("/notes");
};

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