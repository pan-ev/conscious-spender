const User = require('./User');
const Transaction = require("./Transaction");
// const Category = require("./Category");

Transaction.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Transaction, {
    foreignKey: "user_id",
});

// Transaction.belongsTo(Category, {
//     foreignKey: "category_id"
// });

// Category.hasMany(Transaction, {
//     foreignKey: "category_id",
//     onDelete: "SET NULL"
// })


module.exports = { User, Transaction};