import React  from "react"

import { useDispatch,useSelector } from "react-redux"
import { deleteFilterActivity, getFilterActivity,getPaginationNumber } from "../redux/actions"


const FilterActivities = (props) =>{
   
     const dispatch = useDispatch();
     const activities = useSelector((state)=> state.activity);
    
  

    function handleOFChange(e){

        if(e.target.checked){
            dispatch(getPaginationNumber(0))
            dispatch(getFilterActivity(e.target.value))
            
        }else if (!e.target.checked){
            dispatch(deleteFilterActivity(e.target.value))
        }
        
      

        
    }


    return <div>

       <div>Filtrar por actividades:</div> 
        {activities?.map((element, index)=>{
           return  <label key={index}> {element.nombre}<input type="checkbox" value={element.nombre} onChange={handleOFChange}/></label>

        })}
     
     </div>
}

export default FilterActivities