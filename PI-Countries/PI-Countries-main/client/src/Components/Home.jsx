import React  from "react"
import { Link } from "react-router-dom"
import { getAllCountries } from "../redux/actions"
import {useDispatch, useSelector } from "react-redux";
import Country from "./Country";
import Pagination from "./Pagination";
import Nav from "./Nav";

const Home = (props) =>{
   
    const countrySearch = useSelector((state)=> state.country)
    const dispatch = useDispatch()
    let countries = useSelector((state) => state.countries)

    if(countrySearch && Array.isArray(countrySearch) && countrySearch.length>0) countries = countrySearch;

    const pag = useSelector((state) => state.pagination)
    const[state, setState] = React.useState({
        arrayState: []
        
    })
    React.useEffect(()=>{
        dispatch(getAllCountries())   
        
       },[])

      
       React.useEffect(()=>{
           /* cada vez que cambie countries ejecutamos este codigo para hacer la division de los array y la proxima paginacion */
           let aux = []
            let div = 9; 
            let arrayState =[]
           for(let i = 0; i < countries.length;i++){
                if(aux.length < div ){
                    aux.push(countries[i])
                    
                    
                }
            if(aux.length == div){
                arrayState.push(aux)
                aux = [];
                div = 10;
            }

           }
        arrayState.push(aux);
        setState({...state, arrayState})
       
       },[countries,countrySearch])



     
    return <div>
        <Nav/>
       <div  style={{display: "flex", justifyContent: "center", flexWrap:"wrap"}}>
           {/* renderizamos los paises segun la pagina */}
                {state.arrayState[pag?pag:0]?.map((countrie)=>{
                        
                        return  <Country key={countrie.id}
                                nombre={countrie.nombre}
                                flag={countrie.flag}
                                id={countrie.id}
                                continente={countrie.continente}
                            />

                            
                        })} 
        
       
       </div>
     
      <div style={{display: "flex", justifyContent: "center", flexWrap:"wrap"}}>

    {/* con este map creamos los elementos de pagination y le pasamos un argumento con el numero del array  */}
    {<Pagination num={0} name="Inicio"/>}

     {state.arrayState?.map((element, index)=>{
         if(index >pag-2 && index <= pag+2){
            return <Pagination num={index}/>
         }
       
        })}

   {<Pagination num={state.arrayState.length-1} name="Final"/>}
      </div>
        
        
    </div>
}

export default Home