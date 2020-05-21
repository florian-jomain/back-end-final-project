const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "../../media/avatar-project.png"
    },
    description: {
        type: String,
        required: true
    },
    skills: [String],
    category: {
        type: String,
        enum: ["Equality", "Poverty", "Environment", "Animals", "Arts", "Education", "Covid-19"]
    },
    id_owner: {
        type: Schema.Types.ObjectId,
        ref: "Charity"
    },
    id_teamMembers: [{
        type: Schema.Types.ObjectId,
        ref: "Helper"
    }],
    location: String,
    frequency: {
        type: String,
        enum: ["Regular", "Temporary"]
    },
    status: {
        type: String,
        enum: ["Full", "Open", "Completed"]
    },
    id_applications: [{
        type: Schema.Types.ObjectId,
        ref: "Application"
    }]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;