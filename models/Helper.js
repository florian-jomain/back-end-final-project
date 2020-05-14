const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helperSchema = new Schema({
    email: {
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
        required: true,
        default: ""
    },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: "Tags"
    }],
    bio: String,
    location: String,
    phone: String,
    links: [String],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    feedback: String,
    stars: Number
});

const Helper = mongoose.model("Helper", helperSchema);

module.exports = Helper;