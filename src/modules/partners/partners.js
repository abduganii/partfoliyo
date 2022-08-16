const partnersModel = require('../../model/partners')

const {BACKEND_URL} = require('../../config')

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
            const { name } = req.body  
            const uploadPhoto = req.files
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })

            const newpartnersModel = new partnersModel({ img,name})
            await newpartnersModel.save()

            if (newpartnersModel) {
                res.send({
                   status: 200,
                   message: 'Partners Created'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'Partners dont Created'
                });
             }
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const uploadPhoto = req.files
            const {id, name } = req.body
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })

            await partnersModel.findByIdAndUpdate(id, { img, name })

            if (partnersModel) {
                res.send({
                   status: 200,
                   message: 'Partners Updated'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'Partners dont Updated'
                });
             }
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            await partnersModel.findByIdAndRemove(id)
            
            if (partnersModel) {
                res.send({
                   status: 200,
                   message: 'Partners deleted'
                });
             } else {
                res.send({
                   status: 500,
                   message: 'Partners dont deleted'
                });
             }
        } catch (error) {
            console.log(error)
            
        }
    }
}