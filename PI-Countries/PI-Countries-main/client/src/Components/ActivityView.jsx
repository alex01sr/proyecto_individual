import React  from "react"
import { Link } from "react-router-dom"

const ActivityView = (props) =>{

    return <div>
        {props.nombre}
        <button onClick={()=> props.func(props.id)}>X</button>
       
        
    </div>
}

export default ActivityView