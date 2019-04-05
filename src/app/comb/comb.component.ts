import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comb } from './comb.model'

@Component({
  selector: 'app-comb',
  templateUrl: './comb.component.html',
  styleUrls: ['./comb.component.css']
})
export class CombComponent implements OnInit {

  @Input() c_string: Comb;
  @Output() removed_c = new EventEmitter<string>();

  constructor() { }

  remove(title: string) {
    this.removed_c.emit(title);
  }

  ngOnInit() {
  }

}
