import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [
    state('void', style({display: 'block', opacity: 0})),
    state('*', style({display: 'block', opacity: 1})),
    transition(':enter', [
      style({opacity: 0, display: 'block'}),
      animate('10.4s ease', style({opacity: 1}))]),
    transition(':leave', [
      style({opacity: 1, display: 'block'}),
      animate('10.4s ease', style({opacity: 0}))])
  ]);
