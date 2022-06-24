import {
  selectEventsList,
} from "./selectors";
import { RootState } from "../store.interfaces";
import { appInitialState } from "../reducer/app";

const initialStateTest: RootState = {
  app: { ...appInitialState },
};

describe("Selectors test:", () => {
  it("When selectLoading is called, then it return a loading state", () => {
    expect(selectEventsList(initialStateTest)).toEqual(
      initialStateTest.app.eventList
    );
  });
});
