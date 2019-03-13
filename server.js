const express = require("express");
const path = require("path")
const htmlRoutes = require("./routing/htmlRoutes")
const apiRoutes = require("./routing/apiRoutes")
const friends = require("./data/friends")
const app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static('public'));

htmlRoutes(app, path)
apiRoutes(app, express, friends)


app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
}) 