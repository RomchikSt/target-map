import { RootState } from "../../store/store";

export const selectCoordinates = (state: RootState) => state.map.position;

export const selectZoom = (state: RootState) => state.map.zoom;

export const selectFilter = (state: RootState) => state.map.filter;

export const selectLanguage = (state: RootState) => state.map.changeLanguage;

export const selectInfo = (state: RootState) => state.map.info;

export const selectSettings = (state: RootState) => state.map.settings;

export const selectPosition = (state: RootState) => state.map.position;

export const selectComandCenters = (state: RootState) =>
  state.map.comandCenters;

export const selectArmyBases = (state: RootState) => state.map.armyBases;

export const selectNavalBases = (state: RootState) => state.map.navalBases;

export const selectAirBases = (state: RootState) => state.map.airBases;

export const selectMilitaryFactories = (state: RootState) =>
  state.map.militaryFactories;

export const selectResearchFacilities = (state: RootState) =>
  state.map.researchFacilities;

export const selectAirFields = (state: RootState) => state.map.airFields;

export const selectPorts = (state: RootState) => state.map.ports;

export const selectOilAndGasFacilities = (state: RootState) =>
  state.map.oilAndGasFacilities;

export const selectOtherTargets = (state: RootState) => state.map.otherTargets;
