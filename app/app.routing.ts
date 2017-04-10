import { Routes, RouterModule } from '@angular/router';

import { ItemFormComponent } from './item-form.component';
import { GuitarItemListComponent } from './guitar-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: ItemFormComponent },
  { path: ':category', component: GuitarItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
];

export const routing = RouterModule.forRoot(appRoutes);