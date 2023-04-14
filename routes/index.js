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
const { bookingrequest, bookingdetail } = require("./bookingrequest");
const { bookingstatus } = require("./bookingrequest");
const { addevent, singleevent } = require("./Event");
const { getallevent } = require("./Event");
const { applyrequest, getAppliedGig, applygigstatus } = require("./applytogig");
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
  singleevent,
  bookingdetail,
  applyrequest,
  getAppliedGig,
  applygigstatus,
];

module.exports = routes;
