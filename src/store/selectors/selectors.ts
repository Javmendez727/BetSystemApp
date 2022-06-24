import { RootState } from "../store.interfaces";

export const selectEventsList = (state: RootState) => state.app.eventList;
export const selectBetList = (state: RootState) => state.app.selectedList;
export const selectOpenState = (state: RootState) => state.app.openSideDrawer;