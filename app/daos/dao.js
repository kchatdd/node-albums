//this where all of the daos will meet
const daoCommon = require('./common/daoCommon')

/**
daoCommon is an object
daoCommon = { findAll(), findById(), countAll()}
artistDao = { table, getInfo(), create(), update(), sort()}

for each one the spread gives the method separated by commas lacking the curly braces that we normally see in objects

Once they are out of the curly braces they can be "moved" into a new object

resulting in....
artistDao = {findAll(), findById(), countAll(), table, getInfo(), create(), update(), sort() }
so that all of the content can be accessed

This document will be updated as more daos are created
 */
const artistDao = {
    ...daoCommon,
    ...require('./api/artistDao')
}

module.exports = {
    artistDao
}