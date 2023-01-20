const jwt = require("jsonwebtoken")
const path = require("path");
const users = require("../config/getUser")

class AuthControler { // class for creating functions our routers

    LogIn(req, res) { // router function for log in

        const { email, password } = req.body; // getting the email and password user send
        const user = users.find(user => user.email === email); // cheking if there is any user with taht email
        
        if(!user) { // if not returning mess
            res.status(301).json({mess: "Invalid username or password"})
            return;
        }
       
        if( user.password !== password ) {  // cheking password
            res.status(301).json({mess: "Invalid username or password"})
            return;
        }
    
        const cookieToken = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" }); // creating token using jwt 
        res.cookie("token", cookieToken); // creating cookie key token giving value aur created token
        res.redirect("/"); // redirecting main
    }

    LogOut (req, res)  { // for log out
        res.clearCookie("token") // clearing cookie
        res.redirect("/login") // redirecting login
    }

    GetLogInPage(req, res) { // giving our html when get "/"
        res.sendFile(path.join(__dirname, "../../client/htmls/login.html"));
    }
}

module.exports = new AuthControler();