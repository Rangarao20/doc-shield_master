import { animate, style, transition, trigger } from '@angular/animations';

export const slideRightToLeftAnimation = trigger('slideRightToLeft', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('10000ms ease-out', style({ transform: 'translateX(-500px)' }))
  ]),
  transition(':leave', [
    animate('10000ms ease-in', style({ transform: 'translateX(100%)' }))
  ])
]);