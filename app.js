


const express = require('express')
const path = require('path');
const { routePath, viewPaths } = require('./constant/routesPaths');


const app = express()
const port = 3000
console.log(__dirname + '/public')
app.use(express.static(__dirname + '/public'));

app.get(routePath.home, (req, res) => {
    res.sendFile(__dirname+viewPaths.home)
});

app.get(routePath.about, (req, res) => {
    res.sendFile(__dirname+viewPaths.about)
});

app.get(routePath.product, (req, res) => {
    res.sendFile(__dirname+viewPaths.products)
});

app.get(routePath.store, (req, res) => {
    res.sendFile(__dirname+viewPaths.store)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
