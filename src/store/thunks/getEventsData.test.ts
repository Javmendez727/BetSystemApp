import { store } from "../store";
import axios, { AxiosResponse } from "axios";
import getEventsData from "./getEventsData";
import { EventType } from "../../types/get_events_data_response";

describe("getEventsData tests:", () => {
    jest.mock('axios');
    axios.get = jest.fn()

    it("should call axios get method", async () => {
      const axiosGetMock = jest.fn();

      (axios.get as jest.Mock).mockImplementationOnce(axiosGetMock);

      await store.dispatch(getEventsData());

      expect(axiosGetMock).toHaveBeenCalled();
    });

    it("should return the an EventType array", async () => {
      const response: Pick<AxiosResponse<EventType[]>, "data"> = {
          data: [
              {
                  id: "hola",
                  name: "mockName",
                  markets: []
              },
          ],
      };

      (axios.get as jest.Mock).mockResolvedValue(response);

      await store.dispatch(getEventsData());

      expect(store.getState().app.eventList).toHaveLength(1);
    });
});
