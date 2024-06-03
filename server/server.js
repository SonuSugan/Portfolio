require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const contactRouter = require("./router/auth-router");
const app = express();



const corsOptions = {
  origin: ["http://localhost:5173", "https://portfolio-gold-pi-77.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("Error connecting to MongoDB Atlas:", error);
});

// Use the contact router
app.use("/api/contact", contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});