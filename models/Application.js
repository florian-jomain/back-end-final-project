const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    id_project: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }],
    id_applicant: [{
        type: Schema.Types.ObjectId,
        ref: "Helper"
    }],
    application: String
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;