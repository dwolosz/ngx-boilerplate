import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './details.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '', component: DetailsComponent
  }
];

export const detailsRoutes = RouterModule.forChild(DASHBOARD_ROUTES);
