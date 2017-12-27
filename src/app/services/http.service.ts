import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, ResponseContentType} from "@angular/http";
import {environment} from "../../environments/environment";
import {ContextQueryBase} from "../models/context-query-base";
import {PagedContextQueryBase} from "../models/paged-context-query-base";
import {saveAs} from 'file-saver/FileSaver';
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

  getContextQueryBaseDownload(apiMethodName: string, query: ContextQueryBase) {
    let options = new RequestOptions({params: query, responseType: ResponseContentType.Blob});

    return this.http.get(this.siteUrl + apiMethodName, options)
      .toPromise()
      .then(
        response => this.saveToFileSystem(response)
      ).then(
        () => {
          return true
        }
      );
  }

  getTableData(tableApiName: string, tableQuery: PagedContextQueryBase) {
    return this.getHttpRequest(tableApiName, tableQuery);
  }

  private saveToFileSystem(response) {

    // TODO: get file name snippet
    // var contentDispositionHeader = httpResponse.headers('Content-Disposition');
    // var result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
    // return result.replace(/"/g, '');

    const blob = new Blob([response._body], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    saveAs(blob);
  }
}
