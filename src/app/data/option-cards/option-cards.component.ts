import { Component, EventEmitter, Output } from '@angular/core';
import { lunch_options, option } from '../lunch-options-data';

@Component({
  selector: 'app-option-cards',
  templateUrl: './option-cards.component.html',
  styleUrls: ['./option-cards.component.scss']
})
export class OptionCardsComponent {
  options: option[] = [];
  @Output() emitOption = new EventEmitter<string>();

  constructor() { 
    this.options = lunch_options;
  }

  addOption(option: option): void {
    option.active = !option.active;     
    this.emitOption.emit(option.title)
  }

}
