const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const upload = require("../config/cloudinaryConfig");

const salt = 10;

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    email,
  }).then((userDocument) => {
    if (!userDocument) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const isValidPassword = bcrypt.compareSync(password, userDocument.password);
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const userObj = userDocument.toObject();
    delete userObj.password;
    req.session.currentUser = userObj;
    res.status(200).json(userObj);
  });
});

router.post("/signup/helper", upload.single("image"), (req, res, next) => {
  const { email, password, name } = req.body;
  const newHelper = { email, password, name };

  if (req.file) {
    newHelper.image = req.file.secure_url;
  }

  Helper.findOne({
    email,
  }).then((userDocument) => {
    if (userDocument) {
      return res.status(400).json({
        message: "Email already taken",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, salt);
    newHelper.password = hashedPassword;

    Helper.create(newHelper).then((newHelperDocument) => {
      const helperObj = newHelperDocument.toObject();
      delete helperObj.password;
      req.session.currentUser = helperObj;
      res.status(201).json(helperObj);
    });
  });
});

router.post("/signup/charity", (req, res, next) => {
  const { email, password, name } = req.body;
  const newCharity = { email, password, name };

  if (req.file) {
    newCharity.image = req.file.secure_url;
  }

  Charity.findOne({
    email,
  }).then((userDocument) => {
    if (userDocument) {
      return res.status(400).json({
        message: "Email already taken",
      });
    }

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
        const helperObj = helperDocument.toObject();
        delete helperObj.password;
        res.status(200).json(helperObj);
      })
      .catch(() => {
        Charity.findById(id)
          .then((charityDocument) => {
            const charityObj = charityDocument.toObject();
            delete charityObj.password;
            res.status(200).json(charityObj);
          })
          .catch((error) => {
            res.status(401).json(error);
          });
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
