const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.website = !isEmpty(data.website) ? data.website : "";

  //Name validation
  if (!Validator.isEmpty(data.name)) {
    if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
      errors.name = "Name must be between 2 and 40 characters";
    }
  } else {
    errors.name = "Name is required";
  }

  //Phone validation
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone number is required";
  }

  //Website Validation
  if (!Validator.isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Must be a valid URL";
    }
  } else {
    errors.website = "Website is required";
  }

  return { errors, isValid: isEmpty(errors) };
};
