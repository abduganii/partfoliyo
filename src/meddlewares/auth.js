const { verifyuser } = require("../lib/jwt")
const adminModel = require('../model/admin')

module.exports =  async (req, res, next) => {
    try {
        const admin = await adminModel.find()
        const { token } = req.headers
       
        const { adminId, name } = verifyuser(token)

        const fondAdmin = admin.find(e => e.id === adminId && e.name === name)
        
        if (!fondAdmin) {
            res.redirect("/login")
            return
        }
        next()
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Not Auth Token"
        })
    }
}