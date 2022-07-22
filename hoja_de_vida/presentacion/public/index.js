const url = require("url");

//LISTA 
let srv = http.createServer(index).listen(5000);
let index;
let habilidades;
let habilidadesfro;
let proyectos;
let expelavo;
let estudios;
let formulario;

let srv = http.createServer(
    (req,resp)=>{
        //peticiones
        let protocolo = "https://";
        let hst = req.headers.host;
        let baseurl = protocolo+hst+"/";
        let myurl = new URL(req.url, baseurl);
        let ruta = "./static"+myurl.pathname;
        console.log(ruta);
        //respuestas
        if(ruta==="./static/"){
            ruta = "./static/index.html";
        }else if (ruta==="./static/login"){
            let name = myurl.searchParams.get("name");
            resp.write(`<p>bienvenido ${name}</p>`);
            resp.end();

            //innerhtml -> document.getElementById("nombreelemento").innerHTML = `${nombre} ` --> fs.writefile


        }
        fs.stat(ruta,(err)=>{
            if(err){
                ruta = "./static/error.html";
                fs.readFile(ruta,(err,data)=>{
                    resp.write(data);
                    resp.end();
                });
            }else{
                fs.readFile(ruta,(err,data)=>{
                    resp.write(data);
                    resp.end();
                });
            }
        });
    }
).listen(5000);