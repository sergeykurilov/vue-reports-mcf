const express = require('express')
const app = require('express')();


/*
 *  Serve /dist/ folder
 */
app.use(express.static(__dirname + '/dist'))
app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})
