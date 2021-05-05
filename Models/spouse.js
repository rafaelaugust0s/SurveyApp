const mongoose = require('mongoose')
const Schema= mongoose.Schema

const spouseSchema = new Schema({

    name:{type:String, require:true},
    email:{type:String, require:true},
    customer:{type:mongoose.Types.ObjectId,required:true, ref:'Costumer'}



})

module.exports=mongoose.model("Spouse",spouseSchema)