<<<<<<< HEAD:models/User.js
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {type:Boolean},
    status:{type: String , default: "active" }
}, { timestamps: true })
=======
const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {type:Boolean},
    status:{type: String , default: "active" }
}, { timestamps: true })
>>>>>>> 643f79d3963dca8413de8660110c63f182b09107:Server/models/User.js
module.exports = mongoose.model("User",UserSchema)