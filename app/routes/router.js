const express = require('express')
const router = express.Router()
const port = process.env.port || 3000
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// arr = [1, 2, 3] ...arr => 1, 2, 3
//when you use the ... before the array then it spreads out the array so the content can be retruned without brackets.

router.use(express.static('public'))
//makes it so that the router can access what is in the public folder where the images and assets will be located

//create ROOT ROUTE => localhost:3000/api
//will be the home to all of the endpoints from the database
router.get('/api', (req, res)=> {
    res.json({//make sure the address matches what the tables are named in the database
        'Albums': `http://localhost:${port}/api/album`,
        'Artists': `http://localhost:${port}/api/artist`,
        'Bands': `http://localhost:${port}/api/band`
    })
})

//add this after adding to the artistRoute.js
router.use('/api/artist', require('./api/artistRoutes'))

//check by running npm run dev in the terminal

//create home page
//Home Page => localhost:3000
router.get('/', (req, res)=>{
    //res.render(page, object)I
    res.render('pages/home', {
        title: 'Home',
        name: 'My Album Database'
    })
})

router.get('/artist', (req, res)=> {
    const url = `http://localhost:${port}/api/artist`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/artist', {
                title: 'All Artists',
                name: 'All Artists',
                data
            })
        })
})

router.get('/artist/:id', (req, res)=> {
    const id = req.params.id
    const url = `http://localhost:${port}/api/artist/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const artist = data[0].alias == null ? `${data[0].fName} ${data[0].lName}` : `${data[0].alias}`

            res.render('pages/artist_single', {
                title: artist,
                name: artist,
                data
            })
        })
})

//Error Page(always at bottom)
router.get('*', (req, res)=> {
    if (req.url === '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: '404 Error'
        })
    }
})

//localhost:3000

module.exports = router