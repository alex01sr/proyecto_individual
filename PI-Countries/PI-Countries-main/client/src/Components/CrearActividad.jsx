import React  from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ActivityView from "./ActivityView"

import axios from 'axios';
import { getCountrySearch} from "../redux/actions"

const CrearActividad = (props) =>{

    let navigate = useNavigate();
    const [state, setState] = useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        arraypaises:[],
        arrayNombres:[],
        msg:""
    })
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.country)
    React.useEffect(()=>{
        dispatch(getCountrySearch("",["",""]))},[])
    


 
function handleChange(e){
    setState({...state, [e.target.name]: e.target.value})
}
function handleArrayCountries(e){
    let arr = e.target.value.split("-")
    if(!state.arraypaises.includes(arr[0]) && arr[0] !== ""){
        
        setState({...state, arraypaises: state.arraypaises.concat(arr[0]), arrayNombres: state.arrayNombres.concat([arr])})
       
    }

}
function deleleChange(e){

    setState({...state, arraypaises: state.arraypaises.filter((element)=>  element !== e),  arrayNombres: state.arrayNombres.filter((element)=>  element[0] !== e)})

}

 function  handleSubmit  (event) {
    event.preventDefault();
    if(state.nombre && state.dificultad&& state.duracion && state.temporada && state.arraypaises.length > 0){
        axios.post("http://localhost:3001/activity", state).then(res =>{
         alert(res.data);
         if(res.data === "Actividad creada exitosamente") navigate(`/home`)
  })

    }else{
        alert("Por favor llene todos los campos ");
    }
    
    
}
    return <div>
        <div><Link to="/home/crearactividad/agregaractividad">Agregar pais a actividad existente</Link></div>
        <div><Link to="/home" >Volver</Link></div>
 
        <h1>Crear Actividad</h1>
   
       
        <form onSubmit={handleSubmit}>
       <div><input name="nombre"placeholder="Nombre de la actividad" onChange={handleChange}/></div> 
        <div><select name="dificultad" onChange={handleChange}>
            <option>Dificultad</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select></div>
        <div><input name="duracion" placeholder="duracion " onChange={handleChange}/> horas</div>
        <div><input name="temporada" placeholder="Temporada.. " onChange={handleChange}/> </div>
       <div> 
           <h4>Agregar paises que realizan la actividad puedes agregar 1 o más</h4>
           <select name="paises" onChange={handleArrayCountries}>
            <option value={"-"}>Seleccionar:</option>
            {countries?.map((element,index) =>{
            return <option key={index} value={`${element.id}-${element.nombre}`}>{element.nombre}</option>})}
            </select>
            
        </div>

                
        <button>Enviar</button>

        </form>
        <h4>Paises que se escogieron</h4>
        {state.arrayNombres?.map((element, index)=>{
                    return <ActivityView key={index} id={element[0]}nombre={element[1]} func={deleleChange}/>


                })}
    

        <div>{state.msg}</div>
    </div>
}

export default CrearActividad;