import React  from "react"

import {  getActivity, getCountryDetail, getCountrySearch } from "../redux/actions"
import {useDispatch, useSelector } from "react-redux";
import Country from "./Country";

import RenderPaginado from "./RenderPaginado"
import styles from "../css/Country.module.css"

const Home = (props) =>{
   //traemos los dos estados globales
    

   const {country,order,pais,filterArray,pagination,filterArrayActivity } = useSelector((state)=> state)
   const dispatch = useDispatch() 
  
//creamos un estado local
    const[state, setState] = React.useState({
        arrayState: [],
        
    })

    //al crear el componente limpiar los estados globales y hacer la llamda a la api rest con getcountrysearch
    React.useEffect(()=>{
       
    dispatch((getCountryDetail("c")))
       dispatch(getCountrySearch(pais,order))
        // eslint-disable-next-line react-hooks/exhaustive-deps
       dispatch(getActivity(""));},[]);
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
  

    React.useEffect(()=>{
        let countryfilter
        
   /* cada vez que cambie countries ejecutamos este codigo para hacer los respectivos filtrados y el paginado */

 
    if(filterArray.length > 0 && filterArrayActivity.length >0){
       countryfilter= country?.filter(element=>( filterArray.includes(element.continente) ));
               
        countryfilter = countryfilter?.filter(element=>{
            if(element.activities){
                for(let act of element.activities){
                    if(filterArrayActivity.includes(act.nombre)){
                        return true;
                    }
                }
            }
               
                return false;   
            });

        
    }else if(filterArray.length > 0){
        countryfilter= country?.filter(element=>( filterArray.includes(element.continente) ));

    }else if(filterArrayActivity.length >0){
        countryfilter = country?.filter(element=>{
            if(element.activities){
                for(let act of element.activities){
                    if(filterArrayActivity.includes(act.nombre)){
                        return true;
                    }
                }
            }


            return false;  
            })

    }else{

    countryfilter= country;
    }


    paginado(countryfilter)
     // eslint-disable-next-line react-hooks/exhaustive-deps
      
    },[country,filterArray,filterArrayActivity])

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

     
    return <div  className={styles.back}>
                 <div  style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
                        {/* renderizamos los paises segun la pagina que se indique en el estado global */}
                    {state.arrayState[pagination?pagination:0]?.map((countrie)=>{
                            return  <Country key={countrie.id}
                                            nombre={countrie.nombre}
                                            flag={countrie.flag}
                                            id={countrie.id}
                                            continente={countrie.continente}
                                            />})} 
                    
                
     
              
</div>
                    {/* con este map creamos los elementos de pagination y le pasamos un argumento con el numero del array  */}
                 
                    <RenderPaginado  array={state.arrayState}/>
                
                
            </div>
}




export default Home