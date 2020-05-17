/*
GET - /api/projects - Get all projects
GET - /api/projects /: id - Get one project
POST - /api/projects - Create one project
PATCH - /api/projects /: id - Update one project
DELETE - /api/projects /: id - Delete one project
*/

const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinaryConfig");
const Project = require("../models/Project");

router.get('/', (req, res, next) => {
    Project.find()
        .populate('id_tags', 'label')
        .populate('id_owner')
        .populate('id_teamMembers')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
});

router.get('/:id', (req, res, next) => {
    Project.findById(req.params.id)
        .populate('id_tags', 'label')
        .populate('id_owner')
        .populate('id_teamMembers')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
});

router.post('/create', upload.single("image"), (req, res, next) => {
    // if (!req.body) {
    //     res.send
    // } // Validate req.body 

    const {
        title,
        description,
        category,
        id_tags,
        id_owner,
        id_teamMembers,
        location,
        frequency,
        status
    } = req.body;

    const newProject = {
        title,
        description,
        category,
        id_tags,
        id_owner,
        id_teamMembers,
        location,
        frequency,
        status
    }

    if (req.file) {
        newProject.image = req.file.secure_url;
    }

    Project.create(newProject)
        .then(apiResponse => {
            res.status(201).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
})

router.patch('/:id', (req, res, next) => {
    Project.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        )
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
})

router.delete('/:id', (req, res, next) => {
    Project.findByIdAndRemove(req.params.id)
        .then(apiResponse => {
            if (apiResponse === null) {
                res.status(404).json({
                    message: "This project does not exist"
                })
            } else {
                res.status(204).json(apiResponse);
            }
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
})

module.exports = router;