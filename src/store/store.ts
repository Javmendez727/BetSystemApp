import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import appReducer, { appInitialState } from "./reducer/app";

export const epicMiddleware = createEpicMiddleware();

export const rootInitialState: RootState = {
  app: appInitialState,
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: true,
  }).concat(epicMiddleware),
  reducer: { app: appReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
