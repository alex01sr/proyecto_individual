import React  from "react"

import { useSelector } from "react-redux"
import Pagination from "./Pagination"
import styles from "../css/Pagination.module.css"
const RenderPaginado = (props) =>{

    const pagination = useSelector(state => state.pagination)
    return <div >
        <ul className={styles.pag} style={{display: "flex", justifyContent: "center", flexWrap:"wrap"}}>
        <li><Pagination num={0} name="Inicio"/></li>
                     {props.array?.map((element, index)=>{
                            if(pagination === 0){
                                if(index < 5){
                                    return<li className={(index === pagination)? styles.select: ""}><Pagination key={index}num={index}/></li> 
                                }
                           

                            }
                            if(pagination === 1){
                                if(index >(pagination-3) && index <= (pagination+3)){
                                    return<li className={(index === pagination)? styles.select: ""}><Pagination key={index}num={index}/></li> 
                                }
                           

                            }

                            else if(pagination === (props.array.length-1)  ){
                                if (index >(pagination-5)){
                                return <li className={(index === pagination)? styles.select: ""}><Pagination key={index}num={index}/></li> }

                            }
                            else if(pagination === (props.array.length-2)){
                                if (index >(pagination-4)){
                                    return <li className={(index === pagination)? styles.select: ""}><Pagination key={index}num={index}/></li> }

                            }
                            
                            else{

                                if (index >(pagination-3) && index <= (pagination+2))
                                {
                                return <li className={(index === pagination)? styles.select: ""}><Pagination key={index}num={index}/></li> }
                            }
                            return ""})}

                   <li><Pagination num={props.array.length-1} name="Final"/></li> 

                    </ul>


    </div>
}

export default RenderPaginado