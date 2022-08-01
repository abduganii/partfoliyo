const adminmodel = require('../../model/admin')
const {signuser} = require('../../lib/jwt')

module.exports = async (req, res) => {
    try {
        const admin = await adminmodel.find()
        const { name, password } = req.body
        console.log(admin,name,password)
        const sortAdmin = admin.find(e =>e.name === name && e.password === password)
    
        if (!sortAdmin) {
            res.send("name or password is not true")
            return
        }
        
        const token = signuser({ adminId: sortAdmin._id, name: sortAdmin.name })
        res.status(200).send({
            stutus:200,
            token:token
        })
    } catch (error) {
        res.status(400).send({
            status: 400,
            error:"Bad request"
        })
    }
}