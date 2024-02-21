import React from "react";

const View = (props) => {
    return (
        <>
            <span>Budget: £{props.budget}</span>
            <button type="button" class='btn btn-primary' onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    )
}

export default View;