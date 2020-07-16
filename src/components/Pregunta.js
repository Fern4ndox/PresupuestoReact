import React,{Fragment, useState} from 'react';

const Pregunta = () => {
    //State Error
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError]=useState(false);
    //Función lee presupuesto
    const definirPresupuesto =e=>{
        guardarCantidad(parseInt(e.target.value, 10))
    }
    //Submit Presupuesto
    const agregarPresupuesto =e=>{
        e.preventDefault();
         //Validación
         if(cantidad<1 || isNaN(cantidad))
         {
             guardarError(true)
             return;
         }

         guardarError(false)
    }
    return(<Fragment>
        <h2>Coloca tu presupuesto</h2>

        <form
        onSubmit={agregarPresupuesto}
        >    
            <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
            />
            <input
            type="submit"
            className="buton-primary u-full-width"
            value="Definir presupuesto"/>
        </form>
        </Fragment>
        )
}
 
export default Pregunta;
