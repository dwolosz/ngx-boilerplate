import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {HttpService} from './http.service';
import {Observable} from 'rxjs/Observable';
import {SettingsService} from './settings.service';

@Injectable()
export class DataResolveService implements Resolve<any> {

  private routeParams: any;

  constructor(private http: HttpService, private settings:SettingsService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    this.routeParams = route.queryParams;
    // Detect which page should be loaded, if link empty load default dashboard

    return Observable.forkJoin([
        this.http.getHttpRequest('ReadNavigation', this.settings.contextQueryBase),
        this.http.getHttpRequest('ReadCalendarRange', this.settings.contextQueryBase)
      ]
    ).toPromise()
      .then(
        data => {

          return data[0];
        }
      )
      .catch(e => {
        console.log('error', e);
      });
  }

}
