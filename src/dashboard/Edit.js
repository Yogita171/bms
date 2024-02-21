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
                value={value}
                onChange={(event) => setValue(event.target.value)}         
            />
            <button
                type ='button'
                className = 'edit'
                onClick={() => props.handleSaveClick(value)}
            >
                Done
            </button>
        </>
    )
}

export default Edit

