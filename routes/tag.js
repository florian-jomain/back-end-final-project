const express = require("express");
const router = express.Router();
const Tag = require("../models/Tag");
// const requireAuth = require("../middlewares/requireAuth");

router.post("/", (req, res, next) => {
    Tag.findOne(req.body)
        .then(apiResponse => {
            if (!apiResponse) {
                Tag.create(req.body)
                    .then((tag) => {
                        res.status(200).json(tag);
                    })
                    .catch((err) => {
                        res.status(500).json(err);
                    })
            } else {
                res.status(404).json({
                    message: "This tag already exists",
                })
            }
        })
        .catch(apiError => {
            res.status(500).json(apiError)
        })
})

router.get("/", (req, res, next) => {
    Tag.find()
        .then((tag) => {
            res.status(200).json(tag);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
})

module.exports = router;