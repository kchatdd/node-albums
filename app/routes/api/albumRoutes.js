const express = require('express')
const router = express.Router()

//localhost:3000/api/artist

const { albumDao: dao} = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.getAlbumInfo(res, dao.table)
})

router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.getInfo(res, dao.table, req.params.id)
})

router.get('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update')

module.exports = router