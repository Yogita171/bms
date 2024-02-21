import React, { useState } from "react";



const Edit=(props)=>{

    const [value, setValue] = useState(props.budget);
    return(
        <>
            <input 
                type="number"
                required="required"
                class="edit-1"  
                id="name"        
                value={value}
                onChange={(event) => setValue(event.target.value)}         
            />
            <button
                type ='button'
                class='btn btn-primary'
                onClick={() => props.handleSaveClick(value)}
            >
                Done
            </button>
        </>
    )
}

export default Edit;

