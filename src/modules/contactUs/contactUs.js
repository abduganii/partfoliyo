const contactUsModel = require('../../model/contactUs')

module.exports = {
    GET: async (_, res) => {
        try {
            // console.log((await contactUsModel.find()).length)
            res.send(await contactUsModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { name, phoneNumber, text } = req.body
            console.log(name, phoneNumber, text)
            if (name == undefined || phoneNumber == undefined || text == undefined ) {
                res.status(400).send({
                    status: 400,
                    error:"bad required"
                })
            } else {
                const newcontactUsModel = new contactUsModel({ name,phoneNumber,text})
                await newcontactUsModel.save()
                res.send(newcontactUsModel)
            }
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