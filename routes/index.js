const signUpRoute = require('./signUpRoute')
const logInRoute = require('./loginroute')
const{
    updategig,
    getgig,
    getAllgig,
    deletegig
} = require('./Gig')


const routes = [
    signUpRoute,
    logInRoute,
    updategig,
    getgig,
    getAllgig,
    deletegig

]

module.exports = routes