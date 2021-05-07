const express= require('express')
const router= express.Router()
const {check}= require('express-validator')

const CustomerController = require('../Controllers/customer_controller')

router.get('/', CustomerController.index)
router.post('/', CustomerController.store)
router.get('/:customer_id', CustomerController.show)

router.patch('/:customer_id',[
    check('name','Please enter a valid name').not().isEmpty(),
    check('email',"Please enter a valid e-mail!").isEmail()
], CustomerController.update)

router.delete('/:customer_id',CustomerController.deleteCustomer)

module.exports = router