import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CitiesModule } from '../../../shared/components/cities/cities.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    CitiesModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule {}
