import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {AppRoutingModule} from './app-routing.module';
import {SettingsService} from './services/settings.service';
import {HttpService} from './services/http.service';
import {AppComponent} from './app.component';
import {DataResolveService} from './services/data-resolve.service';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [SettingsService, HttpService, DataResolveService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
