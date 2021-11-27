import React  from "react"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { deleteFilter, getFilter } from "../redux/actions"


const Filter = (props) =>{
    let filterarray = []
    let aux = ""
     const dispatch = useDispatch();
     const state = useSelector((state)=> state.filterArray)
  

     React.useEffect(()=>{
       


    }, [filterarray,dispatch])

    function handleOFChange(e){

        if(e.target.checked){
            dispatch(getFilter(e.target.value))
            
        }else if (!e.target.checked){
            dispatch(deleteFilter(e.target.value))
        }
        console.log(state);
        aux = filterarray.join("_"); 

        
    }


    return <div>{
        console.log(state)}
        {props.continents?.map((element)=>{
           return <label> {element}<input type="checkbox" value={element} onChange={handleOFChange}/></label>

        })}
        
     
     </div>
}

export default Filter