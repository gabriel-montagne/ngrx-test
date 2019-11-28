import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as HousesActions from './houses.actions';
import {HousesState} from './houses.reducer';
import {selectAllHouses, selectCurrentHouse} from '..';

@Injectable({
  providedIn: 'root'
})
export class HousesFacade {
  allHouses$ = this.store.pipe(select(selectAllHouses));
  currentHouse$ = this.store.pipe(select(selectCurrentHouse));

  constructor(private store: Store<HousesState>) {
  }

  loadHouses() {
    this.store.dispatch(new HousesActions.LoadHouses());
  }

  selectHouse(name: string) {
    this.store.dispatch(new HousesActions.HouseSelected(name));
  }

}
