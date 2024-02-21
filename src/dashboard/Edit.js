import React,{useState} from "react";



const Edit=(props)=>{

    const [value, setValue] = useState(props.budget);
    return(
        <>
            <input 
                type="number"
                required="required"
                className="edit-1"  
                id="name"        
                onChange={}         
            />
        </>
    )
}

export default Edit

