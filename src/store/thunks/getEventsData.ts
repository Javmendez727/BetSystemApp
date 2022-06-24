
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EventType } from "../../types/get_events_data_response";

const getEventData = createAsyncThunk<EventType[]>(
  "getEventData",
  async () => {
      const url = "http://www.mocky.io/v2/59f08692310000b4130e9f71";
      const { data } = await axios.get<EventType[]>(url);
    return data;
  }
);
  
export default getEventData;