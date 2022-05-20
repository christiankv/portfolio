const express = require("express")

const app = express()

const mongoose = require("mongoose")
const contactModel = require("./models/contact")

const cors = require("cors")

mongoose.connect("mongodb+srv://user:EXNKHTbT9KldkwWo@cluster0.4hqom.mongodb.net/portfolio?retryWrites=true&w=majority")

app.use(express.json())
app.use(cors())

app.post("/contact", async(req, res)=>{
    const contact = req.body;
    const newContact = new contactModel(contact)
    await newContact.save()

    res.json(contact)
} )

app.listen(3001,()=> {
    console.log("server")
})