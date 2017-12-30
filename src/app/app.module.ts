import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {AppRoutingModule} from './app-routing.module';
import {SettingsService} from './services/settings.service';
import {HttpService} from "./services/http.service";

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SiteDashboardComponent} from './page/dashboard/dashboard.component';
import {PageComponent} from './page/page.component';
import {DetailsComponent} from './page/details/details.component';
import {DataResolveService} from "./services/data-resolve.service";
import {DatePipe} from "@angular/common";
import { FilterPipe } from './shared/filter.pipe';
import { PreloaderComponent } from './shared/preloader/preloader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SiteDashboardComponent,
    PageComponent,
    DetailsComponent,
    FilterPipe,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot()
  ],
  providers: [SettingsService, HttpService, DataResolveService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
