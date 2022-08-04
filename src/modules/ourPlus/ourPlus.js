const portfoliocModel = require('../../model/portfolio')
const ourTeamModel = require('../../model/ourTeam')
const partnersModel = require('../../model/partners')
const servicesModel = require('../../model/services')

module.exports = {
    GET: async (_, res) => {
        try {
           
            res.send({
                "projects": (await portfoliocModel.find()).length,
                "specialists":(await ourTeamModel.find()).length,
                "partners":(await partnersModel.find()).length,
                "services":(await servicesModel.find()).length
            })
        } catch (error) {
            console.log(error)
        }
    }
}