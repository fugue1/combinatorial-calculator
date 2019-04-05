import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Perm } from './perm.model';

@Component({
  selector: 'app-perm',
  templateUrl: './perm.component.html',
  styleUrls: ['./perm.component.css']
})
export class PermComponent implements OnInit {

  @Input() string: Perm;

  @Output() removed_p = new EventEmitter<string>();


  constructor() {

   }

  ngOnInit() {
  }

  remove(title: string) {
    this.removed_p.emit(title);
  }


}
