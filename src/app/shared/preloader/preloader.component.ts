import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {ApiDataStatus} from "../../models/api-data-status";

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  public settings: ApiDataStatus;

  constructor(private settingsService:SettingsService) {

    this.settings = settingsService.apiStatus;

    this.settingsService.ApiStatusChanged.subscribe(
      ()=>{
        this.settings = settingsService.apiStatus;
      }
    )
  }

  ngOnInit() {
  }

}
