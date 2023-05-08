const User = require('./User');
const Transaction = require("./Transaction");

Transaction.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Transaction, {
    foreignKey: "user_id",
});

module.exports = { User, Transaction};