const portfoliocModel = require('../../model/portfolio')
const portfoliocategoriesModel = require('../../model/portfoliocategories')
const {BACKEND_URL} = require('../../config')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await portfoliocModel.find().populate("categorieId"))
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const uploadPhoto = req.files
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })

            const { link,categorieId } = req.body
            const newportfoliocModel = new portfoliocModel({ img, link, categorieId })
            
            const portfoliocategorie  = await portfoliocategoriesModel.findOne({id:categorieId})

            portfoliocategorie.portfolios.push(newportfoliocModel._id)

            await portfoliocategorie.save()
            await newportfoliocModel.save()
            if (newportfoliocModel) {
                res.send({
                   status: 200,
                   message: 'Proftolio created'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'Proftolio dont created'
                });
             }
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id, link, categorieId } = req.body
            const uploadPhoto = req.files
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })
            
            await portfoliocModel.findByIdAndUpdate(id, { img, link, categorieId })
            if (portfoliocModel) {
                res.send({
                   status: 200,
                   message: 'Proftolio updated'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'Proftolio dont updated'
                });
             }
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            await portfoliocModel.findByIdAndRemove(id)
            if (portfoliocModel) {
                res.send({
                   status: 200,
                   message: 'Proftolio deleted'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'Proftolio dont deleted'
                });
             }
        } catch (error) {
            console.log(error)
            
        }
    }
}