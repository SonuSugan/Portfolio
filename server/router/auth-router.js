const express = require("express");

const router = express.Router();

const ContactForm = require("../controllers/auth-controllers");
router.route("/").post(ContactForm);



module.exports = router;