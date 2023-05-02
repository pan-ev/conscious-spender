const { User } = require('../models');

const userData = [
  {
    firstName: "Evan",
    lastName: "Pan",
    phone: "111-111-1111",
    email: "ep@hotmail.com",
    password: "password12345",
  },
  {
    firstName: "Jose",
    lastName: "Cortorreal",
    phone: "222-222-2222",
    email: "jc@gmail.com",
    password: "password12345",
  },
  {
    firstName: "Ellie",
    lastName: "Chayo",
    phone: "333-333-3333",
    email: "ec0@aol.com",
    password: "password12345",
  }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;