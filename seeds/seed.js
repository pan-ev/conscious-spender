const seedTransactions = require('./transaction-seeds');
const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- Categories SEEDED -----\n');

  await seedTransactions();
  console.log('\n----- TRANSACTIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();