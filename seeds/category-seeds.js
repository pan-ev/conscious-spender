const { Category } = require('../models');

const categoryData = [
  {
    category_name: "Shopping"
  },
  {
    category_name: "Entertainment"
  },
  {
    category_name: "Food & Dining"
  },
  {
    category_name: "Health and Fitness"
  },
  {
    category_name: "Transportation"
  },
  {
    category_name: "Personal Care"
  },
  {
    category_name: "Miscellaneous"
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;