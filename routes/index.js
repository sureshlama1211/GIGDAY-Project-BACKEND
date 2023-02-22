const signUpRoute = require('./signUpRoute')
const logInRoute = require('./loginroute')
// const testEmailRoute = require('./testEmailRoute')
const verifyEmailRoute = require('./verifyEmailRoute')
const{
    updategig,
    getgig,
    getAllgig,
    deletegig
} = require('./Gig')


const routes = [
    verifyEmailRoute,
    signUpRoute,
    logInRoute,
    updategig,
    getgig,
    getAllgig,
    deletegig,
    // testEmailRoute

]

module.exports = routes