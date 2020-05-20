const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Helper = require('../models/Helper');
const Charity = require('../models/Charity');
const Project = require('../models/Project');
const Tag = require('../models/Tag');
const upload = require("../config/cloudinaryConfig");

const salt = 10;

router.post("/signin", (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  Helper.findOne({
      email
    })
    .then((helperDocument) => {
      if (!helperDocument) {
        Charity.findOne({
            email
          })
          .then((charityDocument) => {
            if (!charityDocument) {
              return res.status(400).json({
                message: "Invalid credentials",
              });
            }
            const isValidPassword = bcrypt.compareSync(password, charityDocument.password);
            if (!isValidPassword) {
              return res.status(400).json({
                message: "Invalid credentials",
              });
            }
            const charityObj = charityDocument.toObject();
            delete charityObj.password;
            req.session.currentUser = charityObj;
            res.status(200).json(charityObj);
          })
      }
      const isValidPassword = bcrypt.compareSync(password, helperDocument.password);
      if (!isValidPassword) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }
      const helperObj = helperDocument.toObject();
      delete helperObj.password;
      req.session.currentUser = helperObj;
      res.status(200).json(helperObj);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/signup/helper', (req, res, next) => {
  Tag.find()
    .then(tags => {
      res.status(200).json(tags);
    })
    .catch(apiError => {
      res.status(500).json(apiError);
    })
})

router.post("/signup/helper", upload.single("image"), (req, res, next) => {
  const {
    email,
    password,
    username,
    name,
    skills,
    bio,
    location,
    phone,
    links,
    id_projects,
    feedback,
    stars
  } = req.body;
  const newHelper = {
    email,
    password,
    username,
    name,
    skills,
    bio,
    location,
    phone,
    links,
    id_projects,
    feedback,
    stars
  };

  if (req.file) {
    newHelper.image = req.file.secure_url;
  }

  Helper.findOne({
    email,
  }).then((helperDocument) => {
    if (helperDocument) {
      return res.status(400).json({
        message: "Email already taken",
      });
    }

    Helper.findOne({
      username,
    }).then((helperDocument) => {
      if (helperDocument) {
        return res.status(400).json({
          message: "Username already taken",
        });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);
      newHelper.password = hashedPassword;

      Helper.create(newHelper).then((newHelperDocument) => {
        const helperObj = newHelperDocument.toObject();
        delete helperObj.password;
        req.session.currentUser = helperObj;
        res.status(201).json(helperObj);
        // console.log("i'm here" + helperObj)

      })
    })
  })
})

router.post("/signup/charity", upload.single("image"), (req, res, next) => {
  const {
    email,
    password,
    username,
    name,
    bio,
    links,
    location,
    id_projects
  } = req.body;

  const newCharity = {
    email,
    password,
    username,
    name,
    bio,
    links,
    location,
    id_projects
  };

  if (req.file) {
    newCharity.image = req.file.secure_url;
  }

  Charity.findOne({
    email,
  }).then((charityDocument) => {
    if (charityDocument) {
      return res.status(400).json({
        message: "Email already taken",
      });
    }

    Charity.findOne({
      username,
    }).then((charityDocument) => {
      if (charityDocument) {
        return res.status(400).json({
          message: "Username already taken",
        });
      }
    })

    const hashedPassword = bcrypt.hashSync(password, salt);
    newCharity.password = hashedPassword;

    Charity.create(newCharity).then((newCharityDocument) => {
      const charityObj = newCharityDocument.toObject();
      delete charityObj.password;
      req.session.currentUser = charityObj;
      res.status(201).json(charityObj);
    });
  });
});

router.get("/isLoggedIn", (req, res, next) => {
  if (req.session.currentUser) {
    const id = req.session.currentUser._id;
    Helper.findById(id)
      .then((helperDocument) => {
        if (helperDocument) {
          const helperObj = helperDocument.toObject();
          delete helperObj.password;
          res.status(200).json(helperObj);
        } else {
          Charity.findById(id)
            .then((charityDocument) => {
              const charityObj = charityDocument.toObject();
              delete charityObj.password;
              res.status(200).json(charityObj);
            })
            .catch((error) => {
              res.status(401).json(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(function (error) {
    if (error) res.status(500).json(error);
    else
      res.status(200).json({
        message: "Succesfully disconnected.",
      });
  });
});

module.exports = router;