const express = require("express")
const app = express()
const router = require('./modules')
const mongo = require('./lib/mongo')
const PORT = process.env.PORT || 7000
const cors = require("cors")
const bodyParser = require("body-parser")
    
; (async () => {
    try {

        await mongo()

        app.use(express.json())
        app.use(cors())
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(router)
        app.use('/*', (_, req) => {
            req.sendStatus(404)
        })

    } finally {
        app.listen(PORT,console.log(PORT))
    }
})()

