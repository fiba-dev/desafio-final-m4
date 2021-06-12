function main(){

    function añadirElementos(params = { }){
        const template= document.querySelector("#servicios-template");
        console.log("params asi llega",template)
    const contenedor=document.querySelector(".portfolio-trabajos");
     template.content.querySelector(".subtitulos-h3").textContent=params.titulo;
     template.content.querySelector(".parrafos-mis-servicios").textContent=params.descripcion;
     template.content.querySelector(".imagen-pantalla").src=params.img;
    
    const clone= document.importNode(template.content , true)
    contenedor.appendChild(clone)
    console.log(template)
    
    
    }

function getCard()
{  return fetch("https://cdn.contentful.com/spaces/0q692q1cfe6h/environments/master/entries?access_token=VlgYpjdWI8YUg5Mthuwkb-HuPbcBKUuvvLtEl0W-wew&content_type=portfolio")
.then(res=>{
    return res.json();
}).then(obj=>
    {   console.log("esto es obj",obj)
        for (const key of obj.items) 
    {
            let link=""
          obj.includes.Asset.filter((res)=>{
            
        if(res.sys.id==key.fields.imagen.sys.id)
        { 
            console.log("este es el url","https:"+res.fields.file.url)
          link="https:"+res.fields.file.url;
        }});
            console.log("este es key",key)    
            let obj1={
                titulo:key.fields.subtitulo1,
                descripcion:key.fields.descripcion,
                img:link

            }
              console.log("antes de salir",obj1)
             añadirElementos(obj1)

     }
        

    

    })



    

}
headerComponent(document.querySelector(".portfolio__header"));
footerComponent(document.querySelector(".portfolio-footer")) ;
abrirCerrarVentanas();
getCard()
}

main();