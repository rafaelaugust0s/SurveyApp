const {validationResult} = require('express-validator')
const Customer = require('../Models/customer')
const Spouse = require('../Models/spouse')

const index = async (req,res)=>{
 let customer;
     try{
          customer= await Customer.find()
    }catch (e) {
         return res.status(417).json({message:e})
 }
    return res.status(200).json(customer)
    }

const store = async(req,res)=>{

    const { name,email,dateOfBirth,address,postalCode,city,province,phone,sin,maritalStatus,
        spouse_id}=req.body


    const NewCustomer = new Customer({
        name,
        email,
        dateOfBirth,
        address,
        postalCode,
        city,
        province,
        phone,
        sin,
        maritalStatus
         // spouse_id,
    })
    if(spouse_id){
        let spouse;
        try{
            spouse= await Spouse.findById(spouse_id)

        }catch (e) {
            return res.status(500).json({message:'Please check spouse ID'})
        }
        NewCustomer.spouse_id= spouse_id
        spouse.customer= NewCustomer
        await spouse.save()
    }

    try{ await NewCustomer.save()

    }catch (e) {
        return res.status(500).json({message:e.toString()})
    }

    return res.status(201).json({NewCustomer})
}

const show= async (req,res)=>{

    let customer_id= req.params.customer_id

    let customer;
    try{
        customer= await Customer.findById(customer_id)
    }catch (e) {
        return res.status(500).json({message:"Please check your customer ID"})
    }
    if(!customer){
        return res.status(404).json({message:"customer not found!"})
    }
    res.status(200).json({customer})

}

const update = async(req,res)=>{
    let customer_id = req.params.customer_id
    const { name, email,dateOfBirth,address,postalCode,city,province,phone,sin,maritalStatus,
        spouse_id}= req.body

    const errors= validationResult(req)

    if(!errors.isEmpty()){
        return res.json({errors})
    }

    let customer;

    try{
        customer= await Customer.findById(customer_id)
    }catch (e) {
        return res.status(500).json({message:"Check customer id"})
    }
    customer.name=name
    customer.email=email
    customer.dateOfBirth=dateOfBirth
    customer.address=address
    customer.postalCode=postalCode
    customer.city=city
    customer.province=province
    customer.phone=phone
    customer.sin=sin
    customer.maritalStatus=maritalStatus

    try{
        await customer.save()
    }catch (e) {
        return res.status(417).json({message:" Unable to save customer!"})
    }
    return  res.status(200).json({message:"Customer updated successfully!"})
}
const deleteCustomer = async (req,res)=>{
    let customer_id = req.params.customer_id
    const {name,email,address,postalCode,city,province,phone,sin
    }=req.body

    let customer;

    try{
        customer = await Customer.findById(customer_id)
    }catch (e) {
        return res.status(404).json({message:'Customer not found!'})
    }
    try{
        await customer.remove()
    }catch (e) {
       return res.status(417).json({message:e.toString()})
    }

    return res.status(200).json({message:'Customer deleted successfully!'})
}



exports.index=index
exports.store=store
exports.show=show
exports.update=update
exports.deleteCustomer=deleteCustomer
