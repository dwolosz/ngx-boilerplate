import {Component, OnInit, OnDestroy} from '@angular/core';
import * as fromApp from '../../app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-page',
  templateUrl: './core.component.html'
})
export class CoreComponent implements OnDestroy {

  private sTimeout: Number;


  constructor(private store: Store<{ui: fromApp.State }>) {
    this.sTimeout = window.setTimeout(() => {
      // this.store.dispatch({type: 'STOP_LOADING'});
    }, 250);
  }

  ngOnInit(){
    // this.store.dispatch({type: 'START_LOADING'});

  }

  ngOnDestroy() {
  }
}
