const express = require('express')
const router = express.Router()
const port = process.env.port || 3000
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// arr = [1, 2, 3] ...arr => 1, 2, 3
//when you use the ... before the array then it spreads out the array so the content can be retruned without brackets.

router.use(express.static('public'))
//this means we are using the public folder to handle the images
//makes it so that the router can access what is in the public folder where the images and assets will be located

const tables = ['artist', 'band', 'album']

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
tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})
// router.use('/api/artist', require('./api/artistRoutes'))
// router.use('/api/band', require('./api/bandRoutes'))

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

tables.forEach(table => {
    router.get(`/${table}`, (req, res)=> {
        const url = `http://localhost:${port}/api/${table}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                res.render(`pages/${table}`, {
                    title: `All ${table}s`,
                    name: `All ${table}s`,
                    data
                })
            })
    })


    router.get(`/${table}/sort`, (req, res)=> {
        const url = `http://localhost:${port}/api/${table}/sort`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                res.render(`pages/${table}`, {
                    title: `All ${table}s`,
                    name: `All ${table}s`,
                    data
                })
            })
    })
})




// router.get('/artist', (req, res)=> {
//     const url = `http://localhost:${port}/api/artist`

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/artist', {
//                 title: 'All Artists',
//                 name: 'All Artists',
//                 data
//             })
//         })
// })

// router.get('/band', (req,res)=> {
//     const url =`http://localhost:${port}/api/band`

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/band' ,{
//                 title: 'All Bands',
//                 name: 'All Bands',
//                 data
//             })
//         })
// })

router.get('/artist/form', (req, res)=> {
    res.render('pages/artist_form', {
        title: 'Artist Form',
        name: 'Artist Form'
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

router.get('/band/form', (req, res)=> {
    res.render('pages/band_form', {
        title: 'Band Form',
        name: 'Band Form'
    })
})

router.get('/band/:id', (req, res)=> {
    const id = req.params.id
    const url = `http://localhost:${port}/api/band/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const band = data[0].band
            res.render('pages/band_single', {
                title: band,
                name: band,
                data
            })
        })
})

router.get('/album/:id', (req, res)=> {
    const id = req.params.id
    const url = `http://localhost:${port}/api/album/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/album_single', {
                title: `${data.title}`,
                name: `${data.title}`,
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