const { Transaction } = require('../models');

const transactionData = [
    {
        transaction_amount: 15,
        category: "Food & Dining",
        transaction_date: "5/1/2023",
        vendor_name: "Mcdonalds",
        transaction_description: "Breakfast",
        user_id: 1
    },
    {
        transaction_amount: 10,
        category: "Health and Fitness",
        transaction_date: "5/1/2023",
        vendor_name: "Planet Fitness",
        transaction_description: "Gym Membership",
        user_id: 1
    },
    {
        transaction_amount: 8,
        category: "Entertainment",
        transaction_date: "5/1/2023",
        vendor_name: "AMC",
        transaction_description: "Movies",
        user_id: 1
    },
    {
        transaction_amount: 50,
        category: "Shopping",
        transaction_date: "5/4/2023",
        vendor_name: "Nike",
        transaction_description: "Clothes",
        user_id: 1
    },
    {
        transaction_amount: 100,
        category: "Personal Care",
        transaction_date: "5/5/2023",
        vendor_name: "Best Dentist",
        transaction_description: "Dentist",
        user_id: 1
    },
    {
        transaction_amount: 50,
        category: "Transportation",
        transaction_date: "4/20/2023",
        vendor_name: "Exxon",
        transaction_description: "Gas",
        user_id: 1
    },
    {
        transaction_amount: 100,
        category: "Food & Dining",
        transaction_date: "4/10/2023",
        vendor_name: "Trader Joe's",
        transaction_description: "Groceries",
        user_id: 1
    },
    {
        transaction_amount: 300,
        category: "Miscellaneous",
        transaction_date: "4/29/2023",
        vendor_name: "Milo Vet",
        transaction_description: "Vet Checkup",
        user_id: 1
    },
    {
        transaction_amount: 15,
        category: "Entertainment",
        transaction_date: "4/30/2023",
        vendor_name: "Netflix",
        transaction_description: "Netflix Subscription",
        user_id: 1
    },
    {
        transaction_amount: 20,
        category: "Transportation",
        transaction_date: "5/6/2023",
        vendor_name: "Uber",
        transaction_description: "Uber",
        user_id: 1
    },
]

const seedTransactions = () => Transaction.bulkCreate(transactionData);

module.exports = seedTransactions;