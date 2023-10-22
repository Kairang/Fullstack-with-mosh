/**
 * 
 */

const router = require('express').Router();
const customersController = require('../app/controllers/customer.controller');

// CREATE NEW CUSTOMER 
router.post('/', customersController.createCustomer);

// GET ALL CUSTOMERS
router.get('/', customersController.getAll);

// GET CUSTOMER BY ID
router.get('/:id', customersController.getById);

// UPDATE CUSTOMER BY ID
router.put('/:id', customersController.updateCustomer);

// DELETE CUSTOMER BY ID
router.delete('/:id', customersController.deleteCustomer);

module.exports = router;
