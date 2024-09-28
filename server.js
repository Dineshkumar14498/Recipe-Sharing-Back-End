const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectDb");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

connectDb(); // Connect to MongoDB


app.use(cors());
app.use(express.json());


// Serve static files from the public directory
app.use(express.static("public"));

// Serve images from the public/images folder
app.use("/images", express.static("public/images"));

app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`app is listening on port ${PORT}`);
    }
});
