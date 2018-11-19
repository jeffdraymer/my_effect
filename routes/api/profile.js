const express = require("express");
const router = express.Router();
const mongosse = require("mongoose");
const passport = require("passport");

//Load Validation
const validateProfileInput = require("../../validation/profile");

//Load Profile model
const Profile = require("../../models/Profile");


// @route GET /api/profile
// @desc gets user profile info
// @access Private

router.get(
  "/", (req, res) => {
    const errors = {};
    Profile.findOne()
      .then(profile => {
        if (!profile) {
          errors.noprofile = "No matching profile was found";
          res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);


// @route POST /api/profile
// @desc Creates new user profile entry or update profile details
// @access Private

router.post("/", (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //Get profile fields
  const profileFields = {};
  //initialize oject for social media links
  profileFields.social = {};
  profileFields.privacy = {};

  if (req.body.name) profileFields.name = req.body.name;
  if (req.body.city) profileFields.city = req.body.city;
  if (req.body.phone) profileFields.phone = req.body.phone;
  if (req.body.website) profileFields.website = req.body.website;
  if (req.body.about) profileFields.about = req.body.about;

  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.google) profileFields.social.google = req.body.google;

  profileFields.privacy.contact = req.body.contact;
  profileFields.privacy.location = req.body.location;
  profileFields.privacy.actions = req.body.actions;
  profileFields.privacy.member = req.body.member;
  profileFields.privacy.leader = req.body.leader;
  profileFields.privacy.posts = req.body.posts;
  profileFields.privacy.impact = req.body.impact;

  Profile.findOne({ name: req.body.name }).then(profile => {
    if (profile) {
      //update the existing profile
      Profile.findOneAndUpdate(
        { name: req.body.name },
        { $set: profileFields },
        { new: true }
      ).then(profile => res.json(profile));
    } else {
      //create a new profile
      new Profile(profileFields).save().then(profile => res.json(profile));
    }
  });
}
);

// @route Delete /api/profile
// @desc Remove the users profile
// @access Private
router.delete(
  "/:id", (req, res) => {
    Profile.findOneAndRemove({ name: req.params.id }).then(() => {
      res.json({ success: true });
    });
  }
);

module.exports = router;
