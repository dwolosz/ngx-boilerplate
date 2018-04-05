import {Component} from '@angular/core';
@Component({
  selector: 'app-shared-btn',
  templateUrl: './shared-btn.component.html',
})
export class SharedBtnComponent {

  constructor() {
  }

  share() {
    let _sendLink = window.location.href.replace(/&/gi, '%26');
    let _mailtoLink = 'mailto: ?subject=Wintra.Cloud share link&body=' + _sendLink;
    let _emailWindow = window.open(_mailtoLink, 'emailWindow');
    setTimeout(() => {
      _emailWindow.close();
    }, 200);

  }

}
