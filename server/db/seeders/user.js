require('dotenv').config()
const faker = require('faker');
const { User, db } = require('../db')
const encryption = require('../../helpers/encryption');

/**
 * Method to generate fake users
 * @param {number} amount  Request object
 * @return {array} array of fake user object generated
 */
async function generateFakeUsers(amount = 10) {
  const fakeUsers = [];
  for (let i = 0; i <= amount; i++) {
    fakeUsers.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: await encryption.hashPassword('sweetlove'),
      phone: faker.phone.phoneNumberFormat()
    });
  }
  return fakeUsers;
}


/**
 * Method to seed users table in database
 * @param {number} amount  Request object
 * @return {object} user object as JSON response
 */
async function seedUsersTable(amount = 10) {
  return await User.bulkCreate(generateFakeUsers(amount))
}

//seeding database
db.sync({ force: true }).then(() => {
  seedUsers()
})


module.exports = seedUsersTable;