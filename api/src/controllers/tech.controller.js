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
  const findInDb = await Tech.findOne({name:name})
  if(!findInDb){
    const newTech = await Tech.create({ name });
    res.status(200).send(`Tech ${newTech.name} created successfully!`)
  }else{
    res.status(200).send(`${name} already exist`)
  }
};

export const getAllTech = async (req,res)=>{
  try {
    const findInDb = await Tech.find({})
    res.status(200).json(findInDb)
  } catch (error) {
    res.status(400).json(error.message)
  }
}