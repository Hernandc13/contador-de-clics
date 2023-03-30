import logofreecode from './imagenes/FreeCode.png';
import './App.css';
//Se importa al componente
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

//Hooks funciones especiales
//UseState: más cumun se utiliza es estado de un componente
//en especifico
function App() {
  //UseState:
  const [numClics,setNumClics]=useState(0);
  //Función de flecha
  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () =>{
   setNumClics(0);
  }
  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo' 
      src={logofreecode} 
      alt="Logo de freecodecamp" />
     </div>
     <div className='contenedor-principal'>
     <Contador numClics={numClics}/>
     <Boton
     texto="Clic"
     esBotonDeClic={true}
     //La funcion se pasa mediante llaves.
     manejarClic={manejarClic}
     />
      <Boton
     texto="Reiniciar"
     esBotonDeClic={false}
     manejarClic={reiniciarContador}
     />
     </div>
    </div>
  );
}

export default App;
