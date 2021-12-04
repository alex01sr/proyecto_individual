import { useState } from "react"
import React  from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link,useNavigate } from "react-router-dom"
import ActivityView from "./ActivityView"
import axios from 'axios';
import { getActivity } from "../redux/actions"
import styles from "../css/AgregarActividad.module.css"
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

    //nos traemos las actividades de la base de datos
    React.useEffect(()=>{
        dispatch(getActivity())
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    //si se selecciona un pais se agrega al estado local, arrayNombres es un array auxiliar con la informacion que se muestra al usuario
    function handleArrayCountries(e){
        let arr = e.target.value.split("-")
        if(!state.paisesAgregar.includes(arr[0]) && arr[0] !== ""){
            
            setState({...state, paisesAgregar: state.paisesAgregar.concat(arr[0]), arrayNombres: state.arrayNombres.concat([arr])})
           
        }
    
    }
//al seleccionar una actividad se agrega al estado local
    function handleChange(e){

        setState({...state, actividad: e.target.value})
    }
    //esta funciona elimina el pais que se haya agregado 
    function deleleChange(e){

        setState({...state, paisesAgregar: state.paisesAgregar.filter((element)=>  element !== e),  arrayNombres: state.arrayNombres.filter((element)=>  element[0] !== e)})

    }

    //con handlesubmit enviamos la informacion por body a la base de datos
    function  handleSubmit  (event) {
        event.preventDefault();
//validamos que si este correctamente
        if(state.paisesAgregar.length > 0 & state.actividad !== ""){
            axios.post("http://localhost:3001/activity", state).then(res =>{
            alert(res.data);
      
            if(res.data === "Se agregaron los paises a la actividad seleccionada") navigate(`/home`)})
}
            
        else{ alert("Error, por favor seleccione un pais y una actividad")}
      
        
    }

    return <div className={styles.container}>
       
       
        <div><Link to="/home/crearactividad" ><button className={styles.boton}>Volver</button></Link></div>

        <select  className={styles.input} name="paises" onChange={handleArrayCountries}>
            <option value={"-"}>Seleccionar paises:</option>
            {countries?.map((element,index) =>{
            return <option key={index} value={`${element.id}-${element.nombre}`}>{element.nombre}</option>})}
        </select>

        <select className={styles.input} name="actividades" onChange={handleChange}>
            <option value={""}>Seleccionar actividad:</option>
            {activities?.map((element,index) =>{
            return <option key={index} value={`${element.id}-${element.nombre}`}>{element.nombre}</option>})}
        </select>
      
        <div>
            <h3 className={styles.actMostrar}>La actividad {state.actividad} se agregara a los </h3>
            <h3 className={styles.actMostrar}>Paises:</h3>

               <div style={{display:"flex", justifyContent:"center", flexDirection:"row" , flexWrap:"wrap"}}>
                    {state.arrayNombres?.map((element, index)=>{
                    return <ActivityView key={index} id={element[0]}nombre={element[1]} func={deleleChange}/>})}
        </div>

        <div><form onSubmit={handleSubmit}><button className={styles.boton}>Agregar</button></form></div>
        </div>
    </div>
}

export default AgregarActividad