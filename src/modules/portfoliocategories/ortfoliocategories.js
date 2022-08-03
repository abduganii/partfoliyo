const portfoliocategoriesModel = require('../../model/portfoliocategories')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await portfoliocategoriesModel.find().populate('portfolios'))
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { title } = req.body
            const newportfoliocategories = new portfoliocategoriesModel({ title})
            await newportfoliocategories.save()
            res.send(newportfoliocategories)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id } = req.params
            const { title } = req.body
            res.send(await portfoliocategoriesModel.findByIdAndUpdate(id,{title}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.params
            res.send(await portfoliocategoriesModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}