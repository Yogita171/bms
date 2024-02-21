import React, { createContext, useReducer } from "react";
import { v4 as uuid } from 'uuid';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                    ...state,
                    expenses: [...state.expenses, action.payload],            
            };

        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                )            
            };
            
        case 'SET_BUDGET':
            return {
                    ...state,
                    budget : action.payload
            };
            
        default:
            return state;    
    };

    const initialState = {
        budget: 5000,
    }
}