const express = require("express")
const app = express()

app.use('api/main',require('./main.routes'))

async function start (){
    try{
        app.listen(3000, ()=> console.log('app has been started on 3000 port'))

    }
    catch(e){
        
    }
}
start()