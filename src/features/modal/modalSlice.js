import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOne : false,
    modalTwo : false,
}

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        showModalOne: (state) => { state.modalOne = true; },
        hideModalOne: (state) => { state.modalOne = false; },
        showModalTwo: (state) => { state.modalTwo = true; },
        hideModalTwo: (state) => { state.modalTwo = false; },
    }
})

export const {showModalOne,hideModalOne,showModalTwo,hideModalTwo} = modalSlice.actions;
export default modalSlice.reducer;
