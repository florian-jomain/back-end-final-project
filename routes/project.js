/*
GET - /api/projects - Get all projects
GET - /api/projects /: id - Get one project
POST - /api/projects - Create one project
PATCH - /api/projects /: id - Update one project
DELETE - /api/projects /: id - Delete one project
*/

const express = require('express')
const router = express.Router()
const upload = require('../config/cloudinaryConfig')
const Project = require('../models/Project')
const Charity = require('../models/Charity')
const Application = require('../models/Application')
const requireAuth = require('../middlewares/requireAuth')

router.get('/', (req, res, next) => {
  Project.find()
    .populate('id_owner')
    .populate('id_teamMembers')
    .populate('id_applications')
    .then((apiResponse) => {
      res.status(200).json(apiResponse)
    })
    .catch((apiError) => {
      res.status(500).json(apiError)
    })
})

router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .populate('id_tags', 'label')
    .populate('id_owner')
    .populate('id_teamMembers')
    .populate('id_applications')
    .then((apiResponse) => {
      res.status(200).json(apiResponse)
    })
    .catch((apiError) => {
      res.status(500).json(apiError)
    })
})

router.post(
  '/create',
  requireAuth,
  upload.single('image'),
  (req, res, next) => {
    if (!req.body) {
      res.status(500).json({
        message: 'No data can be displayed',
      })
    }

    const {
      title,
      description,
      category,
      skills,
      id_owner,
      id_teamMembers,
      location,
      frequency,
      status,
    } = req.body

    const newProject = {
      title,
      description,
      category,
      skills,
      id_owner,
      id_teamMembers,
      location,
      frequency,
      status,
    }

    if (req.file) {
      newProject.image = req.file.secure_url
    }
    newProject.id_owner = req.session.currentUser._id
    newProject.skills = newProject.skills.split(',')

    Project.create(newProject)
      .then((apiResponse) => {
        res.status(201).json(apiResponse)
        Charity.findByIdAndUpdate(req.session.currentUser._id, {
          $push: { id_projects: apiResponse._id },
        })
          .then((apiRes) => apiRes)
          .catch((apiErr) => apiErr)
      })
      .catch((apiError) => {
        res.status(500).json(apiError)
      })
  }
)

router.post('/:id', requireAuth, (req, res, next) => {
  if (!req.body) {
    res.status(500).json({
      message: 'No data can be displayed',
    })
  }
  console.log(req.body)
  Application.create(req.body)
    .then((apiResponse) => {
      res.status(201).json(apiResponse)
    })
    .catch((apiError) => {
      res.status(500).json(apiError)
    })
})

router.patch('/:id', requireAuth, upload.single('image'), (req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .populate('id_tags', 'label')
    .populate('id_owner')
    .populate('id_teamMembers')
    .populate('id_applications')
    .then((apiResponse) => {
      res.status(200).json(apiResponse)
    })
    .catch((apiError) => {
      res.status(500).json(apiError)
    })
})

router.delete('/:id', requireAuth, (req, res, next) => {
  Project.findByIdAndRemove(req.params.id)
    .then((apiResponse) => {
      if (apiResponse === null) {
        res.status(404).json({
          message: 'This project does not exist',
        })
      } else {
        res.status(204).json(apiResponse)
      }
    })
    .catch((apiError) => {
      res.status(500).json(apiError)
    })
})

module.exports = router
