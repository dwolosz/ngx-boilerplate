import {Directive, HostBinding, Input, OnChanges, OnInit} from '@angular/core';

@Directive({
  selector: '[appChangeColorByValue]'
})
export class ChangeColorByValueDirective implements OnInit, OnChanges {
  @Input() elementValue: number;
  @HostBinding('class.green') greenColor = false;
  @HostBinding('class.yellow') yellowColor = false;
  @HostBinding('class.red') redColor = false;

  constructor() {
  }

  ngOnInit() {
    if (this.elementValue < 3.2) {
      this.redColor = true;
    } else if (this.elementValue < 6.5) {
      this.yellowColor = true;
    } else if (this.elementValue > 6.5) {
      this.greenColor = true;
    }
  }

  ngOnChanges(changes) {
  }

}
