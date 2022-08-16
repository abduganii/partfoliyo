const servicesModel = require('../../model/services')
const servicesRUModel = require('../../model/servicesRU')

const {BACKEND_URL} = require('../../config')


module.exports = {
    GET: async (_, res) => {
        try {
            res.send({
                status: 200,
                data: {
                   uz: await servicesModel.find(),
                   ru: await servicesRUModel.find()
                }
             })
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { name, text } = req.body
            const uploadPhoto = req.files
            const {lang} = req.params
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })

            if (lang == 'uz') {
                const newservicesModel = new servicesModel({ img, name, text })
                await newservicesModel.save()
                if (newservicesModel) {
                    res.send({
                       status: 200,
                       message: 'services created'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'services dont created'
                    });
                 }
            }
            if (lang == 'ru') { 
                const newservicesModel = new servicesRUModel({ img, name, text })
                await newservicesModel.save()
                if (newservicesModel) {
                    res.send({
                       status: 200,
                       message: 'services created'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'services dont created'
                    });
                 }
            }
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const {lang} = req.params
            const { id, img, name, text } = req.body
            if (lang == 'uz') { 
                await servicesModel.findByIdAndUpdate(id, { img, name, text })
                if (servicesModel) {
                    res.send({
                       status: 200,
                       message: 'services updated'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'services dont updated'
                    });
                 }
            }
            if (lang == 'ru') { 
                await servicesRUModel.findByIdAndUpdate(id, { img, name, text })
                if (servicesRUModel) {
                    res.send({
                       status: 200,
                       message: 'services updated'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'services dont updated'
                    });
                 }
            }
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const {lang} = req.params
            const { id } = req.body
            if (lang == 'uz') { 
                await servicesModel.findByIdAndRemove(id)

                if (servicesModel) {
                    res.send({
                       status: 200,
                       message: 'services delete'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'services dont delete'
                    });
                 }
            }
            if (lang == 'ru') { 
                await servicesRUModel.findByIdAndRemove(id)
                
                if (servicesRUModel) {
                    res.send({
                       status: 200,
                       message: 'services delete'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'services dont delete'
                    });
                 }
            }
        } catch (error) {
            console.log(error)
            
        }
    }
}