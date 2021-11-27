import React  from "react"

import {  getCountrySearch } from "../redux/actions"
import {useDispatch, useSelector } from "react-redux";
import Country from "./Country";
import Pagination from "./Pagination";
import Nav from "./Nav";
import Filter from "./Filter";

const Home = (props) =>{
   //traemos los dos estados globales
    
    const searchCountry = useSelector((state)=> state.country)
    const pag = useSelector((state) => state.pagination)
    const dispatch = useDispatch()
  

//creamos un estado local
    const[state, setState] = React.useState({
        arrayState: [],
        arrayfilter:[]
        
    })
    const pais = useSelector((state) => state.pais)
    const order = useSelector((state) => state.order)
    //al crear el componente llamar getallcountries y get firstcountries
    React.useEffect(()=>{
        
        dispatch(getCountrySearch(pais,order)) 

        },[])
    React.useEffect(()=>{
   /* cada vez que cambie countries ejecutamos este codigo para hacer la division de los array y la proxima paginacion */
  
        paginado(searchCountry)
      
    },[searchCountry])
 
    

    function paginado(array){
           
            let arrayfilter =[]
            for(let element of array){
                if(arrayfilter.includes(element.continente) === false) arrayfilter.push(element.continente)
            }
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
            setState({...state, arrayState, arrayfilter})
    }

     
    return <div>
                <Nav/>
                
                <div  style={{display: "flex", flexWrap:"wrap"}}>
                        {/* renderizamos los paises segun la pagina */}
                        <Filter continents={state.arrayfilter}/> 
                        

                      {state.arrayState[pag?pag:0]?.map((countrie)=>{
                                
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

                    {(state.arrayState?.map((element, index)=>{
                        if(index >pag-2 && index <= pag+2){
                            return <Pagination key={index}num={index}/>
                        }
                    
                        }))}

                    {<Pagination num={state.arrayState.length-1} name="Final"/>}
                </div>
        
        
    </div>
}




export default Home