const users = require("../users/users.model");
const authMiddleware = async (req, res, next) => {
    let token=req.headers.cookie;
    
    if (token) {
      let a = token.split("=");
      let token= a[1].split("%3A");
      let id = token[0];
      let email = token[1].split("%40");
      email = email.join("@");
      let user = await users.findById(id);
      // console.log(user);
      if (user.email == email) {
        req.userId = id;
        next();
      } else {
        res.status(401).send("cannot perform this,missing permission");
      }
    } else {
      res.status(401).send("cannot perform this,missing permission");
    }
  };

module.exports = authMiddleware;