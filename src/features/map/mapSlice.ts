import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MapState = {
  position: [number, number];
  zoom: number;
  filter: boolean;
  changeLanguage: string;
  info: boolean;
  settings: boolean;
};

const initialState: MapState = {
  position: [55.751244, 37.618423],
  zoom: 10,
  filter: false,
  changeLanguage: "ua",
  info: false,
  settings: false,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setFilter: (state, action: PayloadAction<boolean>) => {
      state.filter = action.payload;
    },
    setChangeLanguage: (state, action: PayloadAction<string>) => {
      state.changeLanguage = action.payload;
    },
    setInfo: (state, action: PayloadAction<boolean>) => {
      state.info = action.payload;
    },
    setSettings: (state, action: PayloadAction<boolean>) => {
      state.settings = action.payload;
    },
    setPosition: (state, action: PayloadAction<[number, number]>) => {
      state.position = action.payload;
    },
  },
});

export const {
  setZoom,
  setFilter,
  setChangeLanguage,
  setInfo,
  setSettings,
  setPosition,
} = mapSlice.actions;
