const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    label: {
        type: String,
        enum: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Ruby', 'Rails', 'MySQL', 'NoSQL', 'PHP', 'Python', 'C', 'C++', 'TypeScript', 'Vue.js', 'Angular', 'Java', 'Docker', 'Azure', 'React Native', 'Swift', 'Redux', 'GraphQL', 'Android', 'Fullstack', 'Bootstrap', 'Spring', 'PostgreSQL', 'Agile methodology', 'jhipster', 'Heroku', 'Netlify', 'Wordpress', 'Ionic', 'Firebase', 'Meteor.js', 'API', 'Django', 'Git', 'Symfony', 'Scrum', 'Laravel', 'Semantic UI', 'jQuery', 'Figma', 'Sketch', 'InVision', 'Zeplin', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator', 'Product Design', 'User Testing', 'UI Design', 'UX Design', 'Design Thinking', 'Service Design', 'Logo Design', 'Graphic Design', 'Print Design', 'Workshops', 'Wireframing', 'Webdesign', 'Artistic Direction', 'Mobile Design', 'Project Management', 'Reporting', 'Data analytics', 'Web analytics', 'Product Management', 'Design Sprint', 'E-commerce', 'Go']
    }
});

const Tags = mongoose.model("Tag", tagSchema);

module.exports = Tags;