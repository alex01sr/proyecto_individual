import React  from "react"


const Country = ({id, nombre, flag,continente}) =>{

    return (<div>
        
        <img src={flag} alt="bandera"/>
        <h2>{nombre}</h2>
        <h3>{continente}</h3>


        
    </div>)
};

export default Country