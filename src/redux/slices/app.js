import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

// define initial state
const initialState = {
    sidebar:{
        open:false,
        type: "CONTACT",// can be CONTACT, STARRED,SHARED
    }
}

// create slice
const slice = createSlice({
    name:'app',
    initialState,
    reducers:{
        //Toggle sidebar
        toggleSidebar(state,action){
            state.sidebar.open = !state.sidebar.open
        },
        updateSidebarType(state, action){
            state.sidebar.type = action.payload.type;
        }
    }
});

// export reducer
export default slice.reducer;

//thunk functions - perform async operations
export function ToggleSidebar (){
    return async () =>{
        dispatch(slice.actions.toggleSidebar());
    }
}

export function UpdateSidebarType (type){
    return async () =>{
        dispatch(slice.actions.updateSidebarType({
            type
        }))
    }
}