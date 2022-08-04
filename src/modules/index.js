const express = require('express')
const router = express.Router()

const services = require('./services/services')
const ourTeam = require('./ourTeam/ourTeam')
const contactUs = require('./contactUs/contactUs')
const portfoliocategories = require('./portfoliocategories/ortfoliocategories')
const partners = require('./partners/partners')
const portfolio = require('./portfolio/portfolio')
const ourPlus = require("./ourPlus/ourPlus")

const login = require('./login/login')
const auth = require('../meddlewares/auth')

router
    //login 
    .post('/login', login)
    //services
    .get('/services',services.GET)
    .post('/newService',auth,services.POST)
    .put('/updateService/:id',auth,services.PUT)
    .delete('/deleteService/:id',auth,services.DELETE)
    //ourTeam 
    .get('/ourTeam',ourTeam.GET)
    .post('/newTeamMember',auth,ourTeam.POST)
    .put('/updateTeamMember/:id',auth,ourTeam.PUT)
    .delete('/deleteTeamMember/:id',auth,ourTeam.DELETE)
    //contactUs
    .get("/allMessage",contactUs.GET)
    .post("/newMessage",contactUs.POST)
    .delete("/deleteMessage/:id", auth, contactUs.DELETE)
    //partners
    .get('/partners', partners.GET)
    .post('/newpartners',auth, partners.POST)
    .put('/updatepartners/:id',auth, partners.PUT)
    .delete('/deletepartners/:id',auth, partners.DELETE)
    //portfolioCategories
    .get('/portfoliocategories',portfoliocategories.GET)
    .post('/newPortfoliocategories',auth, portfoliocategories.POST)
    .put('/updatePortfoliocategories/:id',auth, portfoliocategories.PUT)
    .delete('/deletePortfoliocategories/:id',auth, portfoliocategories.DELETE)
    //portfolio
    .get('/portfolio',portfolio.GET)
    .post('/newPortfolio',auth,portfolio.POST)
    .put('/updatePortfolio/:id',auth,portfolio.PUT)
    .delete('/DeletePortfolio/:id',auth,portfolio.DELETE)
    //ourPlus 
    .get('/ourPlus',ourPlus.GET)
    

module.exports = router