const express = require("express");
const app = express()
const cors = require('cors')

app.use(cors())
const port = 5000;
const courses = require("./categories.json")
app.get("/", (req, res) =>{
    res.send("server is running on port 5000")
})

app.get("/courses", (req, res) =>{
    res.send(courses)
})


app.listen(port, ()=>{
    console.log("server is running on port ", port)
})