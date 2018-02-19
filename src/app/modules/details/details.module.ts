import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {detailsRoutes} from './details.routing';
import {DetailsComponent} from './details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    detailsRoutes
  ]
})

export class DetailsModule {

}
