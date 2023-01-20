module.exports = function(req, res, next) {
    const cookieToken = req.cookies.token; // geting created cookie

    if(!cookieToken){ // if not going forward
        return next()
    }
    res.redirect("/") // else redirecting
}