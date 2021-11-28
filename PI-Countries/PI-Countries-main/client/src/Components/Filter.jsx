import React  from "react"

import { useDispatch } from "react-redux"
import { deleteFilter, getFilter } from "../redux/actions"


const Filter = (props) =>{
   
     const dispatch = useDispatch();
    
  

    function handleOFChange(e){

        if(e.target.checked){
            dispatch(getFilter(e.target.value))
            
        }else if (!e.target.checked){
            dispatch(deleteFilter(e.target.value))
        }
        
      

        
    }


    return <div>

        <label> Oceania<input type="checkbox"  value="Oceania" onChange={handleOFChange}/></label>
        <label> Africa<input type="checkbox" value="Africa" onChange={handleOFChange}/></label>
        <label> Europe<input type="checkbox" value="Europe" onChange={handleOFChange}/></label>
        <label> North America<input type="checkbox" value="North America" onChange={handleOFChange}/></label>
        <label> Asia<input type="checkbox" value="Asia" onChange={handleOFChange}/></label>
        <label> South America<input type="checkbox" value="South America" onChange={handleOFChange}/></label>
        <label> Antarctica<input type="checkbox" value="Antarctica" onChange={handleOFChange}/></label>
        
        
     
     </div>
}

export default Filter