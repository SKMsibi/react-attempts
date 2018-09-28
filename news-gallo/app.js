require('dotenv').config();
var express = require("express");
const Sequelize = require('sequelize');
const cors = require("cors");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3003;
var loggingMiddleware = require("./log-request-middleware")
var app = express();
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
var {
  domain,
  communicationChannelType,
} = require('./database/models');
app.listen(port, () => {
  console.log("server running on localhost:3003 ");
});