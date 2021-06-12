
function añadirElementos(params = { }){
    const template= document.querySelector("#servicios-template");
const contenedor=document.querySelector(".columna-servicios");
 template.content.querySelector(".subtitulos-h3").textContent=params.titulo;
 template.content.querySelector(".parrafos-mis-servicios").textContent=params.descripcion;

const clone= document.importNode(template.content , true)
contenedor.appendChild(clone)
console.log(template)


}

function traerElementos(){
    return fetch( "  https://cdn.contentful.com/spaces/0q692q1cfe6h/environments/master/entries?access_token=VlgYpjdWI8YUg5Mthuwkb-HuPbcBKUuvvLtEl0W-wew&content_type=servicios")
    
    
   
    .then(res=>{
        return res.json();
    }).then(obj=>
        {
            for (const key of obj.items) {
                console.log(key)    
                let obj1={
                    titulo:key.fields.servicios,
                    descripcion:key.fields.descripcionDelSercivio
                }
                  console.log("antes de salir",obj1)
                 añadirElementos(obj1)

                }
            

        

        })

}


function main(){
footerComponent(document.querySelector(".footer-container")) ;
contactoComponent(document.querySelector(".contacto-container"));
headerComponent(document.querySelector(".header-main"))

traerElementos()
abrirCerrarVentanas();
contactoSubmit();



}


main();

