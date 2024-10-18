import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavModule } from './common/nav.module';

import { StoreModule } from '@ngrx/store';
import { populationReducer } from './state/reducers/population.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NavModule,
    StoreModule.forRoot({ population: populationReducer })
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }