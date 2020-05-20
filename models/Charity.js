const mongoose = require('mongoose')
const Schema = mongoose.Schema

const charitySchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
    default: '../../media/avatar-charity.png',
  },
  bio: String,
  links: [String],
  id_projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
  location: String,
  userType: String,
})

const Charity = mongoose.model('Charity', charitySchema)

module.exports = Charity
