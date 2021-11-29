import React  from "react"
import { Link } from "react-router-dom"

const Activity = (props) =>{
const {nombre,duracion,temporada,dificultad} = props.arg
    return <div>
        <h3>Nombre: {nombre}</h3>
        <h3>Duracion: {duracion} horas</h3>
        <h3>Temporada: {temporada}</h3>
        <h3>Dificultad: {dificultad}</h3>
        <h3>-------------</h3>
      
   
        
    </div>
}

export default Activity