import { Component, OnInit } from '@angular/core';
import cities from '../../../../data/cities.json';
import { City } from '../../types/City.type';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent implements OnInit {
  cities: City[];

  constructor() {}

  ngOnInit(): void {
    this.cities = cities.cities;
  }
}
