import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  image: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNaRT4DeaWk4avv6n6WaVoL6ai6NpFfG3qzicjpw_NQ&s" },
  bio: { type: String, default: "" },
  userName: { type: String, required: true, unique: true },
  is_ban: { type: Boolean, default: false },
  userID: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const Profile = mongoose.model("Profile", profileSchema);
