import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'trucks', loadChildren: () => import('./pages/trucks/trucks.routes').then(m => m.TRUCKS_ROUTES) }
];
