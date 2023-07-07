import { useEffect, useState } from "react";

export const UseFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true, 
        hasError: null
    })

    const getFetch = async() => {

        setstate({
            ...state,
            isLoading: true,    
        }); 

        const resp = await fetch(url); 
        const data = await resp.json(); 

        setstate({
            data,
            isLoading: false, 
            hasError: null
        }); 
    }

// el useEffect permite tener funciones async internamente para tareas pero su callBack lo se puede definir de manera async.
// ya que al utilizar un async dentro del useEffect nos esta regresando una promesa, por lo cual el UseEffect funciona de manera que, 
// estaria esperando una funcion pura. 

    useEffect(() => {
      getFetch(); 
    }, [url])
    
// aqui mandamos a llamar nuestros valores de retorno 
    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError, 
    }; 
}
