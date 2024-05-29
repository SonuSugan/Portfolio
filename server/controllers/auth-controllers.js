const Contact = require("../models/auth_model");

const ContactForm = async (req, res) => {
  try {
    const response = req.body;
    const newContact = await Contact.create(response);
    return res
      .status(200)
      .json({ message: "Message sent successfully", data: newContact });
  } catch (error) {
    console.error("Error saving contact form data:", error);
    return res
      .status(500)
      .json({ message: "Message not delivered", error: error.message });
  }
};

module.exports = ContactForm;
