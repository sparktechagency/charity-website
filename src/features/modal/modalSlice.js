import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOne : false,
    modalTwo : false,
    modalThree : false,
    volunterModalOne : false,
    volunterModalTwo : false,
}

const modalSlice = createSlice({
    name:"modal",
    initialState,
    reducers:{
        modalOpenOne: (state) => { state.modalOne = true; },
        closeModalOpenOne: (state) => { state.modalOne = false; },
        modalOpenTwo: (state) => { state.modalTwo = true; },
        closeModalOpenTwo: (state) => { state.modalTwo = false; },
        modalOpenThree: (state) => { state.modalThree = true; },
        closeModalOpenThree: (state) => { state.modalThree = false; },
        volunterModalOpenOne :(state) =>{state.volunterModalOne = true;
        },
        closeVlounterModalOpenOne : (state) =>{state.volunterModalOne = false
        },
        volunterModalOpenTwo :(state) =>{state.volunterModalTwo = true;
        },
        closeVlounterModalOpenTwo : (state) =>{state.volunterModalTwo = false
        },
    }
})

export const {modalOpenOne,closeModalOpenOne,modalOpenTwo,closeModalOpenTwo,modalOpenThree,closeModalOpenThree,volunterModalOpenOne,closeVlounterModalOpenOne,volunterModalOpenTwo,closeVlounterModalOpenTwo} = modalSlice.actions;
export default modalSlice.reducer;
