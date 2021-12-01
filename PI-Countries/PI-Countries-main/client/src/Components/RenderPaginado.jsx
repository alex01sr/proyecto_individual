import React  from "react"

import { useSelector } from "react-redux"
import Pagination from "./Pagination"
const RenderPaginado = (props) =>{

    const pagination = useSelector(state => state.pagination)
    return <div style={{display: "flex", justifyContent: "center", flexWrap:"wrap"}}>
        {<Pagination num={0} name="Inicio"/>}
                     {props.array?.map((element, index)=>{
                            if(pagination === 0){
                                if(index < 5){
                                    return <Pagination key={index}num={index}/>
                                }
                           

                            }
                            if(pagination === 1){
                                if(index >(pagination-3) && index <= (pagination+3)){
                                    return <Pagination key={index}num={index}/>
                                }
                           

                            }

                            else if(pagination === (props.array.length-1)  ){
                                if (index >(pagination-5)){
                                return <Pagination key={index}num={index}/>}

                            }
                            else if(pagination === (props.array.length-2)){
                                if (index >(pagination-4)){
                                    return <Pagination key={index}num={index}/>}

                            }
                            
                            else{

                                if (index >(pagination-3) && index <= (pagination+2))
                                {
                                return <Pagination key={index}num={index}/>}
                            }
                            return ""})}

                    {<Pagination num={props.array.length-1} name="Final"/>}




    </div>
}

export default RenderPaginado