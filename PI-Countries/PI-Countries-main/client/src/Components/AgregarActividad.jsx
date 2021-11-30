import { useState } from "react"
import React  from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link,useNavigate } from "react-router-dom"
import ActivityView from "./ActivityView"
import axios from 'axios';
import { getActivity } from "../redux/actions"

const AgregarActividad = (props) =>{
    const [state, setState] = useState({
        paisesAgregar:[],
        arrayNombres:[],
        actividad:""
    })
    const countries = useSelector((state)=> state.country)
    const activities = useSelector((state)=> state.activity)
    let navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getActivity())
        

    },[])

    function handleArrayCountries(e){
        let arr = e.target.value.split("-")
        if(!state.paisesAgregar.includes(arr[0]) && arr[0] !== ""){
            
            setState({...state, paisesAgregar: state.paisesAgregar.concat(arr[0]), arrayNombres: state.arrayNombres.concat([arr])})
           
        }
    
    }

    function handleChange(e){

        setState({...state, actividad: e.target.value})
    }
    function deleleChange(e){

        setState({...state, paisesAgregar: state.paisesAgregar.filter((element)=>  element !== e),  arrayNombres: state.arrayNombres.filter((element)=>  element[0] !== e)})

    }

    function  handleSubmit  (event) {
        event.preventDefault();

        if(state.paisesAgregar.length > 0 & state.actividad !== ""){
            axios.post("http://localhost:3001/activity", state).then(res =>{
            alert(res.data);
      
            if(res.data === "Se agregaron los paises a la actividad seleccionada") navigate(`/home`)})
}
            
        else{ alert("Error, por favor seleccione un pais y una actividad")}
      
        
    }

    return <div>
       
       
        <div><Link to="/home/crearactividad" >Volver</Link></div>
        <select name="paises" onChange={handleArrayCountries}>
            <option value={"-"}>Seleccionar paises:</option>
            {countries?.map((element,index) =>{
            return <option key={index} value={`${element.id}-${element.nombre}`}>{element.nombre}</option>})}
            </select>
            <select name="actividades" onChange={handleChange}>
            <option value={""}>Seleccionar actividad:</option>
            {activities?.map((element,index) =>{
            return <option key={index} value={`${element.id}-${element.nombre}`}>{element.nombre}</option>})}
            </select>
      
        <div>
        <h3>La actividad {state.actividad} se agregara a los </h3>
        <h3>Paises:</h3>
                 {state.arrayNombres?.map((element, index)=>{
                    return <ActivityView  key={index}id={element[0]}nombre={element[1]} func={deleleChange}/>
                })}
       
                <div><form onSubmit={handleSubmit}><button>Agregar</button></form></div>
        </div>
    </div>
}

export default AgregarActividad