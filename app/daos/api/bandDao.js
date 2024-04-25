const con = require('../../config/dbconfig')

const bandDao = {
    table: 'band', 
    getInfo: (res, table, id)=> {
        con.execute(
            `SELECT al.album_id, al.title, al.yr_released, al.album_cover, b.band, b.imgUrl,b.band_id 
            FROM album al 
            JOIN band b USING (band_id)
            WHERE ${table}_id = ${id}
            ORDER BY al.yr_released;`,
            (error, rows)=> {
                if (!error) {
                    res.json(rows)
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )//before ar.artist_id add "ar.imgURL" with a comma behind it
    },

    create: (req, res, table)=> {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)//ex first name, alias, last name
            const values = Object.values(req.body)//ex George, P-Funk, Clinton

            con.execute(
                `INSERT INTO ${table}
                    SET ${fields.join(' = ?, ')} = ?;`, 
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res, table)=> {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number"
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Ojbect.values(req.body)

            con.execute(
                `UPDATE ${table}
                    SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if (!error) {
                        res.send(`Changed ${dbres.changedRows} rows(s)`)
                    } else {
                        console.log('DAO ERROR: ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    sort: (req, res, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY b.band;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    } 
                } else {
                    console.log('DAO ERROR: ', error)
                
                }
            }
        )
    }
}

//write specific methods inside of specific/individual daos. Put common daos in the common file

module.exports = bandDao






