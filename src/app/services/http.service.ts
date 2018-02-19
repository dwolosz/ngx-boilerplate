import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {ContextQueryBase} from '../shared/models/context-query-base';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService {
  private siteUrl: string = environment.apiUrl;

  constructor(private http: Http) {
  }

  getHttpRequest(methodName, params) {
    return this.http.get(this.siteUrl + methodName, {params: params})
      .map((response: Response) => response.json());
  }

  getContextQueryBaseData(apiMethodName: string, query: ContextQueryBase) {
    return this.getHttpRequest(apiMethodName, query);
  }


}
