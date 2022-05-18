const express = require("express")

const app = express()

const mongoose = require("mongoose")
const contactModel = require("./models/contact")

const cors = require("cors")



app.use(express.json())
app.use(cors())

app.post("/contact", async(req, res)=>{
    const contact = req.body;
    const newContact = new contactModel(contact)
    await newContact.save()

    res.json(contact)
} )

