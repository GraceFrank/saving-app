const bcrypt = require('bcrypt');

class Encryption {
  static async hashPassword(password) {
    try {
      password = await bcrypt.hash(password, 10);
      return password;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Encryption;
