const contactUsModel = require('../../model/contactUs')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await contactUsModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { name,phoneNumber,text } = req.body
            const newcontactUsModel = new contactUsModel({ name,phoneNumber,text})
            await newcontactUsModel.save()
            res.send(newcontactUsModel)
        } catch (error) {
            console.log(error)
        }
    },
    DELETE: async (req, res) => {
        try {
            const {id}= req.params
            res.send(await contactUsModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}