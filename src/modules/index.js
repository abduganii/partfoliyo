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
const uploadImg = require('../meddlewares/multer')

router
    //login 
    .post('/login', login)
    //services
    .get('/services',services.GET)
    .post('/newService/:lang',auth,uploadImg.array("images"),services.POST)
    .put('/updateService/:lang',auth,uploadImg.array("images"),services.PUT)
    .delete('/deleteService/:lang',auth,services.DELETE)
    //ourTeam 
    .get('/ourTeam',ourTeam.GET)
    .post('/newTeamMember/:lang',auth,uploadImg.array("images"),ourTeam.POST)
    .put('/updateTeamMember/:lang',auth,uploadImg.array("images"),ourTeam.PUT)
    .delete('/deleteTeamMember/:lang',auth,ourTeam.DELETE)
    //contactUs
    .get("/allMessage",contactUs.GET)
    .post("/newMessage",contactUs.POST)
    .delete("/deleteMessage", auth, contactUs.DELETE)
    //partners
    .get('/partners', partners.GET)
    .post('/newpartners',auth,uploadImg.array("images"), partners.POST)
    .put('/updatepartners',auth,uploadImg.array("images"), partners.PUT)
    .delete('/deletepartners',auth, partners.DELETE)
    //portfolioCategories
    .get('/portfoliocategories',portfoliocategories.GET)
    .post('/newPortfoliocategories',auth, portfoliocategories.POST)
    .put('/updatePortfoliocategories',auth, portfoliocategories.PUT)
    .delete('/deletePortfoliocategories',auth, portfoliocategories.DELETE)
    //portfolio
    .get('/portfolio',portfolio.GET)
    .post('/newPortfolio',auth,uploadImg.array("images"),portfolio.POST)
    .put('/updatePortfolio',auth,uploadImg.array("images"),portfolio.PUT)
    .delete('/DeletePortfolio',auth,portfolio.DELETE)
    //ourPlus 
    .get('/ourPlus',ourPlus.GET)
    

module.exports = router
