import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shippexApi } from "../services/api";
import shipmentsSliceReducer from "./features/shipmentsSlice";

export const store = configureStore({
  reducer: {
    shipment: shipmentsSliceReducer,
    [shippexApi.reducerPath]: shippexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shippexApi.middleware),
});

setupListeners(store.dispatch);