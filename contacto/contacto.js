function contactoComponent(el){
   const contactoEl = document.createElement("div");
   contactoEl.innerHTML=`
   <div class="form"> 
            <h2 id="escribime" class="subtitulos">Escribime</h2>
            <div class="tabla-formulario">  
        <div class="div-form"> <label id="nombre" class="tags-form">NOMBRE</label>
            <input id="nombre" class="ingresar-nombre" type="text"></div>
            <div class="div-form">  <label id="email" class="tags-form">EMAIL</label>
                <input id="email" class="ingresar-email" type="email"></div>
            
             <div class="div-form">  <label id="mensaje" class="tags-form">MENSAJE</label>
                <input id="mensaje" class="ingresar-mensaje" type="text"></div>
             
             <button class="boton-enviar">Enviar</button>
            </div>
        </div>
   
   
   
   `;
   el.appendChild(contactoEl)






}
function main(){
//  contactoComponent(document.querySelector(".contacto-contenedor"))

}
main();