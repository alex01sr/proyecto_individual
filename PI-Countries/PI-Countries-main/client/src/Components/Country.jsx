import React  from "react"
import { Link } from "react-router-dom";


const Country = ({id, nombre, flag,continente}) =>{

    return (<div>
        <Link to={`/home/${id}`}> 
        <img src={flag} alt="bandera"/></Link>
        <h2>{nombre}</h2>
        <h3>{continente}</h3>
        <Link to={`/home/${id}`}>  <button>Detalles</button></Link>


        
    </div>)
};

export default Country