function contactoComponent(el){
   const contactoEl = document.createElement("div");
   contactoEl.innerHTML=`
<div class="formulario" > 
            <h2 id="escribime" class="subtitulos">Escribime</h2>
            <form class="form">  
        <div class="form__div"> <label id="nombre" class="form__label">NOMBRE</label>
            <input id="nombre" class="input__nombre" type="text"></div>
            <div class="form__div">  <label id="email" class="form__label">EMAIL</label>
                <input id="email" class="input__email" type="email"></div>
            
             <div class="form__div">  <label id="mensaje" class="form__label">MENSAJE</label>
                <input id="mensaje" class="input__mensaje" type="text"></div>
             
             <button class="form__boton">Enviar</button>
            </form>
        </div>
   
   
   
   `;
   el.appendChild(contactoEl)






}
async function postData(url = '', data = {}) {
    
   const response = await fetch(url, {
     method: 'POST',
     mode: 'cors', 
     cache: 'no-cache', 
     credentials: 'same-origin', 
     headers: {
       'Content-Type': 'application/json'
       
     },
     redirect: 'follow', 
     referrerPolicy: 'no-referrer', 
     body: JSON.stringify(data) 
   });
   return response.json(); 
 }
 
 
   
function contactoSubmit(){
const form =document.querySelector(".form")
console.log("este es el form",form);
form.addEventListener("submit",(res)=>{
     res.preventDefault();
     const form= res.target;
     let nombre=form.nombre.value;
     let email= form.email.value
     let mensaje=form.mensaje.value;
      msj= `Nombre:${nombre} Email:${email} Mensaje:${mensaje}`
     let data= { "to":"fibarrola06@gmail.com",
     "message":msj,}
     console.log(data)
     postData("https://apx-api.vercel.app/api/utils/dwf",data).then(data => {
       console.log(data); // JSON data parsed by `data.json()` call
     });
  
         
        
})
}