require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const contactRouter = require("./router/auth-router");
const app = express();

const corsOptions = {
  origin: "https://portfolio-gold-pi-77.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};

// Middleware to handle CORS
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Include preflight response for all routes

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Use the contact router
app.use("/api/contact", contactRouter);

app.use((req, res, next) => {
  res.on("finish", () => {
    console.log("Response Headers:", res.getHeaders());
  });
  next();
});

// Listen to the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
