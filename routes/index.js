const signUpRoute = require("./signUpRoute");
const logInRoute = require("./loginroute");
const loginasrestaurant = require("./loginasrestaurant");
// const testEmailRoute = require('./testEmailRoute')
const verifyEmailRoute = require("./verifyEmailRoute");
const { updategig, getgig, getAllgig, deletegig, addgig } = require("./Gig");

const routes = [
  verifyEmailRoute,
  signUpRoute,
  logInRoute,
  updategig,
  getgig,
  getAllgig,
  deletegig,
  addgig,
  loginasrestaurant,
  // testEmailRoute
];

module.exports = routes;
