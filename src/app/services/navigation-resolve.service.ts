import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {HttpService} from "./http.service";
import {SettingsService} from "./settings.service";

@Injectable()
export class NavigationResolveService implements Resolve<any>{

  constructor( private http: HttpService, private settings: SettingsService) { }

  resolve(route: ActivatedRouteSnapshot){

    //detect which page should be loaded, if link empty load default dashboard
    if(route.params['category']){
      this.settings.contextQueryBase.type = route.params['category'];
      this.settings.contextQueryBase.id = route.params['id'];
      route.queryParams['startDate'] ? this.settings.contextQueryBase.startDate = route.queryParams['startDate'] : null;
      route.queryParams['startDate'] ? this.settings.contextQueryBase.endDate = route.queryParams['endDate'] : null;

      if (route.queryParams['includeSubSites']) {
        this.settings.contextQueryBase.includeSubSites = route.queryParams['includeSubSites'] === 'true' ? true : false;
      };

    }else{
      delete this.settings.contextQueryBase.type;
      delete this.settings.contextQueryBase.id;
    }
    return this.http.getHttpRequest('ReadNavigation', this.settings.contextQueryBase)
      .toPromise()
      .then(
        data => {
            this.settings.contextQueryBase.id = data.id;
            this.settings.contextQueryBase.type = data.type;

            return data;
        }
      )
  }

}
