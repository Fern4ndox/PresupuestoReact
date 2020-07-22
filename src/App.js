import React,{useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  //State para Presupuesto
  const [presupuesto, guardarPresupuesto] =useState(0); 
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta]= useState(true);
  const [gastos, guardarGastos] = useState([]);

  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }
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
            agregarNuevoGasto={agregarNuevoGasto}
            />
          </div>
          <div className="one-half column">
            {/* Listado de Gastos */}
            <Listado
            gastos={gastos}
            />
          </div>
        </div>
        )}
      </div>
    </div>
   
  ); 
}

export default App;
