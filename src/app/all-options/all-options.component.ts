import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { lunch_options, option } from '../data/lunch-options-data';


@Component({
  selector: 'app-all-options',
  templateUrl: './all-options.component.html',
  styleUrls: ['./all-options.component.scss']
})
export class AllOptionsComponent {
  options: option[] = [];

  constructor() { 
    this.options = JSON.parse(JSON.stringify(lunch_options));
  }

}
