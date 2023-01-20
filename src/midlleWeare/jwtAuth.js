const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const cookieToken = req.cookies.token // getting our created cookie

  if(!cookieToken) { // if not redirecting to login page
    res.redirect("/login")
    next()
    return;
  }
  try {
    const user = jwt.verify(cookieToken, process.env.MY_SECRET); // cheking our user by token
    req.user = user; // giving req obj user 
    
  } catch (err) { // if err

    res.clearCookie("token") // clearing cookie "token" key 
    res.redirect("/login") // redirecting
  }
  return next()
};