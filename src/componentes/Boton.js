import React from "react";
//se importa el stilo del componente
import '../styles/Boton.css';
//Desestructuración
function Boton({texto,esBotonDeClic,manejarClic}){
    return(
      <button className={esBotonDeClic? "boton-clic" :"boton-reiniciar"}
      onClick={manejarClic}>
        {texto}
      </button>
    );
}
export default Boton;