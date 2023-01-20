const express = require("express");
const cookiePars = require("cookie-parser")
const IndexRouter = require("./src/routs/IndexRouter");

const app = express();

app.use( express.urlencoded({extended: false}) ); // urlencoded for coming data (not neccesarry right now)
app.use( express.static("client") ); // midlewear for our client folder
app.use(express.json()); // pasrsin json
app.use(cookiePars()); // parsing cookies
app.use("/", IndexRouter) // midlewearing all routers


app.listen( process.env.PORT)
