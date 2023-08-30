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
            state.boughtStreets = state.boughtStreets.filter(street => street.name !== action.payload);
        },
        startNewGame: (state, action) => {
            state.position = 0;
            state.money = 200;
            state.boughtStreets = [];
        }
    }
})

export const {chooseFigure, updatePosition, addMoney, subtractMoney, addStreet, removeStreet, startNewGame} = playerSlice.actions;

export default playerSlice.reducer;