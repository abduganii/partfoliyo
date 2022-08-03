const servicesModel = require('../../model/services')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await servicesModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { img,name,text } = req.body
            const newservicesModel = new servicesModel({ img,name,text})
            await newservicesModel.save()
            res.send(newservicesModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const {id} = req.params
            const {img,name,text } = req.body
            res.send(await servicesModel.findByIdAndUpdate(id,{img,name,text}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.params
            res.send(await servicesModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}