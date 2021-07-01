


const express = require('express')
const path = require('path');
const { routePath, viewPaths } = require('./constant/routesPaths');


const app = express();
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

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log('Server is running s on port: ' + port)
});
