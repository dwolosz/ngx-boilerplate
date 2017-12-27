import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {HttpService} from "../../services/http.service";
import 'rxjs/add/observable/forkJoin'
import {ActivatedRoute} from "@angular/router";
import {ContextQueryBase} from "../../models/context-query-base";
import {TableConfig} from "../../models/table-config";

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class SiteDashboardComponent implements OnInit, OnDestroy {

  public showSubsites: boolean;
  public dashBoardBoxes: any;
  public showTable: boolean = true;

  private query: ContextQueryBase;

  @Output() tableDocumentsData: TableConfig;
  @Output() tablePagesData: TableConfig;
  @Output() tableSiteData: TableConfig;
  @Output() itemsPerPage: number;


  constructor(private settingsService: SettingsService, private httpService: HttpService, private route: ActivatedRoute) {

  this.showSubsites = this.settingsService.contextQueryBase.includeSubSites;

    this.checkDashboardType();
    this.route.params.subscribe(
      data =>{
        this.checkDashboardType();
      }
    );

    this.settingsService.pushedContextQueryBase.subscribe(
      ()=>{
        this.showSubsites = this.settingsService.contextQueryBase.includeSubSites;
      }
    )

  }

  downloadReport(apiMethodName: string) {
    this.httpService.getContextQueryBaseDownload(apiMethodName, this.settingsService.contextQueryBase)
  }


  checkDashboardType(){

    let _pageType: string = this.settingsService.contextQueryBase.type;

    this.dashBoardBoxes = [
      {
        name: _pageType + '-Dashboard-Boxes-ReadPerformance',
        slug: 'performance'
      },
      {
        name: _pageType + '-Dashboard-Boxes-ReadViewsAndVisitors',
        slug: 'visitors'
      },
      {
        name: _pageType + '-Dashboard-Boxes-ReadContentLifeCycle',
        slug: 'lifecycle'
      },
      {
        name: _pageType + '-Dashboard-Boxes-ReadTargetGroup',
        slug: 'targetgroup'
      },
    ];

    if (_pageType === 'Site') {
      this.tableSiteData = {
        name: 'Site-Dashboard-ReadSites',
        type: 'Site'
      };
      this.tableDocumentsData = {
        name: 'Site-Dashboard-ReadDocuments',
        type: 'Document'
      };
      this.tablePagesData = {
        name: 'Site-Dashboard-ReadPages',
        type: 'Page'
      };
    } else {
      this.tableSiteData = null;
      this.tableDocumentsData = null;
      this.tablePagesData = null;
      this.showTable = false;
    }
  }

  ngOnInit(){
  }

  ngOnDestroy() {
  }
}
