import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

export const routing = RouterModule.forRoot(appRoutes);