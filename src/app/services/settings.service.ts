import {EventEmitter, Injectable} from '@angular/core';
import {ContextQueryBase} from "../models/context-query-base";
import {PagedContextQueryBase} from "../models/paged-context-query-base";
import {DatePipe} from "@angular/common";


@Injectable()
export class SettingsService {

  public contextQueryBase: ContextQueryBase;
  public pagedContextQueryBase: PagedContextQueryBase;

  pushedContextQueryBase = new EventEmitter<ContextQueryBase>();

  constructor(private datepipe: DatePipe) {

    let _today = new Date();
    let _lastWeek = new Date();
    _lastWeek = new Date(_lastWeek.setDate((_today.getDate() - _today.getDay()) - 6));


    //default values
    this.contextQueryBase = {
      type: 'Site',
      includeSubSites: false,
      startDate: this.datepipe.transform(_lastWeek, 'yyyy-MM-dd'),
      endDate: this.datepipe.transform(_today, 'yyyy-MM-dd')
    };

    this.pagedContextQueryBase = {
      sortColumn: 0,
      sortDirection: 0,
      take: 15,
      page: 0
    };
  }

  pushContextQueryBase(){
    this.pushedContextQueryBase.emit();
  }

  getPagedContextQueryBase(){
    //get latest contextQuery base and marge it with default pageContextQuery base for table data
    return {...this.contextQueryBase, ...this.pagedContextQueryBase};
  }
}
