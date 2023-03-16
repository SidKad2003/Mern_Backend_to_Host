const express = require('express')
const Router = express.Router()
const { getTransactions, addTransaction, deleteTransaction} =  require('../controllers/transaction')

// Router.get('/', (req, res) => res.send("Hello From Transactions"))
Router.route('/').get(getTransactions).post(addTransaction)
Router.route('/:id').delete(deleteTransaction)

module.exports = Router;



