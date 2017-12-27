import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {ContextQueryBase} from "../../models/context-query-base";
import {SettingsService} from "../../services/settings.service";
import {ApiError} from "../../models/error";
import {TableConfig} from "../../models/table-config";
import {BaseChartDirective} from "ng2-charts";


@Component({
  selector: 'app-site-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit, AfterViewInit {
  public apiError: ApiError;
  public isLoaded: boolean = false;
  public tableData: TableConfig;
  public tableData1: TableConfig;
  public pageSetting: any;
  public isGenerating: boolean = false;
  public pageType = 'site';
  private query: ContextQueryBase;

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];


  public lineChartOptions: any = {
    responsive: true,
    lineTension: 0,
    maintainAspectRatio: false,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            drawBorder: false
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public lineChartColors: Array<any> = [
    { // green
      backgroundColor: 'rgba(142, 205, 200, .1)',
      borderColor: '#8ecdc8',
      pointBackgroundColor: '#8ecdc8',
      pointBorderColor: '#e8e8e8',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#8ecdc8'
    },
    { // yellow
      backgroundColor: 'rgba(240, 183, 44, 0.2)',
      borderColor: 'rgba(240, 183, 44, 1)',
      pointBackgroundColor: 'rgba(240, 183, 44, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(185, 30, 44, 0.2)',
      borderColor: 'rgba(185, 30, 44, 1)',
      pointBackgroundColor: 'rgba(185, 30, 44, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(64, 153, 218, .3)',
      borderColor: '#4099da',
      pointBackgroundColor: '#4099da',
      pointBorderColor: '#e8e8e8',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#4099da'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  constructor(private httpService: HttpService, private settingsService: SettingsService, private activeRoute: ActivatedRoute) {

    let _pageDetailType: string = this.activeRoute.snapshot.params['details'];
    this.pageType = this.settingsService.contextQueryBase.type;

    if (_pageDetailType === 'performance') {
      this.pageSetting = {
        name: this.pageType + '-Details-Performance-ReadBox',
        graph: this.pageType + '-Details-Performance-ReadGraph',
        download: this.pageType + '-Details-Performance-DownloadTable',
        table: this.pageType + '-Details-Performance-ReadTable',
        tableType: this.pageType,
        slug: 'performance-details',
      }
    } else if (_pageDetailType === 'targetgroup') {
      this.pageSetting = {
        name: this.pageType + '-Details-TargetGroup-ReadBox',
        graph: this.pageType + '-Details-TargetGroup-ReadGraph',
        download: this.pageType + '-Details-TargetGroup-DownloadTableDepartment',
        download1: this.pageType + '-Details-TargetGroup-DownloadTableCity',
        tableTitle: 'Organization',
        table: this.pageType + '-Details-TargetGroup-ReadTableDepartment',
        table1Title: 'Geography',
        table1: this.pageType + '-Details-TargetGroup-ReadTableCity',
        tableType: this.pageType,
        slug: 'targetgroup-details',
      }
    } else if (_pageDetailType === 'visitors') {
      this.pageSetting = {
        name: this.pageType + '-Details-ViewsAndVisitors-ReadBox',
        graph: this.pageType + '-Details-ViewsAndVisitors-ReadGraph',
        download: this.pageType + '-Details-ViewsAndVisitors-DownloadTable',
        table: this.pageType + '-Details-ViewsAndVisitors-ReadTable',
        tableType: this.pageType,
        slug: 'viewsandvisitors-details',
      }
    } else if (_pageDetailType === 'lifecycle') {
      this.pageSetting = {
        name: this.pageType + '-Details-ContentLifeCycle-ReadBox',
        graph: this.pageType + '-Details-ContentLifeCycle-ReadGraph',
        download: this.pageType + '-Details-ContentLifeCycle-DownloadTable',
        table: this.pageType + '-Details-ContentLifeCycle-ReadTable',
        tableType: this.pageType,
        slug: 'lifecycle-details',
      }
    }

    //Create table
    this.pageSetting && this.pageSetting.table ? this.tableData = {
      name: this.pageSetting.table,
      type: this.pageSetting.tableType
    } : null;

    this.pageSetting && this.pageSetting.table1 ? this.tableData1 = {
      name: this.pageSetting.table1,
      type: this.pageSetting.tableType
    } : null;

    this.query = settingsService.contextQueryBase;
    this.loadGraphData();

    this.settingsService.pushedContextQueryBase.subscribe(
      () => {
        this.loadGraphData();
      }
    );
  }

  updatePointsTranslateHelper(points) {
    let _array: any[] = [];

    points.forEach(
      (item) => {
        _array.push(item.value)
      }
    );
    return _array
  }

  downloadReport() {
    this.isGenerating = true;
    console.log(this.pageSetting.download);
    this.httpService.getContextQueryBaseDownload(this.pageSetting.download, this.query).then(
      (data) => this.isGenerating = false
    )
  }

  downloadReport1() {
    this.isGenerating = true;
    console.log(this.pageSetting.download);
    this.httpService.getContextQueryBaseDownload(this.pageSetting.download1, this.query).then(
      (data) => this.isGenerating = false
    )
  }

  loadGraphData(){
    this.httpService.getContextQueryBaseData(this.pageSetting.graph, this.query)
      .subscribe(
        data => {

          //reset Data and array table length ( required by plugin )
          this.lineChartLabels.length = 0;
          let _newData = [];

          //create new data set with options ( line lineTension must be specyfied for each point )
          data.lines.forEach(item => {
            //TODO: ugly workaround fix with api call not custom parsing
            let _item: any = {
              label: item.name,
              lineTension: 0,
              fill: false,
              data: this.updatePointsTranslateHelper(item.points)
            };
            _newData.push(_item);
          });

          data.lines[0].points.forEach(
            item => {
              this.lineChartLabels.push(item.date);
            }
          );

          this.lineChartData = _newData;
          this.isLoaded = true;
        }, error => {
          console.log(error);
          this.apiError = {
            name: error.statusText
          };
        }
      );
  }

  ngOnInit() {

  }

  ngAfterViewInit(){

  }


  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
