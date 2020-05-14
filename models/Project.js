const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Schema.Types.ObjectId,
        ref: "Tags",
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Equality", "Poverty", "Environment", "Animals", "Arts", "Education", "Covid-19"]
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Charity"
    },
    teamMembers: {
        type: Schema.Types.ObjectId,
        ref: "Helper"
    },
    location: String,
    frequency: {
        type: String,
        enum: ["Regular", "Temporary"]
    },
    status: {
        type: String,
        enum: ["Full", "Open", "Completed"]
    }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;