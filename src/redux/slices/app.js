import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: 'CONTACT',
        valueType: 'option1',
        Futures: 'Chats',
    }
}

const slice = createSlice ({
    name: 'app',
    initialState,
    reducers: {
        toggleSidebar( state, action ) {
            state.sidebar.open = !state.sidebar.open;
        },

        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type;
        },

        updateSelectedSidebarType(state, action) {
            state.sidebar.valueType = action.payload.valueType;
        },

        updateFutures(state, action) {
            state.sidebar.Futures = action.payload.Futures;
        },
    }
});

export default slice.reducer;

export function ToggleSidebar(){
    return async () => {
        dispatch(slice.actions.toggleSidebar());
    };
}

export function UpdateSidebarType(type) {
    return async () => {
        dispatch(
            slice.actions.updateSidebarType({
                type,
            })
        );
    };
}

export function UpdateSelectedSidebarType(valueType) {
    return async () => {
        dispatch(
            slice.actions.updateSelectedSidebarType({
                valueType,
            })
        );
    };
}

export function UpdateSelectedFutures(Futures) {
    return async () => {
        dispatch(
            slice.actions.updateFutures({
                Futures,
            })
        );
    };
}