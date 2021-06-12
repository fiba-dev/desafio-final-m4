function headerComponent(el){
    const componentEl= document.createElement("div")
    componentEl.innerHTML=`  
    <div class="ventana"> 
        <button class="boton__cerrar">X</button>
        <div class="ventana__vinculos"> 
            <a href="../portfolio/portfolio.html" class="ventana__label">Portfolio</a>
            <a href="#servicios"class="ventana__label">Servicios</a>
            <a href="../escribime/contacto.html"class="ventana__label">Escribime</a></div>
      
      </div>
 <header class="header" >  
 <div class="inicio">
<a href="../index.html"> <img src="./imagenes/icon.jpg" class="header__logo"></a>
<a href="../index.html" class="header__incio">Inicio</a>
</div>
 
   <div class="header__vinculos"> 
     <button class="header__menu-button">Menu</button>
     <a href="./portfolio/portfolio.html" class="header__label">Portfolio</a>
     <a href="./escribime/contacto.html"class="header__label">Escribime</a>
     <a href="#servicios"class="header__label">Servicios</a>
    </div>
 

</header>

 
 

</div>

`;
    
    el.appendChild(componentEl)
    
    }
    function abrirCerrarVentanas(){
        const abrirVentanaEl= document.querySelector(".header__menu-button")
        const cerrarVentanaEl=document.querySelector(".boton__cerrar")
        const ventana= document.querySelector(".ventana")
        abrirVentanaEl.addEventListener("click", () =>{
           ventana.style.display="inherit";
        })
        cerrarVentanaEl.addEventListener("click",()=>{
            ventana.style.display="none";
        })
      }