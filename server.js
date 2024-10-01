const express = require ("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/connectDb")
const cors = require("cors")


const PORT = process.env.PORT || 4000;


connectDb()

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.use("/", require("./routes/user"))
app.use("/recipe", require("./routes/recipe"))
app.use('/comment', require('./routes/comment'));




app.listen(PORT, (err) => {
    console.log(`app is listening on port ${PORT}`)
})