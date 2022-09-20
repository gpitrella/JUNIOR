import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    image:{
      type: String,
      default: "https://res.cloudinary.com/djgghmpgh/image/upload/v1663680302/CITYPNG.COM_HD_Profile_User_Round_Green_Icon_Symbol_Transparent_PNG_-_1074x1074_ih1sas.png"
    }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

// UserSchema.methods.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// UserSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

export default mongoose.model("User", UserSchema);
