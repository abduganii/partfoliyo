const partnersModel = require('../../model/partners')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await partnersModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { img,name } = req.body
            const newpartnersModel = new partnersModel({ img,name})
            await newpartnersModel.save()
            res.send(newpartnersModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id,img,name } = req.body
            res.send(await partnersModel.findByIdAndUpdate(id,{img,name}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            res.send(await partnersModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}