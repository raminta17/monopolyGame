import {createSlice} from "@reduxjs/toolkit";

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        position: 0,
        money: 200,
        figure: '',
        boughtStreets: []
    },
    reducers: {
        chooseFigure: (state, action) => {
            state.figure = action.payload;
        },
        updatePosition: (state, action) => {
            state.position = action.payload;
            // let totalPositionCheck = state.position+action.payload;
            // if(totalPositionCheck >=24) return state.position = totalPositionCheck % 24;

        },
        addMoney: (state, action) => {
            state.money += action.payload;
        },
        subtractMoney: (state,action) => {
            state.money -= action.payload;
        },
        addStreet: (state, action) => {
            state.boughtStreets.push(action.payload);
        },
        removeStreet: (state, action) => {
            state.boughtStreets = state.boughtStreets.filter(street => street.id !== action.payload);
        }
    }
})

export const {chooseFigure, updatePosition, addMoney, subtractMoney, addStreet, removeStreet} = playerSlice.actions;

export default playerSlice.reducer;