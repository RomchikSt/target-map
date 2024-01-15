import { configureStore } from "@reduxjs/toolkit";
import { mapSlice } from "../features/map/mapSlice";

export const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
