import { createReducer, on } from '@ngrx/store';
import { grow, nuke } from '../actions/population.actions';

export const population = 0;

export const populationReducer = createReducer(
  population,
  on(grow, (state) => state + 1000000),
  on(nuke, (state) => state - 5000000)
);
