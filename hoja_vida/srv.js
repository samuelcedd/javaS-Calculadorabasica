const express = require("express");
const path = require('path')
var app = express();

const routes = require('.view/index');

app.set('port',process.env.PORT|| 5000);
//configuraciones
//app.use(express.static(__dirname+"./static"));
app.set("view engine", "pug");
app.set("views", "./view");

app.get("/index", (req,resp)=>{
    resp.send("Mi HOJA DE VIDA");
});

app.get("/estudios",(req,resp)=>{
    resp.render("estudios");
});
app.get("/proyecto",(req,resp)=>{
    resp.render("proyecto");
});
app.get("/experencia",(req,resp)=>{
    resp.render("experencia");
});
app.get("/formulario",(req,resp)=>{
    resp.render("formulario");
});
app.get("/habilidades_profecionales",(req,resp)=>{
    resp.render("habilidades_profecionales");
});
app.get("/index",(req,resp)=>{
    resp.render("index");
});
app.get("/habilidades_blandas",(req,resp)=>{
    resp.render("habilidades_blandas");
});

app.use(rautes);

app.listen(5000);



