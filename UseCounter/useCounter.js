import { useState } from "react"




export const useCounter = ( initialValue = 10) => {

    const [counter, setcounter] = useState( initialValue ) 

    const increment = ( value = 1) => { 
        setcounter( (current) => current + value);
    }
    // llamamos el counter y le damos el valor de -1 para restar y cambiar nuestro estado.
    const decrement = ( value = 1) => {

        //if( counter === 0) return; 
        setcounter( (current) => current - value ); 
    }
    // en este caso como queremos que nuestro estado vuelva a su estado original le mandamos el initialValue que contiene nuestro valor por defecto.
    const reset = () => {
        setcounter(  initialValue ); 
    }


// se puede retornar como un {} arreglo o como un objeto []. pero es mucho mejor como un objeto {} ya que es mas facil devolver lo que uno quiere
// aqui mandamos a llamar a todos nuestros componentes los cuales seran llamados en el counterWithCustom. 
  return {
    counter, 
    increment, 
    decrement, 
    reset, 
   
  }
  
}

