import React  from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import ActivityView from "./ActivityView"
import Buscador from "./Buscador"
import Ordenar from "./Ordenar"
import axios from 'axios';
import { getCountrySearch, setpaisSatus } from "../redux/actions"

const CrearActividad = (props) =>{

    const [state, setState] = useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        arraypaises:[],
        arrayNombres:[]
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
    if(!state.arraypaises.includes(arr[0]) && arr[0] != ""){
        
        setState({...state, arraypaises: state.arraypaises.concat(arr[0]), arrayNombres: state.arrayNombres.concat([arr])})
       
    }

}
function deleleChange(e){

    setState({...state, arraypaises: state.arraypaises.filter((element)=>  element !== e),  arrayNombres: state.arrayNombres.filter((element)=>  element[0] !== e)})
console.log("ah perro"+e)
}

 function  handleSubmit  (event) {
    event.preventDefault();
    axios.post("http://localhost:3001/activity", state).then(res =>{console.log(res.data)})
    
}
    return <div>
        <div><Link to="/home/crearactividad/agregaractividad">Agregar pais a actividad existente</Link></div>
        <div><Link to="/home" >Volver</Link></div>
 
        <h1>Crear Actividad</h1>
   
       
        <form onSubmit={handleSubmit}>
       <div><input name="nombre"placeholder="Nombre de la actividad" onChange={handleChange}/></div> 
        <div><select name="dificultad" onChange={handleChange}>
            <option>Dificultad</option>
            <option>Facil</option>
            <option>Intermedio</option>
            <option>Dificil</option>
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
        {state.arrayNombres?.map((element)=>{
                    return <ActivityView id={element[0]}nombre={element[1]} func={deleleChange}/>


                })}
    

        
    </div>
}

export default CrearActividad;