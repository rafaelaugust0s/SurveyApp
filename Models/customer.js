 const mongoose=require('mongoose')
 const Schema= mongoose.Schema

 const customerSchema = new Schema({

     name:{type:String, require:true},
     email:{type:String, require:true},
     dateOfBirth:{type:String, require:true},
     address:{type:String, require:true},
     postalCode:{type:String, require:true},
     city:{type:String, require:true},
     province:{type:String, require:true},
     phone:{type:String, require:true},
     sin:{type:String, require:true},
     maritalStatus:{type:String, require:true},
     spouse_id:{type:mongoose.Types.ObjectId, required:false,ref:'Spouse'}

 })

 module.exports = mongoose.model("Customer",customerSchema)