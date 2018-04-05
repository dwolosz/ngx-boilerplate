import {EventEmitter, Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';


@Injectable()
export class SettingsService {

  public contextQueryBase: any;

  /**
   * Stores all users data
   * TODO: @Dephrecated - should use ngrx
   * @param {DatePipe} datepipe
   */
  constructor(private datepipe: DatePipe) {

    // Default values
    this.contextQueryBase = {
      includeSubSites: false,
      startDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      endDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    };

  }
}
