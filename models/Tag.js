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

// const options = [
//     {
//       label: 'HTML',
//       'data-test-subj': 'HTMLOption',
//       color: visColorsBehindText[0],
//     },
//     {
//       label: 'CSS',
//       color: visColorsBehindText[1],
//     },
//     {
//       label: 'React',
//       color: visColorsBehindText[2],
//     },
//     {
//       label: 'JavaScript',
//       color: visColorsBehindText[3],
//     },
//     {
//       label: 'Node.js',
//       color: visColorsBehindText[4],
//     },
//     {
//       label: 'Express',
//       color: visColorsBehindText[5],
//     },
//     {
//       label: 'MongoDB',
//       color: visColorsBehindText[6],
//     },
//     {
//       label:'Ruby'
//       color: visColorsBehindText[7],
//     },
//     {
//       label: 'Rails',
//       color: visColorsBehindText[8],
//     },
//     {
//       label: 'MySQL',
//       color: visColorsBehindText[9],
//     },
//     {
//         label: 'NoSQL',
//         color: visColorsBehindText[10],
//     },
//     {
//         label: 'PHP',
//         color: visColorsBehindText[11],
//     },
//     {
//         label: 'Python',
//         color: visColorsBehindText[12],
//     },
//     {
//         label: 'C',
//         color: visColorsBehindText[13],
//     },
//     {
//         label: 'C++',
//         color: visColorsBehindText[14],
//     },
//     {
//         label: 'TypeScript',
//         color: visColorsBehindText[15],
//     },
//     {
//         label: 'Vue.js',
//         color: visColorsBehindText[16],
//     },
//     {
//         label: 'Angular',
//         color: visColorsBehindText[17],
//     },
//     {
//         label: 'Java',
//         color: visColorsBehindText[18],
//     },
//     {
//         label: 'Docker',
//         color: visColorsBehindText[19],
//     },
//     {
//         label: 'Azure',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'React Native',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Swift',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Redux',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'GraphQL',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Android',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Fullstack',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Bootstrap',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Spring',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'PostgreSQL',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Agile methodology',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'jhipster',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Heroku',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Netlify',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Wordpress',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Ionic',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Firebase',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Meteor.js',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'API',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Django',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Git',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Symfony',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Scrum',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Laravel',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Semantic UI',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'jQuery',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Figma',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Sketch',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'InVision',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Zeplin',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Adobe Photoshop',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Adobe InDesign',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Adobe Illustrator',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Product Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'User Testing',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'UI Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'UX Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Design Thinking',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Service Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Logo Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Graphic Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Print Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Workshops',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Wireframing',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Webdesign',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Artistic Direction',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Adobe Photoshop',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Mobile Design',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Project Management',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Reporting',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Data analytics',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Web analytics',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Product Management',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Design Sprint',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'E-commerce',
//         color: visColorsBehindText[20],
//     },
//     {
//         label: 'Go',
//         color: visColorsBehindText[20],
//     },



//   ];

//   import { EuiComboBox } from '@elastic/eui';
// import React, { useState } from 'react';

// import { euiPaletteColorBlindBehindText } from '@elastic/eui/lib/services';

// const visColorsBehindText = euiPaletteColorBlindBehindText();
// const options = [
//   {
//     label: 'Titan',
//     'data-test-subj': 'titanOption',
//     color: visColorsBehindText[0],
//   },
//   {
//     label: 'Enceladus',
//     color: visColorsBehindText[1],
//   },
//   {
//     label: 'Mimas',
//     color: visColorsBehindText[2],
//   },
//   {
//     label: 'Dione',
//     color: visColorsBehindText[3],
//   },
//   {
//     label: 'Iapetus',
//     color: visColorsBehindText[4],
//   },
//   {
//     label: 'Phoebe',
//     color: visColorsBehindText[5],
//   },
//   {
//     label: 'Rhea',
//     color: visColorsBehindText[6],
//   },
//   {
//     label:
//       "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
//     color: visColorsBehindText[7],
//   },
//   {
//     label: 'Tethys',
//     color: visColorsBehindText[8],
//   },
//   {
//     label: 'Hyperion',
//     color: visColorsBehindText[9],
//   },
// ];

// export default () => {
//   const [selectedOptions, setSelected] = useState([options[2], options[5]]);

//   const onChange = selectedOptions => {
//     setSelected(selectedOptions);
//   };


//     // Select the option.
//     setSelected([selectedOptions]);
//   };

//   return (
//     <EuiComboBox
//       placeholder="Select or create options"
//       options={options}
//       selectedOptions={selectedOptions}
//       onChange={onChange}
//     />
//   );
// };