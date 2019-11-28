import { Action } from '@ngrx/store';

export enum HousesActionTypes {
  LoadHouses = '[GoT/API] Load Data',
  HousesLoaded = '[GoT/API] Data Loaded',
  HouseSelected= '[GoT Houses] Selected'
}

export class LoadHouses implements Action {
  readonly type = HousesActionTypes.LoadHouses;
  constructor() {}
}

export class HousesLoaded implements Action {
  readonly type = HousesActionTypes.HousesLoaded;
  constructor(public payload: any) {}
}

export class HouseSelected implements Action {
  readonly type = HousesActionTypes.HouseSelected;
  constructor(public payload) { }
}

export type HousesActions = LoadHouses | HousesLoaded | HouseSelected;
