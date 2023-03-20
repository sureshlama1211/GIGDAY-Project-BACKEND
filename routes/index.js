const signUpRoute = require("./signUpRoute");
const logInRoute = require("./loginroute");
const loginasrestaurant = require("./updateprofilerestaurant");
// const testEmailRoute = require('./testEmailRoute')
const verifyEmailRoute = require("./verifyEmailRoute");
const getartist = require("./getartist");
const { getAllgig, addgig } = require("./Gig");

const routes = [
  verifyEmailRoute,
  signUpRoute,
  logInRoute,
  getAllgig,
  addgig,
  loginasrestaurant,
  getartist,
  // testEmailRoute
];

module.exports = routes;
