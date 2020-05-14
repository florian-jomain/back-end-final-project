const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const charitySchema = new Schema({
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
    bio: String,
    links: [String],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    location: String,
});

const Charity = mongoose.model("Charity", charitySchema);

module.exports = Charity;