const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

   const cors = require("cors");
   app.use(cors());
u8,

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Define a schema for your data
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", ContactSchema);

// Create a route to handle form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message,
  });

  newContact
    .save()
    .then((contact) => res.json(contact))
    .catch((err) => console.log(err));
});



app.listen(port, () => console.log(`Server started on port ${port}`));
