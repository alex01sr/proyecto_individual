import React  from "react"
import { Link } from "react-router-dom";
import styles from "../css/Country.module.css"

const Country = ({id, nombre, flag,continente}) =>{
//es la card que se mostrara en el listado de paises
    return <div className={styles.container}>
        
        <Link to={`/home/${id}`}> 
        <img className={styles.img} src={flag} alt="bandera"/></Link>
        <h1 className={styles.nombre}>{nombre}</h1>
        <h3 className={styles.continente}>{continente}</h3>
        <Link to={`/home/${id}`}>  <button className={styles.boton}>Detalles</button></Link>
        </div>

        
   
};

export default Country