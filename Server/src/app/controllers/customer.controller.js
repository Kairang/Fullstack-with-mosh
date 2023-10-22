const Customer = require('../models/customer.model');

const customersController = {
    // CREATE NEW CUSTOMER 
    createCustomer: async (req, res, next) => {
        try {
            const newCustomer = new Customer(req.body);
            const customer = await newCustomer.save();

            res.status(201).json(customer);
        }
        catch (err) { next(err) }
    },

    // GET ALL CUSTOMERS
    getAll: async (req, res, next) => {
        try {
            const customers = await Customer.find();
            res.status(200).json(customers);
        }
        catch (err) { next(err) }
    },

    // GET CUSTOMER BY ID
    getById: async (req, res, next) => {
        try {
            const customer = await Customer.findById(req.params.id);
            res.status(200).json(customer);
        }
        catch (err) { next(err) }
    },

    // UPDATE CUSTOMER BY ID
    updateCustomer: async (req, res, next) => {
        try {
            const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(customer);
        }
        catch (err) { next(err) }
    },

    // DELETE CUSTOMER BY ID
    deleteCustomer: async (req, res, next) => {
        try {
            const customer = await Customer.findByIdAndDelete(req.params.id);
            res.status(200).json(customer);
        }
        catch (err) { next(err) }
    },
}

module.exports = customersController;
