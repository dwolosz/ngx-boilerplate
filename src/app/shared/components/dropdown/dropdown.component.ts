import {
  AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpService} from '../../../services/http.service';
import {SettingsService} from '../../../services/settings.service';
import {fadeAnimation} from '../../animations/fade.animation';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [fadeAnimation]
})

export class DropdownComponent implements OnInit, AfterViewInit {

  myControl: FormControl;
  @Input() pageId: number;
  @ViewChild('focusOnInput') private inputTest: ElementRef;

  public showDropdown: any = false;
  public sites: any[];

  public toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;

    if (this.showDropdown) {
      const _query = this.settingsService.contextQueryBase;

      _query.id = this.pageId;

      this.httpService.getContextQueryBaseData('ReadSubSites', _query)
        .subscribe(
          data => this.sites = data
        );
    }
  }

  constructor(private httpService: HttpService, private settingsService: SettingsService) {
    this.myControl = new FormControl();
  }


  ngOnInit() {
  }


  ngAfterViewInit() {
    // if (this.showDropdown) {
    //     this.inputTest.nativeElement.focus();
    // }
  }

}
