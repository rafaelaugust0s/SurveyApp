# SurveyApp
BackEnd for SurveyApp

http://localhost:3000/

http://localhost:3000/MyForm

http://localhost:3000/update

router.get('/', CustomerController.index)

router.post('/', CustomerController.store)

router.get('/:customer_id', CustomerController.show)

router.patch('/:customer_id', CustomerController.update)

router.delete('/:customer_id',CustomerController.deleteCustomer)
