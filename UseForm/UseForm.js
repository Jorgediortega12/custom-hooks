import { useState } from 'react';

// creamos el initialForm el cual sera una funcion.
export const UseForm = (initialForm ={}) => {
  
// ese initialForm lo mandamos a nuestro useState. 
// eso quiere decir que el FormState sera igual a cualquier valor que le mandemos como argumento. 
    const [ formstate, setFormstate ] = useState( initialForm ); 

    const onInputChange = ({target}) => {
        const { name, value } = target; 
        setFormstate({
            ...formstate,  
// se debe tener cuidado con el arreglo [] ya que si mandamos una propiedad nueva esta se puede establecer dentro de los componentes como una nueva props.
             
            [ name ]: value 
        }); 
    }

    const onresetForm = () => {
        setFormstate( initialForm ); 
    }

// otra forma seria desestructurar el FormState ya que es donde se llaman todas las demas funciones como lo son,
// el username, email y el password que son los que necesitamos.
    return {
        ...formstate,
        formstate,
        onInputChange,
        onresetForm
    }
}
