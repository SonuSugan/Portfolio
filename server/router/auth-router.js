const express = require("express");

const router = express.Router();

const ContactForm = require("../controllers/auth-controllers");
router.route("/").post(ContactForm);

// router.options("/", cors()); // Handle preflight request for this route
router.post("/", ContactForm);

module.exports = router;