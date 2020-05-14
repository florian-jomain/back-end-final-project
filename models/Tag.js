const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    label: String,
})

const Tags = mongoose.model("Tag", tagSchema);

module.exports = Tags;