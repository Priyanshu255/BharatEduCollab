const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "Please add project name"],
    },
    university: {
        type: String,
        required: [true, "Please add university name"],
    },
    domain: {
        type: String,
        required: [true, "Please add domain"],
    },
    techUsed: {
        type: String,
        required: [true, "Please add technology used"],
    },
    teamMembers: {
        type: String,
        required: [true, "Please add team Members"],
    },
    description: {
        type: String,
        required: [true, "Please add description"],
    },
    video: {
        type: String,
        required: [true, "Please add description"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("projects", projectSchema);