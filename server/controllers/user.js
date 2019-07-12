const { User, UserProfile } = require('../db/db');
const bcrypt = require('bcrypt');
class UserController {
  signUp () {}

  async login (req, res) {
    //find user by email
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) res.status(401).send({ error: 'Invalid username/password' });

    //compare the passwords
    const password = await bcrypt.compare(user.password, req.body.password);
    if (!password) return res.status(400).send('Invalid email/password');

    //generate token
    const token = user.generateToken();
    res.send({ token });
  }

  async resetToken (req, res) {
    const user = await User.findOne({ _id: req.user.id });
    mailer.sendMail(user.email, user.firstName, token, mailOptions);

    res.send('Please check your email and verify your account');
  }

  login () {}

  getUserProfile () {
    /**
     * @param {{}} req 
     * @param {{}} res
     * @param {Function} next
     * @param {String} id
     */

    return async (req, res, next) => {
      try {
      // IMPORTANT!!! user must have been loaded into req.user
        // Get any user pass
        // user must have been loaded into req.user
        //check if the id exist or is deleted
        let user = await User.findOne({ id });
        if (!user) return res.status(404).send({ error: 'User profile not found' });
        //use id to get his profile
        let userProfile = await UserProfile.findOne({ where: { userId: id } });
        if (!userProfile) return res.status(404).send({ error: 'User profile not found' });

        res.send(userProfile);
      } catch (error) {
        next(error);
      }
    };
  }

  getMyProfile () {
    return async (req, res, next) => {
      try {
      // IMPORTANT!!! user must have been loaded into req.user

      // user gets his or her own profile

        // user must have been loaded into req.user
        const userId = req.user._id;
        //use id to get his profile
        let userProfile = await UserProfile.findOne({ where: { userId: userId } });
        if (!userProfile) return res.status(404).send({ error: 'User profile not found' });

        res.send(userProfile);
    } catch (error) {
      next(error);
    }
  };

  }

  async loadId (req, res, next, id) {
    /**
     * @param {{}} req 
     * @param {{}} res
     * @param {Function} next
     * @param {String} id
     */
    try {
      //check if the id exist or is deleted
      let user = await User.findOne({ id });
      if (!user) return res.status(404).send({ error: 'User not found' });
      req.user = user;
      next();
    } catch (error) {
      res.send({ error: error.message });
    }
  }
  getAllUsers () {
    return async (req, res, next) => {
      try {
        // check user token is valid should be in req.user
        const users = await User.findAll({where:{deleted:false}})
        res.send(users)

      } catch (error) {}
    };
  }

  getUser () {
    return async (req, res, next) => {
      try {
        //Get id from the loadId which creates 
        res.send(req.user)
      } catch (error) {
        
      }
    }
  }
}

module.exports = new UserController();
