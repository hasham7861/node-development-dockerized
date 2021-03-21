const Express = require('express')

const expressApp = new Express()
const EXPRESS_APP_PORT = 5000

expressApp.get("/", (req,res)=> res.status(200).send("api is changed"))

expressApp.listen(EXPRESS_APP_PORT, 
    ()=>console.log(`Express App is running on ${EXPRESS_APP_PORT}`))