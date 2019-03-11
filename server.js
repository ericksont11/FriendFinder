const express = require("express");
const path = require("path")
const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes")
const friends = require("./app/data/friends")
const app = express();
var PORT = process.env.PORT || 8080;

htmlRoutes(app, path)
apiRoutes(app, express, friends)


app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`)
}) 