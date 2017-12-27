import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteDashboardComponent} from './page/dashboard/dashboard.component';
import {DetailsComponent} from './page/details/details.component';
import {PageComponent} from './page/page.component';
import {NavigationResolveService} from "./services/navigation-resolve.service";

const routes: Routes = [
  {
    path: '', component: PageComponent,
    children: [
      {
        path: '', component: SiteDashboardComponent, resolve: { nav: NavigationResolveService}
      },
      {
        path: ':category/:id', component: SiteDashboardComponent, resolve: { nav: NavigationResolveService}
      },
      {
        path: ':category/:id/:details', component: DetailsComponent, resolve: { nav: NavigationResolveService}
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
