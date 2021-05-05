const express= require('express')
const router= express.Router()

const CustomerController = require('../Controllers/customer_controller')

router.get('/', CustomerController.index)
router.post('/', CustomerController.store)

module.exports = router