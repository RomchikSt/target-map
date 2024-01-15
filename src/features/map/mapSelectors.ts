import { RootState } from "../../store/store";

export const selectZoom = (state: RootState) => state.map.zoom;

export const selectFilter = (state: RootState) => state.map.filter;

export const selectLanguage = (state: RootState) => state.map.changeLanguage;

export const selectInfo = (state: RootState) => state.map.info;

export const selectSettings = (state: RootState) => state.map.settings;

export const selectPosition = (state: RootState) => state.map.position;
