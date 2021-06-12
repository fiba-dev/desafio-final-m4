function footerComponent(el){
const componentEl= document.createElement("div")
componentEl.innerHTML=` <footer class="footer" id="footer"> 

<div class="footer__logo" > 
  <a  href="#start"> <img src="http://images.ctfassets.net/0q692q1cfe6h/1H7Lo7QUrEphJ2wkqUYhbG/6ec54729a6251b09ffa71cbeae9628d3/icon-black.jpg" class="footer__logo__img"></a> 
  <label class="footer__logo__label">  © 2021 Fran</label>
</div>

<div class="footer__redes-sociales">
    <div class="redes-sociales__div" >
      <img src="https://images.ctfassets.net/0q692q1cfe6h/1S5STJLsR99k63C7QsikWZ/8325d2eab3429e40fb3c73ebc2f38316/instagram.png">
     <a href="https://www.instagram.com/ibarrolafran06/" class="redes-sociales__link">Instagram</a>
     
    </div>
    <div class="redes-sociales__div"> 
        <img src="http://images.ctfassets.net/0q692q1cfe6h/FHS1Z7VWB866DHg1319Nn/385ab8693896904d33cb2917262e9540/Linkedin.png">
     <a href="https://www.linkedin.com/in/fran-ibarrola-2111271bb/" class="redes-sociales__link">Linkedin</a>
    </div>
    <div class="redes-sociales__div"> 
        <img src="https://images.ctfassets.net/0q692q1cfe6h/5RKGiLuIuUjOdpERtMSlfd/355c95b9804327f7f2bbdbdedbe9c912/Github.png">
      <a href="https://github.com/fiba-dev" class="redes-sociales__link">Github</a>  
    </div>

</div>
</footer>`;

el.appendChild(componentEl)

}