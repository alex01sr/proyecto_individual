import React  from "react"

import {  getActivity, getCountrySearch } from "../redux/actions"
import {useDispatch, useSelector } from "react-redux";
import Country from "./Country";
import Pagination from "./Pagination";


const Home = (props) =>{
   //traemos los dos estados globales
    

   const {country,order,pais,filterArray,pagination } = useSelector((state)=> state)
   const dispatch = useDispatch() 
  
//creamos un estado local
    const[state, setState] = React.useState({
        arrayState: [],
        
    })

    //al crear el componente llamar getallcountries y get firstcountries
    React.useEffect(()=>{
       dispatch(getCountrySearch(pais,order))
       dispatch(getActivity());},[]);
       

    React.useEffect(()=>{
        let countryfilter
   /* cada vez que cambie countries ejecutamos este codigo para hacer la division de los array y la proxima paginacion */

    /* let countryfilter =(filterArray.length > 0)?country?.filter((element) => filterArray.includes(element.continente)):country;
 */

    if(filterArray.length > 0){
       countryfilter= country?.filter(element=>{
            if(filterArray.includes(element.continente)){
                return true;

            }
            for(let act of element.activities){
                if(filterArray.includes(act.nombre)){
                    return true;
                }
            }})

     


    }else{

    countryfilter= country;
    }


    paginado(countryfilter)
      
    },[country,filterArray])

 function paginado(array){
           
            
             let aux = []
            let div = 9; 
            let arrayState =[]
            for(let i = 0; i < array.length;i++){
                if(aux.length < div ){
                    aux.push(array[i])
                }
                if(aux.length === div){
                    arrayState.push(aux)
                    aux = [];
                    div = 10;
                }
            }
            arrayState.push(aux);
            setState({...state, arrayState})
    }

     
    return <div>
                 <div  style={{display: "flex", flexWrap:"wrap"}}>
                        {/* renderizamos los paises segun la pagina */}
                    {state.arrayState[pagination?pagination:0]?.map((countrie)=>{
                            return  <Country key={countrie.id}
                                            nombre={countrie.nombre}
                                            flag={countrie.flag}
                                            id={countrie.id}
                                            continente={countrie.continente}
                                            />})} 

                </div>
     
                <div style={{display: "flex", justifyContent: "center", flexWrap:"wrap"}}>

                    {/* con este map creamos los elementos de pagination y le pasamos un argumento con el numero del array  */}
                    {<Pagination num={0} name="Inicio"/>}
                     {state.arrayState?.map((element, index)=>{
                            if(index >pagination-2 && index <= pagination+2){
                            return <Pagination key={index}num={index}/>}
                            return ""
                            })}

                    {<Pagination num={state.arrayState.length-1} name="Final"/>}
                </div>
            </div>
}




export default Home