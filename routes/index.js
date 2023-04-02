const signUpRoute = require("./signUpRoute");
const logInRoute = require("./loginroute");
const loginasrestaurant = require("./updateprofilerestaurant");
// const testEmailRoute = require('./testEmailRoute')
const verifyEmailRoute = require("./verifyEmailRoute");
const getartist = require("./getartist");
const { getAllgig, addgig } = require("./Gig");
const { editprofile } = require("./editprofile");
const { beforeedit } = require("./editprofile");
const { getBookings } = require("./bookingrequest");
const { bookingrequest } = require("./bookingrequest");
const { bookingstatus } = require("./bookingrequest");

const routes = [
  verifyEmailRoute,
  signUpRoute,
  logInRoute,
  getAllgig,
  addgig,
  loginasrestaurant,
  getartist,
  // testEmailRoute
  editprofile,
  beforeedit,
  bookingrequest,
  getBookings,
  bookingstatus,
];

module.exports = routes;
