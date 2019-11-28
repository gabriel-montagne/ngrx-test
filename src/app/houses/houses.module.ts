import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HouseOverviewComponent} from './overview/overview.component';
import {HouseDetailComponent} from './detail/detail.component';
import {GoTService} from '../services/got.service';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: HouseOverviewComponent},
  {path: ':id', component: HouseDetailComponent}
];

@NgModule({
  declarations: [HouseOverviewComponent, HouseDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [GoTService]
})
export class HousesModule {
}
