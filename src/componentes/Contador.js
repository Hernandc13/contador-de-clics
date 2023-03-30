import React from "react";
import '../styles/Contador.css';
//Desestructuración
function Contador({ numClics }){
  return(
    <div className="contador">
      {numClics}
    </div>
  );
}
export default Contador;