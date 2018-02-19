import {RouterModule, Routes} from '@angular/router';
import {SiteDashboardComponent} from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '', component: SiteDashboardComponent
  }
];

export const dashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);
