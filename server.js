const express = require('express')
const server = express()//create instance of express
const router = require('./app/routes/router')
const helmet = require('helmet')
const cors = require('cors')

const port = process.env.port || 3000//create port

//handle secruity
//helmet handles images and scripts
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

//localhost:3000
server.use('/', router)
server.set('view engine', 'ejs')

// this method takes two arguments .listen(port, callback function)
server.listen(port, ()=> console.log(`We on the air in ${port}`));