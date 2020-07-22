import React,{useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
  //State para Presupuesto
  const [presupuesto, guardarPresupuesto] =useState(0); 
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta]= useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto]= useState(false);

  //UseEffect Actualiza el restante
  useEffect(()=>{
    if(creargasto)
    {
      //Agregar nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto])
        guardarCrearGasto(false)
        //Resta del presupuesto
      const presupestoRestante = restante - gasto.cantidad;
      guardarRestante(presupestoRestante); 
    }
    
  },[gasto]);


  return (
    <div className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
        {/* Carga Condicional */}
        {mostrarpregunta ? 
        (
          // Cargar Componente si mostrarpregunta es true
        <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
        />) 
        :
        (
          <div className="row">
          <div className="one-half column">
            {/* Formulario de Ingreso */}
            <Formulario
            guardarGasto={guardarGasto}
            guardarCrearGasto={guardarCrearGasto}
            />
          </div>
          <div className="one-half column">
            {/* Listado de Gastos */}
            <Listado
            gastos={gastos}
            />
            <ControlPresupuesto
            presupuesto={presupuesto}
            restante={restante} 
            />
          </div>
        </div>
        )}
      </div>
    </div>
   
  ); 
}

export default App;
