const ourTeamModel = require('../../model/ourTeam')
const ourTeamRUModel = require('../../model/ourTeamRU')

const {BACKEND_URL} = require('../../config')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send({
                status: 200,
                data: {
                   uz: await ourTeamModel.find(),
                   ru: await ourTeamRUModel.find()
                }
             })
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { name, profession } = req.body
            const uploadPhoto = req.files
            const {lang} = req.params
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })
            if (lang == "uz") {
                const newourTeamModel = new ourTeamModel({ img,name,profession})
                await newourTeamModel.save()
                if (newourTeamModel) {
                    res.send({
                       status: 200,
                       message: 'Teammeber created'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'Teammeber dont created'
                    });
                 }
            }
            if (lang == "ru") {
                const newourTeamModel = new ourTeamRUModel({ img,name,profession})
                await newourTeamModel.save()
                if (newourTeamModel) {
                    res.send({
                       status: 200,
                       message: 'Teammeber created'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'Teammeber dont created'
                    });
                 }
            }
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const { id, name, profession } = req.body
            const uploadPhoto = req.files
            const {lang} = req.params
            let img

            uploadPhoto.map(e => {
                img = `${BACKEND_URL}/${e.originalname}`
            })
            if (lang == "uz") {
                await ourTeamModel.findByIdAndUpdate(id, { img, name, profession })
            
                if (ourTeamModel) {
                    res.send({
                       status: 200,
                       message: 'Teammeber updated'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'Teammeber dont updated'
                    });
                 }
            }
            if (lang == "ru") {
                await ourTeamRUModel.findByIdAndUpdate(id, { img, name, profession })
            
                if (ourTeamRUModel) {
                    res.send({
                       status: 200,
                       message: 'Teammeber deleted'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'Teammeber dont deleted'
                    });
                 }
            }
          
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const { id } = req.body
            const {lang} = req.params
            
            if (lang == "uz") {
                await ourTeamModel.findByIdAndRemove(id)
            
                if (ourTeamModel) {
                    res.send({
                       status: 200,
                       message: 'Teammeber updated'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'Teammeber dont updated'
                    });
                 }
            }
            if (lang == "ru") {
                await ourTeamRUModel.findByIdAndRemove(id)
            
                if (ourTeamRUModel) {
                    res.send({
                       status: 200,
                       message: 'Teammeber updated'
                    });
                 } else {
                    res.send({
                       status: 500,
                       message: 'Teammeber dont updated'
                    });
                 }
            }
        } catch (error) {
            console.log(error)
            
        }
    }
}