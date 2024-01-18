import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MapState = {
  position: [number, number];
  zoom: number;
  filter: boolean;
  changeLanguage: string;
  info: boolean;
  settings: boolean;
  comandCenters: boolean;
  armyBases: boolean;
  navalBases: boolean;
  airBases: boolean;
  militaryFactories: boolean;
  researchFacilities: boolean;
  airFields: boolean;
  ports: boolean;
  oilAndGasFacilities: boolean;
  otherTargets: boolean;
};

const initialState: MapState = {
  position: [55.751244, 37.618423],
  zoom: 10,
  filter: false,
  changeLanguage: "ua",
  info: false,
  settings: false,
  comandCenters: true,
  armyBases: true,
  navalBases: true,
  airBases: true,
  militaryFactories: true,
  researchFacilities: true,
  airFields: true,
  ports: true,
  oilAndGasFacilities: true,
  otherTargets: true,
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
    setResetPosition: (state) => {
      state.position = [55.751244, 37.618423];
      state.zoom = 10;
    },
    setComandCenters: (state, action: PayloadAction<boolean>) => {
      state.comandCenters = action.payload;
    },
    setArmyBases: (state, action: PayloadAction<boolean>) => {
      state.armyBases = action.payload;
    },
    setNavalBases: (state, action: PayloadAction<boolean>) => {
      state.navalBases = action.payload;
    },
    setAirBases: (state, action: PayloadAction<boolean>) => {
      state.airBases = action.payload;
    },
    setMilitaryFactories: (state, action: PayloadAction<boolean>) => {
      state.militaryFactories = action.payload;
    },
    setResearchFacilities: (state, action: PayloadAction<boolean>) => {
      state.researchFacilities = action.payload;
    },
    setAirFields: (state, action: PayloadAction<boolean>) => {
      state.airFields = action.payload;
    },
    setPorts: (state, action: PayloadAction<boolean>) => {
      state.ports = action.payload;
    },
    setOilAndGasFacilities: (state, action: PayloadAction<boolean>) => {
      state.oilAndGasFacilities = action.payload;
    },
    setOtherTargets: (state, action: PayloadAction<boolean>) => {
      state.otherTargets = action.payload;
    },
  },
});

export const { ...mapActions } = mapSlice.actions;
