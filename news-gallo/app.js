require('dotenv').config();
var express = require("express");
const Sequelize = require('sequelize');
const cors = require("cors");
var bodyParser = require("body-parser");
var port = 3003;
var loggingMiddleware = require("./log-request-middleware")
var app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.get('/getNewsFeed/:requestData', async (req, res) => {
  var findNewsFeedOn = req.params["requestData"]
  console.log("api code working", findNewsFeedOn);
});
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send();
  } else { res.status(500).send() }
});
app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});