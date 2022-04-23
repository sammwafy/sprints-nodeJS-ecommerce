const mongoose = require("mongoose")
const CopounSchema = new mongoose.Schema({
    name: { type: String },
    amount: { type: Number },
    expiresIn: { type: Date }
}, { timestamps: true })
module.exports = mongoose.model("Copoun", CopounSchema)