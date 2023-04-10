const signUpRoute = require("./signUpRoute");
const logInRoute = require("./loginroute");
const loginasrestaurant = require("./updateprofilerestaurant");
// const testEmailRoute = require('./testEmailRoute')
const verifyEmailRoute = require("./verifyEmailRoute");
const { getartist, getsingleartist } = require("./getartist");
const { getAllgig, addgig, getgig } = require("./Gig");
const { editprofile } = require("./editprofile");
const { beforeedit } = require("./editprofile");
const { getBookings } = require("./bookingrequest");
const { bookingrequest } = require("./bookingrequest");
const { bookingstatus } = require("./bookingrequest");
const { addevent } = require("./Event");
const { getallevent } = require("./Event");
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
  addevent,
  getallevent,
  getgig,
  getsingleartist,
];

module.exports = routes;
