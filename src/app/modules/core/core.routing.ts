import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core.component';
import {DataResolveService} from '../../services/data-resolve.service';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '', component: CoreComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule',
        resolve: {nav: DataResolveService},
      },
      {
        path: 'details/:id',
        loadChildren: 'app/modules/details/details.module#DetailsModule',
        resolve: {nav: DataResolveService},
      }
    ]
  }
];

export const coreRouting = RouterModule.forChild(DASHBOARD_ROUTES);
