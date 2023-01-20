const path = require("path")

class IndexControler { // routing functions

    GetResultFile(req, res) {  // giving html file when log in
        res.sendFile(path.join(__dirname, "../../client/htmls/dashboard.html"));
    }
    GetUserInfo(req, res) { // giving log in user object
        res.send(req.user);
    }
}

module.exports = new IndexControler();