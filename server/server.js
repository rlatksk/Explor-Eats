const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const corsOptions = {
  origin: 'https://explor-eats-qrtp.vercel.app/', // Replace with your Vercel deployment URL
  optionsSuccessStatus: 200,
};

dotenv.config();

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 3000;
const DATABASE = process.env.MONGO_URI;

mongoose.connect(DATABASE)
  .then(() => console.log(`Connected to Database ${DATABASE}`));

// Test fetching data to react
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

const foodRoute = require('./routes/foodRoutes');
const cityRoute = require('./routes/cityRoutes');
app.use('/api', foodRoute);
app.use('/api', cityRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});