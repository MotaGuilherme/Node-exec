var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("cd2");
})

app.get("/sob", function(req, res){
    res.send("minha pag");
})

app.get("/blog", function(req, res){
    res.send("welcome");
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>ola " + req.params.nome+ "</h1>" + "<h2> seu cargo e: " + req.params.cargo+ "</h2>")
})

app.listen(8008, function(){
    console.log("server rodando");
});