import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getEventsData from "../thunks/getEventsData";
import { AppState } from "./app.interfaces";
import { EventType, SelectionType } from "../../types/get_events_data_response";

export const appInitialState: AppState = {
    eventList: [],
    selectedList: [],
    openSideDrawer: false,
};

export const appSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(
            getEventsData.fulfilled,
            (state, { payload }: PayloadAction<EventType[]>) => {
                state.eventList = payload;
            }
        );
    },
    initialState: appInitialState,
    name: "app",
    reducers: {
        setAddItemBetList: (state, action: PayloadAction<SelectionType>) => {
            state.selectedList = [...state.selectedList, action.payload].filter((item)=>item.id !== "").filter((v, i, a) => a.indexOf(v) === i);
        },
        setRemoveItemBetList: (state, action: PayloadAction<SelectionType>) => {
            state.selectedList = [...state.selectedList].filter((item) => item.id !== action.payload.id);
        },
        setSideDrawer: (state, action: PayloadAction<boolean>) => {
            state.openSideDrawer = action.payload;
        },
    },
});

export default appSlice.reducer;
