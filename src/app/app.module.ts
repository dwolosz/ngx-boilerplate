import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatTableModule, MatSlideToggleModule,
  MatSidenavModule, MatCheckboxModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {Daterangepicker} from 'ng2-daterangepicker';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {ChartsModule} from "ng2-charts";

import {AppRoutingModule} from './app-routing.module';
import {SettingsService} from './services/settings.service';
import {HttpService} from "./services/http.service";

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SiteDashboardComponent} from './page/dashboard/dashboard.component';
import {PageComponent} from './page/page.component';
import {DetailsComponent} from './page/details/details.component';
import {NavigationResolveService} from "./services/navigation-resolve.service";
import {DatePipe} from "@angular/common";
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiteDashboardComponent,
    PageComponent,
    DetailsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ChartsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    Daterangepicker,
    ScrollToModule.forRoot()
  ],
  providers: [SettingsService, HttpService, NavigationResolveService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
