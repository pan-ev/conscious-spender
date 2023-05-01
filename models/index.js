const User = require('./User');
const Transaction = require("./Transaction");

Transaction.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Transaction, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

module.exports = { User, Transaction };