let $ = require('jquery');
let fs = require('fs');


let filename = "formulario.xtx";
let numero = 0;

$('#addcontact').on('click',()=>{

    let nombre = $('#txtNombre').val();
    let correo = $('#txtCorreo').val();
    fs.appendFileSync(filename,nombre+','+correo+'\n');

    addContact(nombre,correo);
});

function addContact(nombre,correo){
     if(nombre && correo){
         numero++;
         let esturaHtml = `<tr>
                            <td>${numero}</td>
                            <td>${nombre}</td>
                            <td>${correo}</td>
                            </tr>`;

           $("#contacto-tabla").append(esturaHtml);                 
     }

}

function loadContactos(){

    if(fs.existsSync(filename)){
        let data = fs.readFileSync(filename,'utf-8').split('\n');

        data.forEach((contacto,formulario)=>{

            let [nombrev,correov] = contacto.split(',');
            addContact(nombrev,correov);
        });
        
        }else {
            fs.writeFile(filename,'',(err)=>{
                if(err)
                console.log(err);
            });
        }

    }

    loadContactos();