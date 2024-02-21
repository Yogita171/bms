import React from "react"

const viewBudget=(props)=>{
    return(
        <>
        <span>
            Budget:£{props.budget}
        </span>

        <button type="button" 
                className="edit" 
                onClick={props.handleEditClick}>
        Edit
        </button>
        </>
    )
}









export default viewBudget