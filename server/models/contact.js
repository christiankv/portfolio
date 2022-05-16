const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    message:{
        type: String,
        required: true
    }

}
)

const contactModel = mongoose.model("contact",contactSchema)

module.exports = contactModel