import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {environment} from "../../environments/environment";
import {saveAs} from 'file-saver/FileSaver';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SettingsService} from "./settings.service";
import {Observable} from "rxjs/Observable";


@Injectable()
export class HttpService {
  private siteUrl: string = environment.apiUrl;

  constructor(private http: Http, private settings: SettingsService) {
  }


  getHttpData(methodName, params): Observable<any> {
    return this.http
      .get(this.siteUrl + methodName, {params: params})
      .map((response) => {

      this.settings.apiStatus = {
          isLoaded: true,
          hasError: false,
          errorMessage: null
        };

      this.settings.pushSiteSettings();

        return response.json()
      })
      .catch(this.handleError)
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


}
