const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 40
  },
  city: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String,
  },
  about: {
    type: String
  },
  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
    google: { type: String }
  },
  privacy: {
    contact: { type: Boolean, default: true },
    location: { type: Boolean, default: true },
    actions: { type: Boolean, default: true },
    member: { type: Boolean, default: true },
    leader: { type: Boolean, default: true },
    posts: { type: Boolean, default: true },
    impact: { type: Boolean, default: true },
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = profile = mongoose.model("profile", ProfileSchema);
