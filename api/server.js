/* eslint-disable no-unused-vars */
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const server = express()


server.use(express.static(path.join(__dirname, '../client/build')))
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;