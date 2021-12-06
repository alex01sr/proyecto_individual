import React  from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import ActivityView from "./ActivityView"

import axios from 'axios';
import { getCountrySearch} from "../redux/actions"
import styles from "../css/CrearActividad.module.css"

const CrearActividad = (props) =>{
    
    let navigate = useNavigate();
    //creamos estado local con los inputs
    const [state, setState] = useState({
        nombre:"",
        dificultad:"",
        duracion:"",
        temporada:"",
        arraypaises:[],
        arrayNombres:[],
       
    })
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.country)
    //ordenamos los paises para que sea mas comodo para el usuario al momento de agregar una actividad
    React.useEffect(()=>{
        dispatch(getCountrySearch("",["ASC","nombre"]))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    


 
function handleChange(e){
    setState({...state, [e.target.name]: (e.target.name === "duracion")?parseInt(e.target.value):e.target.value})
}
//vamos agregando los paises que le queramos agregar la actividad al estado local
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
    //validamos que todos los campos esten llenos para poder enviar
    if(state.nombre && state.dificultad && state.temporada && state.arraypaises.length > 0){
        
//validamos que el duracion si sea un numero
        if(Number.isInteger(state.duracion) && state.duracion !== 0){
            
            axios.post("http://localhost:3001/activity", state).then(res =>{
                alert(res.data);
                if(res.data === "Actividad creada exitosamente") navigate(`/home`)
               })
       
        }
        else{
            alert("Por favor escriba un numero  en la duracion, el numero tiene que ser mayor que 0")
        }
     


    }else{
        alert("Por favor llene todos los campos ");
    }
    
    
}
    return <div className={styles.back}>
        <div className={styles.botones}>
        
        <div><Link to="/home" ><button className={styles.boton}>Volver</button></Link></div>
        </div>
        <div className={styles.container}>
        <h1>Crear Actividad</h1>
        <div className={styles.div}><Link to="/home/crearactividad/agregaractividad"><button className={styles.boton}>Agregar pais a actividad existente</button></Link></div>
       
        <form className={styles.form}onSubmit={handleSubmit}>
       <div><input className={styles.input} name="nombre" type="text" placeholder="Nombre de la actividad" title="Sin numeros y sin caracteres especiales" pattern="[A-Za-z ]" onChange={handleChange}/></div> 
        

        <div><input  className={styles.inputduracion}name="duracion" type="number" placeholder="Duracion.. Ejm: 2 "  title="Solo numeros enteros mayores de 0" pattern="[0-1000]" onChange={handleChange}/> Horas</div>
        <div><select className={styles.input} name="temporada" onChange={handleChange}>

            <option value="">Temporada</option>
            <option value="Verano">Verano</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
         
        </select></div>


        <div><select className={styles.input} name="dificultad" onChange={handleChange}>
            <option value="">Dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select></div>
       <div> 
           <h4 className={styles.agregarPaises}>Agregar paises que realizan la actividad puedes agregar 1 o más</h4>
          
           <select  className={styles.inputPaises} name="paises" onChange={handleArrayCountries}>
            <option value={"-"}>Seleccionar:</option>
            {countries?.map((element,index) =>{
            return <option key={index} value={`${element.id}-${element.nombre}`}>{element.nombre}</option>})}
            </select>
            
        </div>
                
                
        <button className={styles.boton}>Enviar</button>

        </form>
        </div>
        <h4 className={styles.paisesEsc}>Paises que se escogieron:</h4>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"row" , flexWrap:"wrap"}}>
        {state.arrayNombres?.map((element, index)=>{
                    return <ActivityView key={index} id={element[0]}nombre={element[1]} func={deleleChange}/>


                })}
        </div>
        
    

        <div>{state.msg}</div>
    </div>
}

export default CrearActividad;