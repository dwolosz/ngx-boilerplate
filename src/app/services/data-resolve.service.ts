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

  /**
   * Resolves url parameters, won't lunch module in routing until resolver is resolved
   * Check usage in core.routing.ts
   * @param {ActivatedRouteSnapshot} route
   */
  resolve(route: ActivatedRouteSnapshot) {
    this.routeParams = route.queryParams;

    return;

  }

}
