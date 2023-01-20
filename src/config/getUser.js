const path = require("path");
const fs = require("fs");


const dataFile = fs.readFileSync(path.resolve("db.json"), "utf8"); // reading json file
const usersData = JSON.parse(dataFile); // parsing it
const users = usersData.users; // making an array with all user information inside

module.exports = users;