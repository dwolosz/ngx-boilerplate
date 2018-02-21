import {EventEmitter, Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';


@Injectable()
export class SettingsService {

  public contextQueryBase: any;
  public navChanged = new EventEmitter<any>();

  constructor(private datepipe: DatePipe) {

    console.log('create event', this.navChanged);

    // Default values
    this.contextQueryBase = {
      type: 'Site',
      includeSubSites: false,
      startDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      endDate: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    };

  }
}
