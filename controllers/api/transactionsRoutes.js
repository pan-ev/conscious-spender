const express = require('express');
const router = express.Router();
const  Transaction  = require('../../models/Transaction');
const withAuth = require("../../utils/auth");

// post route to create a new transaction from the transactions.handlebars page
router.post('/', async (req, res) => {
  try {
    const { description, amount } = req.body;

    const newTransaction = await Transaction.create({
      transaction_description: req.body.transaction_description,
      transaction_amount: req.body.transaction_amount,
      category: req.body.category,
      transaction_date: req.body.transaction_date,
      vendor_name: req.body.vendor_name,
      user_id: req.session.user_id
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get route to get all transactions for user sorting by transaction_date
router.get('/',  async (req, res) => {
 
  try {
    const transactions = await Transaction.findAll({
      where: { user_id: req.session.user_id },
      order: [['transaction_date', 'ASC']],
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;