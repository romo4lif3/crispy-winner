var express = require("express");
var mongoose = require("mongoose")
var expressHandlebars = require("express-handlebars")
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 3030;
var app = express();
var router = express.Router();

require("./config/routes")(router)

app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));
app.engine("handlebars", expressHandlebars({
    defaultLayout:"main"
}));

app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongHeadlines";

mongoose.connect(db, function(error){
    if(error){
        console.log(broke);
    }
    else{
    console.log("it werks!!!")
    }
})

app.listen(PORT, function(){
    console.log("Listening on port:" + PORT)
});