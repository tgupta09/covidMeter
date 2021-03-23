import { CountryDataComponent } from './country-data/country-data.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboradComponent },
  { path: '', component: DashboradComponent },
  { path: 'countrydata/:id', component: CountryDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
