import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { lunch_options, option } from '../lunch-options-data';

@Component({
  selector: 'app-option-cards',
  templateUrl: './option-cards.component.html',
  styleUrls: ['./option-cards.component.scss']
})
export class OptionCardsComponent {
  options: option[] = [];
  activeOptions: option[] = [];
  @Output() emitOptions = new EventEmitter<option[]>();

  constructor() { 
    this.options = JSON.parse(JSON.stringify(lunch_options));
  }

  handleOption(option: option): void {
    option.active = !option.active
    this.activeOptions = this.options.filter(opt => opt.active)
    this.emitOptions.emit(this.activeOptions)
  }

}
