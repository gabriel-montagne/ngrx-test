import {Component, OnInit} from '@angular/core';
import {HousesFacade} from '../../state/houses/houses.facade';
import {Router} from '@angular/router';
import isEmpty from 'ramda/src/isEmpty';
import {GoTHouse} from '../../model/got';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class HouseOverviewComponent implements OnInit {
  private houses$: Observable<GoTHouse[]> = this.housesFacade.allHouses$;
  private houses: GoTHouse[];

  constructor(
    private housesFacade: HousesFacade,
    private router: Router) {
  }

  ngOnInit() {
    this.housesFacade.loadHouses();
    this.houses$.subscribe((houses) => {
      if (!isEmpty(houses)) {
        this.houses = houses;
      }
    });
  }

}
