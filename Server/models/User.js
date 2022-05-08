const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: { type: Boolean },
    aboutMe: { type: String, maxLength: 200 },
    socials: {
      facebook: String,
      twitter: String,
      telegram: String,
      instagram: String,
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/sameh/image/upload/v1651988171/PngItem_307416_lfvbhz.png",
    },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
