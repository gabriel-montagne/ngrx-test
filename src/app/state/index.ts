import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromHouses from './houses/houses.reducer';
import {GoTHouse} from '../model/got';

export interface AppState {
  houses: fromHouses.HousesState;
}

export const reducers: ActionReducerMap<AppState> = {
  houses: fromHouses.housesReducer
};

// -------------------------------------------------------------------
// HOUSES SELECTORS
// -------------------------------------------------------------------
export const selectHousesState = createFeatureSelector<fromHouses.HousesState>('houses');

export const selectAllHouses = createSelector(
  selectHousesState,
  fromHouses.selectAllHouses
);

export const selectHouseEntities = createSelector(
  selectHousesState,
  fromHouses.selectHouseEntities
);


export const selectCurrentHouseId = createSelector(
  selectHousesState,
  fromHouses.getSelectedHouseId
);

const emptyHouse: GoTHouse = {
  name: 'unknown'
};

export const selectCurrentHouse = createSelector(
  selectHouseEntities,
  selectCurrentHouseId,
  (houseEntities, houseId) => {
    return houseId ? houseEntities[houseId] : emptyHouse;
  }
);
