import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-site-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class SiteDashboardComponent implements OnInit, OnDestroy {

  public sampleData = [
      {
        id: 1,
        name: 'News 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, unde'
      },
      {
        id: 2,
        name: 'News 2',
        description: 'Consequatur consequuntur dolor doloremque explicabo fuga in qui quos ut!'
      },
      {
        id: 3,
        name: 'News 3',
        description: 'Consequatur consequuntur dolor doloremque explicabo fuga in qui quos ut!'
      },

    ];

  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
