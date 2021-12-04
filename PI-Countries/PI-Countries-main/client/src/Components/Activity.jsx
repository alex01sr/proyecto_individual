import React  from "react"
import styles from "../css/CountryDetail.module.css"

const Activity = (props) =>{
const {nombre,duracion,temporada,dificultad} = props.arg
//se muestra en el detalle de cada pais
    return <div className={styles.cardActivity}>
        <h3>Nombre: {nombre}</h3>
        <h3>Duracion: {duracion} horas</h3>
        <h3>Temporada: {temporada}</h3>
        <h3>Dificultad: {dificultad}</h3>

   </div>
}

export default Activity