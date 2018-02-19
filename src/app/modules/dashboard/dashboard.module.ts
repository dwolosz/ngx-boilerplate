import {NgModule} from '@angular/core';
import {SiteDashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {dashboardRouting} from './dashboard.routing';

@NgModule({
  declarations: [
    SiteDashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    dashboardRouting
  ]
})

export class DashboardModule {

}
