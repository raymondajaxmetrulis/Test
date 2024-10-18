import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../types/City.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent implements OnInit {
  @Input() city: City;

  constructor() {}

  ngOnInit(): void {
  }
}
