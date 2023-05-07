const { User } = require('../models');

const userData = [
  {
    username: "Evan",
    email: "ep@hotmail.com",
    password: "password12345",
  },
  {
    username: "Jose",
    email: "jc@gmail.com",
    password: "password12345",
  },
  {
    username: "Ellie",
    email: "ec@aol.com",
    password: "password12345",
  }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;