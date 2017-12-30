import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {HttpService} from "./http.service";


@Injectable()
export class DataResolveService implements Resolve<any> {

  constructor(private http: HttpService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.http.getHttpData('/users', {})
  }
}
