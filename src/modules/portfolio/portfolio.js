const portfoliocModel = require('../../model/portfolio')
const portfoliocategoriesModel = require('../../model/portfoliocategories')
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
            const { img,link,categorieId } = req.body
            const newportfoliocModel = new portfoliocModel({ img, link, categorieId })
            
            const portfoliocategorie  = await portfoliocategoriesModel.findOne({id:categorieId})

            portfoliocategorie.portfolios.push(newportfoliocModel._id)

            await portfoliocategorie.save()
            await newportfoliocModel.save()
            res.send(newportfoliocModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const {  img,link,categorieId } = req.body
            res.send(await portfoliocModel.findByIdAndUpdate(id,{ img,link,categorieId}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await portfoliocModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}