import User from "../models/User.js";
import Tech from "../models/Tech.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "admin@localhost" });

  if (userFound) return;

  const newUser = new User({
    username: "admin",
    email: "admin@localhost",
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};

export const createTech = async () => {
  const techFound = await Tech.findOne({ name: "React" });

  if (techFound) return;

  const newTech = new Tech({
    name: "React",
  });

  const tech = await newTech.save();

  console.log("Admin user created", tech);
};
