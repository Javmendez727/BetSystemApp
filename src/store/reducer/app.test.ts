import reducer from "./app";
import { AppState } from "./app.interfaces";
import {
  setAddItemBetList,
  setRemoveItemBetList,
  setSideDrawer,
} from "../actions/actions";
import { SelectionType } from "../../types/get_events_data_response";

const initialState: AppState = {
  eventList: [],
  selectedList: [],
  openSideDrawer: false,
};

const mockSelectionTypeObject: SelectionType ={
  id: "mockId",
  name: "mockName",
  price: 10,
  marketType: 1,
}

describe("app reducer", () => {
  it("should change the boolean openSideDrawer when handle setSideDrawer", () => {
    expect(reducer(initialState, setSideDrawer(true))).toEqual({
      ...initialState,
      openSideDrawer: true
    });
  });

  it("should CanPurchase change when handle setChangePurchase", () => {
    expect(reducer(initialState, setAddItemBetList(mockSelectionTypeObject))).toEqual({
      ...initialState,
      selectedList: [mockSelectionTypeObject],
    });
  });

  it("should confirmationError change when handle setConfirmationError", () => {
    expect(reducer(initialState, setRemoveItemBetList(mockSelectionTypeObject))).toEqual({
      ...initialState,
      selectedList: [],
    });
  });
});
