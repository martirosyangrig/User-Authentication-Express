const express = require("express");
const router = express.Router();
const chekLog = require("../midlleWeare/chekLog")
const {LogIn, LogOut, GetLogInPage} = require("../controler/AuthControler")


router.post("/login",  LogIn); // routing our login and posting the data in log in page
router.get("/login", chekLog, GetLogInPage); // getting login page
router.get("/logout", LogOut); // log out routing

module.exports = router;