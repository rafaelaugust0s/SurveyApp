const mongoose = require('mongoose')
const Schema= mongoose.Schema

const spouseSchema = new Schema({

    name:{type:String, require:true},
    email:{type:String, require:true},
    address:{type:String, require:true},
    postalCode:{type:String, require:true},
    city:{type:String, require:true},
    province:{type:String, require:true},
    phone:{type:String, require:true},
    sin:{type:String, require:true},
    maritalStatus:{type:String, require:true},
    customer:{type:mongoose.Types.ObjectId,required:true, ref:'Costumer'}



})

module.exports=mongoose.model("Spouse",spouseSchema)