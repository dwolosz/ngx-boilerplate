import {EventEmitter, Injectable} from '@angular/core';
import {ContextQueryBase} from '../shared/models/context-query-base';
import {PagedContextQueryBase} from '../shared/models/paged-context-query-base';
import {DatePipe} from '@angular/common';


@Injectable()
export class SettingsService {

  public contextQueryBase: ContextQueryBase;
  public pagedContextQueryBase: PagedContextQueryBase;
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

    this.pagedContextQueryBase = {
      sortColumn: 0,
      sortDirection: 0,
      take: 15,
      page: 0
    };
  }
}
