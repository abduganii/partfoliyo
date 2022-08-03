const ourTeamModel = require('../../model/ourTeam')

module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await ourTeamModel.find())
        } catch (error) {
            console.log(error)
        }
    },
    POST: async (req, res) => {
        try {
            const { img,name,profession } = req.body
            const newourTeamModel = new ourTeamModel({ img,name,profession})
            await newourTeamModel.save()
            res.send(newourTeamModel)
        } catch (error) {
            console.log(error)
        }
    },
    PUT: async(req,res)=>{
        try {
            const {id}= req.params
            const {img,name,profession } = req.body
            res.send(await ourTeamModel.findByIdAndUpdate(id,{img,name,profession}))
        } catch (error) {
            console.log(error.message)
        }
    },
    DELETE: async (req, res) => {
        try {
            const {id}= req.params
            res.send(await ourTeamModel.findByIdAndRemove(id))
        } catch (error) {
            console.log(error)
            
        }
    }
}