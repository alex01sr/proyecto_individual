import React  from "react"


const ActivityView = (props) =>{

    return <div>
        {props.nombre}
        <button onClick={()=> props.func(props.id)}>X</button>
       
        
    </div>
}

export default ActivityView