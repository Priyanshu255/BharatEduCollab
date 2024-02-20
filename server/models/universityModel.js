const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"],
    },
    email: {
        type: String,
        required: [true, "Please add email"],
    },
    contact: {
        type: String,
        required: [true, "Please add contact"],
    },
    password: {
        type: String,
        required: [true, "Please add password"],
    },
    uploaded: {
        type: Number,
        required: [true, "Please add uploaded"],
    },
    accepted: {
        type: Number,
        required: [true, "Please add accepted"],
    },
    pending: {
        type: Number,
        required: [true, "Please add pending"],
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("universities", universitySchema);