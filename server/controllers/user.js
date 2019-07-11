const { User, UserProfile } = require('../db/db');

class UserController {
  signUp () {}
  login () {}

  getUserProfile () {
    /**
     * @param {{}} req 
     * @param {{}} res
     * @param {Function} next
     * @param {String} id
     */

    return async (req, res, next) => { // Get any user pass 
      // user must have been loaded into req.user
      //check if the id exist or is deleted
      let user = await User.findOne({id})
      if (!user) return res.status(404).send({ error: 'User profile not found' });
      //use id to get his profile
      let userProfile = await UserProfile.findOne({ where: { userId: id } });
      if (!userProfile) return res.status(404).send({ error: 'User profile not found' });

      res.send(userProfile);
    };
  }

  getMyProfile () { // user gets his or her own profile

    return async (req, res, next) => {
      // user must have been loaded into req.user
      const userId = req.user._id;
      //use id to get his profile
      let userProfile = await UserProfile.findOne({ where: { userId: userId } });
      if (!userProfile) return res.status(404).send({ error: 'User profile not found' });

      res.send(userProfile);
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
      // user must have been loaded into req.user
      //check if the id exist or is deleted
      let user = await User.findOne({id})
      if (!user) return res.status(404).send({ error: 'User not found' });
      req.user = user
      next();
    } catch (error) {
      res.send({error: error.message});
    }

    }
}

module.exports = new UserController();
