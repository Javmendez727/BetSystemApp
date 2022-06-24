import { EventType, SelectionType } from "../../types/get_events_data_response";

export interface AppState {
  eventList: EventType[],
  selectedList: SelectionType[],
  openSideDrawer: boolean,
}
