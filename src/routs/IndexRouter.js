const express = require("express")
const router = express.Router()
const jwtAuth = require("../midlleWeare/jwtAuth")
const AuthRouter = require("./AuthRouter")
const { GetResultFile, GetUserInfo  } = require("../controler/IndexControler")


router.use("/", AuthRouter); // midlwear for all authrouter routers
router.get("/",  jwtAuth, GetResultFile); // geting our file when log in and midllewear for cheking auth
router.get("/result", jwtAuth, GetUserInfo) // giving results of every user

module.exports = router;