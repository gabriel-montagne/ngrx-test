import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import {HousesActions, HousesActionTypes} from './houses.actions';
import {GoTHouse} from '../../model/got';

export interface HousesState extends EntityState<GoTHouse> {
  selectedHouseId: string | null;
}

export function selectHouseId(h: GoTHouse): string {
  return h.name;
}

export const adapter: EntityAdapter<GoTHouse> = createEntityAdapter<GoTHouse>({
  selectId: selectHouseId
});

export const initialState: HousesState = adapter.getInitialState({
  selectedHouseId: null
});

export function housesReducer(state = initialState, action: HousesActions): HousesState {
  switch (action.type) {
    case HousesActionTypes.HousesLoaded: {
      return adapter.addAll(action.payload, state);
    }

    case HousesActionTypes.HouseSelected: {
      return Object.assign({}, state, {selectedHouseId: action.payload});
    }

    default:
      return state;
  }
}

// get the selectors
const {selectIds, selectEntities, selectAll} = adapter.getSelectors();

export const getSelectedHouseId = (state: HousesState) => state.selectedHouseId;

// select the array of widget ids
export const selectHouseIds = selectIds;

// select the dictionary of widget entities
export const selectHouseEntities = selectEntities;

// select the array of widgets
export const selectAllHouses = selectAll;

