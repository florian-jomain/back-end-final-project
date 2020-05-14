const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helperSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
    bio: String,
    location: String,
    phone: String,
    links: [String],
    id_projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    feedback: String,
    stars: Number,
});

const Helper = mongoose.model("Helper", helperSchema);

module.exports = Helper;