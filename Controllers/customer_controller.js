
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

    const { name,email,spouse_id}=req.body
    
    let spouse;
    try{
        spouse= await Spouse.findById(spouse_id)
        
    }catch (e) {
        return res.status(500).json({message:'Please check spouse ID'})
        
    }
    const NewCustomer = new Customer({
        name,
        email,
        spouse_id,
    })
    try{ await NewCustomer.save()
        spouse.customer.push(NewCustomer)
        await spouse.save()

    }catch (e) {
        return res.status(500).json({message:e.toString()})
    }

    return res.status(200).json({NewCustomer})
}


exports.index=index
exports.store=store