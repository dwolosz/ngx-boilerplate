import {EventEmitter, Injectable} from '@angular/core';
import {DatePipe} from "@angular/common";

import {ApiDataStatus} from "../models/api-data-status";
import {UserData} from "../models/user";


@Injectable()
export class SettingsService {

  public apiStatus: ApiDataStatus;
  public userData: UserData;

  ApiStatusChanged = new EventEmitter<ApiDataStatus>();

  constructor(private datepipe: DatePipe) {
    //default values
    this.apiStatus = {
      isLoaded: false,
      hasError: false
    }
  }

  pushSiteSettings(){
    this.ApiStatusChanged.emit();
  }

}
