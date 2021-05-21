# SurveyApp
BackEnd for SurveyApp

DEPLOY LINK https://survey-back-end.herokuapp.com/api/customers

 CREATE http://localhost:3000/

 SHOW BY ID http://localhost:3000/MyForm

UPDATE/ DELETE http://localhost:3000/update

router.get('/', CustomerController.index)

router.post('/', CustomerController.store)

router.get('/:customer_id', CustomerController.show)

router.patch('/:customer_id', CustomerController.update)

router.delete('/:customer_id',CustomerController.deleteCustomer)
