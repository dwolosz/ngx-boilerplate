import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SiteDashboardComponent} from './page/dashboard/dashboard.component';
import {DetailsComponent} from './page/details/details.component';
import {PageComponent} from './page/page.component';
import {DataResolveService} from "./services/data-resolve.service";

const routes: Routes = [
  {
    path: '', component: PageComponent, resolve: { nav: DataResolveService},
    children: [
      {
        path: '', component: SiteDashboardComponent,
      },
      {
        path: 'post/:id', component: DetailsComponent,
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
