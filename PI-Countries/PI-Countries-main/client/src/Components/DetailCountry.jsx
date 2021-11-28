import React  from "react"
import { Link, useParams} from "react-router-dom"
import {useDispatch, useSelector } from "react-redux";
import { deleteFilter, getCountryDetail, setOrderSatus } from "../redux/actions";
const DetailCountry = (props) =>{
    let params = useParams();
     const dispatch = useDispatch()
    const detail = useSelector((state) => state.countryDetail)
    const order = useSelector((state) => state.order)
    const filter = useSelector((state) => state.filterArray)
    const {id,flag,nombre,continente,subregion,area,poblacion,capital, activities} = detail
    React.useEffect(()=>{
        
        dispatch(getCountryDetail(params.id))
    },[])


    return <div>
        <Link to="/home">VOLVER</Link>
        <img src={flag}/>
        <h1>Nombre: {nombre}</h1>
        <h3>id: {id}</h3>
        <h1>Continente: {continente}</h1>
        <h1>Subregion: {subregion}</h1>
        <h1>Area: {area} km2</h1>
        <h1>Poblacion: {poblacion} km2</h1>
        <h1>Capital: {capital}</h1>

        <button>Vamos tilin {params.id}</button>
        
        
    </div>
}

export default DetailCountry