import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
/*creacion de la estructura de la base de datos */
