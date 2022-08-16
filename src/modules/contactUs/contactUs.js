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

                if (newcontactUsModel) {
                    res.send({
                       status: 200,
                       message: 'new message'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'message dont created'
                    });
                 }
            }
        } catch (error) {
            console.log(error)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            
            await contactUsModel.findByIdAndRemove(id)

            if (contactUsModel) {
                res.send({
                   status: 200,
                   message: 'deleted message'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'message dont deleted'
                });
             }
        } catch (error) {
            console.log(error)
            
        }
    }
}