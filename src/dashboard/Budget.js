import React, { useContext, useState } from "react";
import View from './View';
import Edit from "./Edit";
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const {budget, dispatch} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
        setIsEditing(false);
    }

    return (
        <div class= 'alert'>
            {isEditing ?(
                <Edit handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <View handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    )
}

export default Budget;