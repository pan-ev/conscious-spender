const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const Transaction = require('../models/Transaction');

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const dbTransactionsData = await Transaction.findAll({
      where: { user_id: req.session.user_id },
      order: [['transaction_date', 'DESC']],
    });
    // also fetch the user details to show the user's name on the dashboard side nav 
    const user = await User.findOne({ where: { id: req.session.user_id } });
    const transactions = dbTransactionsData.map((transactions) =>
      transactions.get({ plain: true })
    );
    res.render("homepage", { transactions, user: user.dataValues });
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
  // before rendering transactions, fetch the user from the DB 
  // using the user_id in the session
  let user = {};
  try {
    user = await User.findOne({ where: { id: req.session.user_id } });
    user = user.dataValues;
  } catch (error) {
    console.log("error while fetching user");
  }
  // send along user with the response
  res.render("transaction", {
    logged_in: req.session.loggedIn,
    user
  });
});

module.exports = router;
