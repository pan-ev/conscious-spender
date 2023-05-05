const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const  Transaction  = require('../models/Transaction');

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const dbTransactionsData = await Transaction.findAll({
      where: { user_id: req.session.user_id },
      order: [['createdAt', 'DESC']],
    });
    const transactions = dbTransactionsData.map((transactions) =>
      transactions.get({ plain: true })
    );
    console.log(transactions);
    res.render("homepage" ,{transactions});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/transactions", withAuth, async (req, res) => {
  res.render("transaction", {
    logged_in: req.session.loggedIn,
  });
});

module.exports = router;
