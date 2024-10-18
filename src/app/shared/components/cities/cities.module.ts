import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesComponent } from './cities.component';
import { CityModule } from '../city/city.module';


@NgModule({
  imports: [
    CommonModule,
    CityModule
  ],
  exports: [
    CitiesComponent
  ],
  declarations: [
    CitiesComponent
  ]
})
export class CitiesModule {}
