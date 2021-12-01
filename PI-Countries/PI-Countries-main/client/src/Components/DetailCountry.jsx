import React  from "react"
import { Link, useParams} from "react-router-dom"
import {useDispatch, useSelector } from "react-redux";
import {  getCountryDetail } from "../redux/actions";
import Activity from "./Activity";
import styles from "../css/CountryDetail.module.css"
const DetailCountry = (props) =>{
    let params = useParams();
     const dispatch = useDispatch()
    const detail = useSelector((state) => state.countryDetail)
    
    const {id,flag,nombre,continente,subregion,area,poblacion,capital, activities} = detail
    React.useEffect(()=>{
        
        dispatch(getCountryDetail(params.id))
    },[])

  

    return <div >
        <Link to="/home">
            <button className={styles.boton}>VOLVER</button></Link>
                <div className={styles.container} style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                    <div className={styles.contenido2}>
                        
                        <img className={styles.flag}src={flag} alt="flag"/>
                         <h1 className={styles.nombre}>{nombre}</h1>
                  
                         </div>
                        <div className={styles.contenido}>
                          <h1>Id: {id}</h1>
                         <h1>Continente: {continente}</h1>
                         <h1>Subregion: {subregion}</h1>
                            <h1>Area: {area} km2</h1>
                            <h1>Poblacion: {poblacion} </h1>
                            <h1>Capital: {capital}</h1>
                        </div>
                </div>

                <div className={styles.actividad} style={{flexDirection:"column"}}>
                    <div><h1 className={styles.act}>ACTIVIDADES TURISTICAS QUE SE REALIZAN:</h1></div>
                    <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                    {activities?.map((element)=>{
                        return <Activity arg={element}/>})}
                    </div>
                    <Link to="/home"><button className={styles.boton}>VOLVER</button></Link>
                </div>
                
               
        </div>      
}

export default DetailCountry