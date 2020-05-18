// PATCH - /api/helpers/:id - Update one helper
// PATCH - /api/charities/:id - Update one charity
// GET - /api/helpers - Get all helpers
// GET - /api/charities - Get all charities

const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinaryConfig");
const Helper = require("../models/Helper");
const Charity = require("../models/Charity");

router.patch('/helpers/:id', upload.single("image"), (req, res, next) => {

    if (req.file) {
        req.body.image = req.file.secure_url;
    }

    Helper.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        )
        .populate('id_projects')
        .populate('skills', 'label')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
});

router.patch('/helpers/create/:id', upload.single("image"), (req, res, next) => {
    console.log(req.body)
    if (req.file) {
        req.body.image = req.file.secure_url;
    }

    req.body.links = req.body.links.split(",")
    req.body.skills = req.body.skills.split(",")

    Helper.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        )
        // .populate('id_projects')
        // .populate('skills', 'label')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
});

router.patch('/charities/:id', upload.single("image"), (req, res, next) => {

    if (req.file) {
        req.body.image = req.file.secure_url;
    }

    Charity.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        )
        .populate('id_projects')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
});

router.patch('/charities/create/:id', upload.single("image"), (req, res, next) => {
    console.log(req.body)
    if (req.file) {
        req.body.image = req.file.secure_url;
    }
    if (req.body.links){
        req.body.links = req.body.links.split(",")
    }

    Charity.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        )
        // .populate('id_projects')
        // .populate('skills', 'label')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
});

router.get('/helpers', (req, res, next) => {
    Helper.find()
        .populate('id_projects')
        .populate('skills', 'label')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
})

router.get('/charities', (req, res, next) => {
    Charity.find()
        .populate('id_projects')
        .then(apiResponse => {
            res.status(200).json(apiResponse);
        })
        .catch(apiError => {
            res.status(500).json(apiError);
        })
})

module.exports = router;