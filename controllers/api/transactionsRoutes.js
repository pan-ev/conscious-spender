const express = require('express');
const router = express.Router();
const  Transaction  = require('../../models/Transaction');
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
  try {
    const { description, amount } = req.body;

    const newTransaction = await Transaction.create({
      transaction_description: req.body.transaction_description,
      transaction_amount: req.body.transaction_amount,
      category: req.body.category,
      transaction_date: req.body.transaction_date,
      vendor_name: req.body.vendor_name,
      user_id: req.body.user_id
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
    // get route to get all transactions for user, using the user id
router.get('/',  async (req, res) => {
 
  try {
    const transactions = await Transaction.findAll({
      where: { user_id: req.session.user_id },
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get route that takes the transaction id in the params to get a specific transaction id 

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const transactionId = req.params.id;
//     const transactionItem = await transaction.findOne({
//       where: { id: transactionId }
//     });
//     if (!transactionItem) {
//       return res.status(404).json({ message: 'Transaction not found' });
//     }
//     res.status(200).json(transactionItem);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // put route that also has a transaction id in params
// //update a transaction by id

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const transactionId = req.params.id;
//     const { description, amount } = req.body;

//     const updatedTransaction = await transaction.update(
//       { transaction_description: description, transaction_amount: amount },
//       { where: { id: transactionId, user_id: req.user.id } }
//     );

//     if (updatedTransaction[0] === 0) {
//       return res.status(404).json({ message: 'Transaction not found' });
//     }

//     res.status(200).json({ message: 'Transaction updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // delete route that is going to have a transaction id in params
// // takes the transaction id in params to delete a specific transaction

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const transactionId = req.params.id;

//     const deletedTransaction = await transaction.destroy({
//       where: { id: transactionId, user_id: req.user.id }
//     });

//     if (!deletedTransaction) {
//       return res.status(404).json({ message: 'Transaction not found' });
//     }

//     res.status(200).json({ message: 'Transaction deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });



module.exports = router;