

import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { NatNum } from './factors.model';

@Component({
  selector: 'app-factors',
  templateUrl: './factors.component.html',
  styleUrls: ['./factors.component.css']
})
export class FactorsComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() natnum: NatNum;
  @Output() removed_f = new EventEmitter<number>();

  constructor() { }

  remove(title: number) {
    this.removed_f.emit(title);
  }

  voteUp(): boolean {
    this.natnum.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.natnum.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
